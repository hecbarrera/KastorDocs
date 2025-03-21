---
title: "Badge o etiquetas"
description: "Guía para utilizar badges o etiquetas como indicadores visuales."
layout: ../../layouts/DocsLayout.astro
---

Los badges son elementos visuales que resaltan información clave, como estados, novedades o etiquetas, en una interfaz de usuario. Implementarlos de manera dinámica y consistente en tu proyecto es esencial para mantener una experiencia de usuario coherente. A continuación, se presenta una guía mejorada para su implementación:

## Implementación en HTML

<strong>Dentro de etiquetas < span>:</strong>

```html
<span class="badge rounded-pill bg-badge-secondary">BETA</span>

```
En este ejemplo, rounded-pill proporciona bordes redondeados al badge, y bg-badge-secondary define su color de fondo.

<strong>Dentro de etiquetas < a>:</strong>

```html

<a href="#">
    Flujo de caja
    <span class="badge rounded-pill bg-badge-secondary">BETA</span>
</a>

```
Aquí, el badge "BETA" se asocia al enlace "Flujo de caja".

<strong>Como indicadores en la barra de navegación:</strong>

Para resaltar nuevos elementos en la barra de navegación, puedes utilizar un badge con efecto de pulso:

```html
<div class="ring-container">
    <div class="ringring"></div>
    <div class="circle dot-novedad"></div>
</div>
```
Este enfoque es útil para indicar novedades o elementos en fase beta.

<strong>En títulos de módulos:</strong>

Los badges también pueden integrarse en títulos para señalar el estado de un módulo:

```html
<h1>Flujo de caja <span class="badge bg-badge-secondary">BETA</span></h1>

```
## Definición de estilos en CSS

Para garantizar una apariencia consistente de los badges en todo el proyecto, define las siguientes clases en tu archivo CSS:

```css
/* Estilos generales para el badge */
.badge {
    display: inline-block;
    padding: .35em .65em;
    font-size: .75em;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25rem;
}

/* Colores de fondo para diferentes estados */
.bg-badge-primary { background-color: #F97A4D; color: #fff; }
.bg-badge-secondary { background-color: #6640DF; color: #fff; }
.bg-badge-success { background-color: #28a745; color: #fff; }
.bg-badge-warning { background-color: #ffc107; color: #333; }
.bg-badge-danger { background-color: red; color: #fff; }
.bg-badge-info { background-color: #007bff; color: #fff; }
.bg-badge-dark { background-color: #333; color: #fff; }
.bg-badge-white { background-color: #fff; color: #333; }

/* Estilos específicos según el contexto */
p .badge-link {
    background-color: #007bff;
    margin-left: 10px;
    vertical-align: baseline;
}

a .badge-link {
    background-color: #17a2b8;
    font-size: 0.75rem;
    position: absolute;
    top: -5px;
    right: -10px;
}

button .badge {
    background-color: #ff4a4a;
    font-size: 0.8rem;
    position: absolute;
    top: -10px;
    right: -10px;
}

/* Forma de píldora para los badges */
.rounded-pill {
    border-radius: 50rem !important;
}


```

<strong>Consideraciones adicionales:</strong>

- Consistencia en el diseño: Asegúrate de que los badges mantengan una apariencia coherente en todo el sitio, respetando la paleta de colores y la tipografía definida en tu guía de estilo.

- Accesibilidad: Proporciona descripciones alternativas para los badges, especialmente si contienen información crucial, para garantizar que sean accesibles para todos los usuarios.

- Responsividad: Verifica que los badges se muestren correctamente en diferentes dispositivos y tamaños de pantalla, ajustando tamaños y espacios según sea necesario.

- Efectos visuales: Si decides implementar efectos como pulsos o animaciones en los badges, hazlo de manera sutil para no distraer al usuario de la información principal.
<!-- Aquí iría el contenido de la guía -->
