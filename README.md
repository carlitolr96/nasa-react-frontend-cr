# 📃 Ejercicio 1 - Front-End React JS

## 🔍 Descripción general

Este proyecto es una aplicación desarrollada con **React JS** y **Vite** que consume la API pública de la NASA para mostrar imágenes capturadas por el rover Curiosity en Marte. El proyecto presenta una interfaz moderna, minimalista y responsive, utilizando herramientas como **Tailwind CSS** y **Framer Motion**.

---

## 🚀 Consumo de la API de la NASA

Se utilizó la API oficial de la NASA:
`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`

* Peticiones realizadas con `fetch` y gestionadas con `useEffect`.
* Se registró una **API key de demostración** para acceso.

---

## 🖼️ Renderizado de 12 Cards por Página

* Se implementó una **paginación manual**, mostrando solo 12 cards por página.
* Cada card incluye:

  * Imagen del rover.
  * Nombre del rover.
  * Fecha en la Tierra (`earth_date`).
  * Nombre completo de la cámara.
  * Estado del rover.

---

## 🗑️ Eliminación Dinámica de Cards

* Cada tarjeta contiene un botón con icono que permite **eliminarla** sin recargar.
* Se utiliza `filter` para actualizar el estado local.

---

## ➕ Botón "Más Imágenes"

* Botón para cargar 12 imágenes adicionales.
* Estilo con bordes personalizados y transición.

---

## 🎨 Animaciones con Framer Motion

* Animaciones aplicadas a los cards usando `framer-motion`.
* Las tarjetas **aparecen al hacer scroll** con efecto fade y desplazamiento (`useInView`).

---

## 🛠️ Framework Vite + JSX

* Proyecto creado con **Vite** para desarrollo rápido y moderno.
* JSX para la estructura y lógica declarativa.

---

## 🎨 Estilos con Tailwind CSS

* Todo el diseño implementado con **Tailwind CSS**.
* Personalización del archivo `tailwind.config.ts`.
* Layout responsive con `grid`, `gap`, `breakpoints` y clases condicionales.

---

## ⏳ Cargador Visual (Loader)

* Se muestra un **spinner** mientras se realiza la petición a la API.
* Se maneja el estado `loading` para mostrar el componente condicionalmente.

---

## 🧠 Componentización del Proyecto

Componentes creados:

* `App.jsx`: Master page.
* `ListGallery.jsx`: Manejador de galeria y paginación.
* `Gallery.jsx`: Tarjetas individuales.
* `Hero.jsx`: Introducción al proyecto.
* `Footer.jsx`: Información de derechos.

---

## 🌟 Hero Minimalista

* Sección de bienvenida simple y clara con estilo centrado y moderno.

---

## 😑 Uso de Claves para Listas

* Cada tarjeta incluye `photo.id` como `key` en el mapeo para mejorar el rendimiento.

---

## 🕺 Footer Personalizado

* Se agregó un footer con fuente `Poppins`, texto pequeño y color transparente.
* Contiene:

```
Copyright © Rights Developer Carlos Luis Lachapell Rivera
```

* El nombre del desarrollador es un enlace clickable.

---

## 📆 Mejoras Opcionales

* Validación si la API no devuelve resultados.
* Modo oscuro (Dark mode).
* Uso de `localStorage` o `context` para persistencia.
* Agregar pruebas unitarias con Jest o React Testing Library (opcional).

---

### 🌐 Deploy / Hosting (opcional)

Puedes subir esta app a servicios como:

* **Vercel** https://nasa-react-frontend-cr.vercel.app/
* **GitHub Pages**

---

## 👤 Desarrollador

**Carlos Luis Lachapell Rivera**
https://github.com/carlitolr96

---
# nasa-react-frontend-cr
