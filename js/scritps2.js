

//Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector('.boton--primario');//Se crea la variable, se llama la clase
// // btnEnviar.addEventListener('click', function (evento){ //Evento click -- addEventListener registra el evento
    // console.log(evento);
    // // evento.preventDefault();//se llama el evento.el prevent no hace la accion q es llevar a otra pagina al recargarse. aca no envia el formulario gracias al prevent.

// //El preventdefault(), es util para validar un formulario


    // console.log('enviando formulario');
// });


//Eventos con el teclado (Inputs-Textarea)

//Variables
const datos = {
    nombre: '',
    email:'',
    mensaje:''
}

const nombre = document.querySelector('#nombre');//Los ID se llaman con #
const email = document.querySelector('#email');//Los ID se llaman con #
const mensaje = document.querySelector('#mensaje');//Los ID se llaman con #
const formulario = document.querySelector('.formulario');

//Eventos

nombre.addEventListener('input', leerTexto); //input valida en tiempo real//target para ver el input, value para ver lo q contiene o se esta escribiendo

email.addEventListener('input', leerTexto);
    
mensaje.addEventListener('input', leerTexto);
   
//Evento submit

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();


    //Validar formulario ---- Se toman los datos que contiene el formulario y se desestructura el objeto
    const { nombre, email, mensaje} = datos;
    //Se valida que todos los campos esten llenos
    if(nombre === '' || email === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios'); //Llama a la funcion q muestra el error
        
        return;//corta la ejecucion del código
    }

    //Enviar Formulario si los campos son correctos con la alerta
    mostrarMensaje('Enviado Correctamente');
    
});



//Para evitar crear multiples funciones que hagan lo mismo, se crea una sola funcion q tome el evento y lo lea en una sola funcion.

function leerTexto(e) {  
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

//Muestra error en pantalla por medio de un mensaje creado con un parrafo
function mostrarError(mensaje) {
    const error = document.createElement('P'); //Se almacena mensaje error en elemento P html
    error.textContent = mensaje; //El contenido de textcontent es el msg q esta en el IF()
    error.classList.add('error');

    formulario.appendChild(error);

    //Desaparezca despues de 5 segundos la notificacion de error
    setTimeout(() => {
        error.remove(); //Remueve el error pasados los 5 seg
    }, 5000);
    
}
//Muestra un mensaje si se llenaron todos los campos y si se envio
function mostrarMensaje(mensaje) {
    const correcto = document.createElement('P');
    correcto.textContent = mensaje;
    correcto.classList.add('correcto');

    formulario.appendChild(correcto);

     //Desaparezca despues de 5 segundos la notificacion de error
    setTimeout(() => {
        correcto.remove(); //Remueve el error pasados los 5 seg
    }, 5000);

}






//Ejemplo otro evento
// const nombre = document.querySelector('#nombre');//Los ID se llaman con #
// // nombre.addEventListener('change', function(){ //add.eventlistener registraun evento. Change no valida en tiempo real.
    // console.log('escribiendo...')
// });
