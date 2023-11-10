let tombola = [];
let tabellone;
let tabelline = [];
let selectedCells = new Set();

for (let i = 1; i <= 76; i++) {
    tombola.push(i);
}

function generateTabellone() {
    tabellone = document.getElementById('tabellone');
    tombola.forEach(num => {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = num;
        tabellone.appendChild(cell);
    });
}
function addTabellina() {
    let tabellina = [];
    while (tabellina.length < 24) {
        let num = getRandomNumber();
        if (!tabellina.includes(num) && !tombola.includes(num)) {
            tabellina.push(num);
        }
    }
    tabelline.push(tabellina);

    let tabellinaDiv = document.createElement('div');
    tabellinaDiv.style.display = 'grid';
    tabellinaDiv.style.gridTemplateColumns = 'repeat(6, 1fr)';
    tabellinaDiv.style.gridGap = '2px';
    tabellinaDiv.style.border = '1px solid #ccc';
    tabellinaDiv.style.padding = '2px';

    tabellina.forEach(num => {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = num;
        tabellinaDiv.appendChild(cell);
    });

    let tabellineDiv = document.getElementById('tabelline');
    tabellineDiv.appendChild(tabellinaDiv);
}

// Modifica questa parte per associare l'evento di click al nuovo metodo addTabellina
document.getElementById('aumenta-tabelline').addEventListener('click', addTabellina);
function generateTabelline() {
    let count = document.getElementById('tabelline-count').value;
    let tabellineDiv = document.getElementById('tabelline');
    tabellineDiv.innerHTML = '';

    for (let i = 0; i < count; i++) {
        let tabellina = [];
        while (tabellina.length < 24) {
            let num = getRandomNumber();
            if (!tabellina.includes(num) && !tabellina.includes(num) && !tombola.includes(num)) {
                tabellina.push(num);
            }
        }
        tabelline.push(tabellina);

        let tabellinaDiv = document.createElement('div');
        tabellinaDiv.style.display = 'grid';
        tabellinaDiv.style.gridTemplateColumns = 'repeat(6, 1fr)';
        tabellinaDiv.style.gridGap = '2px';
        tabellinaDiv.style.border = '1px solid #ccc';
        tabellinaDiv.style.padding = '2px';

        tabellina.forEach(num => {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = num;
            tabellinaDiv.appendChild(cell);
            tombola.push(num); // Aggiungi il numero alla tombola
        });

        let tabellineDiv = document.getElementById('tabelline');
        tabellineDiv.appendChild(tabellinaDiv);
    }
}

function getRandomNumber() {
    let index = Math.floor(Math.random() * tombola.length);
    return tombola.splice(index, 1)[0];
}

function estraiNumero() {
    let estratto = getRandomNumber();
    selectedCells.add(estratto);

    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        if (cell.textContent == estratto) {
            cell.classList.add('selected');
        }
    });
}

function init() {
    generateTabellone();
    generateTabelline();
    document.getElementById('estrai').addEventListener('click', estraiNumero);
}

init();