class Vector {
    constructor (n){
        var array = []
        for (var i=0;i<n;i++){
            array[i]= false
        }
        this.vector = array
    }
}
class Matriz{
    constructor(n,m){
        let Mat = []
        for (let i=0; i<n;i++){
            Mat[i]= new Vector(m)
        }

        this.matriz = Mat
    }
}

class Contenido {
    constructor (pregunta, id, value){
        this.pregunta = pregunta;
        this.id = id
        this.value = value
    }
}

let aleatorio = 0
let dadoelegido = ""
let jugador = ""

let salaNegra = new Matriz(5,10)
let salaRoja = new Matriz (5,10)


let contenido1A = new Contenido ("¿Que elemento químico representa el número atómico 1?" + "</br>" + "<div class='form-check' id='check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='Hidrogeno' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Hidrogeno</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='Magnesio'><label class='form-check-label' for='exampleRadios2' id='opcion2'>Magnesio</label></div>", 1, "Hidrogeno")
let contenido1B = new Contenido ("¿Cuál es el nombre del primer asteroide, descubierto por G.Pazzi en Palermo?" + "</br>" + "<div class='form-check' id='q12'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='Ceres' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Ceres</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='Alisis'><label class='form-check-label' for='exampleRadios2' id='opcion2'>Alisis</label></div>", 2, "Ceres")
let contenido1C = new Contenido ("¿Cuál ha sido el máximo anotador histórico en la NBA llevando el número 1?" + "</br>" + "<div class='form-check' id='q13'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='Charleston' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Charleston</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='Robertson'><label class='form-check-label' for='exampleRadios2' id='opcion2'>Robertson</label></div>", 3, "Robertson")
let contenido1D = new Contenido ("¿En qué País es es número 1 el prefijo telefónico?" + "</br>" + "<div class='form-check' id='q14'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='Australia' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Australia</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='Canada'><label class='form-check-label' for='exampleRadios2' id='opcion2'>Canada</label></div>", 4, "Canada")
let contenido1E = new Contenido ("Que cantante estounidense canta la cancion 1+1?"+ "</br>" + "<div class='form-check' id='q15'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='Beyonce' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Beyonce</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='Rihanna'><label class='form-check-label' for='exampleRadios2' id='opcion2'>Rihanna</label></div>", 5, "Beyonce")
let contenido1F = new Contenido ("¿Cuál es la denominación de las religiones que creen en un único Dios?" + "</br>" + "<div class='form-check' id='q16'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='Monoteistas' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Monoteistas</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='Monoteteistas'><label class='form-check-label' for='exampleRadios2' id='opcion2'>Monoteteistas</label></div>", 6, "Monoteistas")
let contenido2A = new Contenido ("¿Con qué otros dos números es compatible el número 2?" + "</br>" + "<div class='form-check' id='q21'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='6y8' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >6 y 8</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='4y5'><label class='form-check-label' for='exampleRadios2' id='opcion2'>4 y 5</label></div>", 7, "6y8")
let contenido2B = new Contenido ("¿Para qué dos signos zodiacales es el número de la suerte el 2?" + "</br>" + "<div class='form-check' id='q22'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='LeoYVirgo' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Leo y Virgo</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='CancerYLibra'><label class='form-check-label' for='exampleRadios2' id='opcion2'>Cancer y Libra</label></div>", 8,"CancerYLibra" )
let contenido2C = new Contenido ("¿Que elemento químico representa el número atómico 2?" + "</br>" + "</br>" + "<div class='form-check' id='q23'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='Sodio' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Sodio</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='Helio'><label class='form-check-label' for='exampleRadios2' id='opcion2'>Helio</label></div>", 9,"Helio" )
let contenido2D = new Contenido ("¿Es el dos el primer número primo?" + "</br>" + "<div class='form-check' id='q24'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='Verdadero' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Verdadero</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='option2'><label class='form-check-label' for='exampleRadios2' id='Falso'>Falso</label></div>", 10,"Verdadero" )
let contenido2E = new Contenido ("¿Cuál es el Pokemon nº2 en la pokedex nacional?" + "<div class='form-check' id='q25'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='Ivysaur' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Ivysaur</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='Venusaur'><label class='form-check-label' for='exampleRadios2' id='opcion2'>Venusaur</label></div>", 11,"Ivysaur" )
let contenido2F = new Contenido ("¿Cuantos huevos hay en 8 medias docenas?" + "<div class='form-check' id='q26'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value= 48 checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >48</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value=56><label class='form-check-label' for='exampleRadios2' id='opcion2'>56</label></div>", 12, 48 )
let contenido3A = new Contenido ("¿Con qué otros dos números es compatible el número 2?" + "</br>" + "<div class='form-check' id='q31'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='6y8' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >6 y 8</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='7y9'><label class='form-check-label' for='exampleRadios2' id='opcion2'>7 y 9</label></div>", 13, "6y8")
let contenido3B = new Contenido ("¿Que elemento químico representa el número atómico 3?" + "</br>" + "<div class='form-check' id='q32'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='Berilio' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Berilio</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='Litio'><label class='form-check-label' for='exampleRadios2' id='opcion2'>Litio</label></div>", 14, "Litio")
let contenido3C = new Contenido ("¿Es el 3 el primer número primo?" + "</br>" + "<div class='form-check' id='q33'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='Verdadero' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Verdadero</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='Falso'><label class='form-check-label' for='exampleRadios2' id='opcion2'>Falso</label></div>", 15, "Falso")
let contenido3D = new Contenido ("¿Como se llamaba el antagonista del aclamado cuento infantil 'Los 3 cerditos'" + "</br>" + "<div class='form-check' id='q34'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='LoboFeroz' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Lobo Feroz</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='MalvadoZarof'><label class='form-check-label' for='exampleRadios2' id='Falso'>Malvado Zarof</label></div>", 16, "LoboFeroz")
let contenido3E = new Contenido ("¿Como se denomina el triángulo que tiene 3 lados iguales?" + "</br>" + "<div class='form-check' id='q35'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='Equilatero' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Equilatero</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='Rectangulo'><label class='form-check-label' for='exampleRadios2' id='opcion2'>Rectangulo</label></div>", 17, "Equilatero")
let contenido3F = new Contenido ("¿Como se denomina la carrera en la que se desarrollan 3 disciplinas: natacion, running y bici?"+ "</br>" + "<div class='form-check' id='q36'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value= 48 checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >48</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value=56><label class='form-check-label' for='exampleRadios2' id='opcion2'>56</label></div>", 18, "Triatlon")
let contenido4A = new Contenido ("¿Cual es el significado de la frase: 'quedan 4 gatos'?" + "</br>" + "<div class='form-check' id='q41'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='PocaGente' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Queda poca gente</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='MuchaGente'><label class='form-check-label' for='exampleRadios2' id='opcion2'>Queda mucha gente</label></div>", 19, "PocaGente")
let contenido4B = new Contenido ("¿Que tipo de coche es un 4x4?" + "</br>" + "<div class='form-check' id='q42'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='Todoterreno' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Todoterreno</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='Deportivo'><label class='form-check-label' for='exampleRadios2' id='opcion2'>Deportivo</label></div>", 20, "Todoterreno")
let contenido4C = new Contenido ("¿Con que número es copatible el 4?" + "</br>" + "<div class='form-check' id='q43'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value=5 checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >5</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value=9><label class='form-check-label' for='exampleRadios2' id='opcion2'>9</label></div>", 21, 9)
let contenido4D = new Contenido ("¿Es el número 4 el primer número compuesto?" + "</br>" + "<div class='form-check' id='q44'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='Verdadero' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Verdadero</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='Falso'><label class='form-check-label' for='exampleRadios2' id='opcion2'>Falso</label></div>", 22, "Verdadero")
let contenido4E = new Contenido ("¿Que famosa actriz española nacio en abril?" + "</br>" + "<div class='form-check' id='q45'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='PenelopeCruz' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >PenelopeCruz</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='UrsulaCorbero'><label class='form-check-label' for='exampleRadios2' id='opcion2'>UrsulaCorbero</label></div>", 23, "PenelopeCruz")
let contenido5A = new Contenido ("¿Es el 5 el signo de la acción y la inquietud?" + "</br>" + "<div class='form-check' id='q51'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='Verdadero' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Verdadero</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='Falso'><label class='form-check-label' for='exampleRadios2' id='opcion2'>Falso</label></div>", 24, "Verdadero")
let contenido5B = new Contenido ("¿Cuantos ángulos tiene un pentágono?" + "</br>" + "<div class='form-check' id='q52'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value= 5 checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >5</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value=6><label class='form-check-label' for='exampleRadios2' id='opcion2'>6</label></div>", 25, 5)
let contenido5C = new Contenido ("¿Cual es el elemento con número atómico 5?" + "</br>" + "<div class='form-check' id='q53'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value= 'Boro' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Boro</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='Carbono'><label class='form-check-label' for='exampleRadios2' id='opcion2'>Carbono</label></div>", 26, "Boro")
let contenido5D = new Contenido ("¿Se caracterizan las personas '5' por ser vitales?" + "</br>" + "<div class='form-check' id='q54'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='Verdadero' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Verdadero</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='Falso'><label class='form-check-label' for='exampleRadios2' id='opcion2'>Falso</label></div>", 27, "Verdadero")
let contenido6A = new Contenido ("¿Como se denomina comunmente en términos deportivos a la consecución de 6 títulos durante un mismo año por parte de un equipo?" + "</br>" + "<div class='form-check' id='q61'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='Sextete' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Sextete</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='Sextuplete'><label class='form-check-label' for='exampleRadios2' id='opcion2'>Sextuplete</label></div>", 28, "Sextuplete")
let contenido6B = new Contenido ("¿Que postura sexual esta representada por un número compuesto por dos dígitos, siendo uno de ellos el 6?" + "</br>" + "<div class='form-check' id='q62'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value= 69 checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >69</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value=68><label class='form-check-label' for='exampleRadios2' id='opcion2'>68</label></div>", 29, 69)
let contenido6C = new Contenido ("¿Que elemento químico tiene como número atómico el 6?" + "</br>" + "<div class='form-check' id='q63'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value= 'Carbono' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Carbono</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='Neon'><label class='form-check-label' for='exampleRadios2' id='opcion2'>Neon</label></div>", 30, "Carbono")
let contenido6D = new Contenido ("¿Tiene 6 estrellas la bandera de la Comunidad de Madrid?" + "</br>" + "<div class='form-check' id='q64'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='Verdadero' checked><label class='form-check-label' for='exampleRadios1' id = 'opcion1' >Verdadero</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios2' value='Falso'><label class='form-check-label' for='exampleRadios2' id='opcion2'>Falso</label></div>", 31, "Falso")

