// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// 1.genero un numero random da 1 a 6 per il giocatore
let PlayerNumber = Math.floor(Math.random() * 6) + 1;
console.log('Numero del giocatore', PlayerNumber);
// 2.genero un numero random da 1 a 6 per il computer
let ComputerNumber = Math.floor(Math.random() * 6) + 1;
console.log('Numero del computer', ComputerNumber);
// 3.se il dado del pc è più malto stampo in console hai perso altrimenti hai vinto oppure pareggio
if (PlayerNumber > ComputerNumber) {
  console.log('Hai vinto');
} else if (PlayerNumber < ComputerNumber) {
  console.log('Hai perso');
} else {
  console.log('Pareggio');
}