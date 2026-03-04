# Proyecto 2 - Un software para la transformacion digital

## Descripcion
Este repositorio contiene **SmartLog Monitor**, una aplicacion web Open Source orientada a la gestion de incidencias en entornos IT y OT.

El objetivo del proyecto es centralizar la operacion diaria de incidencias con trazabilidad completa, separacion por roles y control del ciclo de vida del dato.

Se ha desarrollado en el marco del **Proyecto 2: Un software para la transformacion digital**, priorizando un software funcional y operativo.

## Funcionalidad del software
SmartLog Monitor permite:

- Crear incidencias desde un formulario estructurado (area, tipo, descripcion, adjuntos).
- Gestionar incidencias por roles: `reportante`, `tecnico`, `supervisor`, `auditor`, `admin`.
- Controlar estados y transiciones del flujo operativo.
- Asignar incidencias y supervisar carga de equipo.
- Registrar comentarios, evidencias y eventos de trazabilidad.
- Visualizar dashboards, filtros, kanban, calendario y reportes.
- Auditar acciones mediante log global y exportaciones.
- Administrar usuarios, permisos, areas, tipos y parametros del sistema.

## Tecnologias utilizadas
- HTML5
- CSS3
- JavaScript (vanilla)
- JSON para datos de configuracion y semillas (`config/`)

Conceptualmente, el proyecto aplica criterios de:
- ciclo de vida del dato,
- seguridad y control de acceso (RBAC),
- almacenamiento y evolucion cloud,
- integracion IT/OT,
- Tecnologias Habilitadoras Digitales (THD).

## Instalacion
1. Clonar el repositorio:

```bash
git clone https://github.com/Laura3776/Proyecto-2-Un-software-para-la-transformaci-n-digital.git
```

2. Entrar al directorio:

```bash
cd Proyecto-2-Un-software-para-la-transformaci-n-digital
```

## Ejecucion
No requiere instalacion de dependencias ni servidor backend para la demo local.

Abre `index.html` en el navegador.

Opcional (recomendado para evitar restricciones del navegador con rutas locales), servir con un servidor estatico:

```bash
python -m http.server 8000
```

Y abrir:

```text
http://localhost:8000
```

## Uso rapido
1. Abre la aplicacion.
2. Selecciona un usuario en el desplegable.
3. Pulsa **Iniciar sesion**.
4. Navega las vistas disponibles segun rol.

## Estructura del repositorio
```text
Proyecto-2-Un-software-para-la-transformaci-n-digital/
├── config/
│   ├── incidents.seed.json
│   ├── policies.json
│   └── users.json
├── scripts/
│   ├── app.js
│   └── main.js
├── styles/
│   └── main.css
├── pages/
│   └── equipo.html
├── DOCUMENTACION/
│   ├── documentacion.html
│   ├── styles.css
│   └── app.js
└── index.html
```

## Documentacion
La documentacion funcional y academica esta en:

```text
DOCUMENTACION/documentacion.html
```

## Licencia
Este proyecto se distribuye bajo licencia MIT, permitiendo uso, modificacion y redistribucion.

