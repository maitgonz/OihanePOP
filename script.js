
/* ==================================
   OIHANEPOP! - FUNCIONAMIENTO DEL TEST
================================== */

// 1. Elementos de la página

const botonEmpezar = document.getElementById("boton-empezar");
const pantallaPortada = document.getElementById("pantalla-portada");
const pantallaPreguntas = document.getElementById("pantalla-preguntas");

const contador = document.getElementById("contador");
const preguntaTitulo = document.getElementById("pregunta-titulo");
const opcionesContenedor = document.getElementById("opciones");

const botonAnterior = document.getElementById("boton-anterior");
const botonSiguiente = document.getElementById("boton-siguiente");


// 2. Preguntas del test
// De momento ponemos solo dos para probar.

const preguntas = [
    
    // PREGUNTA 1
    {
        pregunta: "Te invitan a una house party de un alemán, amigo de un amigo de alguien. ¿Qué es lo primero que haces?",

        opciones: [
            "Directa a dejar la cerveza en la nevera. Importancia a lo importante.",
            "Busco a mis amigos y me quedo con ellos toda la noche. Estoy demasiado sobria para hablar en inglés ahora mismo.",
            "Me pongo estratégicamente cerca de la persona que tiene el móvil conectado a la música. Es cuestión de tiempo que el control pase a mis manos.",
            "Me hago un house tour por mi cuenta. Ninguna puerta me va a parar los pies."
        ]
    },

     // PREGUNTA 2
    {
        pregunta: "Es jueves de Plux. ¿Qué es lo que MÁS te apetece hacer?",

        opciones: [
            "Ir al paki a por otra cerveza.",
            "A ver si nos encontramos a Pablo y Lide le dice «¡CHORIZO!»",
            "Conocer a muchos personajes secundarios. Hoy necesito un poco de marcha.",
            "Encontrar al chico que trae a su gato al Bar de los Horrores y montarle un pollo por fin."
        ]
    },

     // PREGUNTA 3
    {
        pregunta: "Son las 19:30. Habíamos hablado de tomar algo, pero nadie ha vuelto a decir nada. ¿Qué haces?",

        opciones: [
            "«¿Hoy a qué hora?». Dejo la pregunta abierta, a ver si alguien se digna a tomar las riendas.",
            "Propongo un sitio y una hora. Total, ya sé que se va a acabar haciendo lo que yo diga.",
            "Me pongo en huelga. Hoy no pienso organizar NADA, a ver qué hacen sin mí.",
            "Salgo a la calle por mi cuenta, aunque tenga que ser con Rayan y Amalia. Yo no me quedaré un sábado en casa."
        ]
    },

     // PREGUNTA 4
    {
        pregunta: "Alguien del grupo acaba de soltar una opinión TERRIBLE. ¿Cómo reaccionas?",

        opciones: [
            "Cambio de tema. Hoy no me apetece meterme en conflictos.",
            "Me quedo callada mirando al resto, esperando POR FAVOR que alguien diga algo.",
            "«Pero a ver… ¿CÓMO vas a decir eso?». Eye roll automático.",
            "Me empiezo a reír de la barbaridad que se acaba de decir. No puedo tomármela en serio."
        ]
    },

    // PREGUNTA 5
    {
        pregunta: "Elige una frase para poner en tu estado de Tuenti.",

        opciones: [
            "Perra, pon la boca 💋",
            "La más búfala de Portugalete. Si me buscas, me encuentras ;)",
            "Si la vida te da limones, pide sal y tequila 🍋",
            "Hay gente que debería aprender a cerrar la boca de vez en cuando <3"
        ]
    },

    // PREGUNTA 6
    {
        pregunta: "Lide te dice que pareces un poco lesbiana con ese outfit. ¿Qué haces?",

        opciones: [
            "«JODER, ¿OTRA VEZ?». Me voy a cambiar de ropa inmediatamente.",
            "Hago una presentación de 20 minutos sobre por qué se equivoca.",
            "Bueno, pues qué le vamos a hacer... por las lesbianas ✊",
            "Me duele, pero no me cambio. Bastante he tardado en encontrar ese outfit entre la montaña de ropa limpia del suelo de mi cuarto."
        ]
    },

    // PREGUNTA 7
    {
        pregunta: "Te vas de viaje con tus amigos. ¿Cuál es el motivo más probable por el que acabes perdiendo los papeles?",

        opciones: [
            "Nadie hace caso a las indicaciones que he mandado por el grupo. ¿PARA QUÉ ME MOLESTO?",
            "He tenido que organizarlo TODO y encima nadie me da ni las gracias. Me pico con esta gente, ¿DE QUÉ VAN?",
            "He delegado UNA SOLA tarea, y justo esa es la que sale mal.",
            "La gente empieza a quejarse de lo que cuesta todo. La gente de fuera de Euskadi son unos tacaños individualistas y ya estoy HARTA."
        ]
    },

    // PREGUNTA 8
    {
        pregunta: "Te nombran presidenta de un país por accidente. Tu primera medida es...",

        opciones: [
            "Prohibir las opiniones incorrectas. Es decir, las que no coinciden con las mías.",
            "Crear un Ministerio de Ocio y Tiempo Libre. El objetivo de la vida es divertirse y vivir el momento.",
            "Abolir la productividad. ¿Que una máquina puede hacer el trabajo de 1.000 personas en una hora? Pues que lo hagan las 1.000 personas y tarden un mes.",
            "Prohibir Internet. La humanidad claramente no está preparada para tener acceso a él."
        ]
    },

    // PREGUNTA 9
    {
        pregunta: "Elige tu plan perfecto para un sábado.",

        opciones: [
            "Salir de fiesta. Pero que no pongan nada de música ni en francés ni en inglés, por Dios!!!!!",
            "Una fiesta que implique disfrazarse.",
            "Que alguien diferente proponga un plan por una vez. Estoy hasta el coño de organizarlo todo.",
            "Cualquier cosa que comience con «Hemos decidido que…»."
        ]
    },

    // PREGUNTA 10
    {
        pregunta: "Son las 3 de la mañana y llevas dos horas haciendo scroll en TikTok. ¿Qué vídeo consigue que te quedes otros 40 minutos?",

        opciones: [
            "Una chica moderna haciendo un tutorial de una manualidad chulísima. Necesito hacerlo YA.",
            "Un vídeo de unos cayetanos. Entro directamente a los comentarios.",
            "Una tía completamente desquiciada contando en 17 partes por qué su novio es un gilipollas. Necesito conocer todos los detalles.",
            "Un nuevo trend que puedo obligar a hacer a Brais. Sé que no necesito convencerle mucho."
        ]
    },

    // PREGUNTA 11
    {
        pregunta: "Presencias algo MUY fuerte entre dos integrantes del grupo. ¿Qué haces?",

        opciones: [
            "Escribo a una de las personas implicadas e intento convocar una intervención.",
            "Me callo y espero a ver cuánta gente mete la pata contando versiones diferentes.",
            "Se lo cuento a una persona. Esa persona se lo termina contando a todo el mundo sin querer.",
            "Empiezo a investigar por mi cuenta. Para cuando se entere el resto, ya tengo la cronología completa."
        ]
    },

    // PREGUNTA 12
    {
        pregunta: "Estás teniendo el PEOR día de tu vida en Bruselas. ¿Qué ha pasado?",

        opciones: [
            "Me han hecho un círculo de caca en el portal.",
            "Me ha atacado una paloma.",
            "Emilio me ha confesado que ha votado al PP.",
            "He tenido que hacer small talk con Camila durante diez minutos."
        ]
    }
];

