# Proyecto 2 – Un software para la transformación digital

## Descripción

Este repositorio contiene el proyecto **SmartLog Monitor**, un software Open Source desarrollado en Python cuyo objetivo es apoyar la transformación digital mediante la gestión, monitorización y trazabilidad de eventos (logs) en entornos IT y OT.

El proyecto ha sido desarrollado como parte del **Proyecto 2: Un software para la transformación digital**, centrándose en la funcionalidad del código y en la aplicación de conceptos como ciclo de vida del dato, seguridad, almacenamiento en la nube y Tecnologías Habilitadoras Digitales (THD).

---

## Funcionalidad del software

El software permite:

* Capturar eventos o logs de sistemas y procesos.
* Validar y estructurar los datos generados.
* Enriquecer los eventos con metadatos como fecha, origen y severidad.
* Almacenar los datos de forma estructurada en una base de datos local.
* Garantizar la integridad y trazabilidad de los datos.

El diseño es modular y está preparado para futuras ampliaciones como la integración con servicios en la nube o dispositivos IoT.

---

## Tecnologías utilizadas

* **Python 3**
* **SQLite** para almacenamiento local de datos
* Conceptos de **Cloud Computing**, **Ciberseguridad**, **Big Data** e **IoT**

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/Laura3776/Proyecto-2-Un-software-para-la-transformaci-n-digital.git
```

2. Acceder al directorio del proyecto:

```bash
cd Proyecto-2-Un-software-para-la-transformaci-n-digital
```

3. Instalar dependencias (si aplica):

```bash
pip install -r requirements.txt
```

---

## Ejecución

Para ejecutar el programa principal:

```bash
python src/main.py
```

El software generará y almacenará eventos de ejemplo en la base de datos local.

---

## Estructura del repositorio

```
Proyecto-2-Un-software-para-la-transformaci-n-digital/
├── src/
│   ├── main.py
│   ├── data_manager.py
│   ├── security.py
│   └── storage.py
├── README.md
├── preguntas.md
└── LICENSE
```

---

## Licencia

Este proyecto se distribuye bajo licencia **MIT**, permitiendo su uso, modificación y redistribución.

---

## Estado del proyecto

Proyecto funcional en fase inicial, desarrollado con fines académicos y preparado para evolucionar hacia soluciones más avanzadas de monitorización, análisis de datos y almacenamiento en la nube.
