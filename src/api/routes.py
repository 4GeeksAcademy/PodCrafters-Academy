"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Curso, Compra, Desestimiento, Contenido_Curso, Modulo, Alumno_Modulo, Mentorias, Disponibilidad_Mentor, Mas_Informacion
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity


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
        {"id":1,"nombre_modulo":"Introducción al Podcasting","id_curso":1,"contenido_modulo":"<h2>Lección 1: ¿Qué es un podcast?</h2><p>¡Bienvenido a la primera lección de nuestro curso, donde exploraremos en profundidad el emocionante mundo de los podcasts!</p><ol><li><h3>Definición de Podcast:</h3><p>En esta sección, entenderemos qué significa exactamente la palabra 'podcast'. Exploraremos cómo los podcasts se han convertido en una forma popular de consumir contenido digital y cómo se diferencian de otros medios.</p></li><li><h3>Estructura y Formato:</h3><p>Descubriremos la estructura común de un podcast, desde episodios individuales hasta series continuas. Analizaremos los diferentes formatos, como entrevistas, monólogos y narrativas, para que puedas encontrar el estilo que se adapte mejor a tus objetivos.</p></li><li><h3>Plataformas y Acceso:</h3><p>Aprenderás sobre las plataformas de distribución de podcasts y cómo los oyentes acceden a este contenido. Desde aplicaciones específicas hasta plataformas web, entenderás cómo llegar a tu audiencia de manera efectiva.</p></li></ol>"},
        {"id":2,"nombre_modulo":"Planificación y Conceptualización","id_curso":1,"contenido_modulo":"<h2>Lección 4: Identificación de la audiencia objetivo</h2><p>¡Bienvenido a la cuarta lección de nuestro curso, donde nos sumergiremos en la crucial tarea de identificar y comprender a tu audiencia objetivo!</p><ol><li><h3>Importancia de Conocer a tu Audiencia:</h3><p>En esta sección, exploraremos por qué es esencial comprender a quién te diriges con tu podcast. Entender a tu audiencia no solo mejora la relevancia de tu contenido, sino que también fortalece la conexión con tus oyentes.</p></li><li><h3>Métodos de Investigación:</h3><p>Aprenderás sobre diversas estrategias y herramientas para investigar y recopilar información sobre tu audiencia. Desde encuestas hasta análisis de datos, descubrirás cómo obtener insights valiosos que guiarán el desarrollo de tu contenido.</p></li><li><h3>Creación de Perfiles de Audiencia:</h3><p>Analizaremos cómo crear perfiles detallados de tu audiencia objetivo. Identificarás características demográficas, preferencias de consumo y comportamientos que te ayudarán a personalizar tu contenido de manera efectiva.</p></li></ol>"},
        {"id":3,"nombre_modulo":"Equipamiento y Tecnología","id_curso":1,"contenido_modulo":"<h2>Lección 7: Selección de micrófonos y equipos de grabación</h2><p>¡Bienvenido a la séptima lección de nuestro curso! En esta lección, nos sumergiremos en el emocionante mundo de la selección de micrófonos y equipos de grabación para tu podcast.</p><ol><li><h3>Importancia de la Calidad del Sonido:</h3><p>Comprenderemos por qué la calidad del sonido es crucial en el podcasting. Exploraremos cómo un buen sonido puede mejorar la experiencia del oyente y contribuir al éxito general de tu podcast.</p></li><li><h3>Tipos de Micrófonos:</h3><p>Analizaremos los diferentes tipos de micrófonos disponibles y sus características únicas. Desde micrófonos USB hasta micrófonos dinámicos y de condensador, aprenderás a elegir el tipo que mejor se adapte a tus necesidades.</p></li><li><h3>Equipos de Grabación:</h3><p>Exploraremos los equipos de grabación necesarios para asegurar una producción de alta calidad. Desde interfaces de audio hasta grabadoras portátiles, te guiaré a través de las opciones disponibles y cómo incorporarlos a tu configuración.</p></li></ol>"},
        {"id":4,"nombre_modulo":"Creación de Contenido","id_curso":1,"contenido_modulo":"<h2>Lección 10: Desarrollo de ideas para episodios</h2><p>¡Bienvenido a la décima lección de nuestro curso! En esta etapa, nos sumergiremos en el emocionante proceso de desarrollar ideas para tus episodios de podcast, asegurándonos de mantener tu contenido fresco e interesante.</p><ol><li><h3>Entendiendo a tu Audiencia:</h3><p>Comenzaremos explorando cómo comprender mejor a tu audiencia puede inspirar ideas para episodios. Analizaremos sus intereses, preguntas frecuentes y temas relevantes para crear contenido que resuene con ellos.</p></li><li><h3>Brainstorming Creativo:</h3><p>Aprenderás técnicas efectivas de brainstorming para generar una variedad de ideas creativas. Desde lluvias de ideas en solitario hasta sesiones colaborativas, descubrirás métodos que se adapten a tu estilo y te ayuden a descubrir nuevas perspectivas.</p></li><li><h3>Búsqueda de Tendencias:</h3><p>Exploraremos cómo mantenerse al tanto de las tendencias relevantes en tu nicho o industria.</p></li></ol>"},
        {"id":5,"nombre_modulo":"Producción y Edición","id_curso":1,"contenido_modulo":"<h2>Lección 13: Proceso de grabación de episodios</h2><p>¡Bienvenido a la decimotercera lección de nuestro curso! En esta lección, nos sumergiremos en el proceso de grabación de episodios, detallando los pasos y las prácticas recomendadas para obtener grabaciones de alta calidad.</p><ol><li><h3>Preparación Antes de la Grabación:</h3><p>Aprenderás la importancia de una preparación sólida antes de iniciar la grabación. Desde la planificación del contenido hasta la configuración técnica, garantizarás un proceso eficiente y sin contratiempos.</p></li><li><h3>Configuración Técnica y Pruebas:</h3><p>Exploraremos la configuración técnica necesaria para una grabación exitosa. Te guiaré a través de la configuración de micrófonos, niveles de audio y pruebas de sonido para asegurarte de que todo esté listo.</p></li><li><h3>Flujo de la Grabación:</h3><p>Discutiremos el flujo ideal de la grabación de un episodio. Desde la introducción hasta la conclusión, entenderás cómo mantener la coherencia y la energía a lo largo de la grabación.</p></li></ol>"},
        {"id":6,"nombre_modulo":"Diseño de Marca y Marketing","id_curso":1,"contenido_modulo":"<h2>Lección 16: Creación de una identidad de marca para el podcast</h2><p>¡Bienvenido a la decimosexta lección de nuestro curso! En esta lección, nos sumergiremos en la emocionante tarea de crear una identidad de marca para tu podcast, un elemento esencial para destacar en el mundo del podcasting.</p><ol><li><h3>Importancia de la Identidad de Marca:</h3><p>Comprenderás la importancia crucial de la identidad de marca en el éxito de tu podcast. Analizaremos cómo una identidad sólida puede diferenciarte, atraer oyentes y crear una conexión duradera.</p></li><li><h3>Definición de la Audiencia Objetivo:</h3><p>Exploraremos cómo definir claramente tu audiencia objetivo influye en la creación de la identidad de marca. Entenderás cómo adaptar elementos de diseño y tono de voz para resonar con tu público específico.</p></li><li><h3>Diseño de Logo y Elementos Visuales:</h3><p>Aprenderás sobre el diseño de logos y elementos visuales que representen la esencia de tu podcast.</p></li></ol>"},
        {"id":7,"nombre_modulo":"Distribución y Monetización","id_curso":1,"contenido_modulo":"<h2>Lección 19: Plataformas de alojamiento y distribución de podcasts</h2><p>¡Bienvenido a la decimonovena lección de nuestro curso! En esta lección, exploraremos las plataformas de alojamiento y distribución de podcasts, elementos fundamentales para llevar tu contenido a una audiencia global.</p><ol><li><h3>Elección de la Plataforma de Alojamiento:</h3><p>Aprenderás a seleccionar la plataforma de alojamiento más adecuada para tus necesidades.</p></li><li><h3>Proceso de Subida y Programación de Episodios:</h3><p>Exploraremos el proceso de subida y programación de episodios en la plataforma de alojamiento elegida.</p></li><li><h3>Distribución en Plataformas Populares:</h3><p>Discutiremos estrategias para distribuir tu podcast en plataformas populares.</p></li></ol>"},
        {"id":8,"nombre_modulo":"Estrategias Fundamentales de Contenido Visual","id_curso":2,"contenido_modulo":"<h2>Lección 1: Introducción al Poder del Contenido Visual</h2><p>¡Bienvenido a la primera lección de nuestro emocionante curso! En esta sesión, exploraremos el impacto significativo que el contenido visual tiene en las redes sociales y cómo puede transformar la manera en que te conectas con tu audiencia.</p><ol><li><h3>La Importancia del Primer Vistazo:</h3><p>Descubre cómo las personas procesan y retienen información visual de manera más efectiva que el texto.</p></li><li><h3>El Rol del Contenido Visual en la Comunicación:</h3><p>Exploraremos cómo el contenido visual va más allá de la estética, desempeñando un papel clave en la comunicación efectiva.</p></li></ol>"},
        {"id":9,"nombre_modulo":"Herramientas y Plataformas para Crear Contenido Visual","id_curso":2,"contenido_modulo":"<h2>Lección 4: Herramientas de Diseño Gráfico Online y Offline</h2><p>¡Bienvenido a esta lección donde exploraremos las herramientas esenciales para la creación de diseños gráficos tanto en entornos en línea como fuera de línea!</p><ol><li><h3>Herramientas de Diseño en Línea: Canva:</h3><p>Exploraremos cómo utilizar Canva para crear gráficos llamativos, desde publicaciones en redes sociales hasta presentaciones.</p></li><li><h3>Herramientas de Diseño Offline: Adobe Creative Suite:</h3><p>Desglose de las herramientas populares como Photoshop, Illustrator y InDesign.</p></li></ol>"},
        {"id":10,"nombre_modulo":"Diseño Visual para Redes Sociales","id_curso":2,"contenido_modulo":"<h2>Lección 6: Creación de Contenido Visual Impactante</h2><p>En esta lección, profundizaremos en las técnicas y herramientas para crear contenido visual impactante que capture la atención de tu audiencia en las redes sociales. Desde la selección de imágenes hasta la composición y el diseño, aprenderás estrategias clave para destacar en entornos altamente visuales y competitivos.</p><ul><li><h3>Selección y Edición de Imágenes:</h3><p>Consejos para elegir imágenes impactantes que se alineen con tu marca y mensaje. Técnicas de edición para mejorar la calidad y el atractivo visual.</p></li><li><h3>Diseño Gráfico para Redes Sociales:</h3><p>Principios básicos de diseño gráfico aplicados a la creación de contenido para redes sociales. Herramientas y recursos para diseñar gráficos atractivos y profesionales.</p></li><li><h3>Optimización de Formato y Tamaño:</h3><p>Directrices para optimizar el formato y tamaño de tus imágenes y videos en función de las especificaciones de cada plataforma de redes sociales.</p></li><li><h3>Creación de Videos Atractivos:</h3><p>Estrategias para producir videos impactantes que generen compromiso y compartan tu mensaje de manera efectiva. Herramientas y técnicas para editar videos para redes sociales.</p></li></ul><p>A lo largo de la lección, examinaremos ejemplos de contenido visual exitoso en redes sociales y analizaremos las prácticas recomendadas para inspirarte y guiar tus propias creaciones.</p>"},
        {"id":11,"nombre_modulo":"Integración y Evolución Continua","id_curso":2,"contenido_modulo":"<h2>Lección 9: Integración Efectiva con Estrategias de Marketing Digital</h2><p>En esta lección, exploraremos cómo integrar de manera efectiva tus creaciones visuales con estrategias de marketing digital para maximizar el impacto de tu presencia en línea!</p><ol><li><h3>Sincronización con Objetivos de Marketing:</h3><p>Cómo alinear tus creaciones visuales con los objetivos específicos de tu estrategia de marketing digital.</p></li><li><h3>SEO para Contenido Visual:</h3><p>La importancia del SEO en el ámbito visual y cómo optimizar tus imágenes y videos para los motores de búsqueda.</p></li><li><h3>Publicidad Visual en Redes Sociales:</h3><p>Estrategias para crear anuncios visuales impactantes en plataformas de redes sociales.</p></li><li><h3>Colaboración con Influencers y Creativos Digitales:</h3><p>Cómo colaborar con influencers y creadores de contenido para amplificar tu alcance visual.</p></li></ol>"},
        {"id":12,"nombre_modulo":"Podcasting Estratégico","id_curso":3,"contenido_modulo":"<h2>Lección 1: El Impacto del Podcasting Avanzado</h2><p>1. Introducción al Podcasting Avanzado: Definición y Evolución: Breve repaso de la definición de podcasting avanzado. Exploración de cómo ha evolucionado desde los primeros días del podcasting.</p><p>2. Transformación de la Experiencia Auditiva: Calidad Auditiva Mejorada: Tecnologías utilizadas para mejorar la calidad del sonido en podcasts avanzados. Impacto de la experiencia auditiva mejorada en la retención de la audiencia.</p><p>3. Casos de Estudio: Podcasts Innovadores: Análisis de podcasts que han introducido formatos innovadores. Destaque de casos que han marcado la pauta en la industria. Éxito y Reconocimiento: Estudio de podcasts avanzados que han alcanzado el éxito y el reconocimiento a nivel mundial. Lecciones aprendidas de sus estrategias y enfoques únicos.</p>"},
        {"id":13,"nombre_modulo":"Técnicas Avanzadas de Producción","id_curso":3,"contenido_modulo":"<h2>Lección 4: Producción de Alta Calidad y Estilo</h2><p>1. La Importancia de la Producción de Alta Calidad Profesionalismo Auditivo: Cómo una producción de alta calidad impacta la percepción del oyente. Razones para invertir en equipos y técnicas de grabación de calidad. Diferenciación en el Mercado: Cómo la calidad del audio puede destacar un podcast en un mercado competitivo. Ejemplos de podcasts que han ganado notoriedad por su excelencia auditiva.</p><p>2. Elementos Clave de la Producción de Alta Calidad Grabación Optimal: Consejos para la grabación en entornos controlados y no controlados. La importancia de minimizar ruidos y distracciones. Edición y Postproducción: Herramientas y técnicas para una edición de audio efectiva. Cómo mejorar la claridad y cohesión del contenido a través de la postproducción. Diseño Sonoro: Uso estratégico de efectos sonoros y música. Creación de una identidad sonora única para el podcast.</p>"},
        {"id":14,"nombre_modulo":"Monetización y Colaboraciones","id_curso":3,"contenido_modulo":"<h2>Lección 7: Estrategias Avanzadas de Monetización</h2><p>Diversificación de Fuentes de Ingresos: Exploración de diversas formas de generar ingresos a través del podcasting. Estrategias para no depender exclusivamente de la publicidad. Membresías y Contenido Exclusivo: Implementación de programas de membresía para oyentes leales. Creación de contenido exclusivo para suscriptores y beneficios asociados. Colaboraciones y Patrocinios Especiales: Cómo establecer colaboraciones estratégicas y patrocinios personalizados. Maximización de ingresos a través de asociaciones específicas para el público objetivo. Eventos y Experiencias Pagas: Organización de eventos en vivo y experiencias para la audiencia. Generación de ingresos a través de la venta de boletos y participación en eventos especiales. Merchandising y Productos Asociados: Diseño y venta de productos relacionados con el podcast. Estrategias para comercializar eficazmente merchandising y productos afines.</p>"},
        {"id":15,"nombre_modulo":"Desafíos Éticos y Legales","id_curso":3,"contenido_modulo":"<h2>Lección 9: Consideraciones Éticas en el Podcasting</h2><p>Introducción a la Ética en el Podcasting: Definición de ética en el contexto del podcasting. Importancia de mantener altos estándares éticos en la producción de contenido. Respeto a la Audiencia: Énfasis en la importancia de respetar la diversidad de la audiencia. Cómo evitar la creación de contenido que pueda resultar ofensivo o perjudicial. Veracidad y Honestidad: La responsabilidad de proporcionar información precisa y veraz. Cómo evitar la desinformación y mantener la integridad del contenido. Derechos de Autor y Uso de Contenido Externo: Guía sobre el uso ético de material con derechos de autor. Consejos para obtener permisos adecuados y dar crédito adecuado. Revelación de Patrocinios y Afiliaciones: La importancia de la transparencia al divulgar patrocinios y afiliaciones. Cumplimiento de las normativas y regulaciones relacionadas con la divulgación.</p>"},
        {"id":16,"nombre_modulo":"Explorando Formatos Innovadores","id_curso":4,"contenido_modulo":"<h2>Lección 1: Podcasts Interactivos y Participativos</h2><p>En esta lección, exploraremos la emocionante dimensión de los podcasts interactivos y participativos. A medida que evoluciona el panorama del podcasting, la capacidad de involucrar a la audiencia de manera activa se ha convertido en una herramienta invaluable para los creadores de contenido. Aprenderemos estrategias clave y herramientas esenciales para transformar tu podcast en una experiencia interactiva única.</p><p>Importancia de la Interactividad en Podcasts: Análisis de la evolución del consumo de contenido. Ventajas de la participación activa de la audiencia. Técnicas para Involucrar a la Audiencia: Encuestas, preguntas y respuestas en vivo, votaciones y más. Cómo utilizar herramientas digitales para fomentar la interacción. Creación de una Comunidad en Línea: Estrategias para construir una comunidad comprometida en torno a tu podcast. Fomento de la participación a través de redes sociales y plataformas de participación. Estudios de Caso: Análisis de podcasts que han implementado con éxito estrategias interactivas. Destaque de técnicas efectivas y resultados alcanzados.</p>"},
        {"id":17,"nombre_modulo":"Narrativa y Producción Creativa","id_curso":4,"contenido_modulo":"<h2>Lección 4: El Arte de la Narrativa en el Podcasting</h2><p>En esta lección, exploraremos el arte de la narrativa en el podcasting y cómo puedes utilizar técnicas narrativas efectivas para cautivar a tu audiencia y contar historias memorables. La narrativa es una herramienta poderosa que puede transformar tu podcast en una experiencia inolvidable para tus oyentes. Aprenderás estrategias clave y prácticas recomendadas para desarrollar y presentar narrativas envolventes que mantengan a tu audiencia comprometida hasta el último segundo.</p><p>Elementos Fundamentales de la Narrativa: Desglose de los elementos clave de una narrativa efectiva. Desde el desarrollo de personajes hasta la creación de tensión y resolución. Técnicas de Edición para una Narrativa Fluida: Cómo estructurar tu podcast para mantener el flujo narrativo. Consejos para la edición de audio que mejore la coherencia y claridad de la historia. Creación de Ambiente y Atmosfera: Estrategias para sumergir a tu audiencia en la historia a través del uso de sonido y música. Cómo crear una atmósfera que mejore la experiencia auditiva del oyente. Ejercicios Prácticos y Estudios de Caso: Prácticas recomendadas para desarrollar tus habilidades narrativas. Análisis de podcasts exitosos que utilizan técnicas narrativas innovadoras.</p>"},
        {"id":18,"nombre_modulo":"Marketing y Promoción Efectiva","id_curso":4,"contenido_modulo":"<h2>Lección 7: Estrategias Avanzadas de Marketing de Podcasts</h2><p>En esta lección, nos sumergiremos en estrategias avanzadas de marketing diseñadas para llevar tu podcast al siguiente nivel y aumentar su alcance y audiencia. A medida que el mercado del podcasting continúa creciendo, es crucial destacar entre la multitud y llegar a nuevos oyentes de manera efectiva. Aprenderás tácticas probadas y técnicas innovadoras para promocionar tu podcast y expandir su presencia en línea.</p><p>Optimización de la Presencia en Plataformas: Estrategias para mejorar la visibilidad y accesibilidad de tu podcast en plataformas de streaming y directorios. Cómo optimizar los metadatos y la descripción del podcast para mejorar su posicionamiento en las búsquedas. Colaboraciones Estratégicas y Cross-Promotion: Cómo asociarte con otros podcasts y creadores de contenido para aumentar tu alcance. Técnicas para colaboraciones efectivas y promoción cruzada. Marketing de Contenido y Multimedia: Estrategias para crear contenido adicional que promueva tu podcast en múltiples canales. Uso de redes sociales, blogs y videos para aumentar la conciencia y el compromiso. Análisis de Datos y Feedback de la Audiencia: Importancia del análisis de datos para comprender el rendimiento de tu podcast. Cómo utilizar el feedback de la audiencia para mejorar continuamente tu estrategia de marketing.</p>"},
        {"id":19,"nombre_modulo":"Gestión y Optimización de Recursos","id_curso":4,"contenido_modulo":"<h2>Lección 10: Optimización de Recursos y Eficiencia Operativa</h2><p>En esta lección, exploraremos estrategias para optimizar tus recursos y mejorar la eficiencia operativa en la producción y promoción de tu podcast. La gestión inteligente de recursos es esencial para garantizar que tu podcast alcance su máximo potencial sin agotar tus energías o presupuesto. Aprenderás técnicas prácticas y herramientas útiles para administrar eficazmente tus recursos y maximizar los resultados de tu esfuerzo.</p><p>Automatización de Procesos Repetitivos: Cómo utilizar herramientas y software para automatizar tareas repetitivas en la producción y promoción de tu podcast. Estrategias para ahorrar tiempo y recursos mediante la automatización de flujos de trabajo. Delegación y Colaboración Efectiva: Cómo construir un equipo sólido y delegar responsabilidades de manera efectiva. Técnicas para fomentar la colaboración y la comunicación entre miembros del equipo. Evaluación y Mejora Continua: Importancia de la evaluación regular del rendimiento y los procesos. Cómo identificar áreas de mejora y realizar ajustes para optimizar la eficiencia operativa. Gestión de Presupuesto y Recursos Financieros: Estrategias para administrar eficazmente el presupuesto asignado a la producción y promoción de tu podcast. Consejos para maximizar el retorno de la inversión y minimizar los costos innecesarios.</p>"},
    ]

    for info in modulos_info:
        modulo = Modulo()
        modulo.nombre_modulo = info["nombre_modulo"]
        modulo.id_curso = info["id_curso"]
        modulo.contenido_modulo = info["contenido_modulo"]
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

