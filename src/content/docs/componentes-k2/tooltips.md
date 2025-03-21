---
title: "Tooltips (falta testiar en k2)"
description: "Guía para utilizar badges o etiquetas como indicadores visuales."
layout: ../../layouts/DocsLayout.astro
---

Los Tootips se utiliza a menudo para especificar información adicional sobre algo, cuando el usuario mueve el puntero del mouse sobre un elemento:


## Implementación en HTML

```html
<p>
    <span class="tooltip tooltip-top">
      Tooltip Top
      <span class="tooltiptext">Información adicional arriba</span>
    </span>
  </p>
  <p>
    <span class="tooltip tooltip-bottom">
      Tooltip Bottom
      <span class="tooltiptext">Información adicional abajo</span>
    </span>
  </p>
  <p>
    <span class="tooltip tooltip-left">
      Tooltip Left
      <span class="tooltiptext">Información adicional a la izquierda</span>
    </span>
  </p>
  <p>
    <span class="tooltip tooltip-right">
      Tooltip Right
      <span class="tooltiptext">Información adicional a la derecha</span>
    </span>
  </p>
    

```
Toda la documentación de las clases ylos estilos se encuentra en el archivo.

## css ux_design.css

```css
/* Base para el contenedor de tooltip */
    .tooltip {
      position: relative;
      display: inline-block;
      border-bottom: 1px dotted #6f6f6f;
      cursor: default;
    }
    /* Estilos base para el tooltip (texto) */
    .tooltip .tooltiptext {
      visibility: hidden;
      width: 180px;
      background-color: #6f6f6f;
      color: #fff;
      border-radius: 6px;
      text-align: center !important;
      padding: 5px;
      position: absolute;
      z-index: 1;
      opacity: 0;
      transition: opacity 0.3s;
    }
    .msj-l{
      text-align: left !important;
    }
    .msj-r{
      text-align: right !important;
    }
    /* Mostrar tooltip al hover */
    .tooltip:hover .tooltiptext {
      visibility: visible;
      opacity: 1;
      padding: 0.6rem;
    }
    
    /* Base para la flecha del tooltip */
    .tooltip .tooltiptext::after {
      content: "";
      position: absolute;
      border-style: solid;
    }
    
    /* ------------------------------
       Posición: TOP (aparece arriba)
    ------------------------------ */
    .tooltip-top .tooltiptext {
      bottom: 125%; /* Ubica el tooltip arriba */
      left: 50%;
      transform: translateX(-50%);
      margin-bottom: 5px;
    }
    .tooltip-top .tooltiptext::after {
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 5px;
      border-color: #6f6f6f transparent transparent transparent;
    }
    
    /* ------------------------------
       Posición: BOTTOM (aparece abajo)
    ------------------------------ */
    .tooltip-bottom .tooltiptext {
      top: 125%;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 5px;
    }
    .tooltip-bottom .tooltiptext::after {
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 5px;
      border-color: transparent transparent #6f6f6f transparent;
    }
    
    /* ------------------------------
       Posición: LEFT (aparece a la izquierda)
    ------------------------------ */
    .tooltip-left .tooltiptext {
      top: 50%;
      right: 125%;
      transform: translateY(-50%);
      margin-right: 5px;
    }
    .tooltip-left .tooltiptext::after {
      top: 50%;
      right: -10px;
      transform: translateY(-50%);
      border-width: 5px;
      border-color: transparent transparent transparent #6f6f6f;
    }
    
    /* ------------------------------
       Posición: RIGHT (aparece a la derecha)
    ------------------------------ */
    .tooltip-right .tooltiptext {
      top: 50%;
      left: 125%;
      transform: translateY(-50%);
      margin-left: 5px;
    }
    .tooltip-right .tooltiptext::after {
      top: 50%;
      left: -10px;
      transform: translateY(-50%);
      border-width: 5px;
      border-color: transparent #6f6f6f transparent transparent;
    }
    
    /* Tus otros estilos */
    .msj_tool {
      width: 40%;
      padding: 12px;
      border: solid 1px;
      color: #1e429f;
      border-radius: 6px;
      margin-bottom: 2em;
      background: #fff;
      font-weight: 800;
      box-shadow: #0000003d 1px 1px 5px;
    }
    
    .msj_resultado {
      position: absolute;
      top: 1.4em;
      font-size: 12px;
      right: 10px;
      border: solid 1px #d3d3d3;
      width: auto !important;
      padding: 0.3em 0.8em;
      border-radius: 6px;
    }
```