// PUNTOS DE CADA RESPUESTA
// Cada respuesta: [principal (+2), secundaria (+1)]
// El orden es el mismo que en las preguntas: A, B, C, D.

const puntos = [
    // PREGUNTA 1
    [["molotov","desquiciada"], ["brexit","desgracias"], ["dictadora","metrika"], ["desquiciada","dictadora"]],
    // PREGUNTA 2
    [["lesbiana","animadora"], ["molotov","desquiciada"], ["animadora","desquiciada"], ["desquiciada","dictadora"]],
    // PREGUNTA 3
    [["animadora","lesbiana"], ["dictadora","animadora"], ["desquiciada","desgracias"], ["desgracias","metrika"]],
    // PREGUNTA 4
    [["animadora","molotov"], ["desquiciada","desgracias"], ["molotov","brexit"], ["metrika","molotov"]],
    // PREGUNTA 5
    [["metrika","metrika"], ["desquiciada","brexit"], ["lesbiana","animadora"], ["dictadora","desgracias"]],
    // PREGUNTA 6
    [["desgracias","desquiciada"], ["dictadora","desgracias"], ["lesbiana","metrika"], ["desgracias","lesbiana"]],
    // PREGUNTA 7
    [["animadora","desquiciada"], ["dictadora","desquiciada"], ["desgracias","molotov"], ["brexit","molotov"]],
    // PREGUNTA 8
    [["dictadora","molotov"], ["metrika","lesbiana"], ["brexit","molotov"], ["molotov","dictadora"]],
    // PREGUNTA 9
    [["brexit","brexit"], ["lesbiana","animadora"], ["desquiciada","molotov"], ["dictadora","animadora"]],
    // PREGUNTA 10
    [["lesbiana","animadora"], ["brexit","molotov"], ["metrika","lesbiana"], ["animadora","dictadora"]],
    // PREGUNTA 11
    [["animadora","lesbiana"], ["metrika","molotov"], ["desgracias","animadora"], ["desquiciada","brexit"]],
    // PREGUNTA 12
    [["desgracias","metrika"], ["desgracias","animadora"], ["molotov","lesbiana"], ["desquiciada","brexit"]]
];


