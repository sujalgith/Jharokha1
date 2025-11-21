// Check admin role first
const userRole = localStorage.getItem('role');
if (userRole !== 'admin') {
    window.location.href = 'index.html';
    // Stop execution if redirecting
    throw new Error('Unauthorized access');
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    initializeDashboard();
});

function initializeDashboard() {
    const totalVisitorsEl = document.getElementById('totalVisitors');
    const totalRevenueEl = document.getElementById('totalRevenue');
    const totalLoginsEl = document.getElementById('totalLogins');
    const totalLogoutsEl = document.getElementById('totalLogouts');
    const activeUsersCountEl = document.getElementById('activeUsersCount');
    const activeUsersListEl = document.getElementById('activeUsersList');
    const loggedOutUsersListEl = document.getElementById('loggedOutUsersList');
    const lastUpdatedEl = document.getElementById('lastUpdated');
    const refreshBtn = document.getElementById('refreshBtn');
    const recentLoginsListEl = document.getElementById('recentLoginsList');
    const recentBookingsListEl = document.getElementById('recentBookingsList');

    if (!totalVisitorsEl || !totalRevenueEl || !totalLoginsEl || !totalLogoutsEl || 
        !activeUsersCountEl || !activeUsersListEl || !loggedOutUsersListEl || !lastUpdatedEl ||
        !recentLoginsListEl || !recentBookingsListEl) {
        console.error('Dashboard elements not found');
        return;
    }

    function formatCurrency(amount) {
        const formatter = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        });
        return formatter.format(amount || 0);
    }

    function renderList(listEl, items, emptyMessage, statusClass) {
        if (!listEl) return;
        if (!items || items.length === 0) {
            listEl.innerHTML = `<li>${emptyMessage}</li>`;
            return;
        }

        listEl.innerHTML = items
            .map(
                (email) => `
            <li>
                <i class="fas fa-user-circle"></i>
                <span>${email}</span>
                <span class="status-pill ${statusClass}">${statusClass === "status-active" ? "online" : "offline"}</span>
            </li>
        `
            )
            .join('');
    }

    function formatTimestamp(value) {
        if (!value) return '';
        const date = new Date(value);
        return date.toLocaleString();
    }

    function renderEventList(listEl, items, emptyMessage, type) {
        if (!listEl) return;
        if (!items || items.length === 0) {
            listEl.innerHTML = `<li>${emptyMessage}</li>`;
            return;
        }

        listEl.innerHTML = items.map(event => `
            <li>
                <div class="event-info">
                    <strong>${event.email}</strong>
                    <span>${event.details || 'No details'}</span>
                </div>
                <div class="event-meta">
                    ${type === 'booking' ? `<span class="amount">${formatCurrency(event.amount)}</span>` : ''}
                    <small>${formatTimestamp(event.timestamp)}</small>
                </div>
            </li>
        `).join('');
    }

    async function fetchSummary() {
        try {
            console.log('Fetching analytics summary...');
            const response = await fetch('http://localhost:5000/analytics/summary', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            let data;
            try {
                data = await response.json();
            } catch (jsonError) {
                console.error('Failed to parse JSON:', jsonError);
                throw new Error('Invalid response from server. Make sure the backend is running.');
            }
            
            if (!data.success) {
                throw new Error(data.message || 'Unable to load analytics');
            }

            console.log('Analytics data received:', data);

            if (totalVisitorsEl) totalVisitorsEl.textContent = data.total_visitors ?? 0;
            if (totalRevenueEl) totalRevenueEl.textContent = formatCurrency(data.total_revenue);
            if (totalLoginsEl) totalLoginsEl.textContent = data.total_logins ?? 0;
            if (totalLogoutsEl) totalLogoutsEl.textContent = data.total_logouts ?? 0;
            if (activeUsersCountEl) activeUsersCountEl.textContent = data.active_users?.length ?? 0;

            renderList(activeUsersListEl, data.active_users, 'No one online right now', 'status-active');
            renderList(loggedOutUsersListEl, data.recently_logged_out, 'No recent logouts', 'status-offline');
            renderEventList(recentLoginsListEl, data.recent_logins, 'No login activity yet', 'login');
            renderEventList(recentBookingsListEl, data.recent_bookings, 'No bookings recorded yet', 'booking');

            const now = new Date();
            if (lastUpdatedEl) lastUpdatedEl.textContent = `Last updated: ${now.toLocaleString()}`;
        } catch (error) {
            console.error('Dashboard fetch error:', error);
            if (lastUpdatedEl) {
                if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
                    lastUpdatedEl.textContent = 'Cannot connect to server. Make sure backend is running on http://localhost:5000';
                } else {
                    lastUpdatedEl.textContent = `Error: ${error.message}`;
                }
            }
            // Re-throw so the refresh button handler can catch it
            throw error;
        }
    }

    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            refreshBtn.disabled = true;
            refreshBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Refreshing...';
            fetchSummary().finally(() => {
                setTimeout(() => {
                    refreshBtn.disabled = false;
                    refreshBtn.innerHTML = '<i class="fas fa-rotate"></i> Refresh';
                }, 500);
            });
        });
    }

    // Send visit event for dashboard
    fetch('http://localhost:5000/analytics/event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            event_type: 'visit',
            user_email: localStorage.getItem('email'),
            details: 'dashboard'
        })
    }).catch(err => console.warn('Failed to send dashboard visit event:', err));

    // Initial load
    fetchSummary();
    
    // Auto-refresh every 15 seconds
    setInterval(fetchSummary, 15000);
}

