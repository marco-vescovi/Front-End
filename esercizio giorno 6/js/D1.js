/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino. 
*/
/*RISPOSTA:
 sotto elenco*/
var num1 = 25; 
var str1 = "testo";
var emp1 = null; 
var emp2 = undefined;
var bol1 = true;
let str0 =" non essendo tipizzato allora le variabili possono cambiare senza limiti per esempio se io sovrascrivo a una variabile di tipo numerico una variabile di tipo testuale verrà visualizzata la variabile di tipo testuale. ma quali sono quindi i tipi di datatype? partendo da una variabile di tipo numerico,  variabile di tipo testuale, undefined significa che non c'è nessuna definizione o un assenza di una variabile, var bol È come rispondere a una domanda con un 'sì' o un 'no'.";
console.log (str0)
/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var name = "Marco";
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
let num2 = 12;
let num3= 20;
let somma = (num2+num3)
console.log(somma)
}
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var x = 12
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name = "Vescovi";
console.log(name);
/* 
constname = "Mio Cognome"; // Genera un errore 
Poiché "constName" è dichiarato con "const", non possiamo riassegnare un nuovo valore.
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
 */

/* SCRIVI QUI LA TUA RISPOSTA */
{
let num4 = 4
let sottrazione = (num4-x);
console.log(sottrazione)
}
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
var name1 = "John";
var name2 = "john";
}
// Verifica che i due nomi siano diversi 
var sonoDiversi = name1 != name2;
console.log("Sono diversi:", sonoDiversi);

// Verifica che i due nomi tramite lower case diventino identici
var sonoUgualiDopoLowercase = name1.toLowerCase() == name2;
console.log("Sono uguali dopo la trasformazione in lowercase:", sonoUgualiDopoLowercase);