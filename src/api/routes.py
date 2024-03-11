"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Curso, Compra, Desestimiento, Contenido_Curso, Modulo, Alumno_Modulo, Mentorias, Disponibilidad_Mentor, Mas_Informacion
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from flask_mail import Mail, Message

api = Blueprint('api', __name__)
app = Flask(__name__)


app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'podcraftersacademy@gmail.com'  
app.config['MAIL_PASSWORD'] = 'Podcast12345'  

mail = Mail(app)
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
            {"id":1,"nombre": "Introducción al Podcasting", "id_curso": 1, "contenido": "<head><title>Lección 1: ¿Qué es un podcast?</title></head><body><div><h1>Lección 1: ¿Qué es un podcast?</h1><p>¡Bienvenido a la primera lección de nuestro curso, donde exploraremos en profundidad el emocionante mundo de los podcasts!</p><h2>1. Definición de Podcast:</h2><p>En esta sección, entenderemos qué significa exactamente la palabra 'podcast'. Exploraremos cómo los podcasts se han convertido en una forma popular de consumir contenido digital y cómo se diferencian de otros medios.</p><h2>2. Estructura y Formato:</h2><p>Descubriremos la estructura común de un podcast, desde episodios individuales hasta series continuas. Analizaremos los diferentes formatos, como entrevistas, monólogos y narrativas, para que puedas encontrar el estilo que se adapte mejor a tus objetivos.</p><h2>3. Plataformas y Acceso:</h2><p>Aprenderás sobre las plataformas de distribución de podcasts y cómo los oyentes acceden a este contenido. Desde aplicaciones específicas hasta plataformas web, entenderás cómo llegar a tu audiencia de manera efectiva.</p></body>"},
            {"id":2,"nombre": "Planificación y Conceptualización", "id_curso": 1, "contenido": "<head><title>Lección 4: Identificación de la audiencia objetivo</title></head><body><div><h1>Lección 4: Identificación de la audiencia objetivo</h1><p>¡Bienvenido a la cuarta lección de nuestro curso, donde nos sumergiremos en la crucial tarea de identificar y comprender a tu audiencia objetivo!</p><h2>1. Importancia de Conocer a tu Audiencia:</h2><p>En esta sección, exploraremos por qué es esencial comprender a quién te diriges con tu podcast. Entender a tu audiencia no solo mejora la relevancia de tu contenido, sino que también fortalece la conexión con tus oyentes.</p><h2>2. Métodos de Investigación:</h2><p>Aprenderás sobre diversas estrategias y herramientas para investigar y recopilar información sobre tu audiencia. Desde encuestas hasta análisis de datos, descubrirás cómo obtener insights valiosos que guiarán el desarrollo de tu contenido.</p><h2>3. Creación de Perfiles de Audiencia:</h2><p>Analizaremos cómo crear perfiles detallados de tu audiencia objetivo. Identificarás características demográficas, preferencias de consumo y comportamientos que te ayudarán a personalizar tu contenido de manera efectiva.</p></body>"},
            {"id":3,"nombre": "Equipamiento y Tecnología", "id_curso": 1, "contenido": "<head><title>Lección 7: Selección de micrófonos y equipos de grabación</title></head><body><div><h1>Lección 7: Selección de micrófonos y equipos de grabación</h1><p>¡Bienvenido a la séptima lección de nuestro curso! En esta lección, nos sumergiremos en el emocionante mundo de la selección de micrófonos y equipos de grabación para tu podcast.</p><h2>1. Importancia de la Calidad del Sonido:</h2><p>Comprenderemos por qué la calidad del sonido es crucial en el podcasting. Exploraremos cómo un buen sonido puede mejorar la experiencia del oyente y contribuir al éxito general de tu podcast.</p><h2>2. Tipos de Micrófonos:</h2><p>Analizaremos los diferentes tipos de micrófonos disponibles y sus características únicas. Desde micrófonos USB hasta micrófonos dinámicos y de condensador, aprenderás a elegir el tipo que mejor se adapte a tus necesidades.</p><h2>3. Equipos de Grabación:</h2><p>Exploraremos los equipos de grabación necesarios para asegurar una producción de alta calidad. Desde interfaces de audio hasta grabadoras portátiles, te guiaré a través de las opciones disponibles y cómo incorporarlos a tu configuración.</p></body>"},
            {"id":4,"nombre": "Creación de Contenido", "id_curso": 1, "contenido": "<head><title>Lección 10: Desarrollo de ideas para episodios</title></head><body><div><h1>Lección 10: Desarrollo de ideas para episodios</h1><p>¡Bienvenido a la décima lección de nuestro curso! En esta etapa, nos sumergiremos en el emocionante proceso de desarrollar ideas para tus episodios de podcast, asegurándonos de mantener tu contenido fresco e interesante.</p><h2>1. Entendiendo a tu Audiencia:</h2><p>Comenzaremos explorando cómo comprender mejor a tu audiencia puede inspirar ideas para episodios. Analizaremos sus intereses, preguntas frecuentes y temas relevantes para crear contenido que resuene con ellos.</p><h2>2. Brainstorming Creativo:</h2><p>Aprenderás técnicas efectivas de brainstorming para generar una variedad de ideas creativas. Desde lluvias de ideas en solitario hasta sesiones colaborativas, descubrirás métodos que se adapten a tu estilo y te ayudarán a descubrir nuevas perspectivas.</p><h2>3. Búsqueda de Tendencias:</h2><p>Exploraremos cómo mantenerse al tanto de las tendencias relevantes en tu nicho o industria.</p></body>" },
            {"id":5,"nombre": "Producción y Edición", "id_curso": 1, "contenido": "<head><title>Lección 13: Proceso de grabación de episodios</title></head><body><div><h1>Lección 13: Proceso de grabación de episodios</h1><p>¡Bienvenido a la decimotercera lección de nuestro curso! En esta lección, nos sumergiremos en el proceso de grabación de episodios, detallando los pasos y las prácticas recomendadas para obtener grabaciones de alta calidad.</p><h2>1. Preparación Antes de la Grabación:</h2><p>Aprenderás la importancia de una preparación sólida antes de iniciar la grabación. Desde la planificación del contenido hasta la configuración técnica, garantizarás un proceso eficiente y sin contratiempos.</p><h2>2. Configuración Técnica y Pruebas:</h2><p>Exploraremos la configuración técnica necesaria para una grabación exitosa. Te guiaré a través de la configuración de micrófonos, niveles de audio y pruebas de sonido para asegurarte de que todo esté listo.</p><h2>3. Flujo de la Grabación:</h2><p>Discutiremos el flujo ideal de la grabación de un episodio. Desde la introducción hasta la conclusión, entenderás cómo mantener la coherencia y la energía a lo largo de la grabación.</p></body>"},
            {"id":6,"nombre": "Diseño de Marca y Marketing", "id_curso": 1, "contenido": "<head><title>Lección 16: Creación de una identidad de marca para el podcast</title></head><body><div><h1>Lección 16: Creación de una identidad de marca para el podcast</h1><p>¡Bienvenido a la decimosexta lección de nuestro curso! En esta lección, nos sumergiremos en la emocionante tarea de crear una identidad de marca para tu podcast, un elemento esencial para destacar en el mundo del podcasting.</p><h2>1. Importancia de la Identidad de Marca:</h2><p>Comprenderás la importancia crucial de la identidad de marca en el éxito de tu podcast. Analizaremos cómo una identidad sólida puede diferenciarte, atraer oyentes y crear una conexión duradera.</p><h2>2. Definición de la Audiencia Objetivo:</h2><p>Exploraremos cómo definir claramente tu audiencia objetivo influye en la creación de la identidad de marca. Entenderás cómo adaptar elementos de diseño y tono de voz para resonar con tu público específico.</p><h2>3. Diseño de Logo y Elementos Visuales:</h2><p>Aprenderás sobre el diseño de logos y elementos visuales que representen la esencia de tu podcast.</p></body>"},
            {"id":7,"nombre": "Distribución y Monetización", "id_curso": 1, "contenido":"<head><title>Lección 19: Plataformas de alojamiento y distribución de podcasts</title></head><body><div><h1>Lección 19: Plataformas de alojamiento y distribución de podcasts</h1><p>¡Bienvenido a la decimonovena lección de nuestro curso! En esta lección, exploraremos las plataformas de alojamiento y distribución de podcasts, elementos fundamentales para llevar tu contenido a una audiencia global.</p><h2>1. Elección de la Plataforma de Alojamiento:</h2><p>Aprenderás a seleccionar la plataforma de alojamiento más adecuada para tus necesidades. Analizaremos características clave, límites de almacenamiento y opciones de personalización disponibles en diferentes servicios.</p><h2>2. Proceso de Subida y Programación de Episodios:</h2><p>Exploraremos el proceso de subida y programación de episodios en la plataforma de alojamiento elegida. Te guiaré a través de los pasos para cargar tu contenido y establecer horarios de publicación consistentes.</p><h2>3. Distribución en Plataformas Populares:</h2><p>Discutiremos estrategias para distribuir tu podcast en plataformas populares. Desde Apple Podcasts hasta Spotify, entenderás cómo maximizar tu visibilidad y llegar a un público más amplio.</p></div></body>"},
            {"id":8,"nombre": "Estrategias Fundamentales de Contenido Visual", "id_curso": 2, "contenido":"<head><title>Lección 1: Introducción al Poder del Contenido Visual</title></head><body><div><h1>Lección 1: Introducción al Poder del Contenido Visual</h1><p>¡Bienvenido a la primera lección de nuestro emocionante curso! En esta sesión, exploraremos el impacto significativo que el contenido visual tiene en las redes sociales y cómo puede transformar la manera en que te conectas con tu audiencia.</p><h2>1.1 La Importancia del Primer Vistazo:</h2><p>Descubre cómo las personas procesan y retienen información visual de manera más efectiva que el texto. La influencia del primer vistazo y cómo captar la atención instantánea.</p><h2>1.2 El Rol del Contenido Visual en la Comunicación:</h2><p>Exploraremos cómo el contenido visual va más allá de la estética, desempeñando un papel clave en la comunicación efectiva. Ejemplos de mensajes complejos transmitidos de manera clara a través del contenido visual.</p></body>"},
            {"id":9,"nombre": "Herramientas y Plataformas para Crear Contenido Visual", "id_curso": 2, "contenido":"<head><title>Lección 4: Herramientas de Diseño Gráfico Online y Offline</title></head><body><div><h1>Lección 4: Herramientas de Diseño Gráfico Online y Offline</h1><p>¡Bienvenido a esta lección donde exploraremos las herramientas esenciales para la creación de diseños gráficos tanto en entornos en línea como fuera de línea! Preparémonos para descubrir las herramientas que te ayudarán a dar vida a tus ideas visuales.</p><h2>4.1 Herramientas de Diseño en Línea:</h2><p>Canva: Exploraremos cómo utilizar Canva para crear gráficos llamativos, desde publicaciones en redes sociales hasta presentaciones. Consejos y trucos para maximizar las funciones de Canva. Crello: Introducción a Crello y cómo puede ser utilizado para diseñar contenido visual de alta calidad. Ejemplos de proyectos creativos realizados con Crello.</p><h2>4.2 Herramientas de Diseño Offline:</h2><p>Adobe Creative Suite: Desglose de las herramientas populares como Photoshop, Illustrator y InDesign. Cómo utilizar estas herramientas de manera efectiva para diferentes tipos de proyectos.</p></body>"},
            {"id":10,"nombre": "Estrategias Avanzadas y Analítica Visual", "id_curso": 2, "contenido":"<head><title>Lección 7: Estrategias Avanzadas para Contenido Visual Impactante</title></head><body><div><h1>Lección 7: Estrategias Avanzadas para Contenido Visual Impactante</h1><p>¡En esta lección, nos sumergiremos en estrategias avanzadas que te ayudarán a crear contenido visual que no solo atraiga, sino que también deje una impresión duradera en tu audiencia!</p><h2>7.1 Storytelling Visual:</h2><p>Cómo utilizar el storytelling visual para transmitir mensajes de manera efectiva. Ejemplos de marcas que han dominado el arte de contar historias visuales.</p><h2>7.2 Incorporación de Elementos Interactivos:</h2><p>Estrategias para agregar elementos interactivos a tus imágenes y gráficos. Herramientas y técnicas para crear experiencias visuales participativas.</p><h2>7.3 Uso Creativo de Tipografía:</h2><p>Exploración de cómo la tipografía puede ser un elemento poderoso en el diseño visual. Consejos para seleccionar y combinar fuentes de manera efectiva.</p><h2>7.4 La Psicología de la Composición Visual:</h2><p>Profundización en la composición visual y su impacto en la percepción.</p></body>"},
            {"id":11,"nombre": "Integración y Evolución Continua", "id_curso": 2, "contenido": "<head><title>Lección 9: Integración Efectiva con Estrategias de Marketing Digital</title></head><body><div><h1>Lección 9: Integración Efectiva con Estrategias de Marketing Digital</h1><p>¡En esta lección, exploraremos cómo integrar de manera efectiva tus creaciones visuales con estrategias de marketing digital para maximizar el impacto de tu presencia en línea!</p><h2>9.1 Sincronización con Objetivos de Marketing:</h2><p>Cómo alinear tus creaciones visuales con los objetivos específicos de tu estrategia de marketing digital. Estrategias para asegurar una coherencia efectiva.</p><h2>9.2 SEO para Contenido Visual:</h2><p>La importancia del SEO en el ámbito visual y cómo optimizar tus imágenes y videos para los motores de búsqueda. Herramientas y prácticas recomendadas.</p><h2>9.3 Publicidad Visual en Redes Sociales:</h2><p>Estrategias para crear anuncios visuales impactantes en plataformas de redes sociales. Ejemplos de campañas publicitarias visuales exitosas.</p><h2>9.4 Colaboración con Influencers y Creativos Digitales:</h2><p>Cómo colaborar con influencers y creadores de contenido para amplificar tu alcance visual.</p></body>"},
            {"id":12,"nombre": "Podcasting Estratégico", "id_curso": 3, "contenido":"<head><title>Lección 1: El Impacto del Podcasting Avanzado</title></head><body><div><h1>Lección 1: El Impacto del Podcasting Avanzado</h1><p>1. Introducción al Podcasting Avanzado:</p><p>Definición y Evolución: Breve repaso de la definición de podcasting avanzado. Exploración de cómo ha evolucionado desde los primeros días del podcasting.</p><p>2. Transformación de la Experiencia Auditiva:</p><p>Calidad Auditiva Mejorada: Tecnologías utilizadas para mejorar la calidad del sonido en podcasts avanzados. Impacto de la experiencia auditiva mejorada en la retención de la audiencia.</p><p>Innovaciones en Producción: Uso de técnicas avanzadas en la producción de podcasts. Ejemplos de cómo la producción ha elevado la narrativa y la inmersión.</p><p>3. Casos de Estudio: Podcasts Innovadores:</p><p>Análisis de podcasts que han introducido formatos innovadores. Destaque de casos que han marcado la pauta en la industria.</p><p>Éxito y Reconocimiento: Estudio de podcasts avanzados que han alcanzado el éxito y el reconocimiento a nivel mundial. Lecciones aprendidas de sus estrategias y enfoques únicos.</p></body>"},
            {"id":13,"nombre": "Técnicas Avanzadas de Producción", "id_curso": 3, "contenido":"<head><title>Lección 4: Producción de Alta Calidad y Estilo</title></head><body><div><h1>Lección 4: Producción de Alta Calidad y Estilo</h1><p>1. La Importancia de la Producción de Alta Calidad</p><p>Profesionalismo Auditivo: Cómo una producción de alta calidad impacta la percepción del oyente. Razones para invertir en equipos y técnicas de grabación de calidad.</p><p>Diferenciación en el Mercado: Cómo la calidad del audio puede destacar un podcast en un mercado competitivo. Ejemplos de podcasts que han ganado notoriedad por su excelencia auditiva.</p><p>2. Elementos Clave de la Producción de Alta Calidad</p><p>Grabación Optimal: Consejos para la grabación en entornos controlados y no controlados. La importancia de minimizar ruidos y distracciones.</p><p>Edición y Postproducción: Herramientas y técnicas para una edición de audio efectiva. Cómo mejorar la claridad y cohesión del contenido a través de la postproducción.</p><p>Diseño Sonoro: Uso estratégico de efectos sonoros y música. Creación de una identidad sonora única para el podcast</p>.</body>"},
            {"id":14,"nombre": "Monetización y Colaboraciones", "id_curso": 3, "contenido":"<head><title>Lección 7: Estrategias Avanzadas de Monetización</title></head><body><div><h1>Lección 7: Estrategias Avanzadas de Monetización</h1><p>Diversificación de Fuentes de Ingresos: Exploración de diversas formas de generar ingresos a través del podcasting. Estrategias para no depender exclusivamente de la publicidad.</p><p>Membresías y Contenido Exclusivo: Implementación de programas de membresía para oyentes leales. Creación de contenido exclusivo para suscriptores y beneficios asociados.</p><p>Colaboraciones y Patrocinios Especiales: Cómo establecer colaboraciones estratégicas y patrocinios personalizados. Maximización de ingresos a través de asociaciones específicas para el público objetivo.</p><p>Eventos y Experiencias Pagas: Organización de eventos en vivo y experiencias para la audiencia. Generación de ingresos a través de la venta de boletos y participación en eventos especiales.</p><p>Merchandising y Productos Asociados: Diseño y venta de productos relacionados con el podcast. Estrategias para comercializar eficazmente merchandising y productos afines.</p></body>"},
            {"id":15,"nombre": "Desafíos Éticos y Legales", "id_curso": 3, "contenido":"<head><title>Lección 9: Consideraciones Éticas en el Podcasting</title></head><body><div><h1>Lección 9: Consideraciones Éticas en el Podcasting</h1><p>Introducción a la Ética en el Podcasting: Definición de ética en el contexto del podcasting. Importancia de mantener altos estándares éticos en la producción de contenido.</p><p>Respeto a la Audiencia: Énfasis en la importancia de respetar la diversidad de la audiencia. Cómo evitar la creación de contenido que pueda resultar ofensivo o perjudicial.</p><p>Veracidad y Honestidad: La responsabilidad de proporcionar información precisa y veraz. Cómo evitar la desinformación y mantener la integridad del contenido.</p><p>Derechos de Autor y Uso de Contenido Externo: Guía sobre el uso ético de material con derechos de autor. Consejos para obtener permisos adecuados y dar crédito adecuado.</p><p>Revelación de Patrocinios y Afiliaciones: La importancia de la transparencia al divulgar patrocinios y afiliaciones. Cumplimiento de las normativas y regulaciones relacionadas con la divulgación.</p></body>"},
            {"id":16,"nombre": "Explorando Formatos Innovadores", "id_curso": 4, "contenido":"<head><title>Lección 1: Podcasts Interactivos y Participativos</title></head><body><div><h1>Lección 1: Podcasts Interactivos y Participativos</h1><p>En esta lección, exploraremos la emocionante dimensión de los podcasts interactivos y participativos. A medida que evoluciona el panorama del podcasting, la capacidad de involucrar a la audiencia de manera activa se ha convertido en una herramienta invaluable para los creadores de contenido. Aprenderemos estrategias clave y herramientas esenciales para transformar tu podcast en una experiencia interactiva única.</p><p>Importancia de la Interactividad en Podcasts: Análisis de la evolución del consumo de contenido. Ventajas de la participación activa de la audiencia.</p><p>Técnicas para Involucrar a la Audiencia: Encuestas y votaciones en tiempo real. Preguntas y respuestas en vivo. Integración de comentarios y opiniones de la audiencia.</p><p>Herramientas para Podcasts Interactivos: Plataformas de transmisión en vivo. Sistemas de comentarios y chat en tiempo real. Encuestas y herramientas de participación.</p></body>"},
            {"id":17,"nombre": "Producción Audiovisual para Podcasts", "id_curso": 4, "contenido":"<head><title>Lección 4: Integración de Video en Podcasts</title></head><body><div><h1>Lección 4: Integración de Video en Podcasts</h1><p>En esta lección, exploraremos la poderosa sinergia entre el contenido de audio y video en el mundo del podcasting. A medida que la demanda de contenido visual sigue creciendo, la integración de video en tus podcasts puede ser una estrategia valiosa para ampliar tu alcance y ofrecer una experiencia más completa a tu audiencia.</p><p>Ventajas de la Integración de Video: Exploración de cómo el video puede complementar y potenciar el contenido de audio. Atracción de audiencias que prefieren el consumo de contenido visual.</p><p>Plataformas y Formatos de Video: Elección de plataformas adecuadas para la distribución de contenido de video. Adaptación de formatos para aprovechar al máximo las capacidades visuales.</p><p>Estrategias para Contenido de Video Compelling: Desarrollo de contenido visual que sea atractivo y relevante. Incorporación de elementos visuales que mejoren la comprensión del mensaje.</p></body>"},
            {"id":18,"nombre": "Estrategias de Monetización Creativas", "id_curso": 4, "contenido":"<head><title>Lección 7: Modelos de Patrocinio Innovadores</title></head><body><div><h1>Lección 7: Modelos de Patrocinio Innovadores</h1><p>En esta lección, exploraremos formas innovadoras de abordar el patrocinio en el mundo del podcasting. Más allá de los métodos tradicionales, descubriremos modelos creativos que permiten a los creadores de contenido colaborar con marcas y generar ingresos de manera única. Vamos a sumergirnos en estrategias que van más allá de los simples anuncios, creando relaciones sólidas con los patrocinadores y ofreciendo un valor añadido a la audiencia.</p><p>El Paisaje del Patrocinio en Podcasting: Revisión de los métodos tradicionales de patrocinio en podcasts. Identificación de oportunidades y desafíos en el actual panorama publicitario.</p><p>Modelos de Patrocinio Basados en Contenido: Exploración de modelos donde el patrocinio se integra de manera natural en el contenido del episodio. Ejemplos de cómo los creadores pueden incorporar mensajes patrocinados de manera auténtica.</p></body>"},
            {"id":19,"nombre": "Podcasting Multilingüe y Global", "id_curso": 4, "contenido":"<head><title>Lección 9: Creación de Contenido Multilingüe</title></head><body><div><h1>Lección 9: Creación de Contenido Multilingüe</h1><p>En esta lección, exploraremos la emocionante dimensión de la creación de contenido multilingüe en el mundo del podcasting. A medida que el alcance global de los podcasts continúa expandiéndose, entender cómo producir contenido en varios idiomas se vuelve esencial. Desde la planificación hasta la ejecución, descubriremos estrategias efectivas para llegar a audiencias más amplias y diversas mediante la creación de contenido multilingüe.</p><p>Contenido: Importancia de la Diversidad Lingüística: Exploración de la creciente audiencia global de podcasts. Ventajas de la creación de contenido multilingüe en términos de alcance y diversidad. Identificación de Audiencias Objetivo en Diferentes Idiomas: Análisis de datos demográficos para identificar segmentos de audiencia en diferentes regiones. Investigación de mercados y preferencias lingüísticas.</p></body>"}
    ]

    for info in modulos_info:
        modulo = Modulo()
        modulo.nombre_modulo = info["nombre"]
        modulo.id_curso = info["id_curso"]
        modulo.id = info["id"]
        modulo.contenido_modulo = info["contenido"]
        db.session.add(modulo)
        db.session.commit()
        print("Module: ", modulo.nombre_modulo, " created for curso_id:", modulo.id_curso)

    print("Todos los modulos se han creado")
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def signup():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    userName = request.json.get("userName", None)
    firstName = request.json.get("firstName", None)
    lastName = request.json.get("lastName", None)
    telephone = request.json.get("telephone", None)

    existing_user = User.query.filter_by(email=email).first()
    if existing_user is not None:
        return jsonify({ "error": "User already exists" }), 400
    
    new_user = User(email=email, password=password, userName=userName,firstName=firstName, lastName=lastName, telephone=telephone)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({ "message": "success" }), 200