// CALCULAR EL RESULTADO
// Orden de prioridad para los empates (de mayor a menor)

const prioridad = ["lesbiana", "brexit", "metrika", "molotov", "desgracias", "dictadora", "animadora", "desquiciada"];

function calcularResultado() {

    const total = {};
    const principales = {};

    // Empezamos todas las personalidades a 0
    prioridad.forEach(function(nombre) {
        total[nombre] = 0;
        principales[nombre] = 0;
    });

    // Recorremos las respuestas elegidas (se calcula desde cero cada vez)
    respuestas.forEach(function(eleccion, numPregunta) {

        if (eleccion === null) return;

        const principal = puntos[numPregunta][eleccion][0];
        const secundaria = puntos[numPregunta][eleccion][1];

        total[principal] += 2;
        total[secundaria] += 1;
        principales[principal] += 1;
    });

    // Buscamos la ganadora
    let ganadora = prioridad[0];

    prioridad.forEach(function(nombre) {

        if (total[nombre] > total[ganadora]) {
            ganadora = nombre;
        } else if (total[nombre] === total[ganadora] &&
                   principales[nombre] > principales[ganadora]) {
            ganadora = nombre;
        }
    });

    return { ganadora: ganadora, total: total, principales: principales };
}

// 3. Guardamos en qué pregunta estamos

let preguntaActual = 0;

// Aquí guardaremos la respuesta de cada pregunta.
// null significa que todavía no se ha contestado.

let respuestas = Array(preguntas.length).fill(null);


// 4. Función para mostrar una pregunta

function mostrarPregunta() {

    const pregunta = preguntas[preguntaActual];

    // Actualizar contador y título
    contador.textContent = "PREGUNTA " + (preguntaActual + 1) + " DE 12";

    preguntaTitulo.textContent = pregunta.pregunta;

    // Limpiar las respuestas anteriores
    opcionesContenedor.innerHTML = "";

    // Crear las cuatro opciones
    pregunta.opciones.forEach(function(texto, indice) {

        const boton = document.createElement("button");
        boton.className = "opcion";
        boton.type = "button";

        const letra = document.createElement("span");
        letra.className = "opcion-letra";
        letra.textContent = ["A.", "B.", "C.", "D."][indice];

        const contenido = document.createElement("span");
        contenido.className = "opcion-texto";
        contenido.textContent = texto;

        boton.appendChild(letra);
        boton.appendChild(contenido);

        // Recuperar la selección anterior, si existe
        if (respuestas[preguntaActual] === indice) {
            boton.classList.add("seleccionada");
        }

        // Cuando alguien selecciona esta respuesta
        boton.addEventListener("click", function() {

            respuestas[preguntaActual] = indice;

            // Actualizamos para mostrar la selección
            mostrarPregunta();

        });

        opcionesContenedor.appendChild(boton);
    });

    // Activar o desactivar los botones de navegación

    botonAnterior.disabled = preguntaActual === 0;

    botonSiguiente.disabled = respuestas[preguntaActual] === null;


    // En la última pregunta, el botón cambia de texto
    if (preguntaActual === preguntas.length - 1) {
        botonSiguiente.textContent = "VER RESULTADO";
    } else {
        botonSiguiente.textContent = "SIGUIENTE";
    }

}


// 5. Botón HAZ EL TEST

botonEmpezar.addEventListener("click", function() {

    pantallaPortada.classList.add("oculta");
    pantallaPreguntas.classList.remove("oculta");

    mostrarPregunta();

});


// 6. Botón SIGUIENTE

