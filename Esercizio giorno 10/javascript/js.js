 /* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */
       let h = window.document.getElementById("titolo")
       h.innerText = "Testo modificato tramite javascript"
 
       /* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
 
         const addClassToTitle = function () {
         const titleElement = document.querySelector('h1');
         titleElement.classList.add('myHeading');
 
       }
       addClassToTitle();
 
       /* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div senza dare id al div
       */
     const cambiaP = function () {
     const parentDiv = document.querySelector('#myDiv');
     const pElements = parentDiv.getElementsByTagName('p');
     for (let i = 0; i < pElements.length; i++) {
        pElements[i].textContent = 'Questo è il nuovo testo';
     }
}
     cambiaP();
 
       /* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
 
       const changeUrls = function () {
      const linkElements = document.querySelectorAll('a');
      linkElements.forEach(link => {
      if (!link.closest('footer')) {
       link.href = 'https://www.google.com';
      }
      });
 }
      changeUrls();
 
       /* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
 
     const aggiungilista = function () {
         const newListItem = document.createElement('li');
         newListItem.textContent = '4th';
         const secondUnorderedList = document.querySelectorAll('ul')[1];
         secondUnorderedList.appendChild(newListItem);
       }
         aggiungilista();
 
       /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
 
         const addParagraph = function () {
         const firstDiv = document.querySelector('div');
         const newParagraph = document.createElement('p');
         newParagraph.textContent = 'Questo è unparagrafo aggiuntivo.';
         firstDiv.appendChild(newParagraph);
       }
       addParagraph();
 
       /* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
 
      const hideFirstUl = function () {
         const firstUl = document.querySelector('ul');
         firstUl.style.display = 'none';
        }
        hideFirstUl();
 
       /* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
 
         const paintItGreen = function () {
         const ulElements = document.querySelectorAll('ul');
         ulElements.forEach(ul => {
         ul.style.backgroundColor = 'green';
          });
       }
       paintItGreen();
 
       /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
          const makeItClickable = function () {
          const h1Element = document.querySelector('h1');
          h1Element.addEventListener('click', function () {
          h1Element.textContent = h1Element.textContent.slice(0, -1);
         });
       }
       makeItClickable();
 
       /* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
 
         const revealFooterLink = function () {
         const footerElement = document.querySelector('footer');
         footerElement.addEventListener('click', function (event) {
         const linkElement = event.target.closest('a');
         if (linkElement) {
          alert('URL del link interno: ' + linkElement.href);
           }
         });
       }
       revealFooterLink();
 
       /* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
 
       const generateTable = function () {}
 
       /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
 
       const addRow = function () {}
 
       /* ESERCIZIO 13
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
 
       const hideAllImages = function () {}
 
       /* EXTRA ESERCIZIO 14
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
 
       const changeColorWithRandom = function () {}
 
       /* EXTRA ESERCIZIO 15
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */
 
       const deleteVowels = function () {}