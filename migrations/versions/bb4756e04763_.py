"""empty message

Revision ID: bb4756e04763
Revises: 4fe75b36dafc
Create Date: 2024-02-29 13:04:19.715550

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bb4756e04763'
down_revision = '4fe75b36dafc'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('mas__informacion',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_curso', sa.Integer(), nullable=False),
    sa.Column('first_Name', sa.String(length=40), nullable=False),
    sa.Column('last_Name', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=40), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('disponibilidad__mentor',
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
    sa.Column('nombre_modulo', sa.String(length=40), nullable=False),
    sa.Column('id_curso', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id_curso'], ['curso.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('alumno__modulo',
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
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('alumno__modulo')
    op.drop_table('modulo')
    op.drop_table('mentorias')
    op.drop_table('disponibilidad__mentor')
    op.drop_table('mas__informacion')
    # ### end Alembic commands ###