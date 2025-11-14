# 🧪 Testing Manual - Rovedra S.L.

Checklist completo para verificar que el sitio funciona correctamente antes del lanzamiento.

---

## 📱 1. TESTING RESPONSIVE

### Mobile (375px - iPhone SE)
- [ ] **Home** - Todo el contenido visible, sin scroll horizontal
- [ ] **Services** - Sticky nav funciona bien, servicios legibles
- [ ] **Projects** - Cards se ven bien en columna
- [ ] **About** - Texto legible, imágenes no se salen
- [ ] **Contact** - Formulario usable, mapa visible
- [ ] **Footer** - 4 columnas pasan a 1 columna correctamente

### Tablet (768px - iPad)
- [ ] **Home** - Layout a 2 columnas donde corresponde
- [ ] **Services** - Grid de servicios a 2 columnas
- [ ] **Projects** - Cards a 2 columnas
- [ ] **About** - Secciones bien distribuidas
- [ ] **Contact** - Formulario + info lado a lado
- [ ] **Navigation** - Menú hamburguesa o completo

### Desktop (1920px)
- [ ] **Home** - Todo centrado, max-width correcto
- [ ] **Services** - Todo legible, espacios correctos
- [ ] **Projects** - Grid a 3 columnas
- [ ] **About** - Layout completo visible
- [ ] **Contact** - Formulario y mapa bien distribuidos
- [ ] **Navigation** - Menú completo visible

### Orientación Horizontal (Mobile)
- [ ] Contenido se ajusta correctamente
- [ ] No hay elementos cortados

---

## 🔗 2. TESTING DE FUNCIONALIDAD

### Navegación
- [ ] **Logo** - Vuelve a Home desde cualquier página
- [ ] **Menú Home** - Navega a /
- [ ] **Menú Services** - Navega a /services
- [ ] **Menú Projects** - Navega a /projects
- [ ] **Menú About** - Navega a /about
- [ ] **Menú Contact** - Navega a /contact
- [ ] **Footer links** - Todos los links funcionan
- [ ] **Links legales** - Privacy, Legal Notice, Cookies

### Formulario de Contacto (/contact)
- [ ] **Validación Nombre**:
  - Campo vacío → "El nombre es obligatorio"
  - 1 carácter → "El nombre debe tener al menos 2 caracteres"
  - Nombre válido → Sin error
- [ ] **Validación Email**:
  - Campo vacío → "El email es obligatorio"
  - Email inválido (ej: "test") → "Email no válido"
  - Email válido → Sin error
- [ ] **Validación Teléfono**:
  - Campo vacío → Sin error (opcional)
  - Formato inválido → "Teléfono no válido"
  - Formato válido → Sin error
- [ ] **Validación Mensaje**:
  - Campo vacío → "El mensaje es obligatorio"
  - < 10 caracteres → "El mensaje debe tener al menos 10 caracteres"
  - Mensaje válido → Sin error
- [ ] **Validación Consentimiento**:
  - Sin marcar → "Debes aceptar la política de privacidad"
  - Marcado → Sin error
- [ ] **Comportamiento de errores**:
  - Errores aparecen al hacer blur del campo
  - Errores desaparecen al salir del formulario completo
  - Errores persisten después de intentar enviar
- [ ] **Envío del formulario**:
  - Spinner aparece al enviar
  - Mensaje de éxito aparece si todo está bien
  - Mensaje de error aparece si falla
  - Formulario se limpia después del éxito
- [ ] **Link a Privacy** - Abre /legal/privacy

### Botones de Llamada a la Acción
- [ ] **Teléfono en footer** - Abre app de llamadas (tel:+34665267715)
- [ ] **Email en footer** - Abre cliente de correo (mailto:rovedra.sl@gmail.com)
- [ ] **Botones "Pedir Presupuesto"** - Navegan a /contact
- [ ] **Botones "Ver Proyectos"** - Navegan a /projects
- [ ] **Botones "Llamar"** - Abren app de llamadas

