"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Curso, Compra, Desestimiento, Contenido_Curso, Modulo, Alumno_Modulo, Mentorias, Disponibilidad_Mentor, Mas_Informacion
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/añadir_test_modulos', methods=['GET'])
def test_modulos():
    modulos_info = [
            {"nombre": "Modulo 1", "id_curso": 1, "contenido": "Contenido del módulo 1"},
            {"nombre": "Modulo 2", "id_curso": 2, "contenido": "Contenido del módulo 2"},
            {"nombre": "Modulo 3", "id_curso": 3, "contenido": "Contenido del módulo 3"}
        ]

    for info in modulos_info:
        modulo = Modulo()
        modulo.nombre_modulo = info["nombre"]
        modulo.id_curso = info["id_curso"]
        modulo.contenido_modulo = info["contenido"]
        db.session.add(modulo)
        db.session.commit()
        print("Module: ", modulo.nombre_modulo, " created for curso_id:", modulo.id_curso)

    print("Todos los modulos se han creado")
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200
