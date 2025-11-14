# 🔐 Configuración de Variables de Entorno

Esta guía te ayudará a configurar las variables de entorno tanto en **desarrollo local** como en **producción (Vercel)**.

---

## 📋 Variables Necesarias

### **VITE_FORMSPREE_ID** (REQUERIDA)
- **Propósito**: Endpoint del formulario de contacto
- **Valor actual**: `https://formspree.io/f/xqawzwek`
- **Dónde se usa**: `src/components/ContactForm.tsx`

---

## 💻 Configuración Local (Desarrollo)

### Paso 1: Crear archivo `.env.local`

En la raíz del proyecto, crea un archivo llamado **`.env.local`** con este contenido:

```env
# FORMSPREE - Formulario de Contacto
VITE_FORMSPREE_ID=https://formspree.io/f/xqawzwek
```

### Paso 2: Verificar que funciona

1. **Reinicia el servidor** de desarrollo:
   ```bash
   npm run dev
   ```

2. **Abre la consola del navegador** (F12)

3. **Ve a la página de contacto**: http://localhost:3000/contacto

4. **Envía un mensaje de prueba** y revisa la consola. Deberías ver:
   ```
   Formspree URL: https://formspree.io/f/xqawzwek
   Response status: 200
   ```

5. Si ves el mensaje de éxito ✅, ¡está funcionando!

### Paso 3: Verificar .gitignore

El archivo `.gitignore` ya protege los archivos `.env*`:
```
*.local  ← Protege .env.local
.env     ← Protege .env
```

✅ Esto significa que **tus secretos NO se subirán a GitHub**.

---

## 🚀 Configuración en Vercel (Producción)

### Opción A: Desde el Dashboard de Vercel (Recomendado)

1. **Entra a tu proyecto en Vercel**:
   - Ve a [vercel.com](https://vercel.com)
   - Selecciona el proyecto `rovedrasl-website`

2. **Navega a Settings → Environment Variables**

3. **Añade la variable**:
   ```
   Key:   VITE_FORMSPREE_ID
   Value: https://formspree.io/f/xqawzwek
   ```

4. **Selecciona los entornos**:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

5. **Guarda y redeploy**:
   - Click en "Save"
   - Ve a "Deployments"
   - Click en "..." → "Redeploy"

### Opción B: Desde la CLI de Vercel

```bash
# Instalar CLI (si no la tienes)
npm i -g vercel

# Login
vercel login

# Añadir variable
vercel env add VITE_FORMSPREE_ID
# Pega: https://formspree.io/f/xqawzwek
# Selecciona: Production, Preview, Development

# Redeploy
vercel --prod
```

---

## 🧪 Verificar en Producción

1. **Visita tu sitio en producción**:
   - Ejemplo: `https://rovedrasl-website.vercel.app/contacto`

2. **Abre la consola del navegador** (F12)

3. **Envía un mensaje de prueba**

4. **Verifica en Formspree**:
   - Ve a [formspree.io/forms/xqawzwek/submissions](https://formspree.io/forms/xqawzwek/submissions)
   - Deberías ver el mensaje recibido

---

## ❓ Troubleshooting

### Problema: "VITE_FORMSPREE_ID is undefined"

**Solución**:
1. Verifica que el archivo `.env.local` existe en la raíz del proyecto
2. Asegúrate de que el nombre de la variable es **exactamente** `VITE_FORMSPREE_ID`
3. Reinicia el servidor de desarrollo
4. Si usas VSCode, recarga la ventana (Ctrl+Shift+P → "Reload Window")

### Problema: "Hubo un error al enviar el mensaje"

**Solución**:
1. Abre la consola del navegador para ver el error exacto
2. Verifica que la URL de Formspree es correcta: `https://formspree.io/f/xqawzwek`
3. Comprueba que el proyecto en Formspree está activo
4. Verifica que no hay bloqueos de CORS

### Problema: En Vercel el formulario no funciona

**Solución**:
1. Ve a Vercel → Settings → Environment Variables
2. Verifica que `VITE_FORMSPREE_ID` está añadida
3. Asegúrate de que está habilitada para "Production"
4. Haz un redeploy manual del sitio
5. Limpia la caché del navegador (Ctrl+Shift+R)

---

## 📝 Variables Futuras

Cuando necesites añadir más variables (Google Analytics, Maps, etc.):

### Desarrollo Local
Añade a `.env.local`:
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_GOOGLE_MAPS_API_KEY=tu_api_key
```

### Producción (Vercel)
Añade en Settings → Environment Variables siguiendo los mismos pasos.

---

## ⚠️ Importante

### Variables VITE_* son PÚBLICAS
- Se exponen al cliente (navegador)
- NO pongas secretos sensibles (API keys privadas, passwords, tokens)
- Solo usa VITE_* para IDs públicos y configuraciones del cliente

### Para secretos del servidor
Si en el futuro necesitas secretos (API keys privadas, tokens OAuth):
- Usa variables sin el prefijo `VITE_`
- Accede a ellas solo desde funciones serverless
- Nunca las expongas al cliente

---

## ✅ Checklist Final

- [ ] Crear archivo `.env.local` en la raíz del proyecto
- [ ] Añadir `VITE_FORMSPREE_ID=https://formspree.io/f/xqawzwek`
- [ ] Reiniciar servidor de desarrollo
- [ ] Probar formulario localmente
- [ ] Añadir variable en Vercel → Settings → Environment Variables
- [ ] Hacer redeploy en Vercel
- [ ] Probar formulario en producción
- [ ] Verificar mensaje recibido en Formspree

---

**¿Necesitas ayuda?** Contacta al equipo de desarrollo.

**Última actualización**: Noviembre 2025

