'use strict'

var openModalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("modal");
var closeModal = document.getElementsByClassName("close")[0];
var nameContainer = document.getElementById("nameContainer");
var newNameInput = document.getElementById("newNameInput");
var addNameBtn = document.getElementById("addNameBtn");


function openModal() {
    modal.style.display = "block";
    displayNames();
}

function hideModal() {
    modal.style.display = "none";}


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

function addName() {
    let newName = newNameInput.value;
    if (newName !== "") {
        arrayNames.push(newName);
        displayNames();
        newNameInput.value = "";
    }
}


function deleteName(index) {
    arrayNames.splice(index, 1);
    displayNames();
}

openModalBtn.addEventListener("click", openModal);
closeModal.addEventListener("click", hideModal);
addNameBtn.addEventListener("click", addName);
nameContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        var index = event.target.getAttribute("data-index");
        deleteName(index);
    }
});