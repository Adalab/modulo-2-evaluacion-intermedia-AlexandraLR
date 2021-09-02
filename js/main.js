'use strict';

//CONSTANTES//

const inputNumber = document.querySelector('.js_clientnumber');
const inputClue = document.querySelector('.js_clue');
const inputCounter = document.querySelector('.js_counter');
const buttonPrueba = document.querySelector('.js_buttonprueba');

//defino valor máximo de getRandomNumber en MaxNumber como constante para que no pase de 100//
const maxNumber = 100;

//FUNCIONES//
// dada por el ejercicio, función que saca números random //
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
// Función guessTheNumber para sacar el número random por la consola y que lo compare al que la usuaria mete en el input//
function guessTheNumber() 
{
    const randomNumber = getRandomNumber(maxNumber);
    const value = inputNumber.value;
    console.log(randomNumber)
}

//EVENTOS//
//EventListener para que el botón active al click la función guessTheNumber//
buttonPrueba.addEventListener(   'click'  ,   guessTheNumber  );