"use strict";


// Ejercicio de la edad del perro
const edadPerro=2;
const edad1anio=15;
const edad2anio=9;
const edad3anio=5;
let edadHumano;

if (edadPerro <=1) {
    edadHumano=15;
    console.log("la edad humana es " + edadHumano);
} else if (edadPerro <1 && edadPerro<=2) {
    // else if (edadPerro === 2 || edadPerro===5)
edadHumano = edad1anio + edad2anio;
console.log ("la edad humana es " + edadHumano);
} else {
    edadHumano = edad1anio + edad2anio + (edadPerro*5)
    console.log ("la edad humana es " + edadHumano);
}

// Ejercicio 6 LOGUEANDO ERRORES
function getEl(selector) {

 const elemento = document.querySelector(selector);

console.log (elemento);
    if (elemento){
        return elemento;

    } else {
     console.error ("no existe elemento" + selector);

    }
}

const parrafo = getEl(".js_parra");
parrafo.eddEventListener("click", console.log(parrafo));


// Ejercicio AVATARES y EVENTOS 1.0
const list = document.querySelectorAll(".teacher");
const text = document.querySelectorAll(".favorite");


function paintSelected(ev){
// CADA LI, sobre elemento en el que escucho. Algo grande, un div mamá.
console.log(ev.currentTarget);
// en el que está el click.
console.log (ev.target);

// Sería el currentTarget porque es el contenedor del elemento.
const elemento = ev.currentTarget;
// SIN PUNTO EN LA CLASE.
elemento.classList.toggle("teacher--selector");
}

for (const item of list){
    item.addEventListener("click", paintSelected);
}




// Ejercicio AVATARES y EVENTOS 2.0
const list = document.querySelectorAll(".teacher");
const text = document.querySelector(".favorite");


function paintSelected(ev){
// CADA LI, sobre elemento en el que escucho. Algo grande, un div mamá.
console.log(ev.currentTarget);
// en el que está el click.
console.log (ev.target);

//PARA SACAR EL ELEMENTO PADRE, cuando el current es el UL, necesitamos ver el elemento específico al que hemos dado click.
const child = ev.target;
const elemento = child.parentNode;

const elemento = ev.currentTarget;
const text = elemento.querySelector(".favorite");
elemento.classList.toggle("teacher--selected");
    if(text.innerHTML === "añadir"){
        text.innerHTML = "quitar";
    }else{
        text.innerHTML ="añadir";
    }
}

for (const item of list){
    item.addEventListener("click", paintSelected);
}

// 2.7.6, 7, 8.
//  EJERCICIO 6

const adalabers = [
    {
        name: 'María',
        age: 31,
        job: 'diseñadora',
    },
    {
        name: 'María',
        age: 31,
        job: 'diseñadora',
    },
    {
        name: 'María',
        age: 31,
        job: 'diseñadora',
    },
    {
        name: 'María',
        age: 31,
        job: 'diseñadora',
    }
]

function countAdalabers(){
    return adalabers.length;
}

function averageAge(){
    let suma =0;
    for (const item of adalabers){
        suma+= item.age;
    }
    const media = suma/countAdalabers();
    return media;
}

function theYoungest (){
    let ageYoungest = adalabers[0].age;
    for (const item of adalabers){

        if (item.age < ageYoungest){
            ageYoungest=item.age;
        }
    }
    return ageYoungest;
}

function countDesigners(){
    // Creamos una variable que se inicializa en cero y le voy sumando conforme se cumpla.
    let designers = 0;
    for (const item of adalabers){

        if (item.job === "diseñadora"){
            designers++;
        }
    }
    return designers;
}

console.log (countAdalabers());
console.log(averageAge());

// para recorrer un bucle
for (let i=0 ; i<100 ; i++)

// SPLICE.
let months = [
    'january',
    'February',
    'march',
    'april',
    'may',

]

//LOS CORTA PERO SE LOS GUARDA y luego enseña en Months los meses que quedan y en springs los que ha cortado.
let springMonths = months.splice(2,3);
console.log (months); // (5) Todos los meses menos primavera
console.log (springMonths); //(3) los meses de primavera

// ¿AÑADIR?

// Ejercicio 2 de APIS
const search = document.querySelector(".js-search");
const btn = document.querySelector(".js-btn");

function findCharacter(ev){
    const textSearch = search.value;
    const url = "https://swapi.dev/api/people/?search="+textSearch;
    console.log(url);

    fetch(url)
    .then((result)=>result.json())
    .then ((data)=>{
        console.log(data);
        console.log(data.result[0].name)
    })
}

btn.addEventListener ("click", findCharacter );