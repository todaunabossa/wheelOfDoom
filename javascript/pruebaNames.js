"use strict"

// showAllNames.js
function showAllNames(array) {
    const chosenOneElement = document.getElementById("chosen-one");
  
    let shuffledArray = shuffleArray(array);
  
    let index = 0;
    let intervalId = setInterval(() => {
      chosenOneElement.innerText = shuffledArray[index];
      chosenOneElement.style.display = "block";
  
      setTimeout(() => {
        chosenOneElement.style.display = "none";
      }, 2000);
  
      index++;
  
      if (index === 6) {
        clearInterval(intervalId);
        startDecapitator();
      }
    }, 3000);
  }
  
  function shuffleArray(array) {
    // Implementación para mezclar aleatoriamente los elementos del array
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  function startDecapitator() {
    // Lógica para iniciar el decapitador
  }
  
  module.exports = showAllNames;
  