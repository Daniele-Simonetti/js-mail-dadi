// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// 1.chiedo all'utente di inserire la sua mail
const mail = prompt('Inserisci la tua mail');
// 2.creo un array con le mail verificate
const MailsVerificate = ['mail 1', 'mail 2', 'mail 3'];
// 3.inserisco la variabile true/false per non far cercare ogni singolo elemento del ciclo
let find = false;
// 4.verifico che la mail inserita dall'utante sia nell'array
for (let i = 0; i < MailsVerificate.length; i++) {
  if (mail.toLowerCase() == MailsVerificate[i].toLowerCase()) {
    find = true;
  } 
}

// 5.se la mail è nell'elenco allora stamperò "mail verificata", altrimenti stamperò "mail non verificata"
console.log(find);
if (find == true) {
  console.log('Mail Verificata');
} else {
  console.log('Mail Non Verificata');
}