let arrayContenido = [contenido1A, contenido1B, contenido1C, contenido1D, contenido1E, contenido1F, contenido2A, contenido2B, contenido2C, contenido2D, contenido2E, contenido2F, contenido3A,contenido3B,contenido3C,contenido3D,contenido3E,contenido3F,contenido4A, contenido4B,contenido4C, contenido4D, contenido4E, contenido5A, contenido5B, contenido5C, contenido5D, contenido6A, contenido6B, contenido6C, contenido6D]
 
comprobarTodo = () =>{
    for(let i=0; i<salaNegra.matriz.length; i++){
        let j=0
        let condicion = false
        while(j<8 && condicion==false){
            if(salaNegra.matriz[i].vector[j]==true && salaNegra.matriz[i].vector[j+1]==true && salaNegra.matriz[i].vector[j+2]==true || salaNegra.matriz[i].vector[j]== true && salaNegra.matriz[i+1].vector[j]== true && salaNegra.matriz[i+2].vector[j]== true || salaNegra.matriz[i].vector[j]==true && salaNegra.matriz[i+1].vector[j+1]==true && salaNegra.matriz[i+2].vector[j+2]==true || salaNegra.matriz[i].vector[j+2]==true && salaNegra.matriz[i+1].vector[j+1]==true && salaNegra.matriz[i+2].vector[j]==true){
                console.log("Black Player Wins!");
                $("#cuerpo").html("<button type='button' class='btn btn-warning restart' onclick='restart()'><b>REVANCHA</b></button>")
                $("#cuerpo").css("background-image", "url(https://static.vibe.com/files/2016/05/wOXngPZSxwMdzgm-800x450-noPad-compressed.jpg)")
                condicion = true
            }else if(salaRoja.matriz[i].vector[j]==true && salaRoja.matriz[i].vector[j+1]==true && salaRoja.matriz[i].vector[j+2]==true || salaRoja.matriz[i].vector[j]== true && salaRoja.matriz[i+1].vector[j]== true && salaRoja.matriz[i+2].vector[j]== true || salaRoja.matriz[i].vector[j]==true && salaRoja.matriz[i+1].vector[j+1]==true && salaRoja.matriz[i+2].vector[j+2]==true || salaRoja.matriz[i].vector[j+2]==true && salaRoja.matriz[i+1].vector[j+1]==true && salaRoja.matriz[i+2].vector[j]==true ){
                console.log("Red Player Wins!");
                $("#cuerpo").html("<button type='button' class='btn btn-warning restart' onclick='restart()'><b>REVANCHA</b></button>")
                $("#cuerpo").css("background-image", "url(https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https:%2F%2Foctopusthrower.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F664251638.jpeg)")
                condicion = true
            }else{
                j++
            }
        }
    }
}


