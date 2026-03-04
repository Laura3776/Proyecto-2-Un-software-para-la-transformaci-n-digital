# Preguntas - Proyecto 2 (SmartLog Monitor)

## Ciclo de vida del dato (5b)

### 1) ¿Cómo se gestionan los datos desde su generación hasta su eliminación en tu proyecto?
En SmartLog Monitor, el ciclo de vida del dato sigue estas fases:

1. Generación: el dato se crea cuando un reportante registra una incidencia (área, tipo, descripción, adjuntos, fecha).
2. Validación inicial: el sistema valida campos obligatorios, reglas de formato y coherencia con configuración activa (áreas/tipos).
3. Procesamiento operativo: técnicos y supervisores actualizan estado, asignación, prioridad y comentarios.
4. Trazabilidad: cada acción queda registrada en timeline/log con usuario, rol, fecha y detalle.
5. Cierre: la incidencia pasa a Resuelta/Cerrada/Cerrada por el usuario.
6. Conservación: los datos cerrados se mantienen para auditoría y análisis histórico.
7. Eliminación/anonimización (propuesta): en entorno productivo se aplicaría una política de retención temporal y posterior anonimización o borrado.

### 2) ¿Qué estrategia sigues para garantizar la consistencia e integridad de los datos?
La consistencia e integridad se garantizan mediante:

- IDs únicos por incidencia.
- Transiciones de estado controladas (no se permiten cambios inválidos).
- Gestión por roles (RBAC): cada rol solo ejecuta acciones autorizadas.
- Validación de formularios y datos de configuración.
- Registro de cambios (append-only en logs/timeline) para evitar pérdida de contexto.
- Revisión de datos por vistas de auditoría y administración.

### 3) Si no trabajas con datos, ¿cómo podrías incluir una funcionalidad que los gestione de forma eficiente?
Este proyecto sí trabaja intensivamente con datos. Aun así, como mejora, se puede añadir:

- Archivado automático por antigüedad.
- Detección de datos anómalos (incidencias huérfanas, estados bloqueados).
- Cuadros de control de calidad de dato (completitud, duplicados, retrasos de actualización).

---

## Almacenamiento en la nube (5f)

### 1) Si tu software utiliza almacenamiento en la nube, ¿cómo garantizas la seguridad y disponibilidad de los datos?
La versión actual es local/browser, pero el diseño está preparado para nube. La propuesta de despliegue seguro sería:

- Base de datos gestionada (PostgreSQL) para datos estructurados.
- Object storage para adjuntos.
- Cifrado en tránsito (TLS) y en reposo.
- Control de acceso IAM por mínimo privilegio.
- Backups automáticos y recuperación puntual (PITR).
- Despliegue multi-zona para alta disponibilidad.

### 2) ¿Qué alternativas consideraste para almacenar datos y por qué elegiste tu solución actual?
Alternativas consideradas:

- Firebase/Firestore: buena velocidad de arranque, menos control para consultas complejas y auditoría.
- Supabase: buen equilibrio SQL + rapidez para MVP.
- SQL gestionado + object storage (AWS/Azure/GCP): mejor opción para producción por control, escalado y cumplimiento.

Solución actual:
- Estructura local con JSON/estado en cliente para desarrollo y validación funcional rápida.
- Elección estratégica: migración a SQL + almacenamiento de objetos para producción.

### 3) Si no usas la nube, ¿cómo podrías integrarla en futuras versiones?
Plan de integración cloud:

1. Extraer lógica de datos a una API backend.
2. Migrar incidencias/usuarios/políticas a PostgreSQL gestionado.
3. Mover adjuntos a object storage.
4. Incorporar autenticación robusta y gestión de secretos.
5. Añadir monitorización, backups y alertas operativas.

---

## Seguridad y regulación (5i)

### 1) ¿Qué medidas de seguridad implementaste para proteger los datos o procesos en tu proyecto?
Medidas aplicadas en el diseño funcional:

- Control de acceso por roles y permisos.
- Separación de funciones (reportante, técnico, supervisor, auditor, admin).
- Reglas de transición para evitar manipulación incorrecta del flujo.
- Log de acciones y eventos administrativos.
- Validación de entradas en formularios y operaciones sensibles.
- Restricciones de visibilidad por rol/equipo.

### 2) ¿Qué normativas (e.g., GDPR) podrían afectar el uso de tu software y cómo las has tenido en cuenta?
Normativas aplicables:

