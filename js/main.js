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

    //Random number para hacer pruebas, porque no me está sacando el "has ganado"
    const randomNumber = 4 ;
    const value = inputNumber.value;
    console.log(randomNumber)

// If else añadido para comparar el valor que introduce la usuaria con el random y sacar las pistas en su caja HTML.
debugger;
    if(value > maxNumber)
    {
        inputClue.innerHTML = 'El número debe estar entre 1 y 100';
    }
    else if (value === randomNumber) {
        inputClue.innerHTML = 'Has ganado campeona!!!';
    }
    else if (value < randomNumber) {
        inputClue.innerHTML = 'Demasiado bajo';
    }
    else if (value > randomNumber) {
        inputClue.innerHTML = 'Demasiado alto';
    }

}

//EVENTOS//
//EventListener para que el botón active al click la función guessTheNumber//
buttonPrueba.addEventListener(   'click'  ,   guessTheNumber  );