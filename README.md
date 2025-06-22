# 📱 Tienda de Celulares - SvelteKit + Tailwind

Bienvenido al proyecto **Tienda de Celulares**, una plataforma de e-commerce moderna desarrollada con **SvelteKit**, **TailwindCSS** y **TypeScript**.

## ✨ Características principales

- 🛍️ Catálogo de productos con navegación intuitiva
- 🛒 Carrito de compras con persistencia en localStorage
- 🔍 Navegación dinámica con indicador de ruta activa
- 🎨 Diseño responsive con Tailwind CSS
- ⚡ Carga rápida gracias a SvelteKit
- 🔒 Tipado estático con TypeScript

## 🚀 Tecnologías utilizadas

- [SvelteKit](https://kit.svelte.dev/) - Framework web moderno
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Vite](https://vitejs.dev/) - Entorno de desarrollo rápido
- [Svelte Stores](https://svelte.dev/docs#run-time-svelte-store) - Gestión de estado

## 🏗️ Estructura del proyecto

```
frontend/
├── src/
│   ├── lib/
│   │   ├── components/    # Componentes reutilizables
│   │   ├── stores/        # Stores de Svelte
│   │   └── types/         # Tipos TypeScript
│   ├── routes/           # Rutas de la aplicación
│   ├── app.css           # Estilos globales
│   └── app.html          # Plantilla HTML base
├── static/               # Archivos estáticos
├── tailwind.config.js    # Configuración de Tailwind
└── vite.config.ts        # Configuración de Vite
```

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/gustavo180591/tienda-celulares.git
cd tienda-celulares
```

2. Instala las dependencias:
```bash
cd frontend
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en:
```
http://localhost:5178
```

## 📦 Scripts disponibles

| Comando           | Descripción                              |
|-------------------|------------------------------------------|
| `npm run dev`    | Inicia el servidor de desarrollo         |
| `npm run build`  | Genera la versión de producción          |
| `npm run preview`| Previsualiza el build de producción      |
| `npm run check`  | Verifica los tipos de TypeScript        |


## 🎨 Características de la interfaz

- **Navegación intuitiva** con indicador de ruta activa
- **Carrito persistente** que se guarda en el navegador
- **Diseño responsive** que funciona en móviles y escritorio
- **Transiciones suaves** entre páginas
- **Feedback visual** para acciones del usuario

🔐 Autenticación (próximamente)
✔️ Login con email / Google
✔️ JWT para sesiones
✔️ Protección de rutas /admin

📦 TODO MVP
 Pantalla de login funcional

 Catálogo de celulares

 Carrito de compras

 Checkout con MercadoPago

 Seguimiento de pedidos

 Chatbot con IA

 Panel admin (CRUD)

🧠 Autor
Gustavo @desarrollandowebs
🚀 Apuntando a construir soluciones reales, escalables y modernas.

```
