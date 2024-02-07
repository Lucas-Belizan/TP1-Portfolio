//Actividad 1

let imagen = document.getElementById('imagen');
var mouseOver=()=>{
    imagen.src = "Images/Programacion.jpg"
};

imagen.addEventListener('mouseover', mouseOver);

var mouseOut=()=>{
    imagen.src = "Images/Fotoperfil.jpg";
}
imagen.addEventListener('mouseout', mouseOut);


//Actividad 2

let infoAdicional1 = document.getElementById('infoAdicional1');
let boton1 = document.getElementById('boton1');

var mostrar1=()=>{
    infoAdicional1.className = 'visible';
}
boton1.addEventListener('click', mostrar1);

let cerrar1 = document.getElementById('cerrar1');

var cerrarVentana1=()=>{
    infoAdicional1.className = 'ocultar';
}
cerrar1.addEventListener('click', cerrarVentana1);



//segunda tarjeta

let infoAdicional2 = document.getElementById('infoAdicional2');
let boton2 = document.getElementById('boton2');

var mostrar2=()=>{
    infoAdicional2.className = 'visible';
}
boton2.addEventListener('click', mostrar2);

let cerrar2 = document.getElementById('cerrar2');

var cerrarVentana2=()=>{
    infoAdicional2.className = 'ocultar';
}
cerrar2.addEventListener('click', cerrarVentana2);


//tercera tarjeta

let infoAdicional3 = document.getElementById('infoAdicional3');
let boton3 = document.getElementById('boton3');

var mostrar3=()=>{
    infoAdicional3.className = 'visible';
}
boton3.addEventListener('click', mostrar3);

let cerrar3 = document.getElementById('cerrar3');

var cerrarVentana3=()=>{
    infoAdicional3.className = 'ocultar';
}
cerrar3.addEventListener('click', cerrarVentana3);

//cuarta tarjeta

let infoAdicional4 = document.getElementById('infoAdicional4');
let boton4 = document.getElementById('boton4');


var mostrar4=()=>{
    infoAdicional4.className = 'visible';
}
boton4.addEventListener('click', mostrar4);

let cerrar4 = document.getElementById('cerrar4');

var cerrarVentana4=()=>{
    infoAdicional4.className = 'ocultar';
}
cerrar4.addEventListener('click', cerrarVentana4);

//quinta tarjeta

let infoAdicional5 = document.getElementById('infoAdicional5');
let boton5 = document.getElementById('boton5');

var mostrar5=()=>{
    infoAdicional5.className = 'visible';
}
boton5.addEventListener('click', mostrar5);

let cerrar5 = document.getElementById('cerrar5');

var cerrarVentana5=()=>{
    infoAdicional5.className = 'ocultar';
}
cerrar5.addEventListener('click', cerrarVentana5);

//sexta tarjeta

let infoAdicional6 = document.getElementById('infoAdicional6');
let boton6 = document.getElementById('boton6');


var mostrar6=()=>{
    infoAdicional6.className = 'visible';
}
boton6.addEventListener('click', mostrar6);

let cerrar6 = document.getElementById('cerrar6');

var cerrarVentana6=()=>{
    infoAdicional6.className = 'ocultar';
}
cerrar6.addEventListener('click', cerrarVentana6);


//Actividad 3

document.getElementById('contacto1').addEventListener('submit', function (evento) {

    evento.preventDefault();

    document.getElementById('devolucion').style.color = 'green';
    document.getElementById('devolucion').innerText = 'Enviado con exito';

    document.getElementById('nombre').value = "";
    document.getElementById('numero').value = "";
    document.getElementById('email').value = "";
    document.getElementById('sujeto').value = "";
    document.getElementById('mensaje').value = "";

})



//Actividad 4

let slider=document.querySelector('.contenedor-cajas1');
let sliderCajas=document.querySelectorAll('.contenedor-cajas1 .cajas1');

let index=0;

function CajasSlider(direccion){
    index +=direccion;

    if(index<0){
        index=sliderCajas.length-1;
        
    }
    else if(index>=sliderCajas.length){
        index=0;
    }

    let desplazamiento=-index*300;
    slider.style.transform=`translatex(${desplazamiento}px)`

};

CajasSlider(0);