- GDPR/LOPDGDD (si se tratan datos personales de usuarios o empleados).

Aplicación al proyecto:

- Minimización de datos (solo campos necesarios para operar incidencias).
- Trazabilidad de acceso/cambio.
- Base para definir retención de datos.
- Preparación para derechos de acceso, rectificación y supresión en versión productiva.

### 3) Si no implementaste medidas de seguridad, ¿qué riesgos potenciales identificas y cómo los abordarías en el futuro?
Riesgos potenciales:

- Acceso no autorizado por permisos débiles.
- Exposición de adjuntos con información sensible.
- Falta de auditoría ante incidentes internos.

Mitigación futura:

- Autenticación fuerte + caducidad de sesión.
- Cifrado y control de descarga de adjuntos.
- Auditorías periódicas de permisos y monitorización activa.

---

## Implicación de las THD en negocio y planta (2e)

### 1) ¿Qué impacto tendría tu software en un entorno de negocio o en una planta industrial?
Impacto esperado:

- Reducción de tiempos de respuesta y resolución.
- Mayor visibilidad del estado real de incidencias.
- Menor dependencia de correos/chats desordenados.
- Trazabilidad completa para control de calidad y continuidad operativa.

### 2) ¿Cómo crees que tu solución podría mejorar procesos operativos o la toma de decisiones?
Mejora operativa y de decisión:

- Priorización por criticidad y fechas límite.
- Asignación más eficiente de técnicos según carga.
- Dashboards para detectar cuellos de botella.
- Evidencia histórica para corregir causas recurrentes.

### 3) Si tu proyecto no aplica directamente a negocio o planta, ¿qué otros entornos podrían beneficiarse?
Además de planta/negocio, puede aplicarse en:

- Centros educativos (incidencias TIC y mantenimiento).
- Hospitales (soporte técnico no clínico).
- Ayuntamientos/administración pública.
- Servicios de facilities y mantenimiento multisede.

---

## Mejoras en IT y OT (2f)

### 1) ¿Cómo puede tu software facilitar la integración entre entornos IT y OT?
SmartLog Monitor unifica IT y OT mediante:

- Un mismo flujo de incidencias con estados comunes.
- Asignación y escalado coordinado entre equipos.
- Registro único de acciones y responsables.
- Visibilidad compartida de SLA y criticidad.

### 2) ¿Qué procesos específicos podrían beneficiarse de tu solución en términos de automatización o eficiencia?
Procesos mejorados:

- Apertura y clasificación inicial de incidencias.
- Asignación supervisor-técnico con control por área.
- Seguimiento de vencimientos y alertas.
- Reapertura controlada con historial completo.
- Auditoría post-incidente para mejora continua.

### 3) Si no aplica a IT u OT, ¿cómo podrías adaptarlo para mejorar procesos tecnológicos concretos?
Puede adaptarse a:

- Gestión de tickets de ciberseguridad.
- Mantenimiento preventivo/correctivo de activos.
- Gestión de cambios de infraestructura.
- Operación de centros de soporte multidepartamento.

---

## Tecnologías Habilitadoras Digitales (2g)

### 1) ¿Qué tecnologías habilitadoras digitales (THD) has utilizado o podrías integrar en tu proyecto?
THD aplicadas o previstas:

- Cloud computing (despliegue y persistencia escalable).
- Analítica de datos (KPIs y reportes operativos).
- Automatización de reglas (prioridad, vencimientos, transiciones).
- Integración API (ERP/MES/CMMS, monitorización externa).
- IA (clasificación automática y sugerencia de asignación).

### 2) ¿Cómo mejoran estas tecnologías la funcionalidad o el alcance de tu software?
Mejoras directas:

- Escalabilidad y disponibilidad del sistema.
- Toma de decisiones basada en datos reales.
- Reducción de errores manuales.
- Menor tiempo de respuesta en incidencias críticas.
- Integración transversal con ecosistema tecnológico de la organización.

### 3) Si no has utilizado THD, ¿cómo podrías implementarlas para enriquecer tu solución?
Plan progresivo:

1. Migración a backend/API + base de datos cloud.
2. Incorporación de paneles analíticos avanzados.
3. Automatización de priorización/escalado por reglas.
4. Integración con sistemas externos por API.
5. Módulo IA para predicción y recomendación de resolución.