botonSiguiente.addEventListener("click", function() {

    if (preguntaActual < preguntas.length - 1) {
        preguntaActual++;
        mostrarPregunta();
    } else {
        mostrarResultado();
    }

});


// 7. Botón ANTERIOR

botonAnterior.addEventListener("click", function() {

    if (preguntaActual > 0) {
        preguntaActual--;
        mostrarPregunta();
    }

});



// ==============================
// TEXTOS DE LOS RESULTADOS
// ==============================

const resultados = {};

resultados.desquiciada = {
    imagen: "assets/resultados/1desquiciada.png",
    rareza: "COMÚN",
    frase: `«Esta gente me va a volver loca»`,
    descripcion: `En Bruselas no queda nadie cuerdo y te está empezando a afectar. Entre jefes sociópatas, la falta de iniciativa, los círculos de caca en el portal, las palomas hinchadas y las #DepressionWeeks, mantener la cordura se está convirtiendo en una misión imposible. No es cosa tuya. En Bruselas hay algo raro en el aire y tú llevas demasiado tiempo respirándolo.`,
    superpoder: `Tu capacidad de autoconvencerte de que todo va a ir bien (en algún momento).`,
    debil: `Que ese momento, por algún motivo, nunca termina de llegar.`
};

resultados.animadora = {
    imagen: "assets/resultados/2animadora.png",
    rareza: "COMÚN",
    frase: `«Menos mal que estoy yo, porque si no…»`,
    descripcion: `Eres el pegamento social que mantiene unido a un grupo de personas incapaces de decidir absolutamente nada. Propones planes, organizas viajes, convocas reuniones y te preocupas por todo el mundo. Llevas ya un tiempo ejerciendo de monitora de ocio y tiempo libre sin contrato, sin remuneración y, lo que es peor, sin el reconocimiento que mereces. Menos mal que estás tú, porque, de lo contrario, el mundo no avanzaría.`,
    superpoder: `Convencer a cualquiera de cualquier cosa.`,
    debil: `Que nadie te pare los pies.`
};

resultados.dictadora = {
    imagen: "assets/resultados/3dictadora.png",
    rareza: "RARA",
    frase: `«Que la gente crea lo que quiera, que yo creeré lo que yo quiera»`,
    descripcion: `Has nacido para liderar. Y cuando decimos liderar, queremos decir decidir absolutamente TODO. No se puede delegar, porque esta gente es una inútil y, total, ya sabes que lo vas a hacer mejor tú. Ya no puedes disimular más: El mundo ideal es aquel en el que tus opiniones son ley y tus preferencias, órdenes. Porque, a ver, ¿realmente hace falta democracia cuando tú ya sabes qué es lo mejor y el resto se va a equivocar porque no tiene ni gusto ni criterio?`,
    superpoder: `Que, efectivamente, sueles tener razón.`,
    debil: `Que alguien ose tener una preferencia diferente.`
};

resultados.desgracias = {
    imagen: "assets/resultados/4desgracias.png",
    rareza: "RARA",
    frase: `«¿PERO QUÉ HE HECHO YO PARA MERECER ESTO?»`,
    descripcion: `Si hay una posibilidad entre un millón de que algo salga mal, puedes estar segura de que te tocará a ti. Las palomas te persiguen, las desgracias te encuentran y la vida parece haberte elegido como protagonista de una tragicomedia en la que eres la víctima. No buscas problemas, pero los problemas saben perfectamente dónde vives. Literalmente. Te hacen círculos de caca en el portal y las ratas te entran hasta la cocina.`,
    superpoder: `Sobrevivir a acontecimientos estadísticamente improbables.`,
    debil: `Salir de casa. Aunque quedarte dentro tampoco parece mucho más seguro.`
};

resultados.molotov = {
    imagen: "assets/resultados/5molotov.png",
    rareza: "ÉPICA",
    frase: `«A esta gente le falta una mili en Euskadi»`,
    descripcion: `Tienes un espíritu antisistema que no conoce límites. Estás preparada para acabar con la UE, apuntarte a cualquier acampada y celebrar que se destrocen los escaparates de Dior, Chanel y Zara. Normalmente intentas no meterte en discusiones por el bien de la convivencia, pero tu paciencia está llegando a su límite. El cóctel ya está preparado y tú estás a un comentario de encender el mechero.`,
    superpoder: `Poder decir alguna barbaridad, porque, total, ya eres la más woke del grupo`,
    debil: `Escuchar una conversación sobre política entre Emilio y Claudia.`
};

