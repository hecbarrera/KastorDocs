---
title: "Modals (falta integrar en k2)"
description: "Guía para crear modals interactivos."
layout: ../../layouts/DocsLayout.astro

---

 
## Formas de levantar el modal

```html
  <button onclick="openModal('sm')">button - Modal Pequeño</button>

  <a class="" href="#" onclick="openModal('md')">etiqueta "a" Modal Mediano</a>

  <input class="styled" type="button" value="input button Modal Grande" onclick="openModal('lg')" /> 

  <!-- Modals Especiales -->

  <!-- Modal imagen -->
  <button onclick="openModalImg()">Abrir Modal Imagen</button> 

  <!-- OpenCard -->
  <button onclick="openNewVariant()">Abrir Modal Variante con Box Imagen</button>

  <!-- Modal Formulario -->
  <button onclick="openModalForm()">Abrir Modal Formulario</button>

```

## Html implementación

```html
<!-- Modal Principal -->
  <div id="modal" class="modal">
    <div class="modal-content" id="modal-content">
      <div class="modal-header">
        <h2 id="modal-title">Título del Modal</h2>
        <span class="close" onclick="closeMainModal()">&times;</span>
      </div>
      <div class="modal-body" id="modal-body">
        <p>El cuerpo del modal cambia dependiendo del onclick</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeMainModal()">Cerrar</button>
        <button class="btn btn-primary">Botón Primario</button>
      </div>
    </div>
  </div>

  <!-- Modal con imagen de fondo -->
  <div class="modal" id="modalImagen">
    <div class="modal-content modal-image-variant" id="modalImageContent">
      <div class="modal-header image-variant-header">
        <span class="close" onclick="closeModalImg()">&times;</span>
      </div>
      <div class="modal-body image-variant-body">
        <h2>HORARIO DE SOPORTE LUNES 26/08</h2>
        <p>Este lunes la atención de soporte Iniciará a las 11:30 AM.</p>
        <p>
          Si requieres ayuda antes de ese horario, por favor déjanos un correo
          indicando la situación y se te responderá lo antes posible.
        </p>
      </div>
      <div class="modal-footer image-variant-footer">
        <button class="btn btn-secondary">No volver a mostrar</button>
        <button class="btn btn-primary">Leer más</button>
      </div>
    </div>
  </div>

  <!-- Modal Variante (OpenCard) -->
  <div class="modal" id="openCard">
    <div class="modal-content openCard">
      <div class="modal-header">
        <h2>IMPORTANTE</h2>
        <span class="close" onclick="closeOpenCard()">&times;</span>
      </div>
      <div class="modal-body">
        <div class="box-img" style="background-image: url('./img/img-card.png');">
          <h4>HORARIO DE SOPORTE LUNES 26/08</h4>
          <p>Este lunes la atención de soporte Iniciará a las 11:30 AM.</p>
        </div>
        <p>
          Si requieres ayuda antes de ese horario, por favor déjanos un correo indicando la situación y 
          se te responderá lo antes posible.
        </p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary">No volver a mostrar</button>
        <button class="btn btn-primary">Leer más</button>
      </div>
    </div>
  </div>

  <!-- Modal de Formulario (estándar md) -->
  <div class="modal" id="modalForm">
    <div class="modal-content modal-sm" id="modalFormContent">
      <div class="modal-header">
        <h2>Formulario de Registro</h2>
        <span class="close" onclick="closeModalForm()">&times;</span>
      </div>
      <div class="modal-body">
        <form id="formModal">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>
          </div>
          <div class="form-group">
            <label for="rut">RUT:</label>
            <input type="text" id="rut" name="rut" required>
          </div>
          <div class="form-group">
            <label for="fecha">Fecha:</label>
            <input type="date" id="fecha" name="fecha" required>
          </div>
          <div class="form-group">
            <label for="mail">Email:</label>
            <input type="email" id="mail" name="mail" required>
          </div>
          <div class="form-group">
            <label for="pais">País:</label>
            <select id="pais" name="pais" required>
              <option value="">Seleccione...</option>
              <option value="chile">Chile</option>
              <option value="argentina">Argentina</option>
              <option value="peru">Perú</option>
              <option value="colombia">Colombia</option>
              <option value="mexico">México</option>
            </select>
          </div>
          <div class="form-group">
            <label for="comentarios">Comentarios:</label>
            <textarea id="comentarios" name="comentarios"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModalForm()">Cancelar</button>
        <button class="btn btn-primary" onclick="submitForm()">Enviar</button>
      </div>
    </div>
  </div>

```
## JavaScript: js/modals.js