@api.route('/login', methods=['POST'])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({ "error": "Inicio de sesion incorrecto" }), 401
    
    access_token = create_access_token(identity=user.email)
    return jsonify({ "token": access_token })

@api.route('/verify_identity', methods=['GET'])
@jwt_required()
def verify():
    current_user_email = get_jwt_identity()
    user = User.query.filter_by(email=current_user_email).first()

    if user is None:
        return jsonify({ "error": "Este usuario no existe" }), 401
    
    return jsonify({ "user": user.serialize(), "token": create_access_token(identity=user.email) })

@api.route('/change_password', methods=['POST'])
@jwt_required()
def change_password():
    email = get_jwt_identity()
    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({ "error": "Usuario no encontrado" }), 404

    new_password = request.json.get("newPassword", None)
    user.password = new_password
    db.session.commit()

    return jsonify({ "message": "Contraseña cambiada con éxito" }), 200

@api.route('/curso', methods=['GET'])  
def get_cursos():
    curso = Curso.query.all() 
    return jsonify([curso.serialize() for curso in curso])

@api.route('/contact', methods=['POST'])
def contact():
    name = request.json.get("name", None)
    email = request.json.get("email", None)
    message = request.json.get("message", None)

    if not name or not email or not message:
        return jsonify({ "error": "Por favor, complete todos los campos del formulario de contacto" }), 400
    
    try:
        msg = Message('Nuevo mensaje de contacto', sender='tu_correo@gmail.com', recipients=['podcraftersacademy@gmail.com'])
        msg.body = f"Nombre: {name}\nCorreo electrónico: {email}\nMensaje: {message}"
        mail.send(msg)
        return jsonify({ "message": "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto." }), 200
    except Exception as e:
        return jsonify({ "error": str(e) }), 500

