"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from api.utils import APIException, generate_sitemap
from api.models import db, User
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token
from flask_mail import Mail, Message
# from models import Person

ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(
    os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False
CORS(app)
jwt = JWTManager(app)
# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace(
        "postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'teest4geeks12@gmail.com'  
app.config['MAIL_PASSWORD'] = 'ahyz rgmy igtb yclg'  

mail = Mail(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object


@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints


@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file


@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
    return response

@app.route('/contact', methods=['POST'])
def contact():
    nombre = request.json.get("nombre", None)
    email = request.json.get("email", None)
    mensaje = request.json.get("mensaje", None)
    comoNosEncontraste = request.json.get("comoNosEncontraste", None)

    if not nombre or not email or not mensaje or not comoNosEncontraste:
        return jsonify({ "error": "Por favor, complete todos los campos del formulario de contacto" }), 400
    
    
    try:
        msg = Message('Nuevo mensaje de contacto', sender='teest4geeks12@gmail.com', recipients=['podcraftersacademy@gmail.com'])
        msg.body = f"Nombre: {nombre}\nCorreo electrónico: {email}\nMensaje: {mensaje}\nCómo nos encontraste: {comoNosEncontraste}"
        mail.send(msg)
        return jsonify({ "message": "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto." }), 200
    except Exception as e:
        return jsonify({ "error": str(e) }), 500

@app.route('/send-email', methods=['POST'])
def send_email():
    email = request.json.get("email", None)

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({ "error": "Este usuario no existe"}), 401
   
    token = create_access_token(identity=email)
    link = 'https://vigilant-sniffle-ggg7wvgg7gvhpgw6-3000.app.github.dev/recover?token=' + token
   
    message = Message(
        subject="Reset your password",
        sender=app.config.get("MAIL_USERNAME"),
        recipients=[email],
        html='Reset your password in this link: <a href="' + link +'">Recuperar contraseña aqui</a>'
    )

    mail.send(message)

    return jsonify({ "msg": "success" }), 200

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
