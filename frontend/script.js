// Jharkhand Eco & Cultural Tourism Destinations
const destinations = [
    {
        id: 1,
        name: "Betla National Park",
        description: "Explore diverse wildlife including tigers, elephants, and leopards in this pristine forest reserve. Experience jungle safari and bird watching.",
        price: "₹2,500",
        rating: 4.8,
        icon: "https://img1.wsimg.com/isteam/ip/42bf149a-0f01-417c-b1b4-cfd03e7bb42c/113A.jpg",
        type: "Eco-Tourism",
        isImage: true
    },
    {
        id: 2,
        name: "Hundru Falls",
        description: "Witness the majestic 98-meter waterfall cascading down rocky cliffs. Perfect for nature photography and eco-tourism.",
        price: "₹500",
        rating: 4.9,
        icon: "https://media-cdn.tripadvisor.com/media/photo-s/13/40/03/f8/hudru-a-falls-to-visit.jpg",
        type: "Eco-Tourism",
        isImage: true
    },
    {
        id: 3,
        name: "Dassam Falls",
        description: "Beautiful 44-meter waterfall surrounded by lush greenery. Ideal for picnics and nature walks.",
        price: "₹400",
        rating: 4.7,
        icon: "https://tse1.mm.bing.net/th/id/OIP.-F27vyZPvcyovDCJJc3hcQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        type: "Eco-Tourism",
        isImage: true
    },
    {
        id: 4,
        name: "Jagannathpur Temple",
        description: "Ancient temple showcasing rich cultural heritage and architectural beauty. Experience traditional rituals and festivals.",
        price: "₹300",
        rating: 4.6,
        icon: "https://jagannathpuri.in/wp-content/uploads/2021/04/Jagannath-Temple-1.jpg",
        type: "Cultural Tourism",
        isImage: true
    },
    {
        id: 5,
        name: "Netarhat Hill Station",
        description: "Scenic hill station known as 'Queen of Chotanagpur'. Enjoy cool climate, sunrise points, and eco-friendly accommodations.",
        price: "₹1,500",
        rating: 4.8,
        icon: "https://i.ytimg.com/vi/Mf_s4sORu_8/maxresdefault.jpg",
        type: "Eco-Tourism",
        isImage: true
    },
    {
        id: 6,
        name: "Tribal Museum, Ranchi",
        description: "Discover rich tribal culture, traditional artifacts, and heritage of Jharkhand's indigenous communities.",
        price: "₹200",
        rating: 4.7,
        icon: "https://img.freepik.com/premium-photo/collection-uncontacted-tribes-artifacts-museum-display-created-with-generative-ai_419341-54947.jpg?w=740",
        type: "Cultural Tourism",
        isImage: true
    },
    {
        id: 7,
        name: "Patratu Valley",
        description: "Serene valley with dam, boating facilities, and eco-tourism activities. Perfect for nature lovers.",
        price: "₹800",
        rating: 4.6,
        icon: "https://www.financialexpress.com/wp-content/uploads/2019/10/Patratu-lake-resort-top-view-660.jpg?resize=400",
        type: "Eco-Tourism",
        isImage: true
    },
    {
        id: 8,
        name: "Baba Baidyanath Temple",
        description: "One of the 12 Jyotirlingas, this sacred temple attracts pilgrims and showcases spiritual cultural heritage.",
        price: "₹500",
        rating: 4.9,
        icon: "https://tse2.mm.bing.net/th/id/OIP.94OxrZDDjk3NEO_xG5LyrQHaEf?rs=1&pid=ImgDetMain&o=7&rm=3",
        type: "Cultural Tourism",
        isImage: true
    },
    {
        id: 9,
        name: "Palamau Tiger Reserve",
        description: "Home to Bengal tigers and diverse flora-fauna. Experience wildlife safari and conservation efforts.",
        price: "₹2,000",
        rating: 4.8,
        icon: "https://i0.wp.com/indiashine.net/wp-content/uploads/2021/01/dreamstime_m_154248663.jpg",
        type: "Eco-Tourism",
        isImage: true
    },
    {
        id: 10,
        name: "Saranda Forest",
        description: "Dense sal forest with rich biodiversity. Perfect for eco-tourism, trekking, and nature exploration.",
        price: "₹1,200",
        rating: 4.7,
        icon: "https://i.ytimg.com/vi/9uBNI6EgAxo/maxresdefault.jpg",
        type: "Eco-Tourism",
        isImage: true
    },
    {
        id: 11,
        name: "Hazaribagh Wildlife Sanctuary",
        description: "Wildlife sanctuary with diverse species. Enjoy bird watching, nature trails, and eco-friendly tourism.",
        price: "₹1,500",
        rating: 4.6,
        icon: "https://www.remotelands.com/travelogues/app/uploads/2021/12/Chitwan-3-600x400.jpg",
        type: "Eco-Tourism",
        isImage: true
    },
    {
        id: 12,
        name: "Tribal Village Tours",
        description: "Authentic cultural experiences with tribal communities. Learn traditional crafts, dances, and local cuisine.",
        price: "₹1,800",
        rating: 4.9,
        icon: "https://static.vecteezy.com/system/resources/previews/046/257/221/non_2x/landscape-of-inland-tribal-villages-in-the-middle-of-forests-and-mountains-misty-forest-views-free-photo.jpg",
        type: "Cultural Tourism",
        isImage: true
    }
];

