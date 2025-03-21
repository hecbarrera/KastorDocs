---
title: "Botones (falta integrar en k2)"
description: "Guía para utilizar botones según linea gráfica."
layout: ../../layouts/DocsLayout.astro
---

Guia de botones basicos para kastor
Esta guia contempla un set de botones editables a futuro, sin iconos que es la que usaremos por el momento.
Tambien una lista con botones agregando iconos.

## Implementación en HTML

Ejemplo simple con todos los botones del set y estados posibles

```html

<!--Sin iconos-->
<div class="button-group">
    <button class="btn btn-primary"> Botón Primario
    </button>
    <button class="btn btn-secondary"> Botón Secundario
    </button>
    <button class="btn btn-link"> Botón de Enlace
    </button>
    <button class="btn btn-success"> Éxito
    </button>
    <button class="btn btn-danger"> Error
    </button>
    <button class="btn btn-warning"> Advertencia
    </button>
    <button class="btn btn-info"> Información
    </button>
    <button class="btn btn-disabled" disabled> Deshabilitado
    </button>
</div>
```

## Botones con iconos

Se puede llamar a una galeria de iconos como fontawesome

```html
<!-- Otros elementos del head -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
```
Para el ejemplo se utilizo la V 5.15

```html
<!--Con iconos-->
<div class="button-group">
    <button class="btn btn-primary">
        <i class="fas fa-check"></i> Botón Primario
    </button>
    <button class="btn btn-secondary">
        <i class="fas fa-times"></i> Botón Secundario
    </button>
    <button class="btn btn-link">
        <i class="fas fa-link"></i> Botón de Enlace
    </button>
    <button class="btn btn-success">
        <i class="fas fa-check-circle"></i> Éxito
    </button>
    <button class="btn btn-danger">
        <i class="fas fa-exclamation-triangle"></i> Error
    </button>
    <button class="btn btn-warning">
        <i class="fas fa-exclamation-circle"></i> Advertencia
    </button>
    <button class="btn btn-info">
        <i class="fas fa-info-circle"></i> Información
    </button>
    <button class="btn btn-disabled" disabled>
        <i class="fas fa-ban"></i> Deshabilitado
    </button>
</div>

```




## CSS: buttons.css

Css integrados en el css del componente, se llaman de manera independiente para no chocar estilos con las otras hojas de css

```css
.button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.btn {
    display: inline-flex;
    align-items: center;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}

.btn i {
    margin-right: 8px;
}

.btn-primary {
    background-color: #f97a4dff;
    color: #fff;
}
.btn-secondary {
    background-color: #fff;
    border:solid 1px #f97a4dff;
    color: #f97a4dff;
}
.btn-primary:hover {
    background-color: rgb(180, 78, 41);
    color: #fff;
}
.btn-secondary:hover {
    background-color: #f97a4dff;
    border:solid 1px #f97a4dff;
    color: #fff;
}

.btn-link {
    background-color: transparent;
    color: #007bff;
    text-decoration: none;
}
.btn-link:hover {
    text-decoration: underline;
}

.btn-success {
    background-color: #28a745;
    color: #fff;
}

.btn-danger {
    background-color: #dc3545;
    color: #fff;
}

.btn-warning {
    background-color: #ffc107;
    color: #212529;
}

.btn-info {
    background-color: #17a2b8;
    color: #fff;
}

.btn-disabled {
    background-color: #c7c7c7;
    color: #fff;
    cursor: not-allowed;
    opacity: 0.65;
}

.btn:hover:not(.btn-disabled) {
    background-color: darken(10%);
}

.btn:active:not(.btn-disabled) {
    transform: scale(0.98);
}

.btn:focus:not(.btn-disabled) {
    outline: 2px solid #0056b3;
    outline-offset: 2px;
}
```