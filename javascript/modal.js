'use strict'

// Obtener elementos del DOM
var openModalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("modal");
var closeModal = document.getElementsByClassName("close")[0];
var nameContainer = document.getElementById("nameContainer");
var newNameInput = document.getElementById("newNameInput");
var addNameBtn = document.getElementById("addNameBtn");

// Función para mostrar el modal
function openModal() {
    modal.style.display = "block";
    displayNames();
}

// Función para cerrar el modal
function cierraModal() {
    // drawer.classList.remove('close');
    modal.style.display = "none";}

/* Función para mostrar la lista de nombres en el modal --> Esta es parecida (mucho mas sofisticada ) 
a mi showDeathRow*/
function displayNames() {
    nameContainer.innerHTML = "";
    for (var i = 0; i < arrayNames.length; i++) {
        var nameCard = document.createElement("div");
        nameCard.classList.add("name-card");

        var nameText = document.createElement("span");
        nameText.innerText = arrayNames[i];

        var deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerText = "x";
        deleteBtn.setAttribute("data-index", i);

        nameCard.appendChild(nameText);
        nameCard.appendChild(deleteBtn);
        nameContainer.appendChild(nameCard);
    }
}

// Función para agregar un nuevo nombre a la lista ---> Esta es parecida a mi funcion AddDoomed
function addName() {
    let newName = newNameInput.value;
    if (newName !== "") {
        arrayNames.push(newName);
        displayNames();
        newNameInput.value = "";
    }
}



// Función para eliminar un nombre de la lista -----> Esta es parecida a mi funcion Delete Doomed
function deleteName(index) {
    arrayNames.splice(index, 1);
    displayNames();
}

// Asignar eventos a los elementos del DOM
openModalBtn.addEventListener("click", openModal);
closeModal.addEventListener("click", cierraModal);
addNameBtn.addEventListener("click", addName);
nameContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        var index = event.target.getAttribute("data-index");
        deleteName(index);
    }
});