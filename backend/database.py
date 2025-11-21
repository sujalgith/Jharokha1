from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text

db = SQLAlchemy()


def init_db():
    from models import User, AnalyticsEvent
    db.create_all()

    # Ensure new columns exist (SQLite simple migration)
    with db.engine.connect() as conn:
        result = conn.execute(text("PRAGMA table_info(analytics_event)"))
        columns = [row[1] for row in result]
        if "details" not in columns:
            conn.execute(text("ALTER TABLE analytics_event ADD COLUMN details TEXT"))