### Componentes Interactivos
- [ ] **Cookie Banner**:
  - Aparece en primera visita (después de 1 seg)
  - "Aceptar todas" → Banner desaparece, preferencia guardada
  - "Rechazar" → Banner desaparece, preferencia guardada
  - Link "Más información" → Navega a /legal/cookies
  - No vuelve a aparecer después de aceptar/rechazar
  - Limpiando localStorage vuelve a aparecer
- [ ] **WhatsApp Button**:
  - Visible en esquina inferior derecha
  - Animación de pulso funciona
  - Hover muestra tooltip "¿Necesitas un presupuesto?"
  - Click abre WhatsApp con mensaje predefinido
  - Abre en nueva pestaña
- [ ] **Scroll to Top**:
  - No visible al inicio
  - Aparece después de scroll > 500px
  - Click vuelve arriba con smooth scroll
  - Desaparece al estar arriba

### Página Services
- [ ] **Sticky Navigation**:
  - Se fija al hacer scroll
  - Links navegan a cada servicio
  - Item activo se marca correctamente
  - En mobile muestra iconos + hint de scroll
- [ ] **Servicios**:
  - Cada servicio tiene imagen + descripción
  - Galería de fotos se ve bien
  - Animaciones funcionan al hacer scroll
- [ ] **Botones de CTA** - Navegan a /contact

### Página Projects
- [ ] **Filtros**:
  - "Todos" muestra todos los proyectos
  - "Cocina" filtra correctamente
  - "Baño" filtra correctamente
  - "Integral" filtra correctamente
- [ ] **Project Cards**:
  - Hover effect funciona (imagen se aclara)
  - Badge "Destacado" en primer proyecto
  - Animaciones de entrada funcionan

### Página About
- [ ] **Secciones visibles**: Hero, Stats, Services, Team, Philosophy, CTA
- [ ] **Animaciones** de entrada funcionan
- [ ] **FAQ** se expande/colapsa (si implementado)
- [ ] **Botón CTA** navega a /contact

### Página Home
- [ ] **Hero** - Animaciones y badges funcionan
- [ ] **Trust Badges** - Animaciones al hacer scroll
- [ ] **Services Cards** - Animaciones funcionan
- [ ] **Featured Projects** - Solo 3 proyectos mostrados
- [ ] **Testimonials** - Se muestran correctamente
- [ ] **CTA Final** - Botón navega a /contact

---

## ⚡ 3. TESTING DE PERFORMANCE

### Google PageSpeed Insights
- [ ] **Visitar**: https://pagespeed.web.dev/
- [ ] **Ingresar URL**: Tu dominio o URL de Vercel
- [ ] **Performance Score**:
  - Desktop: ___ / 100 (objetivo: 90+)
  - Mobile: ___ / 100 (objetivo: 80+)
- [ ] **First Contentful Paint**: < 2 segundos
- [ ] **Largest Contentful Paint**: < 3 segundos
- [ ] **Cumulative Layout Shift**: < 0.1
- [ ] **Time to Interactive**: < 4 segundos

### Tiempos de Carga Manual
- [ ] **Home** carga en < 3 segundos
- [ ] **Services** carga en < 3 segundos
- [ ] **Projects** carga en < 3 segundos
- [ ] **About** carga en < 3 segundos
- [ ] **Contact** carga en < 3 segundos

### Imágenes
- [ ] Todas las imágenes cargan correctamente
- [ ] No hay imágenes rotas
- [ ] Lazy loading funciona (imágenes abajo cargan al hacer scroll)
- [ ] Alt text presente en todas las imágenes

---

## 🌐 4. TESTING CROSS-BROWSER

### Chrome/Edge (Windows)
- [ ] Todas las páginas cargan
- [ ] Animaciones funcionan
- [ ] Formulario funciona
- [ ] Componentes interactivos funcionan

### Firefox
- [ ] Todas las páginas cargan
- [ ] Animaciones funcionan
- [ ] Formulario funciona
- [ ] Componentes interactivos funcionan

### Safari (Mac/iOS) - Si tienes acceso
- [ ] Todas las páginas cargan
- [ ] Animaciones funcionan
- [ ] Formulario funciona
- [ ] Componentes interactivos funcionan

