"use strict"



//funcion para añadir sonidos
function makeSound(id) {
    var audio = document.getElementById(id);
    audio.play();
}


//Funcion Random, decapitar y eliminar almacenar nombres
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const deadList = []; //creo un array donde se van a almacenar los nombres q ya han salido y seran eliminados

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

    while (arrayNames.length > 0){
    let chosenName = arrayNames[random]; //el nombre escogido será el q ocupa ese numero (posicion) en el array

    makeSound("cuchilla");
    makeSound("scream");

    document.getElementById("elegido").innerHTML = chosenName; //le decimos q muestre el elegido
    /*document.getElementById("eliminados").innerHTML = DeadBodies(random); 
    Mostrar lista de eliminados*/
}

alert("No hay mas nombres para mostrar presiona añade nombres o presiona reiniciar")        
document.getElementById("elegido").innerHTML = "Oops! es momento de reiniciar"
        
    }