@api.route('/update_profile', methods=['PUT'])
@jwt_required()
def update_profile():
    try:
        current_user_email = get_jwt_identity()
        user = User.query.filter_by(email=current_user_email).first()

        if user is None:
            return jsonify({ "error": "Usuario no encontrado" }), 404

        data = request.json
        user.userName = data.get("userName", user.userName)
        user.firstName = data.get("firstName", user.firstName)
        user.lastName = data.get("lastName", user.lastName)
        user.telephone = data.get("telephone", user.telephone)
        
        db.session.commit()

        return jsonify({ "user": user.serialize(), "message": "Perfil actualizado con éxito" }), 200
    except Exception as e:
        return jsonify({ "error": str(e) }), 500
    
@api.route('/modulo', methods=['GET'])  
def get_modulos():
    modulo = Modulo.query.all() 
    return jsonify([modulo.serialize() for modulo in modulo])


@api.route('/añadir_test_cursos', methods=['GET'])
def test_cursos():
    cursos_info = [
            {"id": 1, "name": "Maestría en Podcasting: Desde la Introducción hasta la Excelencia Continua", "precio": 5000},
            {"id": 2, "name": "Dominando el Arte del Contenido Visual en Redes Sociales", "precio": 5000},
            {"id": 3, "name": "Podcasting Pro Mastery", "precio": 5000},
            {"id": 4, "name": "Elevando tu Podcast a Nuevos Niveles", "precio": 5000},
            
    ]

    for info in cursos_info:
        curso = Curso()
        curso.id = info["id"]
        curso.name = info["name"]
        curso.precio = info["id"]
        db.session.add(curso)
        db.session.commit()
        print("Module: ", curso.name)

    print("Todos los cursos se han creado")
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200
