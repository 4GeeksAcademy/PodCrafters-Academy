  
import os
from flask_admin import Admin
from .models import db, User, Curso, Compra, Desestimiento, Contenido_Curso, Modulo, Alumno_Modulo, Mentorias, Disponibilidad_Mentor, Mas_Informacion, Subscribe
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Curso, db.session))
    admin.add_view(ModelView(Compra, db.session))
    admin.add_view(ModelView(Desestimiento, db.session))
    admin.add_view(ModelView(Contenido_Curso, db.session))
    admin.add_view(ModelView(Modulo, db.session))
    admin.add_view(ModelView(Alumno_Modulo, db.session))
    admin.add_view(ModelView(Mentorias, db.session))
    admin.add_view(ModelView(Disponibilidad_Mentor, db.session))
    admin.add_view(ModelView(Mas_Informacion, db.session))
    admin.add_view(ModelView(Subscribe, db.session))
    










    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))