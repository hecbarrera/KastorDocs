---
title: "Alertas de texto"
description: "Guía para crear alertas de texto en tu interfaz."
layout: ../../layouts/DocsLayout.astro
---
## Ejemplos de Alertas
**Uso:** Se utiliza para comunicar información relevante o consejos útiles sin necesidad de una acción inmediata.

```html
<!-- Alerta Informativa -->
<div class="alert alert-bg-info">
    <i class="fa fa-info-circle" aria-hidden="true"></i>
    <div>
      <span class="alert-heading">Importante</span>
      <p>Configura tu aviso de cobro de manera clara y profesional, cumpliendo con los requisitos establecidos por la Ley 21.442.</p>
    </div>
</div>
```  

## 📘 Alerta Informativa (Info)  
**Uso:** Se utiliza para comunicar información relevante o consejos útiles sin necesidad de una acción inmediata.  
**Ejemplo:** "Recuerda que puedes configurar tu aviso de cobro para cumplir con la Ley 21.442."  

```html
<!-- Alerta Informativa -->
<div class="alert alert-bg-info">
    <i class="fa fa-info-circle" aria-hidden="true"></i>
    <div>
      <span class="alert-heading">Importante</span>
      <p>Configura tu aviso de cobro de manera clara y profesional, cumpliendo con los requisitos establecidos por la Ley 21.442.</p>
    </div>
</div>
```  
<!-- ⬅️ Cierra correctamente el bloque de código -->

## ✅ Alerta de Éxito (Success)  
**Uso:** Se muestra cuando una acción se ha realizado correctamente.  
**Ejemplo:** "Tu aviso de cobro ha sido configurado con éxito."  

```html
<!-- Alerta de Éxito -->
<div class="alert alert-bg-success">
    <i class="fa fa-check-circle" aria-hidden="true"></i>
    <div>
      <span class="alert-heading">Éxito</span>
      <p>Tu configuración ha sido guardada correctamente.</p>
    </div>
</div>
```  
<!-- ⬅️ Cierra nuevamente el bloque de código -->

## ❌ Alerta de Error (Danger)
**Uso:** Indica que algo salió mal y puede requerir intervención del usuario.  
**Ejemplo:** "Error al guardar la configuración. Inténtalo nuevamente o contacta con soporte."  

```html
<!-- Alerta de Error -->
<div class="alert alert-bg-danger">
    <i class="fa fa-times-circle" aria-hidden="true"></i>
    <div>
      <span class="alert-heading">Error</span>
      <p>No se pudo guardar la configuración. Verifica los campos e inténtalo de nuevo.</p>
    </div>
</div>
```  
<!-- ⬅️ Cierra nuevamente el bloque de código -->

## ⚠️ Alerta de Advertencia (Warning)
**Uso:** Advierte sobre una posible consecuencia o problema si no se toma una acción.  
**Ejemplo:** "Si cambias esta configuración, los datos previos podrían perderse."

```html
<!-- Alerta de Advertencia -->
<div class="alert alert-bg-warning">
    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
    <div>
      <span class="alert-heading">Cuidado</span>
      <p>Revisa bien los cambios antes de guardarlos, ya que podrían afectar a los datos anteriores.</p>
    </div>
</div>
```  
<!-- ⬅️ Cierra nuevamente el bloque de código -->