const packages = [
    {
        id: 1,
        name: "Wildlife & Nature Explorer",
        price: "₹8,999",
        duration: "5 Days",
        features: [
            "Betla National Park safari",
            "Palamau Tiger Reserve visit",
            "Eco-friendly forest lodges",
            "Bird watching sessions",
            "Nature photography tours",
            "Local guide included"
        ],
        type: "Eco-Tourism"
    },
    {
        id: 2,
        name: "Waterfalls & Hills Package",
        price: "₹6,499",
        duration: "4 Days",
        features: [
            "Hundru Falls & Dassam Falls",
            "Netarhat hill station stay",
            "Sunrise point visits",
            "Nature trekking",
            "Eco-tourism activities",
            "Local transport"
        ],
        type: "Eco-Tourism"
    },
    {
        id: 3,
        name: "Cultural Heritage Tour",
        price: "₹5,999",
        duration: "4 Days",
        features: [
            "Tribal Museum visit",
            "Jagannathpur Temple",
            "Baba Baidyanath Temple",
            "Tribal village experience",
            "Traditional dance shows",
            "Local cuisine tasting"
        ],
        type: "Cultural Tourism"
    },
    {
        id: 4,
        name: "Complete Eco & Cultural Experience",
        price: "₹12,999",
        duration: "7 Days",
        features: [
            "Wildlife sanctuary visits",
            "Waterfall tours",
            "Cultural sites exploration",
            "Tribal interaction programs",
            "Eco-friendly accommodations",
            "All meals included"
        ],
        type: "Mixed"
    },
    {
        id: 5,
        name: "Tribal Culture Immersion",
        price: "₹7,999",
        duration: "5 Days",
        features: [
            "Authentic tribal village stays",
            "Traditional craft workshops",
            "Tribal dance & music",
            "Local cuisine cooking classes",
            "Cultural heritage sites",
            "Community interaction"
        ],
        type: "Cultural Tourism"
    },
    {
        id: 6,
        name: "Nature & Adventure Package",
        price: "₹9,499",
        duration: "6 Days",
        features: [
            "Forest trekking & hiking",
            "Wildlife spotting",
            "Waterfall visits",
            "Boating in Patratu Valley",
            "Nature photography",
            "Camping experience"
        ],
        type: "Eco-Tourism"
    }
];

