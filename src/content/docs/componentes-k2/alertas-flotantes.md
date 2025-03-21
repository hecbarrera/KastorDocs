---
title: "Alertas flotantes"
description: "Guía para implementar alertas flotantes en tu proyecto."
layout: ../../layouts/DocsLayout.astro
---

# Clases
```html
app/webroot/js/elements/alerts/floating.js
```

# Implementación
```html
app/views/layouts/default.thtml 
```
El Script importado contiene las clases de <strong>alertas flotantes.</strong>

Al inicio del body, se encuentra el contenedor de <strong>alertas flotantes.</strong>

<!-- Aquí iría el contenido de la guía -->
```html
//CREAR UNA ALERTA

let alert_id = FloatingAlerts.addAlert({msg: "Hola mundo Success", type: "success"});
FloatingAlerts.addAlert({msg: "Hola mundo Error", type: "error"});
FloatingAlerts.addAlert({msg: "Hola mundo Info", type: "info"});
FloatingAlerts.addAlert({msg: "Hola mundo Warning", type: "warning"});
FloatingAlerts.addAlert({msg: "Hola mundo Link", url: "https://google.com", type: "link"});
FloatingAlerts.addAlert({msg: "Hola mundo Progress", type: "progress"});
FloatingAlerts.addAlert({msg: "Hola mundo Loading", type: "loading"});

// MODIFICAR EL MENSAJE DE UNA ALERTA

FloatingAlerts.setMessage(alert_id, "Nuevo mensaje");

// CERRAR UNA ALERTA MANUALMENTE

FloatingAlerts.closeAlert(alert_id);

```