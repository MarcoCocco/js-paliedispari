/* 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. 
*/


/* Palindroma:
1- Chiedi all'utente di inserire una parola tramito input in pagina.
2- Crea una funzione chiamata "isPalindrome" che accetta come parametro 
   la parola inserita dall'utente.
3- Inizializza due variabili, "start" e "end", che rappresentano 
   rispettivamente l'indice del primo carattere e l'indice dell'ultimo 
   carattere della parola.
4- Utilizzando un ciclo while, confronta i caratteri nella posizione "start"
   e "end" per verificare se sono uguali.
? SE i caratteri sono diversi, restituisci false.
? SE i caratteri sono uguali, aumenta il valore della variabile "start" di 1
  e diminuisci il valore della variabile "end" di 1 per confrontare
  il carattere successivo.
? SE il loop ha completato la verifica di tutti i caratteri e non ha 
   restituito false, la parola è palindroma, quindi restituisci true.
*/

let wordEl = document.getElementById('add-word');
let wordBtnInputEl = document.getElementById('word-btn-input');

wordBtnInputEl.addEventListener('click', function () {

    let word = wordEl.value;

    if (isPalindrome(word)) {

        console.log(word + " è un palindromo");

    } else {

        console.log(word + " non è un palindromo");

    }

});


/*Pari o Dispari
1- Chiedi all'utente di scegliere "pari" o "dispari" e di inserire un numero da 1 a 5
2- Genera un numero casuale da 1 a 5 per il computer con una funzione usando 
il Math.random
3- Calcola la somma dei due numeri inseriti dall'utente e generati casualmente dal 
computer.
4- Definisci una funzione che restituisce "pari" se il numero passato come parametro 
è pari, altrimenti restituisce "dispari"
5- Usa la funzione definita per stabilire se la somma dei numeri è pari o dispari
? SE la scelta dell'utente coincide con il risultato della funzione, dichiara che
  ha vinto l'utente 
: ALTRIMENTI dichiara che ha vinto il computer.
*/

let evenOddEl = document.getElementById('even-odd');
let randomUserNumberEl = document.getElementById('random-number');
let resultButtonEl = document.getElementById('result-button');

resultButtonEl.addEventListener('click', function () {

    let summ = parseInt(randomUserNumberEl.value) + randomNumber(1, 5);

    let res = isOdd(summ);

    if (evenOddEl.value === res) {

        console.log(`HAI VINTO! la somma del tuo numero e quella del computer è ${summ} ed è ${res}`);

    } else {

        console.log(`HAI PERSO! la somma del tuo numero e quella del computer è ${summ} ed è ${res}`);

    }

})







//FUNZIONI

function isPalindrome(word) {

    let start = 0;
    let end = word.length - 1;

    while (start < end) {

        if (word[start] !== word[end]) {

            return false;
        }

        start++;
        end--;

    }

    return true;
};




function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





function isOdd(num) {

    if (num % 2 !== 0) {

        return "Dispari";

    } else {

        return "Pari";

    }

}

