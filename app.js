// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo() {
    const amigo = document.getElementById('amigo').value;
    amigos.push(amigo);
    const amigoItem = document.createElement('li');
    amigoItem.textContent = amigo;
    document.getElementById('listaAmigos').appendChild(amigoItem);
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    if(amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').innerHTML = amigoSorteado;
}