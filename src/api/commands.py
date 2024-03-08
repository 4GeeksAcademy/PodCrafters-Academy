
import click
from api.models import db, User, Curso, Modulo

"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    @app.cli.command("insert-test-users") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_users(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = User()
            user.email = "test_user" + str(x) + "@test.com"
            user.password = "123456"
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

    @app.cli.command("insert-modulos")  # Nombre de nuestro comando
    def insert_test_modulos():
        print("Crear modulos")
        
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