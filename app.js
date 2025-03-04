// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');


function agregarAmigo(){
    let amigoAgregado = document.getElementById('amigo').value;
    if (amigoAgregado==='') {
        alert('Por favor, inserte un nombre.');
        
    }else{
        amigos.push(amigoAgregado);
        limpiarCampo();
        actualizarAmigos(amigos);
    }
}



function actualizarAmigos(amigos){
    listaAmigos.innerHTML= "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}



function sortearAmigo() {
    if(amigos.length > 0){
        let aleatorio  = Math.floor(Math.random() * amigos.length) ; 
        resultado.innerHTML = `El amigo secreto es: ${amigos[aleatorio]}`;
    }else{
        alert('No hay amigos en la lista para sortear.');
    }
}


function limpiarCampo() {
     document.getElementById('amigo').value='';
}





