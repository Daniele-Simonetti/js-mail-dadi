// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// 1.genero un numero random da 1 a 6 per il giocatore
const PlayerNumber = Math.floor(Math.random() * 6) + 1;
console.log('Numero del giocatore', PlayerNumber);
// 2.genero un numero random da 1 a 6 per il computer
const ComputerNumber = Math.floor(Math.random() * 6) + 1;
console.log('Numero del computer', ComputerNumber);
// 3.se il dadi del pc è più malto stampo in console hai perso altrimenti hai vinto
if (PlayerNumber > ComputerNumber) {
  // alert('Hai vinto');
  console.log('Hai vinto');
} else {
  // alert('Hai perso');
  console.log('Hai perso');
}