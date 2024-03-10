"""empty message

Revision ID: 38e47dbd6b57
Revises: 
Create Date: 2024-03-10 15:13:50.924849

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '38e47dbd6b57'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('curso',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('precio', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('mas_informacion',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_curso', sa.Integer(), nullable=False),
    sa.Column('first_Name', sa.String(length=40), nullable=False),
    sa.Column('last_Name', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=40), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=80), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('userName', sa.String(length=80), nullable=False),
    sa.Column('firstName', sa.String(length=80), nullable=False),
    sa.Column('lastName', sa.String(length=80), nullable=False),
    sa.Column('birthDay', sa.String(length=80), nullable=True),
    sa.Column('gender', sa.Enum('masculino', 'femenino', 'no_binario', name='gender_enum'), nullable=True),
    sa.Column('id_profile_picture', sa.Integer(), nullable=True),
    sa.Column('profesor', sa.Boolean(), nullable=True),
    sa.Column('fecha_registro', sa.String(length=80), nullable=True),
    sa.Column('telephone', sa.String(length=20), nullable=True),
    sa.Column('country', sa.String(length=40), nullable=True),
    sa.Column('address', sa.String(length=80), nullable=True),
    sa.Column('idioma_español', sa.Boolean(), nullable=True),
    sa.Column('ultima_conexion', sa.String(length=40), nullable=True),
    sa.Column('mentor', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('id_profile_picture'),
    sa.UniqueConstraint('userName')
    )
    op.create_table('compra',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_curso', sa.Integer(), nullable=False),
    sa.Column('id_usuario', sa.Integer(), nullable=False),
    sa.Column('metodo_pago', sa.Enum('tarjeta_credito', 'transferencia', 'financiacion', name='pago_enum'), nullable=False),
    sa.Column('fecha_pago', sa.String(length=40), nullable=False),
    sa.Column('estado', sa.String(length=20), nullable=False),
    sa.Column('descuento', sa.Boolean(), nullable=True),
    sa.Column('cupon', sa.String(length=20), nullable=True),
    sa.ForeignKeyConstraint(['id_curso'], ['curso.id'], ),
    sa.ForeignKeyConstraint(['id_usuario'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('contenido_curso',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_curso', sa.Integer(), nullable=False),
    sa.Column('descripcion', sa.String(length=50), nullable=False),
    sa.Column('duracion', sa.Integer(), nullable=False),
    sa.Column('fecha_inicio', sa.String(length=30), nullable=False),
    sa.Column('id_profesor', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id_curso'], ['curso.id'], ),
    sa.ForeignKeyConstraint(['id_profesor'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('disponibilidad_mentor',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('link_calendario', sa.String(length=40), nullable=False),
    sa.Column('id_mentor', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id_mentor'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('mentorias',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_mentor', sa.Integer(), nullable=False),
    sa.Column('id_alumno', sa.Integer(), nullable=False),
    sa.Column('asistido', sa.Boolean(), nullable=False),
    sa.Column('fecha', sa.String(length=30), nullable=False),
    sa.Column('hora', sa.String(length=10), nullable=False),
    sa.Column('encuesta', sa.Boolean(), nullable=False),
    sa.Column('duracion', sa.String(length=20), nullable=False),
    sa.ForeignKeyConstraint(['id_alumno'], ['user.id'], ),
    sa.ForeignKeyConstraint(['id_mentor'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('modulo',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre_modulo', sa.String(length=100), nullable=False),
    sa.Column('id_curso', sa.Integer(), nullable=False),
    sa.Column('contenido_modulo', sa.String(length=1000), nullable=False),
    sa.ForeignKeyConstraint(['id_curso'], ['curso.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('alumno_modulo',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_modulo', sa.Integer(), nullable=False),
    sa.Column('id_alumno', sa.Integer(), nullable=False),
    sa.Column('entregado', sa.Boolean(), nullable=False),
    sa.Column('revisado', sa.Boolean(), nullable=False),
    sa.Column('aprobado', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['id_alumno'], ['user.id'], ),
    sa.ForeignKeyConstraint(['id_modulo'], ['modulo.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('desestimiento',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_compra', sa.Integer(), nullable=False),
    sa.Column('motivo', sa.String(length=50), nullable=True),
    sa.Column('fecha', sa.String(length=40), nullable=False),
    sa.Column('dentro_plazo', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['id_compra'], ['compra.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('desestimiento')
    op.drop_table('alumno_modulo')
    op.drop_table('modulo')
    op.drop_table('mentorias')
    op.drop_table('disponibilidad_mentor')
    op.drop_table('contenido_curso')
    op.drop_table('compra')
    op.drop_table('user')
    op.drop_table('mas_informacion')
    op.drop_table('curso')
    # ### end Alembic commands ###