### Chrome Mobile (Android)
- [ ] Todas las páginas cargan
- [ ] Touch interactions funcionan
- [ ] Formulario usable
- [ ] WhatsApp button funciona

---

## ♿ 5. TESTING DE ACCESIBILIDAD

### Navegación con Teclado
- [ ] Tab navega entre elementos interactivos
- [ ] Enter activa botones y links
- [ ] Focus visible en elementos (outline)
- [ ] Shift+Tab navega hacia atrás

### Contraste de Colores
- [ ] Texto principal legible (ratio > 4.5:1)
- [ ] Botones tienen buen contraste
- [ ] Links visibles y distinguibles

### Screen Reader (Opcional)
- [ ] Alt text en imágenes describe contenido
- [ ] Headings en orden correcto (h1 → h2 → h3)
- [ ] Labels en inputs del formulario

---

## 🔍 6. TESTING SEO

### Meta Tags (Ver código fuente)
- [ ] **Home**: Title y description correctos
- [ ] **Services**: Title y description correctos
- [ ] **Projects**: Title y description correctos
- [ ] **About**: Title y description correctos
- [ ] **Contact**: Title y description correctos

### Structured Data
- [ ] Schema.org implementado (verificar con https://search.google.com/test/rich-results)
- [ ] LocalBusiness en About
- [ ] HomeAndConstructionBusiness en Home
- [ ] ProfessionalService en Services

### Archivos SEO
- [ ] **robots.txt** accesible: `tudominio.com/robots.txt`
- [ ] **sitemap.xml** accesible: `tudominio.com/sitemap.xml`
- [ ] **Favicon** visible en pestaña del navegador

---

## 🐛 7. BUGS COMUNES A VERIFICAR

### Layout
- [ ] No hay scroll horizontal en ninguna página
- [ ] Footer siempre al final (no flotante en medio)
- [ ] Espacios consistentes entre secciones
- [ ] Textos no se solapan con otros elementos

### Formularios
- [ ] No se puede enviar formulario vacío
- [ ] Mensajes de error son claros
- [ ] Spinner no se queda cargando indefinidamente
- [ ] Después de éxito, formulario se limpia

### Animaciones
- [ ] No hay parpadeos o saltos bruscos
- [ ] Animaciones son suaves
- [ ] No ralentizan la experiencia

### Mobile
- [ ] Botones suficientemente grandes para touch (mínimo 44x44px)
- [ ] Texto legible sin zoom
- [ ] No hay elementos que se salgan de pantalla

---

## ✅ CHECKLIST FINAL PRE-LANZAMIENTO

### Contenido
- [ ] Todos los textos revisados (sin typos)
- [ ] Información de contacto correcta
- [ ] Precio/servicios actualizados
- [ ] Imágenes definitivas (no placeholders)

### Técnico
- [ ] Variables de entorno configuradas en Vercel
- [ ] Dominio configurado correctamente
- [ ] HTTPS activo
- [ ] Formulario envía a email correcto

### Legal
- [ ] Aviso Legal completo
- [ ] Política de Privacidad completa
- [ ] Política de Cookies completa
- [ ] Banner de cookies funciona

### Analytics (Opcional)
- [ ] Google Analytics configurado
- [ ] Google Search Console verificado
- [ ] Vercel Analytics activo

---

## 📊 RESULTADOS DEL TESTING

**Fecha del test**: _______________

**Navegadores probados**:
- [ ] Chrome ___ (versión)
- [ ] Firefox ___ (versión)
- [ ] Safari ___ (versión)
- [ ] Edge ___ (versión)

**Dispositivos probados**:
- [ ] Desktop (Windows/Mac)
- [ ] iPhone/iOS
- [ ] Android

**Issues encontrados**: _______________

**Performance**:
- Desktop Score: ___ / 100
- Mobile Score: ___ / 100

**Estado final**: 
- [ ] ✅ Aprobado para lanzamiento
- [ ] ⚠️ Necesita correcciones menores
- [ ] ❌ Necesita correcciones importantes

---

**Testeado por**: _______________
**Aprobado por**: _______________

---

## 🚀 Próximo Paso

Una vez completado este checklist y todos los items marcados:
→ **Lanzamiento oficial** 🎉

