// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];
let contador = 0;

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
    contador++;
    console.log(contador);
    
    // Actualizar la lista visual
    actualizarListaAmigos();
    actualizarContador();
    
    // Limpiar el input
    inputAmigo.value = '';
    inputAmigo.focus();
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    contador--;
    actualizarListaAmigos();
    actualizarContador();

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.className = 'name-item';
        
        // Crear el contenedor para el nombre y el botón
        const nombreSpan = document.createElement('span');
        nombreSpan.textContent = amigo;
        
        // Crear el botón de eliminar
        const deleteButton = document.createElement('button');
        deleteButton.className = 'button-delete';
        deleteButton.innerHTML = '×';
        deleteButton.onclick = () => eliminarAmigo(index);

        // Agregar elementos al li
        li.appendChild(nombreSpan);
        li.appendChild(deleteButton);
        listaAmigos.appendChild(li);
/*
        li.textContent = amigo;
        listaAmigos.appendChild(li);*/
    });
}

// Función para actualizar el contador visual
function actualizarContador() {
    const contadorElement = document.getElementById('contador');
    if (contadorElement) {
        contadorElement.textContent = `Total de participantes: ${contador}`;
    }
}

// Evento para permitir agregar amigos con al presionar Enter
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});

// Crear el elemento contador si no existe
if (!document.getElementById('contador')) {
    const contadorDiv = document.createElement('div');
    contadorDiv.id = 'contador';
    contadorDiv.className = 'contador';
    document.querySelector('.input-section').appendChild(contadorDiv);
    actualizarContador();
}