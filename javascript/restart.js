function reStart() {

    let question = confirm("Si presionas aceptar se borrará la lista de participantes para reiniciar el juego  ¿Estas segur@?")

        if (question) {
            arrayNames.length = 0;
            nameContainer.innerHTML = "";
            document.getElementById("chosed-one").innerHTML = " ";
            openModal();

} 


};