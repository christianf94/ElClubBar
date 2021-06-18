/*---------------------------------------------------------------------------------------PRIMER FORM--------- */
var form = document.querySelector('#formulario');
const inputs = document.querySelectorAll('#formulario input');
var nombre = $("#Nombre-Apellido").value;
var email = $("#Email").value;
var tlf = $("#Telefono").value;
var fecha = $("#Dia-Hora").value;
var zona = $("#Zona").value;
var personas = parseInt($("#number").value);
var terminos = $("#Si").value;
var terminos = $("#No").value;
var comentario = $("#Comentario").value;
var tajeta = $('#tarjeta')
var precioBase= 1000;
var precioFinal= 0;
var anio=0;
var mes=0;
var dia=0; 
var hora=0;
var min=0;

const expresiones = {
    nombre: /^[aA-zÀ-ÿ\s]{1,40}$/,
    email: /^[aA-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    tlf: /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
}
const campos = {
    nombre: false,
    email: false,
    tlf: false,
    fecha: false,
    personas: false,
    zona: false,
} 

$("#Nombre-Apellido").on("change", obtenerValorNombre);
$("#Email").on("change", obtenerValorEmail);
$("#Telefono").on("change", obtenerValorTlf);
$("#Dia-Hora").on("change", obtenerValorFecha);
$("#Zona").on("change", obtenerValorZona);
$("#number").on("change", obtenerValorPersonas);
$("#Si").on("change", obtenerValorTerminos);
$("#No").on("change", obtenerValorTerminos);
$("#Comentario").on("change", obtenerValorComentarios);


function obtenerValorNombre(){ 
    nombre = this.value;
    console.log(nombre)
}
function obtenerValorEmail(){ 
    email = this.value;
    console.log(email)
}
function obtenerValorTlf(){ 
    tlf = this.value;
    console.log(tlf)
}
function  obtenerValorFecha(){ 
    hoy = new Date();
    fecha = new Date(this.value);
    anio = fecha.getFullYear();
    mes = fecha.getMonth();
    dia = fecha.getDate();
    hora = fecha.getHours()
    min = fecha.getMinutes();
    $("Dia-Hora").html(hoy)
    console.log(Date.parse(fecha))
    console.log(Date.parse(hoy))
    console.log(fecha.getHours())
    if ( Date.parse(fecha) >= Date.parse(hoy) && fecha.getHours()>= 18 && fecha.getHours() <=23){
        $("#form-group-fecha").removeClass("form-group-incorrecto")
        $("#form-group-fecha").addClass("form-group-correcto")
        $("#form-group-fecha .input-error").removeClass("input-error-activo")
        campos["fecha"] = true;
    } 
    else {
        $("#form-group-fecha").addClass("form-group-incorrecto")
        $("#form-group-fecha").removeClass("form-group-correcto")
        $("#form-group-fecha .input-error").addClass("input-error-activo")
        campos["fecha"] = false;
    }
}
obtenerValorFecha()
function obtenerValorZona(){ 
    zona = this.value.toLowerCase();
    if (zona=="living"){
        $("#form-group-zonas").removeClass("form-group-incorrecto")
        $("#form-group-zonas").addClass("form-group-correcto")
        $("#form-group-zonas .input-error").removeClass("input-error-activo")
        $(".contenedor__conetido-fondo").css({ "background-image": "url(Multimedia/inside6.png)"});
        campos["zona"] = true;
    } 
    else if(zona=="patio"){
        $("#form-group-zonas").removeClass("form-group-incorrecto")
        $("#form-group-zonas").addClass("form-group-correcto")
        $("#form-group-zonas .input-error").removeClass("input-error-activo")
        $(".contenedor__conetido-fondo").css({ "background-image": "url(Multimedia/Inside5.png"});
        campos["zona"] = true;
    }
    else if(zona=="terraza"){
        $("#form-group-zonas").removeClass("form-group-incorrecto")
        $("#form-group-zonas").addClass("form-group-correcto")
        $("#form-group-zonas .input-error").removeClass("input-error-activo")
        $(".contenedor__conetido-fondo").css({ "background-image": "url(Multimedia/inside3.png)"});
        campos["zona"] = true;
    }
    else {
        $("#form-group-zonas").addClass("form-group-incorrecto")
        $("#form-group-zonas").removeClass("form-group-correcto")
        $("#form-group-zonas .input-error").addClass("input-error-activo")
        campos["zona"] = false;
    }
    console.log(zona)
}
function obtenerValorPersonas(){ 
    personas = this.value;
    if (personas>=2 && personas<=30){
        $("#form-group-cantidad").removeClass("form-group-incorrecto")
        $("#form-group-cantidad").addClass("form-group-correcto")
        $("#form-group-cantidad #icon-validacion").addClass("fa-check-circle")
        $("#form-group-cantidad #icon-validacion").removeClass("fa-times-circle")
        $("#form-group-cantidad .input-error").removeClass("input-error-activo")
        campos["personas"] = true;
    } 
    else {
        $("#form-group-cantidad").addClass("form-group-incorrecto")
        $("#form-group-cantidad").removeClass("form-group-correcto")
        $("#form-group-cantidad #icon-validacion").addClass("fa-times-circle")
        $("#form-group-cantidad #icon-validacion").removeClass("fa-check-circle")
        $("#form-group-cantidad .input-error").addClass("input-error-activo")
        campos["fecha"] = false;
    }
    console.log(personas)
}
function obtenerValorTerminos(){ 
    if(form.question[0].checked==true || form.question[1].checked==true){
    terminos = this.value;
    console.log(terminos)
    }
}
function obtenerValorComentarios(){ 
    if(comentario == "" ||  comentario == "undefined" || comentario == " ") {
        comentario = "Ninguno"
    }
    else{
        comentario = this.value
    }
}


var calendario = [ ]; 


const renderFuntion = (e) => {
    calendario.forEach((rev)=>{
        console.log(rev)
        return tarjeta.innerHTML = `
        <h5>-Su Reserva esta creada-</h5>
        <div><h6><strong>Nombre</strong></h6><p>${rev.nombre}</p></div>
        <div><h6><strong>Email</strong></h6><p>${rev.email}</p></div>
        <div><h6><strong>Numero de Telefono</strong></h6><p>${rev.tlf}</p></div>
        <div><h6><strong>Fecha</strong></h6><p>${dia+"/"+"/"+mes+"/"+anio+" "+hora+":"+min}</p></div>
        <div><h6><strong>Zona de la Reserva</strong></h6><p>${zona}</p></div>
        <div><h6><strong>Numero de Personas</strong></h6><p>${rev.personas}</p></div>
        <div class="table-responsive"><h6><strong>Comentarios</strong></h6><p>${rev.comentario}</p></div>
        <div><h6><strong>Monto</strong></h6><p>${"$"+ rev.precioFinal}</p></div>
        <div class="buttons">
        <button class="button-regresar" href="reservas.html"><a href="reservas.html" id="linkBoton">ACEPTAR</a></button>
        </div> `
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log( campos.nombre, campos.email, campos.tlf, campos.fecha, campos.personas, campos.zona )
    var miReserva = new Reserva(nombre, email, tlf, dia, mes,anio,hora,min, zona, personas, precioBase,precioFinal,terminos,comentario)
        if(campos.nombre && campos.email && campos.tlf && campos.fecha && campos.personas && campos.zona == true){
        form.reset();
        document.querySelectorAll(".icono-validacion").forEach((icono) => {
            icono.classList.remove("icono-validacion")
            buttonAccion(miReserva)
            renderFuntion ()
            submitEvento ()
            $("#textInfo").removeClass("text-info-activo")
        })
    }
        else{
        $("#textInfo").addClass("text-info-activo")
        }
}


const validarFormulario = (e) => {
    switch (e.target.name){
        case "Nombre-Apellido":
            validarCampo(expresiones.nombre,e.target,"nombre")
        break;
        
        case "Email":
            validarCampo(expresiones.email,e.target,"email")
        break;
        
        case "Telefono":
            validarCampo(expresiones.tlf,e.target,"tlf")
        break;
    }
}
const validarCampo = (expresiones, input, campo) => {
    if(expresiones.test(input.value)){
        $(`#form-group-${campo}`).removeClass("form-group-incorrecto")
        $(`#form-group-${campo}`).addClass("form-group-correcto")
        $(`#form-group-${campo} #icon-validacion`).addClass("fa-check-circle")
        $(`#form-group-${campo} #icon-validacion`).removeClass("fa-times-circle")
        $(`#form-group-${campo} .input-error`).removeClass("input-error-activo")
        campos[campo] = true;
    }
    else{
        $(`#form-group-${campo}`).addClass("form-group-incorrecto")
        $(`#form-group-${campo}`).removeClass("form-group-correcto")
        $(`#form-group-${campo} #icon-validacion`).addClass("fa-times-circle")
        $(`#form-group-${campo} #icon-validacion`).removeClass("fa-check-circle")
        $(`#form-group-${campo} .input-error`).addClass("input-error-activo")
        campos[campo] = false;
    }
}
inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario)
    input.addEventListener('blur',validarFormulario)
})
form.addEventListener('submit',handleSubmit)


