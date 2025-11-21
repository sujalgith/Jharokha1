from flask import Flask
from flask_cors import CORS
from database import db, init_db
from auth_routes import auth_bp
from analytics_routes import analytics_bp

app = Flask(__name__)
CORS(app)

app.config["SECRET_KEY"] = "MY_SUPER_SECRET_KEY"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///users.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)
app.register_blueprint(auth_bp)
app.register_blueprint(analytics_bp)

with app.app_context():
    init_db()

@app.route("/")
def home():
    return {"message": "Backend is working!"}

if __name__ == "__main__":
    app.run(debug=True, port=5000)