dadoaleatorio = () =>{
    let numeroAleatorio = Math.floor(Math.random()*6)+1
    let comprobacion = false
    let i=1
    while(i<7 && comprobacion == false){
        if(numeroAleatorio == i){
            dadoelegido = "C:/Users/Enrique/Documents/kike/MiProyecto/Dado" + i + ".png"
            comprobacion = true
        }else{
            i++
        }
    }
    return dadoelegido; 
}

preguntas = (aleatorio) =>{
    let numero = aleatorio
    let i = 0
    let condicion = false
    while (i<arrayContenido.length && condicion == false){
        if(arrayContenido[i].id == numero){
            $("#body").html(arrayContenido[i].pregunta)
            condicion = true
        }else{
            i++
        }
    }
}

lanzarDado = (id) =>{
    $("#envio").html("<button type='button' class='btn btn-primary' id='enviar' onclick='enviarRespuesta()'>Enviar respuesta</button>")
    jugador = id
    $("#"+id).attr("src",dadoaleatorio())
    $("#body").removeClass('verde')
    $("#body").removeClass('rojo')
    $("#exampleModal").modal('show')
        if($("#" + id).attr("src")== "C:/Users/Enrique/Documents/kike/MiProyecto/Dado1.png"){
            aleatorio = Math.floor(Math.random()*6)+1
            preguntas(aleatorio)
        }else if($("#" + id).attr("src")== "C:/Users/Enrique/Documents/kike/MiProyecto/Dado2.png"){
            aleatorio = Math.floor(Math.random()*(12-7))+7
            preguntas(aleatorio)
        }else if($("#" + id).attr("src")== "C:/Users/Enrique/Documents/kike/MiProyecto/Dado3.png"){
            aleatorio = Math.floor(Math.random()*(18-13))+13
            preguntas(aleatorio)
        }else if($("#" + id).attr("src")== "C:/Users/Enrique/Documents/kike/MiProyecto/Dado4.png"){
            aleatorio = Math.floor(Math.random()*(23-19))+19
            preguntas(aleatorio)
        }else if($("#" + id).attr("src")== "C:/Users/Enrique/Documents/kike/MiProyecto/Dado5.png"){
            aleatorio = Math.floor(Math.random()*(27-24))+24
            preguntas(aleatorio)
        }else{
            aleatorio = Math.floor(Math.random()*(31-28))+28
            preguntas(aleatorio)
        }
}

