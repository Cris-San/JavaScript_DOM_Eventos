# ☕ Blog de Café Mejorado  

Un blog de café interactivo que implementa funcionalidades avanzadas del DOM, validación dinámica de formularios, y manejo eficiente de eventos. Este proyecto demuestra cómo mejorar la experiencia del usuario mediante el uso de **JavaScript** para crear una interfaz más dinámica y responsiva.  

---

## 🎯 Propósito del Proyecto  
El objetivo de este proyecto es:  
- Mejorar la funcionalidad del blog de café inicial.  
- Aplicar conceptos avanzados de **DOM** para manipular elementos y crear interacciones dinámicas.  
- Utilizar eventos del teclado y mouse para una validación y experiencia de usuario más intuitiva.  

---

## 🚀 Características Principales  
- 🖱️ **Eventos Dinámicos:**  
  - Manejo de eventos como `click`, `input` y `submit`.  
  - Validación en tiempo real al interactuar con los campos del formulario.  

- 🛠️ **Validación del Formulario:**  
  - Validación de campos obligatorios.  
  - Bloqueo del envío si los datos están incompletos, utilizando `preventDefault()`.  

- 💬 **Notificaciones Interactivas:**  
  - Muestra mensajes personalizados de error y confirmación, los cuales desaparecen automáticamente después de 5 segundos.  

- 🔄 **Código Modular y Reutilizable:**  
  - Creación de funciones reutilizables como `leerTexto`, `mostrarError` y `mostrarMensaje` para reducir redundancia.  

---

## 🛠️ Tecnologías Aplicadas  
- **HTML5:** Estructura de la página y elementos semánticos.  
- **CSS3:** Estilos personalizados, diseño atractivo y responsivo.  
- **JavaScript:**  
  - Manipulación del DOM.  
  - Manejo de eventos (`click`, `input`, `submit`).  
  - Creación dinámica de elementos en tiempo de ejecución.  

---

## 📂 Estructura del Proyecto  
```plaintext
📁 BlogCafeMejorado/
├── 📁 css/            # Archivos de estilos
├── 📁 img/            # Imágenes del blog
├── index.html         # Página principal
├── contacto.html      # Página de contacto con formulario
├── entrada.html       # Página de artículo individual
└── js/
    └── script.js      # Lógica de interacción y validación
```

## 🔍 Funcionalidades Clave del Código
Manejo de Eventos del DOM:

Asociar eventos a elementos como botones y campos de entrada.
Validar en tiempo real con el evento input.
Validación del Formulario:

Evitar el envío del formulario si algún campo está vacío usando preventDefault().
Desestructuración del objeto datos para validar cada campo.
Notificaciones Interactivas:

Uso de setTimeout() para mostrar y remover mensajes temporales en el DOM.
Adición dinámica de clases CSS (.error, .correcto) para personalizar los mensajes.

---

## 🌐 Demo
Puedes visualizar el proyecto en GitHub Pages: Blog de Café Mejorado

---

## 🏆 Créditos
Proyecto desarrollado con la intención de aprender y aplicar conceptos avanzados de JavaScript y DOM. Inspirado por la pasión por el café ☕ y el desarrollo web.

---

## 📫 Contacto
¿Tienes ideas o sugerencias? ¡Conecta conmigo!

🌐 LinkedIn
🐙 GitHub
✉️ Email: cris.san@example.com