function Reserva(nombre, email, tlf, dia, mes,anio,hora,min, zona, personas, precioBase, precioFinal,terminos,comentario) { //--------#OBJETO RESERVA
    this.nombre = nombre; 
    this.email = email;
//-------------------------------------------------------------------------------------------TLF
    this.tlf = tlf
//-------------------------------------------------------------------------------------------FECHA
    this.fecha = new Fecha(dia, mes, anio);
        function Fecha(dia, mes, anio) {
            if (dia >= 1 && dia < 32) {
                this.dia = dia;
            }
            else {
                console.log("Dia no valido")
            }
            
            if (mes >= 0 && mes <= 11){
                this.mes = mes;
            }
            else{
                console.log("Mes no valido")
            }
            var d =new Date (0,mes);
                var meses = new Array();
                meses[0] ="Enero";
                meses[1] ="Febrero";
                meses[2] ="Marzo";
                meses[3] ="Abril";
                meses[4] ="Mayo";
                meses[5] ="Junio";
                meses[6] ="Julio";
                meses[7] ="Agosto";
                meses[8] ="Septiembre";
                meses[9] ="Octubre";
                meses[10] ="Noviembre";
                meses[11] ="Diciembre";
                var n= meses[d.getMonth()];
                this.mes = n;
            if (anio >= 2020) {
                this.anio = anio;
            }
            else {
                console.log("Año no valido")
            }
        }
//-------------------------------------------------------------------------------------------HORA
    if (hora >=17 && hora <=21){
        this.hora = hora;
        this.min = min;
        this.precioBase = precioBase;
        
    }
    else if (hora >= 22 && hora <= 23){
        this.precioBase = precioBase + 700; 
        this.hora = hora
        
    }
    else {
        this.precioBase = 0
        console.log("Hora no Valida")
    }
//-------------------------------------------------------------------------------------------ZONAS
    if ( zona=="living" || zona=="patio" || zona=="terraza") {
        this.zona = zona; 
    }
    else {
        console.log("Zona no valida")
    }
//-------------------------------------------------------------------------------------------#PERSONAS
        this.personas = personas
        if ( personas >=2 && personas <=5){
            this.precioFinal= precioBase 
            }
        else if ( personas >=6 && personas <=10){
            this.precioFinal= precioBase + 500
        }
        else if (personas >=10 && personas <=15){
            this.precioFinal= precioBase + 800
        }
        else if (personas >=15 && personas <=20){
            this.precioFinal= precioBase + 1200
        }
        else if (personas >=20 && personas <=30){
            this.precioFinal = precioBase + 1800
        }
        else{
            this.precioFinal = 0
        }

    this.terminos = terminos
    //-------------------------------------------------------------------------------------------#COMENTARIOS
    if(comentario == "" ||  comentario == undefined || comentario == " ") {
        this.comentario = "Ninguno"
    }
    else{
        this.comentario = comentario
    }
    console.log(comentario)

    this.reserva = function() { return this.nombre +" - "+this.email +" - "+ this.fecha +" - "+ this.hora +":"+ this.min+" - "+ this.zona + " - " +  this.precioFinal+" - "+ this.personas +" - "+this.terminos +" - "+this.comentario};

}