enviarRespuesta = () =>{
    $("#envio").html("")
    let i = 0
    let condicion = false
    while(i<arrayContenido.length && condicion == false){
        if(aleatorio == arrayContenido[i].id){
            if(document.getElementById("exampleRadios1").checked){
                if(document.getElementById("exampleRadios1").value == arrayContenido[i].value){
                    $("#body").html("Respuesta Correcta: Puedes reservar una de las butacas del cine!");
                    $("#body").addClass("verde")
                    setTimeout(function(){$("#exampleModal").modal('hide')}, 2000)
                    for(let i=1; i<51;i++){
                        $("#"+i).on('click',cambiarColor = () =>{
                            if(jugador == "uno"){
                                document.getElementById(i).setAttribute('src', "https://www.soyvisual.org/sites/default/files/styles/twitter_card/public/images/photos/col_0007.jpg?itok=VnZtW70w")
                                if(i<11){
                                    salaNegra.matriz[0].vector[i-1] = true
                                }else if(i>=11 && i<21){
                                    salaNegra.matriz[1].vector[i-11] = true
                                }else if(i>=21 && i<31){
                                    salaNegra.matriz[2].vector[i-21] = true
                                }else if(i>=31 && i<41){
                                    salaNegra.matriz[3].vector[i-31] = true
                                }else{
                                    salaNegra.matriz[4].vector[i-41] = true
                                }
                                console.log(salaNegra.matriz);
                                comprobarTodo()
                            }else{
                                document.getElementById(i).setAttribute('src', "https://s.yimg.com/ny/api/res/1.2/ZTb0oNQOFsxHEyLwJI.NdQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NjM0O2g9NTY5O2lsPXBsYW5l/http://36.media.tumblr.com/78d541518a347a9d1b5da591ddc930a3/tumblr_inline_o55fq4egZo1tty580_1280.jpg")
                                if(i<11){
                                    salaRoja.matriz[0].vector[i-1] = true
                                }else if(i>=11 && i<21){
                                    salaRoja.matriz[1].vector[i-11] = true
                                }else if(i>=21 && i<31){
                                    salaRoja.matriz[2].vector[i-21] = true
                                }else if(i>=31 && i<41){
                                    salaRoja.matriz[3].vector[i-31] = true
                                }else{
                                    salaRoja.matriz[4].vector[i-41] = true
                                }
                                comprobarTodo()
                            }
                        })
                    }                    
                }else{
                    $("#body").html("Respuesta Fallida: Lastima, espera un turno para elegir tu butaca!")
                    $("#body").addClass("rojo")
                    setTimeout(function(){$("#exampleModal").modal('hide')}, 2000)
                }
            }else{
                if(document.getElementById("exampleRadios2").value == arrayContenido[i].value){
                    $("#body").html("Respuesta Correcta: Puedes reservar una de las butacas del cine!")
                    $("#body").addClass("verde")
                    setTimeout(function(){$("#exampleModal").modal('hide')}, 2000)
                    for(let i=1; i<51;i++){
                        $("#"+i).on('click',cambiarColor = () =>{
                            if(jugador == "uno"){
                                document.getElementById(i).setAttribute('src', "https://www.soyvisual.org/sites/default/files/styles/twitter_card/public/images/photos/col_0007.jpg?itok=VnZtW70w")
                                if(i<11){
                                    salaNegra.matriz[0].vector[i-1] = true
                                }else if(i>=11 && i<21){
                                    salaNegra.matriz[1].vector[i-11] = true
                                }else if(i>=21 && i<31){
                                    salaNegra.matriz[2].vector[i-21] = true
                                }else if(i>=31 && i<41){
                                    salaNegra.matriz[3].vector[i-31] = true
                                }else{
                                    salaNegra.matriz[4].vector[i-41] = true
                                }
                                comprobarTodo()
                                console.log(salaNegra.matriz);
                            }else{
                                document.getElementById(i).setAttribute('src', "https://s.yimg.com/ny/api/res/1.2/ZTb0oNQOFsxHEyLwJI.NdQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NjM0O2g9NTY5O2lsPXBsYW5l/http://36.media.tumblr.com/78d541518a347a9d1b5da591ddc930a3/tumblr_inline_o55fq4egZo1tty580_1280.jpg")
                                if(i<11){
                                    salaRoja.matriz[0].vector[i-1] = true
                                }else if(i>=11 && i<21){
                                    salaRoja.matriz[1].vector[i-11] = true
                                }else if(i>=21 && i<31){
                                    salaRoja.matriz[2].vector[i-21] = true
                                }else if(i>=31 && i<41){
                                    salaRoja.matriz[3].vector[i-31] = true
                                }else{
                                    salaRoja.matriz[4].vector[i-41] = true
                                }
                                comprobarTodo()
                            }
                        })
                    }
                }else{
                    $("#body").html("Respuesta Fallida: Lastima, espera un turno para elegir tu butaca!")
                    $("#body").addClass("rojo")
                    setTimeout(function(){$("#exampleModal").modal('hide')}, 2000)
                }
            }
            condicion = true
        }else{
            i++
        }
    }
}

restart = () =>{
    location.reload()
}