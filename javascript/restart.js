function reStart() {

    let question = confirm("Si presionas aceptar se borrará la lista de participantes para reiniciar el juego  ¿Estas segur@?")

        if (question) {
            arrayNames.length = 0;
            nameContainer.innerHTML = "";
            openModal();

} else {

    alert("Nada se ha modificado, puedes seguir jugando")

}
};