// console.log('connesso');

/*

Palidroma
Chiedere all’utente di inserire una parola, Creare una funzione per capire se la parola inserita è palindroma

*/

// Chiedere all’utente di inserire una parola

const userWord = prompt('Inserisci una parola per verificare che sia palindroma');

// console.log(userWord);

/*
creiamo la variabile in cui la parola inserita dall'utente venga:
scomposta in lettere singole -> .split('') 
poi le lettere reversate -> .reverse() 
e infine le lettere vengono riunite -> .join('')
*/

const reverseWord = userWord.split('').reverse().join('');

// console.log(reverseWord);

// Creare una funzione per capire se la parola inserita è palindroma