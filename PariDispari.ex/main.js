// console.log('connesso');

/*

- Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.

*/

// L’utente sceglie pari o dispari

const userPick = prompt('Scegli tra pari e dispari');

console.log(userPick);

// L'utente sceglie un numero da 1 a 5

const userNumber = Number(prompt('Scegli un numero da 1 a 5'));

console.log(userNumber);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

/**
 * 
 * @returns {number}
 * 
 */
function randomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

const pcRandomNumber = randomNumber();

console.log(pcRandomNumber);