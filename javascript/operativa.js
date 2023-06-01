"use strict"

let intervalId;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function makeSound(id) {
    let audio = document.getElementById(id);
    audio.play();
}

function DeadBodies(random) {
    let removed = arrayNames.splice(random, 1);

    deadList.push(removed);

    return deadList;

}

function showDoomed() {
    let random = getRandomInt(arrayNames.length);
    let chosenName = arrayNames[random];
    makeSound("scream");
  
    if(arrayNames.length > 0){
      intervalId = setInterval(function() {
        random = getRandomInt(arrayNames.length);
        chosenName = arrayNames[random];
        document.getElementById("chosed-one").innerHTML = chosenName;
      }, 500);

      setTimeout(function() {
      let index = arrayNames.indexOf(chosenName);
      removeNameCard(index);
    }, 2000);
    
      setTimeout(function() {
        clearInterval(intervalId);
        document.getElementById("chosed-one").innerHTML = chosenName;
        document.getElementById("dead-people").innerHTML = DeadBodies(random);
      }, 2000);
    } else {
      alert("Vaya, has quedado sin nombres en tu lista");
    }
  
  
  }
  
  const deadList = [];
  
  function startDecapitator() {
    setTimeout(function() {
      let blade = document.getElementById("img-blade");
      blade.style.top = "-34%";
  
      let head = document.getElementsByClassName
  ("dead-head")[0];
      head.style.display = "block";
      makeSound("blade-sound");
  
      setTimeout(function() {
        blade.style.top = "-110%";
  
        let newHead = document.getElementsByClassName("dead-head")[0];
        newHead.style.display = "none";
      }, 4000);
  
    }, 3000);
  
    showDoomed();
  }  