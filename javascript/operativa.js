"use strict"

let intervalId;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function makeSound(id) {
  let audio = document.getElementById(id);
  audio.play();
}

function deadBodies(array, num) {
  let removed;
  return removed = array.splice(num, 1);

}

function newArrayOfDead(array, removed) {
  return array.push(removed);

}

function showDoomed() {
  let random = getRandomInt(arrayNames.length);
  let chosenName = arrayNames[random];
  makeSound("scream");

  if (arrayNames.length > 0) {
    intervalId = setInterval(function () {
      random = getRandomInt(arrayNames.length);
      chosenName = arrayNames[random];
      document.getElementById("chosed-one").innerHTML = chosenName;
    }, 500);

    setTimeout(function () {
      //let index = arrayNames.indexOf(chosenName);
      removeNameCard(random);
    }, 2000);

    setTimeout(function () {
      clearInterval(intervalId);
      document.getElementById("chosed-one").innerHTML = chosenName;
      console.log(chosenName);
      document.getElementById("dead-people").innerHTML = deadBodies(arrayNames, random);
    }, 2000);

  }

}



function startDecapitator() {
  setTimeout(function () {
    let blade = document.getElementById("img-blade");
    blade.style.top = "-34%";

    let head = document.getElementsByClassName("dead-head")[0];
    head.style.display = "block";
    makeSound("blade-sound");

    setTimeout(function () {
      blade.style.top = "-110%";

      let newHead = document.getElementsByClassName("dead-head")[0];
      newHead.style.display = "none";
    }, 4000);

  }, 3000);

  showDoomed();
}



module.exports = {
  getRandomInt,
  deadBodies,
  newArrayOfDead
};