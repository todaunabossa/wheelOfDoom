"use strict"

//Funcion Random, decapitar y eliminar almacenar nombres



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function makeSound(id) {
    var audio = document.getElementById(id);
    audio.play();
}

function DeadBodies(random) {
    let removed = arrayNames.splice(random, 1);
    /*array.splice Metodo que indicando la posicion (en este caso random) remueve 1 elemento del array. 
    si ponemos 2 removeria 2 o 3 y asi...*/

    console.log(removed); //verificamos el nombre q se ha removido
    console.log(arrayNames); //verificamos q el array modificado vaya restando participantes

    deadList.push(removed);
    //creo un nuevo array para almacenar "los muertos"

    console.log(deadList); //verifico la lista de los eliminados
    return deadList;

}


function showDoomed() {

    let random = getRandomInt(arrayNames.length) //random es un número
    console.log(random);

    let chosenName = arrayNames[random]; //el nombre escogido será el q ocupa ese numero (posicion) en el array
    
    
    makeSound("scream"); 

    document.getElementById("elegido").innerHTML = chosenName; //le decimos q muestre el eliminado en la pantalla
    document.getElementById("eliminados").innerHTML = DeadBodies(random);

    // if (arrayNames.length == 0) {
    //     alert("No hay mas nombres")
    // }
    

}

const deadList = []; //creo un array donde se van a almacenar los nombres q ya han salido y seran eliminados

function hacerMovimiento() {

    setTimeout(function() {
    var blade = document.getElementById("cuchilla");
    blade.style.top = "0%";
  
      var head = document.getElementsByClassName("dead-head")[0];
      head.style.display = "block";
      makeSound("hojilla");
      
    }, 2000); // 2000 milisegundos = 3 segundos
   
    showDoomed(); 
    
}
