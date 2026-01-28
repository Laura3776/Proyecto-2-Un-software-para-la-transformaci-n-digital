# Preguntas – Proyecto 2: SmartLog Monitor

## 1. Ciclo de vida del dato (5b)

### ¿Cómo se gestionan los datos desde su generación hasta su eliminación en tu proyecto?

En el proyecto **SmartLog Monitor**, los datos se generan a partir de eventos (logs) producidos por sistemas IT u OT, o bien simulados mediante archivos o entradas manuales. Cada evento es capturado por el software, validado para asegurar que cumple con el formato esperado y enriquecido con metadatos como fecha y hora, origen del evento y nivel de severidad.

Tras este procesamiento inicial, los datos se almacenan de forma estructurada en una base de datos local. El ciclo de vida del dato finaliza mediante políticas de retención, que permiten eliminar automáticamente los registros antiguos cuando dejan de ser útiles, reduciendo el almacenamiento innecesario y cumpliendo principios de minimización de datos.

### ¿Qué estrategia sigues para garantizar la consistencia e integridad de los datos?

Para garantizar la consistencia e integridad de los datos se aplican varias estrategias:

* Validación del formato y contenido de cada evento antes de su almacenamiento.
* Uso de identificadores únicos para cada registro.
* Generación de un hash criptográfico asociado a cada evento, que permite detectar modificaciones no autorizadas.
* Registro de marcas temporales que facilitan la trazabilidad completa del dato.

Estas medidas aseguran que los datos almacenados sean fiables, coherentes y auditables.

---

## 2. Almacenamiento en la nube (5f)

### Si tu software utiliza almacenamiento en la nube, ¿cómo garantizas la seguridad y disponibilidad de los datos?

Aunque el prototipo actual utiliza almacenamiento local, el diseño del software permite su integración con servicios de almacenamiento en la nube. En este escenario, la seguridad se garantizaría mediante conexiones cifradas (HTTPS), control de accesos y autenticación de usuarios.

La disponibilidad de los datos estaría asegurada gracias a los mecanismos propios de los proveedores cloud, como la replicación de datos, copias de seguridad automáticas y sistemas de alta disponibilidad.

### ¿Qué alternativas consideraste para almacenar datos y por qué elegiste tu solución actual?

Se consideraron varias alternativas de almacenamiento:

* **Base de datos local (SQLite):** sencilla, ligera y fácil de implementar.
* **Almacenamiento en la nube (AWS S3, Firebase):** escalable y altamente disponible.
* **Bases de datos relacionales completas (MySQL, PostgreSQL):** mayor complejidad y requisitos de configuración.

Para esta fase del proyecto se eligió SQLite por su simplicidad y porque permite centrarse en la funcionalidad del software, dejando la integración cloud como una mejora futura.

---

## 3. Seguridad y regulación (5i)

### ¿Qué medidas de seguridad implementaste para proteger los datos o procesos en tu proyecto?

El proyecto implementa medidas básicas de seguridad orientadas a proteger los datos y garantizar su fiabilidad:

* Validación de los datos de entrada para evitar información corrupta.
* Uso de hashes para comprobar la integridad de los registros.
* Separación modular del código para reducir riesgos y mejorar el mantenimiento.
* Posibilidad de limitar el acceso a determinadas funciones del software.

### ¿Qué normativas podrían afectar el uso de tu software y cómo las has tenido en cuenta?

Una de las normativas más relevantes es el **Reglamento General de Protección de Datos (GDPR)**, ya que el software podría manejar datos identificables. Para tenerla en cuenta, el proyecto aplica principios como:

* Minimización de datos almacenados.
* Eliminación de información cuando deja de ser necesaria.
* Posibilidad de anonimizar los datos en futuras versiones.

---

## 4. Implicación de las THD en negocio y planta (2e)

### ¿Qué impacto tendría tu software en un entorno de negocio o en una planta industrial?

En un entorno de negocio, SmartLog Monitor permite supervisar sistemas informáticos, detectar errores y analizar eventos históricos para mejorar la toma de decisiones. En una planta industrial, el software podría utilizarse para registrar eventos de maquinaria o procesos productivos, mejorando la visibilidad del estado de la planta.

### ¿Cómo crees que tu solución podría mejorar procesos operativos o la toma de decisiones?

La solución mejora los procesos operativos al centralizar la información, facilitar la detección temprana de incidencias y permitir el análisis de datos históricos. Esto reduce tiempos de respuesta y mejora la eficiencia operativa.

---

## 5. Mejoras en IT y OT (2f)

### ¿Cómo puede tu software facilitar la integración entre entornos IT y OT?

El software actúa como un punto común de recopilación y gestión de datos, permitiendo que la información generada en entornos OT pueda ser analizada en sistemas IT. Esto favorece la convergencia entre ambos entornos y mejora la comunicación entre planta y negocio.

### ¿Qué procesos específicos podrían beneficiarse de tu solución?

* Monitorización de sistemas y procesos.
* Mantenimiento predictivo basado en eventos.
* Automatización de alertas.
* Auditorías y análisis de incidencias.

---

## 6. Tecnologías Habilitadoras Digitales (2g)

### ¿Qué tecnologías habilitadoras digitales has utilizado o podrías integrar en tu proyecto?

El proyecto utiliza o está preparado para integrar las siguientes THD:

* **Cloud Computing** para almacenamiento y escalabilidad.
* **Big Data** para el análisis de grandes volúmenes de eventos.
* **Internet of Things (IoT)** mediante la captura de datos desde sensores.
* **Ciberseguridad** para la protección de datos y procesos.

### ¿Cómo mejoran estas tecnologías la funcionalidad o el alcance de tu software?

Las tecnologías habilitadoras digitales permiten que el software sea escalable, seguro y adaptable a distintos entornos. Gracias a ellas, SmartLog Monitor puede evolucionar hacia soluciones más avanzadas de análisis, automatización y toma de decisiones basada en datos.