/*
var calendario = [ ];
for (var i = 1; i < miReserva.length; i++){
    console.log(calendario.push(miReserva[i]))
}
*/

function buttonAccion(miReserva){
    calendario.push(miReserva)
    var guardarReserva = JSON.stringify(calendario)
    localStorage.setItem("reserva",miReserva)
    localStorage.setItem("reservaJSON",guardarReserva)
    console.log(guardarReserva)
    console.log(calendario)
}
function submitEvento (){
    $("#formulario").fadeOut(500);
    $(".infoReserva").fadeIn(900);
    $(".infoReserva").css("display","flex")
    $(".tarjetaClima").fadeIn(900);
    $(".tarjetaClima").css("display","flex")
}

$("#nuevaReserva").click(iniciarForm)  
    function iniciarForm(){
        $("#tarjetaOpcion").fadeOut(500, fondoClub);
        function fondoClub(){
            $(".contenedor__contenido").addClass("contenedor__conetido-fondo");
        }
        $("#formulario").fadeIn(1000);
        $("#formulario").css("display","flex")
        $("#slide").fadeOut(500)
    }

$("#linkBoton2").click(iniciarPronostico)
    function iniciarPronostico(){
        $(".tarjetaClima").fadeIn(900);
        $(".tarjetaClima").css("display","flex")
    }
