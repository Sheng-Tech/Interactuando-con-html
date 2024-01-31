let titulo = document.querySelector('h1');
titulo.innerHTML = '"Hora del Desafío"';

function muestraConsola () {
    console.log ('"El botón fue clicado"');
}

function hacePregunta () {
    let ciudad = prompt ("Escribe el nombre de una ciudad de Brasil");
    alert (`"Estuve en ${ciudad} y me acordé de ti"`);
}

function muestraAlerta () {
    alert ('"Yo amo JS"');
}

function haceSuma () {
    let valor1 = parseInt(prompt ('¡Por favor introduce un número!'));
    let valor2 = parseInt(prompt ('¡Ahora intoduce otro número!'));
    let resultado = parseInt(valor1+valor2);
    
    alert (`¡La suma de ${valor1} y ${valor2} es igual a ${resultado}!`);
}