@api.route('/modulo', methods=['GET'])  
def get_modulos():
    modulo = Modulo.query.all() 
    return jsonify([modulo.serialize() for modulo in modulo])

@api.route('/compra', methods=['POST'])
def buy_course():
    try:
        id_curso = request.json.get('id_curso')
        id_usuario = request.json.get('id_usuario')
        metodo_pago = request.json.get('metodo_pago')
        fecha_pago = request.json.get('fecha_pago')
        estado = request.json.get('estado')
        descuento = request.json.get('descuento')
        cupon = request.json.get('cupon')
        stripe_transaction_id = request.json.get('stripe_transaction_id')
        curso = Curso.query.get(id_curso)
        usuario = User.query.get(id_usuario)
        if curso is None or usuario is None:
            return jsonify({'error': 'Curso or Usuario does not exist'}), 400
        compra = Compra(
            id_curso=id_curso,
            id_usuario=id_usuario,
            metodo_pago=metodo_pago,
            fecha_pago=fecha_pago,
            estado=estado,
            descuento=descuento,
            cupon=cupon,
            stripe_transaction_id=stripe_transaction_id
        )
        db.session.add(compra)
        db.session.commit()
        return jsonify({'message': 'Course purchased successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

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
    

@api.route('/reset-password', methods=['PUT'])
@jwt_required()
def reset_password():
    password = request.json.get("password", None)
    current_user_email = get_jwt_identity()
    user = User.query.filter_by(email=current_user_email).first()

    if user is None:
        return jsonify({ "error": "Este usuario no existe" }), 401
    
    user.password = password
    db.session.commit()

    return jsonify({ "success": True })  

@api.route('/añadir_test_cursos', methods=['GET'])
def test_cursos():
    cursos_info = [
            {"id": 1,"name": "Maestría en Podcasting: Desde la Introducción hasta la Excelencia Continua", "precio":5000 },
            {"id": 2,"name": "Dominando el Arte del Contenido Visual en Redes Sociales", "precio":5000 },
            {"id": 3,"name": "Podcasting Pro Mastery", "precio":5000},
            {"id": 4,"name": "Elevando tu Podcast a Nuevos Niveles", "precio":5000}
            
    ]

    for info in cursos_info:
        curso = Curso()
        curso.id = info["id"]
        curso.name = info["name"]
        curso.precio = info["precio"]
        db.session.add(curso)
        db.session.commit()
       

    print("Todos los cursos se han creado")
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

