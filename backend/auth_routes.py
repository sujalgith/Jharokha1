from flask import Blueprint, request
from database import db
from models import User
import jwt, datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask import current_app as app

auth_bp = Blueprint("auth", __name__)

# JWT Create
def create_token(user):
    payload = {
        'email': user.email,
        'role': user.role,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1)
    }
    return jwt.encode(payload, app.config['SECRET_KEY'], algorithm='HS256')


# ---------- SIGNUP ----------
@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")
    role = data.get("role", "user")  # default role=user

    if User.query.filter_by(email=email).first():
        return {"success": False, "message": "Email already exists!"}, 400

    hashed = generate_password_hash(password)

    user = User(name=name, email=email, password=hashed, role=role)
    db.session.add(user)
    db.session.commit()

    return {"success": True, "message": "User Registered Successfully!"}


# ---------- LOGIN ----------
@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()

    if not user or not check_password_hash(user.password, password):
        return {"success": False, "message": "Invalid Credentials!"}, 401

    token = create_token(user)

    return {
        "success": True,
        "token": token,
        "role": user.role,
        "name": user.name
    }
# ---------- LOGOUT ----------