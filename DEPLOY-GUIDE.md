# 🚀 Guía de Deployment - Rovedra S.L. Website

## Preparación Pre-Deployment

### 1. Variables de Entorno
Asegúrate de tener configurado el archivo `.env` (solo para desarrollo local):

```env
VITE_FORMSPREE_ID=xqawzwek
```

### 2. Build Local (Opcional - Test)
Para probar el build antes de deployar:

```bash
npm run build
npm run preview
```

---

## 📦 Deployment en Vercel

### Opción A: Deploy desde Dashboard (Recomendado para primera vez)

1. **Accede a [Vercel](https://vercel.com)**
   - Inicia sesión con tu cuenta de GitHub

2. **Importa el proyecto**
   - Click en "Add New" → "Project"
   - Selecciona el repositorio: `laylarodas/rovedrasl-website`
   - Click en "Import"

3. **Configura el proyecto**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Variables de Entorno**
   Click en "Environment Variables" y añade:
   ```
   VITE_FORMSPREE_ID = xqawzwek
   ```

5. **Deploy**
   - Click en "Deploy"
   - Espera 2-3 minutos
   - ✅ Tu sitio estará en línea!

### Opción B: Deploy desde CLI

```bash
# Instalar Vercel CLI (si no lo tienes)
npm i -g vercel

# Login
vercel login

# Deploy (primera vez)
vercel

# Deploy a producción
vercel --prod
```

---

## 🌐 Configurar Dominio Personalizado

### En Vercel Dashboard

1. Ve a tu proyecto en Vercel
2. Click en "Settings" → "Domains"
3. Añade: `reformasrovedra.es`
4. Sigue las instrucciones para configurar DNS

### Configuración DNS (en tu proveedor de dominio)

Añade estos registros:

**Opción 1: A Records (Recomendado)**
```
Type: A
Name: @
Value: 76.76.21.21

Type: A
Name: www
Value: 76.76.21.21
```

**Opción 2: CNAME**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## ✅ Checklist Post-Deployment

### Verificaciones Inmediatas

- [ ] Sitio carga correctamente
- [ ] Todas las páginas funcionan (/, /services, /projects, /about, /contact)
- [ ] Formulario de contacto funciona (prueba enviando un mensaje)
- [ ] Responsive funciona en mobile
- [ ] No hay errores en la consola del navegador
- [ ] Imágenes cargan correctamente
- [ ] Links funcionan correctamente

### Pruebas SEO

- [ ] **Google Search Console**
  - Verificar propiedad
  - Enviar sitemap: `https://reformasrovedra.es/sitemap.xml`
  
- [ ] **Robots.txt**
  - Verificar: `https://reformasrovedra.es/robots.txt`
  
- [ ] **Meta Tags**
  - Usar: [Meta Tags Inspector](https://metatags.io/)
  - URL: `https://reformasrovedra.es`
  
- [ ] **Schema.org**
  - Validar: [Schema Markup Validator](https://validator.schema.org/)

### Pruebas de Performance

- [ ] **PageSpeed Insights**
  - URL: https://pagespeed.web.dev/
  - Objetivo: >90 en móvil y desktop

- [ ] **GTmetrix**
  - URL: https://gtmetrix.com/
  - Objetivo: Grade A

- [ ] **Lighthouse (Chrome DevTools)**
  - Performance: >90
  - SEO: 100
  - Accessibility: >90
  - Best Practices: >90

---

## 📊 Configurar Analytics

### Google Analytics 4

1. Crea una propiedad en [Google Analytics](https://analytics.google.com/)
2. Obtén el Measurement ID (formato: G-XXXXXXXXXX)
3. Añade al `index.html` en el `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Search Console

1. Accede a [Search Console](https://search.google.com/search-console)
2. Añade la propiedad: `https://reformasrovedra.es`
3. Verifica con el método HTML tag o DNS
4. Envía el sitemap: `https://reformasrovedra.es/sitemap.xml`

---

## 🔄 Actualizaciones Futuras

### Workflow Automático

Vercel está configurado para auto-deploy cuando haces push a GitHub:

```bash
# Hacer cambios
git add .
git commit -m "Update: descripción del cambio"
git push origin main

# Vercel detectará el push y hará deploy automáticamente
```

### Rollback (Si algo sale mal)

1. Ve a Vercel Dashboard
2. Click en "Deployments"
3. Encuentra el deployment anterior que funcionaba
4. Click en "..." → "Promote to Production"

---

## 🛠️ Troubleshooting

### El formulario no funciona
- Verifica que `VITE_FORMSPREE_ID` está en las variables de entorno de Vercel
- Asegúrate de que el form en Formspree.io está activo
- Verifica los logs en Vercel

### Página 404 en rutas
- El archivo `vercel.json` ya tiene la configuración de rewrites
- Si persiste, verifica que el archivo está en el root del proyecto

### Imágenes no cargan
- Verifica que las imágenes están en `public/images/`
- Check las rutas en el código (deben empezar con `/images/`)

### Build falla
- Revisa los logs en Vercel
- Verifica que `package.json` tiene todas las dependencias
- Prueba el build localmente: `npm run build`

---

## 📱 PWA (Progressive Web App)

El sitio ya tiene configuración básica de PWA:
- `manifest.json` configurado
- Meta theme-color configurado
- Icono SVG configurado

Para mejorar (futuro):
- Añadir Service Worker para offline support
- Crear iconos PNG en múltiples tamaños
- Implementar cache strategy

---

## 🔐 Seguridad

Ya configurado en `vercel.json`:
- ✅ X-Content-Type-Options
- ✅ X-Frame-Options
- ✅ X-XSS-Protection
- ✅ Referrer-Policy
- ✅ Permissions-Policy
- ✅ Cache-Control para assets

---

## 📞 Soporte

Si tienes problemas con el deployment:

1. **Logs de Vercel**: https://vercel.com/dashboard → tu proyecto → Deployments
2. **Vercel Docs**: https://vercel.com/docs
3. **Formspree Support**: https://help.formspree.io/

---

## 🎉 ¡Listo!

Tu sitio debería estar funcionando perfectamente en:
**https://reformasrovedra.es**

Monitorea el tráfico y las conversiones para hacer ajustes continuos.

---

**Última actualización**: 13 de Noviembre, 2025

