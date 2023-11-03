/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
    var rettangolo_area = l1 * l2;
    return rettangolo_area;
  }
  var lunghezza1 = 5;
  var lunghezza2 = 10;
  var risultato = area(lunghezza1, lunghezza2);
  console.log("L'area del rettangolo è: " + risultato);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(numero1, numero2) {
    if (numero1 === numero2) {
      return (numero1 + numero2) * 3;
    } else {
      return numero1 + numero2;
    }
  }
  var numero1 = 5;
  var numero2 = 5;
  var risultato = crazySum(numero1, numero2);
  console.log("Il risultato è: " + risultato); 

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(numero) {
    var differenzaAssoluta = Math.abs(numero - 19);
  
    if (numero > 19) {
      return differenzaAssoluta * 3;
    } else {
      return differenzaAssoluta;
    }
  }
  var numero = 25;
  var risultato2 = crazyDiff(numero);
  console.log("Il risultato è: " + risultato2); 

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
      return true;
    } else {
      return false;
    }
  }
  console.log(boundary(50)); 
  console.log(boundary(10)); 
  console.log(boundary(400)); 
  
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(stringa) {
    if (stringa.startsWith("EPICODE")) {
      return stringa;
    } else {
      return stringa + "EPICODE";
    }
  }
  console.log(epify("Ciao")); 
  console.log(epify("EPICODE")); 
  
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(numero5) {
    if (numero5 <= 0) {
      return false; 
    }
  
    if (numero5 % 3 === 0 || numero5 % 7 === 0) {
      return true; 
    } else {
      return false; 
    }
  }
  console.log(check3and7(9)); 
  console.log(check3and7(14)); 
  console.log(check3and7(5)); 
  console.log(check3and7(-6));
  
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(stringa) {
    var stringaInvertita = stringa.split("").reverse().join("");
    return stringaInvertita;
  }
  var stringaOriginale = "EPICODE";
  var stringaInvertita = reverseString(stringaOriginale);
  console.log("Stringa invertita: " + stringaInvertita); 
  
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(stringa) {
    var parole = stringa.split(" ");
    for (var i = 0; i < parole.length; i++) {
      var parola = parole[i];
      parole[i] = parola.charAt(0).toUpperCase() + parola.slice(1);
    }
    var stringaModificata = parole.join(" ");   
    return stringaModificata;
  }
  var stringaOriginale = "questa è una prova";
  var stringaModificata = upperFirst(stringaOriginale);
  console.log("Stringa modificata: " + stringaModificata);
  
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(stringa) {
    if (stringa.length < 2) {
      return stringa;
    }
    var nuovaStringa = stringa.slice(1, -1);
    
    return nuovaStringa;
  }
  var stringaOriginale = "EPICODE";
  var stringaModificata = cutString(stringaOriginale);
  console.log("Stringa modificata: " + stringaModificata); 
  
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    var numeriCasuali = [];
    for (var i = 0; i < n; i++) {
      var numeroCasuale = Math.floor(Math.random() * 11); 
      numeriCasuali.push(numeroCasuale);
    }
    return numeriCasuali;
  }
  var numeroDiNumeriCasuali = 5; 
  var numeriCasuali = giveMeRandom(numeroDiNumeriCasuali);
  console.log("Numeri casuali generati: " + numeriCasuali);
  