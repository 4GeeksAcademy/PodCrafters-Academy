from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    userName = db.Column(db.String(80), unique=True, nullable=False)
    firstName = db.Column(db.String(80), unique=False, nullable=False)
    lastName = db.Column(db.String(80), unique=False, nullable=False)
    birthDay = db.Column(db.String(80), unique=False, nullable=False)
    gender = db.Column(db.Enum("masculino","femenino","no_binario"), unique=False, nullable=False)
    id_profile_picture = db.Column(db.Integer, unique=True, nullable=True)
    profesor = db.Column(db.Boolean, nullable=False)
    fecha_registro = db.Column(db.String(80), unique=False, nullable=False)
    telephone = db.Column(db.String(20), unique=True, nullable=False)
    country = db.Column(db.String(40), unique=False, nullable=False)
    address = db.Column(db.String(150), unique=False, nullable=False)
    idioma_español = db.Column(db.Boolean, nullable=False )
    ultima_conexion = db.Column(db.String(40), nullable=False)
    mentor = db.Column(db.Boolean, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }