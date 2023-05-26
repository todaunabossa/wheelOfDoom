'use strict'

let openModalBtn = document.getElementById("openModalBtn");
let modal = document.getElementById("modal");
let closeModal = document.getElementsByClassName("close")[0];
let nameContainer = document.getElementById("nameContainer");
let newNameInput = document.getElementById("newNameInput");
let addNameBtn = document.getElementById("addNameBtn");


function openModal() {
    modal.style.display = "block";
    displayNames();
}

function hideModal() {
    modal.style.display = "none";}


function displayNames() {
    nameContainer.innerHTML = "";
    for (let i = 0; i < arrayNames.length; i++) {
        let nameCard = document.createElement("div");
        nameCard.classList.add("name-card");

        let nameText = document.createElement("span");
        nameText.innerText = arrayNames[i];

        let deleteBtn = document.createElement("button");
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
        let index = event.target.getAttribute("data-index");
        deleteName(index);
    }
});