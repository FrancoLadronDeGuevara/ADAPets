# 🐾 ADAPets - Veterinaria & Bienestar

Bienvenido al repositorio oficial de **ADAPets**, una plataforma web moderna desarrollada con **React** y **Tailwind CSS v4**. Nuestro enfoque combina la excelencia técnica con un diseño empático centrado en el bienestar animal.

# 🎯 Objetivo del Proyecto

El objetivo es proporcionar una interfaz intuitiva y eficiente para que los dueños de mascotas puedan conocer servicios médicos y contactar con especialistas, garantizando una experiencia de usuario (UX) fluida y profesional.

---

# 🛠️ Instalación y Setup

Para comenzar a trabajar en el proyecto localmente, seguí estos pasos:

1. **Clonar el repositorio:**

```
git clone https://github.com/FrancoLadronDeGuevara/ADAPets.git
```

2. **Ingresar al directorio:**

```
cd ADAPets
```

3. **Instalar dependencias:**

```
npm install
```

4. **Correr el proyecto en modo desarrollo:**

```
npm run dev
```

# 🤝 Flujo de Trabajo en Equipo (Workflow)

Para mantener la integridad del código y un historial de Git limpio, seguimos estrictamente este flujo de trabajo:

## Gestión de Tareas

1. Antes de empezar cualquier tarea, debés asignarte la tarjeta correspondiente en Trello.

2. Preparación de la Rama
   Siempre posicionate en la rama de desarrollo principal:

```
git checkout dev
git pull origin dev
```

Creá una nueva rama para tu tarea partiendo desde dev. El nombre de la rama debe coincidir con el ID o nombre de la tarjeta de Trello:

```
git checkout -b nombre-de-la-tarjeta
```

3. Desarrollo y Commits
   Realizá tus cambios siguiendo las buenas prácticas de código.

Prepará y confirmá tus cambios:

```
git add .
git commit -m "descripción clara de lo que hiciste"
```

4. Subida y Pull Request (PR)
   Subí tu rama al repositorio remoto:

```
git push origin nombre-de-la-tarjeta
```

Andá a GitHub y creá un Pull Request (PR) hacia la rama dev.

Notificá al equipo para la revisión de código (Code Review).

**Importante: Solo se integrará el código a dev una vez aprobado.**

🎨 Stack Tecnológico
Frontend: React.js

Estilos: Tailwind CSS v4 (Configuración vía @theme en CSS)

Gestión: Trello