$("#linkBoton2").click(mostrarResultado)
    function mostrarResultado() {
        $(".climaTitulo").css("display","flex")
        $.ajax({
            url:"http://api.weatherstack.com/forecast?access_key=25226c7ecd0a9df7abc28dd75b8c32bd&query=Argentina",  //"http://api.openweathermap.org/data/2.5/forecast?q=buenos%20aires,ar&appid=ccf76b02f0d8dc8efff87565a4080ed3&units=metric&cnt=30",
            type: "GET",
            dataType: "json",
        }).done(function(resultadojson){
            console.log(resultadojson)
            $("#climaImg").attr("src",resultadojson.current.weather_icons);
            $("#climaDescrip").text(resultadojson.current.weather_descriptions[0])
            $("#climaTr").text(resultadojson.current.temperature + "°")
            $("#climaSr").text(resultadojson.current.feelslike + "°")
            $("#climaHm").text(resultadojson.current.humidity + "%")
            $("#climaLL").text(resultadojson.current.precip + "%")
        }).fail(function(xhr,status,error){
            console.log(xhr);
            console.log(status);
            console.log(error);
        })
    }
/*
            $("#climaDia").text(dia)
            $("#climaMes").text(mes)
            $("#climaAnio").text(anio)
*/
/*
function pronosticoButton(){
    var button = document.createElement("button");
        button.type="button";
        button.className="button-regresar";

    var link = document.createElement("a");
        link.id= "linkBoton";
        link.text ="REGRESAR"
        link.href ="proyecto.html";
        button.append(link)
        $("#textInfo").append(button);
}
*/

/*
$("#Submit").click(agregarAlCalendario)
    function agregarAlCalendario() {
        $.ajax({
            url: "JS/calendario.json",
            type: "POST",
            dataType: "json",
            date: JSON.stringify(calendario),
        }).done(function(resultadojson){
            console.log(resultadojson)
        }).fail(function(xhr,status,error){
            console.log(xhr);
            console.log(status);
            console.log(error);
        })
    }*/