```js
function openModal(size) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    // Remover clases de tamaño anteriores
    modalContent.classList.remove('modal-sm', 'modal-md', 'modal-lg');

    // Agregar la clase de tamaño correspondiente
    switch(size) {
        case 'sm':
            modalContent.classList.add('modal-sm');
            break;
        case 'md':
            modalContent.classList.add('modal-md');
            break;
        case 'lg':
            modalContent.classList.add('modal-lg');
            break;
        default:
            modalContent.classList.add('modal-md');
    }

    modal.style.display = 'block';
}

function closeMainModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function openModalImg() {
    const modal = document.getElementById('modalImagen');
    modal.style.display = 'block';
}

function closeModalImg() {
    const modal = document.getElementById('modalImagen');
    modal.style.display = 'none';
}

function openNewVariant() {
    const modal = document.getElementById('openCard');
    modal.style.display = 'block';
}

function closeOpenCard() {
    const modal = document.getElementById('openCard');
    modal.style.display = 'none';
}

function openModalForm() {
    const modal = document.getElementById('modalForm');
    modal.style.display = 'block';
}

function closeModalForm() {
    const modal = document.getElementById('modalForm');
    modal.style.display = 'none';
}

// Unificar window.onclick para todos los modales
window.addEventListener('click', function(event) {
    const mainModal = document.getElementById('modal');
    const modalImagen = document.getElementById('modalImagen');
    const openCardModal = document.getElementById('openCard');
    const modalForm = document.getElementById('modalForm');

    if (event.target === mainModal) {
        closeMainModal();
    } else if (event.target === modalImagen) {
        closeModalImg();
    } else if (event.target === openCardModal) {
        closeOpenCard();
    } else if (event.target === modalForm) {
        closeModalForm();
    }
});

// Ejemplo de envío de formulario (puedes personalizarlo)
function submitForm() {
    // Aquí puedes agregar la lógica para enviar el formulario
    alert("Formulario enviado");
    closeModalForm();
}

```

## Css: css/modals.css

```css
    /* ---------------------------------------------------- */
    /* Modal Base                                            */
    /* ---------------------------------------------------- */
    .modal {
        display: none; 
        position: fixed;
        z-index: 9999; /* Ajustado para asegurar que quede sobre otros elementos */
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto; /* Permite scroll si el contenido excede la pantalla */
        background-color: rgba(0,0,0,0.5); /* Fondo semitransparente */
    }
    
    .modal-content {
        background-color: #fff;
        margin: 5% auto;
        border: 1px solid #888;
        width: 80%;
        border-radius: 5px;
        animation: fadeIn 0.5s;
        position: relative;    /* NUEVO: Posición relativa si necesitas ubicar elementos internos */
        overflow: hidden;      /* NUEVO: Oculta cualquier desbordamiento */
        box-shadow: 0 4px 10px rgba(0,0,0,0.3); /* NUEVO: Sombra para resaltar el modal */
    }
    
    /* Tamaños del modal */
    .modal-sm { width: 30%; }
    .modal-md { width: 50%; }
    .modal-lg { width: 70%; }
    
    /* Encabezado del modal */
    .modal-header {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ddd;
    }
    
    .modal-header h2 {
        margin: 0;
    }
    
    /* Botón de cierre (X) */
    .close {
        color: #aaa;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
    }
    .close:hover {
        color: #777; /* NUEVO: Pequeño efecto hover */
    }
    
    /* Animación de aparición */
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    /* ---------------------------------------------------- */
    /* Variante de Modal con Imagen                          */
    /* ---------------------------------------------------- */
    .modal-image-variant {
        width: 365px;
        height: 650px;
        background: url("./img/bg-image.png") center center no-repeat; 
        background-size: cover; 
        color: #fff; /* Texto en blanco sobre la imagen */
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* Header arriba, Footer abajo */
        border: none;   /* Sin borde visible */
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        margin: 50px auto; /* NUEVO: Centrado vertical un poco más abajo */
    }
    
    /* Header con el botón de cierre (X) en la variante */
    .image-variant-header {
        display: flex;
        justify-content: flex-end; /* La 'X' a la derecha */
        padding: 10px;
        border: none;
    }
    
    /* Cuerpo del modal */
    .modal-body {
        padding: 20px;
    }
    
    /* Pie del modal */
    .modal-footer {
        padding: 10px;
        display: flex;
        justify-content: flex-end;
    }
    
    /* Cuerpo del modal en la variante, anclado al fondo */
    .image-variant-body {
        display: flex;
        flex-direction: column;
        justify-content: flex-end; /* Alínea el texto al fondo del contenedor */
        padding: 20px;
        flex: 1; /* Ocupar el espacio restante entre header y footer */
    }
    
    /* Footer con botones centrados en la variante */
    .image-variant-footer {
        display: flex;
        justify-content: center;
        gap: 10px;  /* Espacio entre botones */
        padding: 20px;
    }
    
    /* ---------------------------------------------------- */
    /* Badges                                               */
    /* ---------------------------------------------------- */
    .badge {
        background-color: #007bff;
        color: white;
        padding: 5px 10px;
        border-radius: 12px;
        font-size: 0.8em;
    }
    
    /* ============================= */
    /* NUEVA VARIANTE: modal-new-variant */
    /* ============================= */
    .openCard {
    width: 430px;     /* Ancho fijo como en el ejemplo */
    max-width: 95%;   /* Para que sea responsive en pantallas pequeñas */
    border: none;
    }

    /* Contenedor de imagen y texto superpuesto */
    .box-img {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
    padding: 20px;
    color: #fff;
    margin-bottom: 15px; /* Espacio con el contenido de abajo */
    }
/* ---------------------------------------------------- */
/* Formulario en el Modal Form                           */
/* ---------------------------------------------------- */
.form-group {
    margin-bottom: 15px;
}
.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}
.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}
    /* ---------------------------------------------------- */
    /* Botones                                              */
    /* ---------------------------------------------------- */
    .btn {
        padding: 10px 20px;
        margin-left: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 0.95rem;          /* NUEVO: Ajuste de fuente */
        transition: background-color 0.3s, transform 0.2s; /* NUEVO: Transiciones */
    }

```
<!-- Aquí iría el contenido de la guía -->
