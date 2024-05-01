//querySelector
// const heading = document.querySelector(".header__texto h2")
// console.log(heading);

// const heading = document.querySelector('.header__texto h2')  // Devuelve 0 o 1 elemento

// heading.textContent = 'Nuevo heading';
// console.log(heading);
// heading.classList.add('Nueva-Clase')

//querySelector

// const enlaces = document.querySelectorAll('.navegacion a') //Retornó todos los enlaces de la clase padre navegacion
// enlaces[0].textContent = "Nosotros";
// // enlaces[0].href = "http://google.com";
// enlaces[0].classList.add('nuevaclaseOJO');
// enlaces[0].classList.remove('nuevaclaseOJO');

// const contenedores = document.querySelectorAll('.contenedor h3')
// contenedores[0].textContent = 'Sobre Nosotros';
// // contenedores[0].classList.add('class-contenedor2');
// // contenedores[0].remove('class-contenedor2');
// // console.log(contenedores);

// //getElementById
// const heading2 = document.getElementById('heading')//Se le pasa el ID 
// // console.log(heading2);

//------------------------------------

//Create Element

// const nuevoEnlace = document.createElement('A')
// //Agregar el href
// nuevoEnlace.href = 'nuevo-enlace.html';
// //Agregar el texto
// nuevoEnlace.textContent = 'Tienda Virtual';
// //Agregar la clase
// nuevoEnlace.classList.add('navegacion__enlace');
// //Agregar el elemento creado al documento
// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoEnlace);


// console.log(nuevoEnlace);

// //Create Element

// const enlaceNuevo = document.createElement('A')
// enlaceNuevo.href = 'enlacenuevo.html';
// enlaceNuevo.textContent = 'Nuevos Cafés';
// enlaceNuevo.classList.add('navegacion__enlace');



// // //Agregar el elemento creado al documento
// const agregarElemento = document.querySelector('.navegacion');
// agregarElemento.appendChild(enlaceNuevo);

// console.log(enlaceNuevo);

//Create Element

// const elementNew = document.createElement('A')
// elementNew.href = 'elementnew.html';
// elementNew.textContent = 'Sabores';
// elementNew.classList.add('navegacion__enlace');

// // // //Agregar el elemento creado al documento

// const addNewElement = document.querySelector('.navegacion');
// addNewElement.appendChild(elementNew);

// console.log(elementNew);



//Create Element
// const nE = document.createElement('A')
// nE.href = 'nuevo.enlace.html';
// nE.textContent = 'Esencias';
// nE.classList.add('navegacion__enlace');

// //Agregar el elemento creado al documento
// const showElement = document.querySelector('.navegacion');
// showElement.appendChild(nE);


// console.log(nE);


//Eventos
console.log(1);

window.addEventListener('load', imprimir) //Load espera a que el JS y los archivos q dependen del html este listo
  
  


document.addEventListener('DOMContentLoaded', function () { //Solo espera por el html, pero no espera CSS o IMG. Se usa mas este.
    console.log(4);
});

console.log(5);

//Las funciones aca son conocidas como callback y se puden crear por fuera y mandarsen a llmar
function imprimir() {
    console.log(2);
};

//Evento scroll

window.onscroll = function () {
    console.log('scrolling...');
}


