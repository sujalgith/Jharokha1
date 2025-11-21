from flask import Blueprint, request
from sqlalchemy import func
from database import db
from models import AnalyticsEvent

analytics_bp = Blueprint("analytics", __name__)

ALLOWED_EVENTS = {"visit", "login", "logout", "revenue", "booking"}


def _summary_query():
    try:
        total_visitors = AnalyticsEvent.query.filter_by(event_type="visit").count()
        total_logins = AnalyticsEvent.query.filter_by(event_type="login").count()
        total_logouts = AnalyticsEvent.query.filter_by(event_type="logout").count()
        
        revenue_result = (
            db.session.query(func.coalesce(func.sum(AnalyticsEvent.amount), 0.0))
            .filter(AnalyticsEvent.event_type == "revenue")
            .scalar()
        )
        total_revenue = float(revenue_result)

        active_users = []
        logged_out_users = []

        user_events = AnalyticsEvent.query.filter(
            AnalyticsEvent.user_email.isnot(None),
            AnalyticsEvent.event_type.in_(["login", "logout"])
        ).count()

        if user_events > 0:
            subquery = (
                db.session.query(
                    AnalyticsEvent.user_email,
                    func.max(AnalyticsEvent.created_at).label("last_event"),
                )
                .group_by(AnalyticsEvent.user_email)
                .subquery()
            )

            rows = (
                db.session.query(AnalyticsEvent.user_email, AnalyticsEvent.event_type)
                .join(
                    subquery,
                    (AnalyticsEvent.user_email == subquery.c.user_email)
                    & (AnalyticsEvent.created_at == subquery.c.last_event),
                )
                .all()
            )
            
            for email, event in rows:
                if event == "login":
                    active_users.append(email)
                elif event == "logout":
                    logged_out_users.append(email)

        def serialize_events(query):
            results = []
            for event in query:
                results.append({
                    "email": event.user_email or "Guest",
                    "amount": event.amount,
                    "details": event.details,
                    "timestamp": event.created_at.isoformat() if event.created_at else None,
                })
            return results

        recent_logins = serialize_events(
            AnalyticsEvent.query.filter_by(event_type="login")
            .order_by(AnalyticsEvent.created_at.desc())
            .limit(10)
            .all()
        )

        recent_bookings = serialize_events(
            AnalyticsEvent.query.filter(AnalyticsEvent.event_type.in_(["revenue", "booking"]))
            .order_by(AnalyticsEvent.created_at.desc())
            .limit(10)
            .all()
        )

        return {
            "success": True,
            "total_visitors": total_visitors,
            "total_logins": total_logins,
            "total_logouts": total_logouts,
            "total_revenue": total_revenue,
            "active_users": active_users,
            "recently_logged_out": logged_out_users,
            "recent_logins": recent_logins,
            "recent_bookings": recent_bookings,
        }

    except Exception as e:
        print("❌ Error in summary:", e)
        return {
            "success": False,
            "total_visitors": 0,
            "total_logins": 0,
            "total_logouts": 0,
            "total_revenue": 0,
            "active_users": [],
            "recently_logged_out": [],
            "recent_logins": [],
            "recent_bookings": [],
        }

@analytics_bp.route("/analytics/event", methods=["POST"])
def record_event():
    try:
        data = request.json or {}
        event_type = data.get("event_type")
        user_email = data.get("user_email")
        amount = float(data.get("amount", 0) or 0)
        details = data.get("details")

        if not event_type:
            return {"success": False, "message": "event_type is required"}, 400

        if event_type not in ALLOWED_EVENTS:
            return {"success": False, "message": f"Invalid event type. Allowed: {ALLOWED_EVENTS}"}, 400

        event = AnalyticsEvent(
            event_type=event_type,
            user_email=user_email if user_email else None,
            amount=amount if event_type in {"revenue", "booking"} else 0.0,
            details=details,
        )
        db.session.add(event)
        db.session.commit()

        print(
            f"✅ Analytics event recorded: {event_type} - {user_email or 'anonymous'} "
            f"- Amount: {amount if event_type in {'revenue', 'booking'} else 0} "
            f"- Details: {details or 'N/A'}"
        )

        return {"success": True, "summary": _summary_query()}
    except Exception as e:
        db.session.rollback()
        print(f"❌ Error recording analytics event: {str(e)}")
        return {"success": False, "message": f"Error recording event: {str(e)}"}, 500


@analytics_bp.route("/analytics/summary", methods=["GET"])
def analytics_summary():
    return {"success": True, **_summary_query()}
     



