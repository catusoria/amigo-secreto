// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim(); // Obtiene el valor del input y elimina los espacios en blanco al inicio y al final
    
    // Valida que el nombre no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido'); // Si el nombre está vacío, muestra un mensaje de alerta
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombre);
    console.log(amigos);
    
    // Actualizar la lista visual
    actualizarListaAmigos();
    
    // Limpiar el input
    inputAmigo.value = '';
    inputAmigo.focus();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.className = 'name-item';
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Evento para permitir agregar amigos con al presionar Enter
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});