const reviews = [
    {
        id: 1,
        name: "Priya Sharma",
        rating: 5,
        text: "Amazing eco-tourism experience! Betla National Park safari was incredible. Saw tigers and elephants in their natural habitat. The platform made booking so easy!"
    },
    {
        id: 2,
        name: "Rajesh Kumar",
        rating: 5,
        text: "Best cultural tourism experience! The tribal village tour was eye-opening. Learned about traditional crafts and enjoyed authentic tribal dance performances."
    },
    {
        id: 3,
        name: "Anjali Singh",
        rating: 5,
        text: "Hundru Falls is breathtaking! The eco-tourism package was well-organized and sustainable. Great support for local communities."
    },
    {
        id: 4,
        name: "Amit Verma",
        rating: 4,
        text: "Excellent wildlife experience at Palamau Tiger Reserve. The digital platform provided all necessary information and smooth booking process."
    },
    {
        id: 5,
        name: "Sneha Patel",
        rating: 5,
        text: "Netarhat hill station is beautiful! The eco-friendly accommodations and nature activities were perfect. Highly recommend for nature lovers!"
    },
    {
        id: 6,
        name: "Vikash Das",
        rating: 5,
        text: "Tribal Museum and cultural sites tour was fantastic! Learned so much about Jharkhand's rich heritage. The platform promotes sustainable tourism beautifully."
    }
];

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Render Destinations
function renderDestinations() {
    const destinationsGrid = document.getElementById('destinationsGrid');
    destinationsGrid.innerHTML = destinations.map(destination => `
        <div class="destination-card">
            <div class="destination-image">
                ${destination.isImage 
                    ? `<img src="${destination.icon}" alt="${destination.name}" class="destination-img">` 
                    : `<span class="destination-icon">${destination.icon}</span>`
                }
                <div class="destination-badge">${destination.type}</div>
            </div>
            <div class="destination-content">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <div class="destination-info">
                    <div class="price">${destination.price}</div>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>${destination.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Packages
function renderPackages() {
    const packagesGrid = document.getElementById('packagesGrid');
    packagesGrid.innerHTML = packages.map(pkg => `
        <div class="package-card">
            <div class="package-header">
                <h3>${pkg.name}</h3>
                <div class="package-price">${pkg.price}</div>
                <div class="package-duration">${pkg.duration}</div>
            </div>
            <div class="package-body">
                <ul class="package-features">
                    ${pkg.features.map(feature => `
                        <li>
                            <i class="fas fa-check-circle"></i>
                            <span>${feature}</span>
                        </li>
                    `).join('')}
                </ul>
                <button class="btn-primary package-btn" onclick="bookPackage(${pkg.id})">Book Now</button>
            </div>
        </div>
    `).join('');
}

// Render Reviews
function renderReviews() {
    const reviewsGrid = document.getElementById('reviewsGrid');
    reviewsGrid.innerHTML = reviews.map(review => `
        <div class="review-card">
            <div class="review-header">
                <div class="review-avatar">
                    ${review.name.charAt(0)}
                </div>
                <div class="review-info">
                    <h4>${review.name}</h4>
                    <div class="review-stars">
                        ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                    </div>
                </div>
            </div>
            <p class="review-text">"${review.text}"</p>
        </div>
    `).join('');
}

// Form Submissions
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
});

document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    e.target.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderDestinations();
    renderPackages();
    renderReviews();
    loadUserFromStorage();
    updateAuthUI();
    sendAnalyticsEvent("visit", { details: window.location.pathname });
    
    // Video error handling
    const heroVideo = document.querySelector('.hero-video video');
    if (heroVideo) {
        heroVideo.addEventListener('error', (e) => {
            console.error('Video loading error:', e);
            console.error('Video source:', heroVideo.querySelector('source')?.src);
            // Fallback: show poster image if video fails
            heroVideo.style.display = 'none';
        });
        
        heroVideo.addEventListener('loadeddata', () => {
            console.log('Video loaded successfully');
        });
        
        heroVideo.addEventListener('canplay', () => {
            console.log('Video can play');
            heroVideo.play().catch(err => {
                console.warn('Autoplay prevented:', err);
                // Try playing on user interaction
                document.addEventListener('click', () => {
                    heroVideo.play().catch(() => {});
                }, { once: true });
            });
        });
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('.destination-card, .package-card, .review-card, .feature-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 100);
});

// ========== AUTHENTICATION SERVICE ==========
let currentUser = null;

async function sendAnalyticsEvent(eventType, { amount = 0, userEmail, details } = {}) {
    const payload = {
        event_type: eventType,
        user_email: userEmail || localStorage.getItem("email") || null,
    };
    if (eventType === "revenue") {
        payload.amount = amount;
    }
    if (details) {
        payload.details = details;
    }
    try {
        const response = await fetch("http://localhost:5000/analytics/event", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
        
        if (!response.ok) {
            console.error(`Analytics event failed: ${response.status} ${response.statusText}`);
            return;
        }
        
        const data = await response.json();
        if (!data.success) {
            console.error("Analytics event failed:", data.message);
        } else {
            console.log(`Analytics event recorded: ${eventType}`, payload);
        }
    } catch (error) {
        console.error("Analytics event network error:", error);
        // Don't show alert for analytics failures, just log
    }
}

// Login Modal
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeLogin = document.getElementById('closeLogin');
const loginForm = document.getElementById('loginForm');

// Signup Modal
const signupBtn = document.getElementById('signupBtn');
const signupModal = document.getElementById('signupModal');
const closeSignup = document.getElementById('closeSignup');
const signupForm = document.getElementById('signupForm');

// Switch between modals
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');

// Open Login Modal
loginBtn?.addEventListener('click', () => {
    loginModal.classList.add('active');
});

// Close Login Modal
closeLogin?.addEventListener('click', () => {
    loginModal.classList.remove('active');
});

// Open Signup Modal
signupBtn?.addEventListener('click', () => {
    signupModal.classList.add('active');
});

// Close Signup Modal
closeSignup?.addEventListener('click', () => {
    signupModal.classList.remove('active');
});

// Switch to Signup
switchToSignup?.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.classList.remove('active');
    signupModal.classList.add('active');
});

// Switch to Login
switchToLogin?.addEventListener('click', (e) => {
    e.preventDefault();
    signupModal.classList.remove('active');
    loginModal.classList.add('active');
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove('active');
    }
    if (e.target === signupModal) {
        signupModal.classList.remove('active');
    }
});

// LOGIN API CALL
loginForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
    
        let data;
        try {
            data = await response.json();
        } catch (jsonError) {
            console.error("Failed to parse response:", jsonError);
            alert("Server error: Invalid response. Make sure the backend server is running on http://localhost:5000");
            return;
        }
    
        if (!response.ok || !data.success) {
            alert(data.message || "Unable to login. Please try again.");
            return;
        }
    
        // Save Token & Role
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("name", data.name);
        localStorage.setItem("email", email);

        currentUser = { name: data.name, email };
    
        alert(`Welcome ${data.name} (${data.role})`);
        sendAnalyticsEvent("login", { userEmail: email, details: data.role });
        const targetPage = data.role === "admin" ? "index2.html" : "index.html";
    
        loginModal.classList.remove('active');
        loginForm.reset();
        updateAuthUI();
        window.location.href = targetPage;
    } catch (error) {
        console.error("Login error:", error);
        if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
            alert("Cannot connect to server. Please make sure the backend server is running:\n\n1. Open terminal\n2. Navigate to the project folder\n3. Run: python backend/app.py\n\nThen try logging in again.");
        } else {
            alert("Network error: " + error.message);
        }
    }
});


// SIGNUP API CALL
signupForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = signupForm.querySelector('input[name="name"]').value.trim();
    const email = signupForm.querySelector('input[name="email"]').value.trim();
    const password = signupForm.querySelector('input[name="password"]').value;
    const confirmPassword = signupForm.querySelector('input[name="confirmPassword"]').value;
    const role = signupForm.querySelector('select[name="role"]').value || "user";

    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password, role })
        });
    
        let data;
        try {
            data = await response.json();
        } catch (jsonError) {
            console.error("Failed to parse response:", jsonError);
            alert("Server error: Invalid response. Make sure the backend server is running on http://localhost:5000");
            return;
        }

        if (!response.ok || !data.success) {
            alert(data.message || "Signup failed. Please try again.");
            return;
        }

        alert(data.message || "User registered successfully!");
        signupModal.classList.remove('active');
        signupForm.reset();
    } catch (error) {
        console.error("Signup error:", error);
        if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
            alert("Cannot connect to server. Please make sure the backend server is running:\n\n1. Open terminal\n2. Navigate to the project folder\n3. Run: python backend/app.py\n\nThen try signing up again.");
        } else {
            alert("Network error: " + error.message);
        }
    }
});

// Update Auth UI
function updateAuthUI() {
    const role = localStorage.getItem("role");
    if (role === "admin") {
        document.body.classList.add("admin-mode");
    } else {
        document.body.classList.remove("admin-mode");
    }
    const authButtons = document.querySelector('.auth-buttons');
    if (!authButtons) return;

    if (currentUser) {
        const dashboardBtn = role === "admin" 
            ? `<a href="index2.html" class="btn-signup" style="text-decoration: none; display: inline-block;"><i class="fas fa-chart-line"></i> Dashboard</a>`
            : '';
        authButtons.innerHTML = `
            <span class="welcome-text">Welcome, ${currentUser.name}</span>
            ${dashboardBtn}
            <button class="btn-login" id="logoutBtn">Logout</button>
        `;
        document.getElementById('logoutBtn')?.addEventListener('click', logout);
    } else {
        authButtons.innerHTML = `
            <button class="btn-login" id="loginBtn">Login</button>
            <button class="btn-signup" id="signupBtn">Sign Up</button>
        `;
        document.getElementById('loginBtn')?.addEventListener('click', () => {
            loginModal.classList.add('active');
        });
        document.getElementById('signupBtn')?.addEventListener('click', () => {
            signupModal.classList.add('active');
        });
    }
}

// Logout
window.logout = function() {
    const email = localStorage.getItem("email");
    sendAnalyticsEvent("logout", { userEmail: email, details: "manual logout" });
    currentUser = null;
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    const authButtons = document.querySelector('.auth-buttons');
    if (authButtons) {
        updateAuthUI();
    }
    alert('Logged out successfully!');
};

function loadUserFromStorage() {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    if (storedName) {
        currentUser = { name: storedName, email: storedEmail || "" };
    }
}

// ========== ITINERARY & AI RECOMMENDATIONS ==========
const itineraryForm = document.getElementById('itineraryForm');
const itineraryList = document.getElementById('itineraryList');

// AI Recommendations Data for Jharkhand Eco & Cultural Tourism
const aiRecommendations = {
    adventure: [
        { day: 'Day 1', activity: 'Jungle Safari at Betla National Park', time: 'Morning' },
        { day: 'Day 2', activity: 'Trekking in Saranda Forest', time: 'Full Day' },
        { day: 'Day 3', activity: 'Wildlife Spotting at Palamau Reserve', time: 'Morning' },
        { day: 'Day 4', activity: 'Nature Photography & Bird Watching', time: 'Afternoon' },
        { day: 'Day 5', activity: 'Camping & Night Safari Experience', time: 'Evening' }
    ],
    relaxation: [
        { day: 'Day 1', activity: 'Waterfall Visit - Hundru Falls', time: 'Morning' },
        { day: 'Day 2', activity: 'Netarhat Hill Station Stay', time: 'Full Day' },
        { day: 'Day 3', activity: 'Nature Walk & Meditation', time: 'Morning' },
        { day: 'Day 4', activity: 'Boating at Patratu Valley', time: 'Afternoon' },
        { day: 'Day 5', activity: 'Sunrise Point & Scenic Views', time: 'Evening' }
    ],
    cultural: [
        { day: 'Day 1', activity: 'Tribal Museum & Heritage Tour', time: 'Morning' },
        { day: 'Day 2', activity: 'Ancient Temple Visit - Jagannathpur', time: 'Afternoon' },
        { day: 'Day 3', activity: 'Tribal Village Interaction', time: 'Full Day' },
        { day: 'Day 4', activity: 'Traditional Dance & Music Show', time: 'Evening' },
        { day: 'Day 5', activity: 'Local Craft Workshop & Cuisine', time: 'Afternoon' }
    ],
    family: [
        { day: 'Day 1', activity: 'Wildlife Sanctuary Family Tour', time: 'Morning' },
        { day: 'Day 2', activity: 'Waterfall Picnic - Dassam Falls', time: 'Full Day' },
        { day: 'Day 3', activity: 'Educational Museum Visit', time: 'Morning' },
        { day: 'Day 4', activity: 'Nature Activities & Games', time: 'Afternoon' },
        { day: 'Day 5', activity: 'Cultural Show & Family Photos', time: 'Evening' }
    ],
    romantic: [
        { day: 'Day 1', activity: 'Sunset at Hundru Falls', time: 'Evening' },
        { day: 'Day 2', activity: 'Hill Station Romantic Stay', time: 'Full Day' },
        { day: 'Day 3', activity: 'Nature Walk & Scenic Views', time: 'Morning' },
        { day: 'Day 4', activity: 'Boating & Lakeside Dinner', time: 'Evening' },
        { day: 'Day 5', activity: 'Sunrise Point & Breakfast', time: 'Morning' }
    ]
};

itineraryForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const destination = document.getElementById('destinationInput').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const travelType = document.getElementById('travelType').value;
    
    if (!destination || !startDate || !endDate || !travelType) {
        alert('Please fill in all fields!');
        return;
    }
    
    // Calculate days
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    
    // Get AI recommendations
    const recommendations = aiRecommendations[travelType] || aiRecommendations.adventure;
    
    // Display itinerary
    itineraryList.innerHTML = `
        <div class="itinerary-item">
            <h4>Destination: ${destination}</h4>
            <p>Duration: ${days} days (${startDate} to ${endDate})</p>
            <p>Travel Type: ${travelType.charAt(0).toUpperCase() + travelType.slice(1)}</p>
        </div>
        ${recommendations.slice(0, Math.min(days, 5)).map((rec, index) => `
            <div class="itinerary-item">
                <h4>${rec.day} - ${rec.activity}</h4>
                <p>Time: ${rec.time}</p>
            </div>
        `).join('')}
    `;
    
    alert('AI-powered itinerary generated successfully!');
});

// ========== BOOKING & PAYMENT ==========
let selectedPackage = null;

window.bookPackage = function(packageId) {
    if (!localStorage.getItem("token")) {
        alert("Please log in to book a package.");
        loginModal.classList.add('active');
        return;
    }

    selectedPackage = packages.find(p => p.id === packageId);
    if (!selectedPackage) return;
    
    // Update booking summary
    const bookingDetails = document.getElementById('bookingDetails');
    const totalAmount = document.getElementById('totalAmount');
    
    if (bookingDetails && totalAmount) {
        bookingDetails.innerHTML = `
            <div class="booking-item">
                <div>
                    <h4>${selectedPackage.name}</h4>
                    <p>${selectedPackage.duration}</p>
                </div>
                <div class="price">${selectedPackage.price}</div>
            </div>
        `;
        
        // Extract price number
        const price = parseFloat(selectedPackage.price.replace('₹', '').replace(',', ''));
        totalAmount.textContent = `₹${price.toLocaleString()}`;
    }
    
    // Scroll to booking section
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
};

// Payment Form
const paymentForm = document.getElementById('paymentForm');
paymentForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!selectedPackage) {
        alert('Please select a package first!');
        return;
    }
    
    const paymentMethod = e.target.querySelector('input[name="paymentMethod"]:checked').value;
    
    // Simulate payment processing
    alert(`Payment processing...\nPackage: ${selectedPackage.name}\nAmount: ${selectedPackage.price}\nMethod: ${paymentMethod}\n\nPayment successful! Booking confirmed.`);
    
    const priceNumber = parseFloat(selectedPackage.price.replace('₹', '').replace(',', ''));
    sendAnalyticsEvent("revenue", { amount: priceNumber, userEmail: currentUser?.email, details: selectedPackage.name });
    sendAnalyticsEvent("booking", { amount: priceNumber, userEmail: currentUser?.email, details: selectedPackage.name });

    // Reset
    selectedPackage = null;
    document.getElementById('bookingDetails').innerHTML = '';
    document.getElementById('totalAmount').textContent = '₹0';
    e.target.reset();
});

// Payment method change
document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        const cardDetails = document.getElementById('cardDetails');
        if (e.target.value === 'card' && cardDetails) {
            cardDetails.style.display = 'flex';
        } else if (cardDetails) {
            cardDetails.style.display = 'none';
        }
    });
});

// ========== MAPS & TRANSPORT ==========
const mapSearchBtn = document.getElementById('searchMapBtn');
const mapSearch = document.getElementById('mapSearch');

mapSearchBtn?.addEventListener('click', () => {
    const location = mapSearch.value;
    if (!location) {
        alert('Please enter a location!');
        return;
    }
    
    // Simulate map search
    const mapDisplay = document.getElementById('map');
    if (mapDisplay) {
        mapDisplay.innerHTML = `
            <div class="map-placeholder">
                <i class="fas fa-map-marked-alt"></i>
                <p>Location: ${location}</p>
                <p class="map-note">Map would be displayed here with location marker</p>
                <p class="map-note">(In production, this would use Google Maps API)</p>
            </div>
        `;
    }
});

// Transport Tabs
const transportTabs = document.querySelectorAll('.transport-tab');
const transportContent = document.getElementById('transportContent');

// Jharkhand Transport Data
const transportData = {
    flights: [
        { route: 'Delhi → Ranchi', time: '8:00 AM', status: 'On Time', price: '₹4,500' },
        { route: 'Mumbai → Ranchi', time: '2:30 PM', status: 'On Time', price: '₹5,200' },
        { route: 'Kolkata → Ranchi', time: '6:45 PM', status: 'On Time', price: '₹3,800' }
    ],
    trains: [
        { route: 'Rajdhani Express - Delhi to Ranchi', time: '9:15 AM', status: 'On Time', price: '₹1,200' },
        { route: 'Howrah Express - Kolkata to Ranchi', time: '1:30 PM', status: 'On Time', price: '₹850' },
        { route: 'Jharkhand Express - Patna to Ranchi', time: '5:45 PM', status: 'On Time', price: '₹650' }
    ],
    buses: [
        { route: 'State Transport Bus - Ranchi to Betla', time: 'Every 2 hours', status: 'Running', price: '₹200' },
        { route: 'Private Bus - Ranchi to Netarhat', time: '6:00 AM, 2:00 PM', status: 'Running', price: '₹350' },
        { route: 'Intercity Bus - Ranchi to Hazaribagh', time: 'Every 1 hour', status: 'Running', price: '₹250' }
    ],
    taxis: [
        { route: 'Local Taxi Service', time: 'Available Now', status: 'Available', price: '₹12/km' },
        { route: 'Tourist Cab', time: 'Available Now', status: 'Available', price: '₹15/km' },
        { route: 'Eco-Tourism Vehicle', time: 'Available Now', status: 'Available', price: '₹18/km' }
    ]
};

transportTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        transportTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Get transport type
        const transportType = tab.getAttribute('data-transport');
        const data = transportData[transportType] || [];
        
        // Display transport info
        if (transportContent) {
            transportContent.innerHTML = data.map(item => `
                <div class="transport-item">
                    <div class="transport-item-info">
                        <h4>${item.route}</h4>
                        <p>Time: ${item.time} | Price: ${item.price}</p>
                    </div>
                    <div class="transport-status">${item.status}</div>
                </div>
            `).join('');
        }
    });
});

// Initialize with flights
if (transportContent && transportData.flights) {
    transportContent.innerHTML = transportData.flights.map(item => `
        <div class="transport-item">
            <div class="transport-item-info">
                <h4>${item.route}</h4>
                <p>Time: ${item.time} | Price: ${item.price}</p>
            </div>
            <div class="transport-status">${item.status}</div>
        </div>
    `).join('');
}

// ========== MULTILINGUAL CHATBOT ==========
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotContainer = document.getElementById('chatbotContainer');
const chatbotBody = document.getElementById('chatbotBody');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');
const chatbotLanguage = document.getElementById('chatbotLanguage');
const chatbotIcon = document.getElementById('chatbotIcon');

let isChatbotOpen = true;

// Toggle chatbot
chatbotToggle?.addEventListener('click', () => {
    isChatbotOpen = !isChatbotOpen;
    if (isChatbotOpen) {
        chatbotContainer.classList.remove('collapsed');
        chatbotIcon.classList.remove('fa-chevron-down');
        chatbotIcon.classList.add('fa-chevron-up');
    } else {
        chatbotContainer.classList.add('collapsed');
        chatbotIcon.classList.remove('fa-chevron-up');
        chatbotIcon.classList.add('fa-chevron-down');
    }
});

// Chatbot responses in multiple languages - Jharkhand Focus
const chatbotResponses = {
    en: {
        greeting: "Hello! Welcome to Jharkhand Eco & Cultural Tourism. How can I help you explore our beautiful state?",
        destinations: "We have amazing eco-tourism destinations like Betla National Park, Hundru Falls, Netarhat, and cultural sites like Tribal Museum, Jagannathpur Temple, and Baba Baidyanath Temple!",
        packages: "We offer eco-tourism packages like Wildlife Explorer, Waterfalls & Hills, and cultural packages like Tribal Culture Immersion and Heritage Tours.",
        booking: "To book a package, simply click on 'Book Now' button on any package card. All bookings support sustainable tourism!",
        payment: "We accept Credit/Debit cards, UPI, and other digital payment methods. All payments support local communities.",
        eco: "Jharkhand offers amazing eco-tourism: Betla National Park, Palamau Tiger Reserve, waterfalls, and forest reserves. We promote sustainable tourism!",
        cultural: "Experience rich tribal culture, ancient temples, traditional dances, and authentic village stays. Our cultural tours support local communities.",
        default: "I'm here to help you explore Jharkhand's eco-tourism and cultural heritage. Ask me about destinations, packages, wildlife, waterfalls, or tribal culture!"
    },
    hi: {
        greeting: "नमस्ते! झारखंड इको एंड कल्चरल टूरिज्म में आपका स्वागत है। मैं आपकी कैसे मदद कर सकता हूं?",
        destinations: "हमारे पास बेतला नेशनल पार्क, हुंडरू फॉल्स, नेतरहाट जैसे अद्भुत इको-टूरिज्म गंतव्य और ट्राइबल म्यूजियम, जगन्नाथपुर मंदिर जैसे सांस्कृतिक स्थल हैं!",
        packages: "हम वाइल्डलाइफ एक्सप्लोरर, वॉटरफॉल्स एंड हिल्स जैसे इको-टूरिज्म पैकेज और ट्राइबल कल्चर इमर्शन जैसे सांस्कृतिक पैकेज प्रदान करते हैं।",
        booking: "पैकेज बुक करने के लिए, किसी भी पैकेज कार्ड पर 'बुक नाउ' बटन पर क्लिक करें। सभी बुकिंग सस्टेनेबल टूरिज्म का समर्थन करती हैं!",
        payment: "हम क्रेडिट/डेबिट कार्ड, UPI और अन्य डिजिटल भुगतान विधियां स्वीकार करते हैं। सभी भुगतान स्थानीय समुदायों का समर्थन करते हैं।",
        eco: "झारखंड अद्भुत इको-टूरिज्म प्रदान करता है: बेतला नेशनल पार्क, पलामू टाइगर रिजर्व, झरने और वन अभयारण्य। हम सस्टेनेबल टूरिज्म को बढ़ावा देते हैं!",
        cultural: "समृद्ध आदिवासी संस्कृति, प्राचीन मंदिर, पारंपरिक नृत्य और प्रामाणिक गांव के अनुभव का आनंद लें। हमारे सांस्कृतिक टूर स्थानीय समुदायों का समर्थन करते हैं।",
        default: "मैं आपको झारखंड के इको-टूरिज्म और सांस्कृतिक विरासत का अन्वेषण करने में मदद करने के लिए यहां हूं। मुझसे गंतव्य, पैकेज, वन्यजीव, झरने या आदिवासी संस्कृति के बारे में पूछें!"
    },
    es: {
        greeting: "¡Hola! Bienvenido al Turismo Ecológico y Cultural de Jharkhand. ¿Cómo puedo ayudarte?",
        destinations: "Tenemos destinos increíbles como el Parque Nacional Betla, Hundru Falls, Netarhat y sitios culturales como el Museo Tribal y templos antiguos.",
        packages: "Ofrecemos paquetes de ecoturismo como Wildlife Explorer y paquetes culturales como Tribal Culture Immersion.",
        booking: "Para reservar un paquete, haz clic en 'Reservar ahora'. Todas las reservas apoyan el turismo sostenible.",
        payment: "Aceptamos tarjetas de crédito/débito y UPI. Todos los pagos apoyan a las comunidades locales.",
        default: "Estoy aquí para ayudarte a explorar el ecoturismo y el patrimonio cultural de Jharkhand."
    },
    fr: {
        greeting: "Bonjour! Bienvenue au Tourisme Écologique et Culturel du Jharkhand. Comment puis-je vous aider?",
        destinations: "Nous avons des destinations incroyables comme le Parc National Betla, les chutes Hundru, Netarhat et des sites culturels comme le Musée Tribal.",
        packages: "Nous proposons des forfaits d'écotourisme comme Wildlife Explorer et des forfaits culturels comme Tribal Culture Immersion.",
        booking: "Pour réserver un forfait, cliquez sur 'Réserver maintenant'. Toutes les réservations soutiennent le tourisme durable.",
        payment: "Nous acceptons les cartes de crédit/débit et UPI. Tous les paiements soutiennent les communautés locales.",
        default: "Je suis là pour vous aider à explorer l'écotourisme et le patrimoine culturel du Jharkhand."
    },
    de: {
        greeting: "Hallo! Willkommen beim Öko- und Kulturtourismus in Jharkhand. Wie kann ich Ihnen helfen?",
        destinations: "Wir haben erstaunliche Reiseziele wie den Betla-Nationalpark, Hundru-Fälle, Netarhat und kulturelle Stätten wie das Stammesmuseum.",
        packages: "Wir bieten Ökotourismus-Pakete wie Wildlife Explorer und kulturelle Pakete wie Tribal Culture Immersion an.",
        booking: "Um ein Paket zu buchen, klicken Sie auf 'Jetzt buchen'. Alle Buchungen unterstützen nachhaltigen Tourismus.",
        payment: "Wir akzeptieren Kredit-/Debitkarten und UPI. Alle Zahlungen unterstützen lokale Gemeinden.",
        default: "Ich bin hier, um Ihnen zu helfen, den Ökotourismus und das kulturelle Erbe von Jharkhand zu erkunden."
    }
};

// Send message
function sendChatbotMessage() {
    const message = chatbotInput.value.trim();
    if (!message) return;
    
    const language = chatbotLanguage.value;
    const responses = chatbotResponses[language] || chatbotResponses.en;
    
    // Add user message
    addChatbotMessage(message, 'user');
    
    // Get bot response
    let botResponse = responses.default;
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('namaste') || lowerMessage.includes('नमस्ते')) {
        botResponse = responses.greeting;
    } else if (lowerMessage.includes('destination') || lowerMessage.includes('place') || lowerMessage.includes('गंतव्य') || lowerMessage.includes('जगह')) {
        botResponse = responses.destinations;
    } else if (lowerMessage.includes('package') || lowerMessage.includes('पैकेज')) {
        botResponse = responses.packages;
    } else if (lowerMessage.includes('book') || lowerMessage.includes('बुक') || lowerMessage.includes('बुकिंग')) {
        botResponse = responses.booking;
    } else if (lowerMessage.includes('payment') || lowerMessage.includes('pay') || lowerMessage.includes('भुगतान')) {
        botResponse = responses.payment;
    } else if (lowerMessage.includes('eco') || lowerMessage.includes('wildlife') || lowerMessage.includes('nature') || lowerMessage.includes('वन्यजीव') || lowerMessage.includes('प्रकृति')) {
        botResponse = responses.eco || responses.default;
    } else if (lowerMessage.includes('cultural') || lowerMessage.includes('tribal') || lowerMessage.includes('heritage') || lowerMessage.includes('सांस्कृतिक') || lowerMessage.includes('आदिवासी')) {
        botResponse = responses.cultural || responses.default;
    }
    
    // Add bot response after delay
    setTimeout(() => {
        addChatbotMessage(botResponse, 'bot');
    }, 500);
    
    chatbotInput.value = '';
}

function addChatbotMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${type}`;
    messageDiv.innerHTML = `<p>${text}</p>`;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

chatbotSend?.addEventListener('click', sendChatbotMessage);
chatbotInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendChatbotMessage();
    }
});