resultados.metrika = {
    imagen: "assets/resultados/6metrika.png",
    rareza: "LEGENDARIA",
    frase: `«Eres perfecta, chocho»`,
    descripcion: `Has nacido para ser la más chula. La madre fundadora de todas las fiestas y eventos. La protagonista indiscutible de todos los saraos. Tienes un estilazo incuestionable, el eyeliner on point, las tetas arriba y el pelito clean look perfectamente engominado. No necesitas la aprobación de nadie: tú ya sabes que eres la Sharpay de Bruselas.`,
    superpoder: `Ser la más icónica del lugar.`,
    debil: `Que el flequillo se te quede hecho una mierda`
};

resultados.brexit = {
    imagen: "assets/resultados/7brexit.png",
    rareza: "LEGENDARIA",
    frase: `«I understand English, but I don't support it»`,
    descripcion: `Eres una persona muy sociable, siempre que la conversación se desarrolle en cristiano. El inglés no es cristiano y el francés directamente es judío. En cuanto alguien empieza a hablarte en inglés, frunces el ceño y desapareces antes de que pueda preguntarte de dónde eres. La situación se complica ligeramente porque vives en Bruselas, pero tú pasas de atender a razones. Tu política exterior es muy sencilla: si quieren algo de ti, que aprendan euskera.`,
    superpoder: `Hacer una bomba de humo en cuanto escuchas «Where are you from?»`,
    debil: `La EU Bubble.`
};

resultados.lesbiana = {
    imagen: "assets/resultados/8lesbiana.png",
    rareza: "LEGENDARIA",
    frase: `«Soy homófoba»`,
    descripcion: `La IA te pone pantalones, las tukus te tiran por Instagram y alguna que otra vez has notado un ambiente sospechosamente íntimo mientras le hacías el eyeliner a una chica. Pero, a ver, ¿QUÉ CULPA TIENES TÚ de que la ropa de moderna y la ropa de lesbiana sean prácticamente iguales? Quizá ha llegado el momento de meter ciertos outfits en el armario y no volver a sacarlos. Pero que la ropa tenga que volver al armario no significa que tú tengas que salir de él.`,
    superpoder: `Atraer a más lesbianas que las propias lesbianas.`,
    debil: `Lide opinando sobre tu outfit.`
};



// ==============================
// MOSTRAR EL RESULTADO
// ==============================

function mostrarResultado() {

    const resultado = calcularResultado();
    const datos = resultados[resultado.ganadora];

    document.getElementById("resultado-imagen").src = datos.imagen;
    document.getElementById("resultado-imagen").alt = "Oihane " + resultado.ganadora;
    document.getElementById("resultado-frase").textContent = datos.frase;
    document.getElementById("resultado-descripcion").textContent = datos.descripcion;
    document.getElementById("resultado-superpoder").textContent = "<3 TU SUPERPODER: " + datos.superpoder;
    document.getElementById("resultado-debil").textContent = "</3 TU PUNTO DÉBIL: " + datos.debil;
    document.getElementById("resultado-rareza").textContent = "Rareza: " + datos.rareza;

    pantallaPreguntas.classList.add("oculta");
    document.getElementById("pantalla-resultado").classList.remove("oculta");

    window.scrollTo(0, 0);
}


// ==============================
// BOTÓN: HACER EL TEST DE NUEVO
// ==============================

document.getElementById("boton-repetir").addEventListener("click", function() {

    preguntaActual = 0;
    respuestas = Array(preguntas.length).fill(null);

    document.getElementById("pantalla-resultado").classList.add("oculta");
    pantallaPortada.classList.remove("oculta");

    window.scrollTo(0, 0);
});



// ==============================
// RASTRO DE ESTRELLITAS
// ==============================

let ultimaEstrella = 0;
let estrellaAzul = false;

document.addEventListener("pointermove", function(evento) {

    // Una estrellita cada 50 milisegundos como máximo
    const ahora = Date.now();
    if (ahora - ultimaEstrella < 60) return;
    ultimaEstrella = ahora;

    const estrella = document.createElement("img");
    estrella.className = "rastro-estrella";
    estrella.alt = "";
    estrella.src = estrellaAzul ? "assets/star-blue.png" : "assets/star-yellow.png";
    estrellaAzul = !estrellaAzul;

    estrella.style.left = evento.clientX + "px";
    estrella.style.top = evento.clientY + "px";

    document.body.appendChild(estrella);

    // Borramos la estrella cuando termina su animación
    setTimeout(function() {
        estrella.remove();
    }, 800);
});