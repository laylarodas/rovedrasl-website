# ✅ Checklist de Configuración - Rovedra S.L.

Esta lista te ayudará a completar la configuración del sitio web paso a paso.

---

## 📦 1. Configuración Inicial (✅ COMPLETADO)

- [x] Instalar dependencias (`npm install`)
- [x] Verificar que el proyecto compila
- [x] Código subido a GitHub
- [x] Deploy inicial en Vercel

---

## 🔐 2. Variables de Entorno (🔄 EN PROCESO)

### Desarrollo Local

- [ ] **Crear archivo `.env.local`** en la raíz del proyecto
- [ ] **Copiar esta línea** dentro del archivo:
  ```
  VITE_FORMSPREE_ID=https://formspree.io/f/xqawzwek
  ```
- [ ] **Reiniciar el servidor** (`npm run dev`)
- [ ] **Probar formulario** en http://localhost:5173/contacto
- [ ] **Verificar en consola** que aparece "Response status: 200"

### Producción (Vercel)

- [ ] **Ir a Vercel** → Proyecto → Settings → Environment Variables
- [ ] **Añadir variable**:
  - Key: `VITE_FORMSPREE_ID`
  - Value: `https://formspree.io/f/xqawzwek`
  - Environments: ✅ Production ✅ Preview ✅ Development
- [ ] **Guardar** la variable
- [ ] **Hacer redeploy** (Deployments → ... → Redeploy)
- [ ] **Probar formulario** en https://reformasrovedra.es/contacto
- [ ] **Verificar email** en Formspree que llegó el mensaje

📖 **Guía detallada**: Ver [ENV-SETUP.md](ENV-SETUP.md)

---

## 🖼️ 3. Contenido Real (⏳ PENDIENTE)

### Imágenes

- [ ] **Logo definitivo** → Reemplazar `/public/vite.svg`
- [ ] **Favicon** → Crear y reemplazar
  - 16x16, 32x32, 180x180 (Apple), 192x192, 512x512
- [ ] **Open Graph image** → Reemplazar `/public/og-default.jpg`
  - Tamaño: 1200x630px
  - Formato: JPG o PNG
  - Peso: < 1MB
- [ ] **Foto de los socios** → Para página "Nosotros"
  - Guardar como: `/public/images/socios-fundadores.jpg`
- [ ] **Fotos de proyectos reales** (6 proyectos)
  - Guardar en: `/public/images/projects/`
  - Nombres sugeridos: `cocina-moderna.jpg`, `baño-reforma.jpg`, etc.
- [ ] **Fotos por servicio** (2-3 por servicio, 5 servicios)
  - Guardar en: `/public/images/services/`
  - Total: 10-15 fotos

### Optimización de Imágenes

- [ ] **Convertir a WebP** (usando herramientas online o Squoosh)
- [ ] **Comprimir imágenes** para web (< 200KB cada una)
- [ ] **Generar versiones responsive** (opcional: mobile, tablet, desktop)

---

## 📄 4. Datos Legales (🔄 EN PROCESO)

- [ ] **Obtener datos de Registro Mercantil** del cliente
- [ ] **Actualizar Aviso Legal** con los datos correctos
  - Archivo: `src/pages/legal/LegalNotice.tsx` (línea 31)
  - Dato pendiente: `<p><strong>Registro Mercantil:</strong> (pendiente de completar)</p>`

---

## 🎨 5. Mejoras Adicionales (⏳ HOY)

### A. Banner de Cookies (Recomendado)
- [ ] Crear componente `CookieBanner.tsx`
- [ ] Implementar en `App.tsx`
- [ ] Añadir botones Aceptar/Rechazar
- [ ] Guardar preferencia en localStorage

### B. Botón de WhatsApp Flotante (Recomendado)
- [ ] Crear componente `WhatsAppButton.tsx`
- [ ] Añadir a todas las páginas
- [ ] Configurar número: +34 665 267 715
- [ ] Mensaje predefinido: "Hola, quiero solicitar un presupuesto"

### C. Botón "Volver Arriba"
- [ ] Crear componente `ScrollToTop.tsx`
- [ ] Aparece al hacer scroll > 500px
- [ ] Smooth scroll al inicio

### D. Mejoras del Formulario
- [ ] Validación en tiempo real
- [ ] Spinner de loading
- [ ] Mensajes de error específicos

---

## 🔍 6. Testing Pre-Lanzamiento (⏳ PENDIENTE)

### Funcionalidad
- [ ] **Todas las páginas cargan** correctamente
- [ ] **Links internos** funcionan
- [ ] **Formulario de contacto** envía emails
- [ ] **Número de teléfono** es clickeable y llama
- [ ] **Email** es clickeable y abre cliente de correo

### Responsive
- [ ] **Mobile** (375px - iPhone SE)
- [ ] **Tablet** (768px - iPad)
- [ ] **Desktop** (1920px)
- [ ] **Orientación horizontal** en mobile

### Navegadores
- [ ] Chrome/Edge (Windows)
- [ ] Firefox
- [ ] Safari (Mac/iOS)
- [ ] Chrome Mobile (Android)

### Performance
- [ ] **Google PageSpeed Insights** → 90+ puntos
- [ ] **GTmetrix** → Grado A
- [ ] **Tiempo de carga** < 3 segundos

### SEO
- [ ] **Google Search Console** → Sitemap enviado
- [ ] **Meta tags** correctos en todas las páginas
- [ ] **Schema.org** validado
- [ ] **robots.txt** accesible
- [ ] **sitemap.xml** accesible

---

## 🌍 7. Multi-idioma (Fase 2 - Post Lanzamiento)

- [ ] Implementar i18n (react-i18next)
- [ ] Traducir al **inglés**
- [ ] Traducir al **alemán**
- [ ] Selector de idioma en el header
- [ ] URLs multi-idioma (opcional: `/en/`, `/de/`)

---

## 🚀 8. Lanzamiento Final

- [ ] Verificar todas las secciones anteriores
- [ ] Hacer backup del código
- [ ] Deploy final en Vercel
- [ ] Verificar dominio activo
- [ ] Enviar email de confirmación al cliente
- [ ] Celebrar 🎉

---

## 📊 9. Post-Lanzamiento

### Analíticas (Opcional)
- [ ] Configurar Google Analytics 4
- [ ] Configurar Google Search Console
- [ ] Configurar Vercel Analytics

### Mantenimiento
- [ ] Actualizar testimonios reales
- [ ] Añadir proyectos nuevos regularmente
- [ ] Revisar formularios recibidos
- [ ] Actualizar información de contacto si cambia

---

## 🆘 ¿Necesitas Ayuda?

- **Guía de Variables**: [ENV-SETUP.md](ENV-SETUP.md)
- **Guía de Deploy**: [DEPLOY-GUIDE.md](DEPLOY-GUIDE.md)
- **Optimizaciones**: [OPTIMIZATION-SUMMARY.md](OPTIMIZATION-SUMMARY.md)
- **SEO Checklist**: [SEO-CHECKLIST.md](SEO-CHECKLIST.md)

---

**Última actualización**: Noviembre 2025

