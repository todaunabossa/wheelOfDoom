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

  intervalId = setInterval(function() {
    random = getRandomInt(arrayNames.length);
    chosenName = arrayNames[random];
    document.getElementById("chosed-one").innerHTML = chosenName;
  }, 500);

  setTimeout(function() {
    clearInterval(intervalId);
    document.getElementById("chosed-one").innerHTML = chosenName;
    document.getElementById("dead-people").innerHTML = DeadBodies(random);
  }, 2000);
}

const deadList = [];

function startDecapitator() {
  setTimeout(function() {
    let blade = document.getElementById("img-blade");
    blade.style.top = "-6%";

    let head = document.getElementsByClassName("dead-head")[0];
    head.style.display = "block";
    makeSound("blade-sound");

    setTimeout(function() {
      blade.style.top = "-80%";

      let newHead = document.getElementsByClassName("dead-head")[0];
      newHead.style.display = "none";
    }, 4000);

  }, 3000);
  
  showDoomed();
}