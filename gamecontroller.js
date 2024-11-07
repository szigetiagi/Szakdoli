// Initialize the Welcome Page content in ActuallSituation
function loadWelcomePage() {
    const actuallSituation = document.getElementById('ActuallSituation');

    // Set the welcoming speech in ActuallSituation
    const welcomingSpeech = `
        Légy üdvözölve, bátor Roxforti végzős!
        Eljött az idő, hogy megméresd magad egy ősi, misztikus próbatételen, amely csak a legkiválóbb diákoknak adatott meg!
        A Tiltott Rengeteg homályában, hol a fák suttogása és a holdfény árnyai életre kelnek, nyolc különleges lénnyel kell majd szembenézned ahhoz, hogy végül házad vezetője elé állhass!
        Ha őt is sikeresen térdre kényszeríted, már csupán az ünneplés és diplomád átvétele vár rád!
        Mire számíthatsz? Talán farkasszemet nézel egy ragadozó kentaurral, vagy a gondolataid mélyére látó mumussal. Talán találkozol egy bölcs főnixszel, vagy szárnyas thesztrálok libbennek el melletted.
        Az akromantulák hálója is ott lapul a fák között, és nem kizárt, hogy egy sárkány tüzes lehelete is útadat állja!
        Ám ne feledd, a Rengeteg titokzatos lényei között sokkal több veszély leselkedik, mint amit a könyvek mesélnek. Csak az igazán rátermett varázslók képesek végigjárni ezt az ösvényt.
        Legyőzött ellenfelidet vezetheted egy pergamenten, amit a Rengetegbe lépésed előtt kaptál! Ha mind a nyolc mágikus lényt dokumentáltad, és magadhoz vetted legyőzött ellenfeleid megadott részeit, pergamened zsupszkulcsként repít majd professzorod elé!
        Fontos, hogy a legyőzött ellenfeleid ereklyéit a vászonzsákba gyűjtsd, amit a pergamennel együtt kaptál.
        Griffendél bátor diákjait Alaric Prewett köszönti majd, a bátorság és lovagiasság megtestesítője, a Mardekár ambíciózus tanulóit Cassian Selwyn harcra készen várja majd, az ősi tisztavérű család büszke képviselője, aki határtalan ambíciót és leleményességet tanít,
        míg az eszes Hollóhátasokat Eirlys Fawley üdvözli majd, a tudás és bölcsesség avatott mestere, aki a kíváncsiság és elme fényében vezeti a házat immáron 30 éve,
        Hugrabug melegszívű nebulóira pedig Brigid Macmillan, a hűség és kitartás védelmezője, aki mindig diákjaiért küzd már tűkön ülve vár!
        Ne félj! Professzoraid éberen figyelik minden léptedet; ha szükség volna rá, idejében megérkeznek, hogy megmentsenek. Ha pedig most nem járnál sikerrel, a Gyengélkedőn való felépülés után újra megpróbálhatod a kihívást.
        Légy bátor, légy éber, és hagyd, hogy Roxfort minden tanítása elkísérjen ezen a varázslatos úton.
    `;
    actuallSituation.innerText = welcomingSpeech;

    // Dynamically create the form elements
    const formContainer = document.querySelector('.form-container');
    formContainer.innerHTML = `
        <input type="text" id="name" placeholder="Név">
        <input type="text" id="pet" placeholder="Kisállat neve">
        <input type="text" id="wand" placeholder="Pálca">
        <select id="house">
            <option>Kérlek válaszd ki a házad!</option>    
            <option>Griffendél</option>
            <option>Hugrabug</option>
            <option>Hollóhát</option>
            <option>Mardekár</option>
        </select>
        <select id="favoriteSubject">
            <option>Melyik a kedvenc tárgyad?</option>
            <option>Bájitaltan</option>
            <option>Sötét varázslatok kivédése</option>
            <option>Átváltoztatástan</option>
            <option>Jóslástan</option>
        </select>
        <button id="startButton">Kezdhetjük!</button>
    `;

    // Add event listener to the Start button
    document.getElementById('startButton').addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const pet = document.getElementById('pet').value;
        const wand = document.getElementById('wand').value;
        const house = document.getElementById('house').value;
        const favoriteSubject = document.getElementById('favoriteSubject').value;
        
        // Store character information in local storage
        const character = { name, pet, wand, house, favoriteSubject };
        localStorage.setItem('character', JSON.stringify(character));

        // Navigate to the next page
        window.location.href = 'EnemyFight.html';
    });
}

// Check if we are on the Welcome Page and initialize it
if (window.location.pathname.includes('WelcomePage.html')) {
    loadWelcomePage();
}
//---------------------------------------------------------------------//
// Function to initialize the You Won page
function loadYouWonPage() {
    const actuallSituation = document.getElementById('ActuallSituation');
    actuallSituation.innerText = `
    Gratulálunk, hős Roxforti! Sikeresen végigjártad a próbákat, és legyőzted az összes mágikus lényt, akik az utadba álltak. Bebizonyítottad bátorságodat, kitartásodat, és varázslói tudásodat – méltó vagy a diplomádra és a dicsőségre, ami most vár rád!

    Ahogy elhaladsz a Rengeteg fái között vissza a Roxfort felé, a holdfény megvilágítja a pergamened, amely most zsupszkulcsként repít professzorod elé, hogy átvehesd végzős diplomádat. Házad vezetője büszkén köszönt téged, s tudhatod, hogy Roxfort minden tanítása és tapasztalata veled marad utadon.

    Most pedig ünnepelj, hős végzős! Roxfort várja, hogy a nagyterem fényeiben ünnepeljük együtt ezt a varázslatos győzelmet. Legyen veled mindig a mágia és a tudás, bármerre is sodor az élet.

    Éljen Roxfort dicsősége, és éljenek a hősök, akik teljesítették a próbát!
`;

    // Create the Rankings Table
    const rankingsTable = document.createElement('table');
    rankingsTable.id = "rankingsTable";

    // Add "Rankings" as the first row spanning all columns
    const titleRow = document.createElement('tr');
    const titleCell = document.createElement('th');
    titleCell.colSpan = 3; // Span across 3 columns (Rank, Player Name, Time)
    titleCell.innerText = "Rankings";
    titleCell.style.backgroundColor = "#FF8C00"; // Match the header color
    titleCell.style.color = "white";
    titleCell.style.fontSize = "1.5em";
    titleCell.style.padding = "15px"; // Increase padding for emphasis
    titleRow.appendChild(titleCell);
    rankingsTable.appendChild(titleRow);

    // Create table headers
    const headerRow = document.createElement('tr');
    const rankHeader = document.createElement('th');
    rankHeader.innerText = "Rank";
    const nameHeader = document.createElement('th');
    nameHeader.innerText = "Player Name";
    const timeHeader = document.createElement('th');
    timeHeader.innerText = "Time";

    headerRow.appendChild(rankHeader);
    headerRow.appendChild(nameHeader);
    headerRow.appendChild(timeHeader);
    rankingsTable.appendChild(headerRow);

    // Append the table to the grid container
    const rankingsSection = document.createElement('div');
    rankingsSection.classList.add('rankings');
    rankingsSection.appendChild(rankingsTable);
    document.querySelector('.grid-container').appendChild(rankingsSection);

    // Create the Play Again button
    const playAgainDiv = document.createElement('div');
    playAgainDiv.classList.add('play-again');

    const playAgainButton = document.createElement('button');
    playAgainButton.innerText = "Play Again";
    playAgainButton.onclick = restartGame;

    playAgainDiv.appendChild(playAgainButton);
    document.querySelector('.grid-container').appendChild(playAgainDiv);
}

// Restart game function to go back to Welcome Page
function restartGame() {
    localStorage.clear();
    window.location.href = 'WelcomePage.html';
}

// Check if we are on the You Won page and initialize it
if (window.location.pathname.includes('YouWon.html')) {
    loadYouWonPage();
}

//----------------------------------------------------------------------//
// Function to initialize the Game Over page
function loadGameOverPage() {
    const actuallSituation = document.getElementById('ActuallSituation');
    actuallSituation.innerText = `
        Bátor Roxforti diák, ne csüggedj! Bár most a Gyengélkedő puha ágyában pihensz, és nem sikerült végigjárnod a Tiltott Rengeteg minden próbatételét, tudd, hogy a Roxfort mindig büszke rád.
        A misztikus erdő titkai és lényei nem könnyen engednek utat bárkinek, és az a bátorság, amellyel szembenéztél velük, önmagában is elismerésre méltó. Nem mindenki meri megkísérelni, amit te tettél!

        Professzoraid elismerik erőfeszítéseidet, és minden lépésedet figyelték, készen arra, hogy megóvjanak téged a legnagyobb veszélyektől. Ha úgy érzed, hogy újra készen állsz, a kihívás kapuja mindig nyitva áll majd előtted.
        Addig is pihenj, épülj fel, és gyűjtsd erődet! Hiszen a Roxfort minden tudása és emléke veled marad, s talán hamarosan ismét megkísérled a nagy próbát – immáron újult erővel.

        Légy büszke arra, amit elértél, hiszen Roxfort minden diákjára büszke. A legnagyobb varázslók és boszorkányok is újra és újra tanulnak hibáikból, s végül a kitartás gyümölcsét aratják. A próbák kapuja nyitva áll, és te mindig hazatalálsz!
    `;

    // Create the Restart Button
    const restartButtonDiv = document.createElement('div');
    restartButtonDiv.classList.add('restart-button');

    const restartButton = document.createElement('button');
    restartButton.innerText = "Újrakezdés";
    restartButton.onclick = restartGame;

    restartButtonDiv.appendChild(restartButton);
    document.querySelector('.grid-container').appendChild(restartButtonDiv);
}

// Restart game function to go back to Welcome Page
function restartGame() {
    localStorage.clear();
    window.location.href = 'WelcomePage.html';
}

// Check if we are on the Game Over page and initialize it
if (window.location.pathname.includes('Looser.html')) {
    loadGameOverPage();
}
//-------------------------------------------------------------------------//
let timerInterval;
let seconds = 0;

function startTimer() {
    // Avoid starting the timer on the end pages
    if (window.location.pathname.includes("Looser.html") || window.location.pathname.includes("YouWon.html")) {
        return;
    }

    // Create and style the timer display element
    const timerDisplay = document.createElement("div");
    timerDisplay.id = "timerDisplay";
    timerDisplay.classList.add("timer-display"); // Apply the timer display CSS
    document.body.appendChild(timerDisplay);

    // Start the timer
    timerInterval = setInterval(() => {
        seconds++;
        timerDisplay.innerText = `Time: ${seconds}s`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Initialize the timer on page load and stop it on end pages
window.addEventListener("load", () => {
    startTimer();

    if (window.location.pathname.includes("Looser.html") || window.location.pathname.includes("YouWon.html")) {
        stopTimer();
    }
});
// Array of dice faces with image paths and their corresponding values (érték)
const kockaErtek = [
    { id: 1, src: 'kocka/dice-six-faces-one.png' },    // Face 1
    { id: 2, src: 'kocka/dice-six-faces-two.png' },    // Face 2
    { id: 3, src: 'kocka/dice-six-faces-three.png' },  // Face 3
    { id: 4, src: 'kocka/dice-six-faces-four.png' },   // Face 4
    { id: 5, src: 'kocka/dice-six-faces-five.png' },   // Face 5
    { id: 6, src: 'kocka/dice-six-faces-six.png' }     // Face 6
];

let rolledDice = {}; // To store the rolled dice face and value

// Function to roll the dice
function rollDice() {
    const randomIndex = Math.floor(Math.random() * 6); // Random index between 0 and 5
    rolledDice = kockaErtek[randomIndex]; // Store the rolled dice object
    document.getElementById('diceImage').src = rolledDice.src; // Update the dice image
    console.log("Rolled value:", rolledDice.id); // This will log the value (id) of the rolled face
}

// Adding event listener to the roll button on page load
window.addEventListener("load", () => {
    const rollButton = document.getElementById("rollButton");
    if (rollButton) {
        rollButton.addEventListener("click", rollDice);
    }
});
// Function to create the adventure text container with specific content
function addAdventureText() {
    // Check if we are on the specified pages (modify these paths as needed)
    const path = window.location.pathname;
    const allowedPages = ["WayToEnemy.html", "FightEnemy.html", "FinalBoss.html"];

    // Only add the container if the current page is in the allowedPages list
    if (!allowedPages.some(page => path.includes(page))) {
        return;
    }

    // Create the adventure text container
    const adventureContainer = document.createElement("div");
    adventureContainer.classList.add("adventure-container");

    // Set the content of the container
    adventureContainer.innerHTML = `
        <p>
            Lépj bátran a Rengeteg mélyére, hol titkok várnak, s légy készen minden lépésre!<br>
            Troll súlya dübörög, ökle lesújt rád, ha nem vigyázol, elaltat, s új helyre visz át.<br><br>
            Egy szfinx áll majd, s kérdése kemény, jól válaszolsz-e, vagy új útra térsz megint, te szerény?<br><br>
            Dementor suhan, árnyékban jár, páratlant dobsz, s végzeted vár.<br><br>
            Kentaur lehet segítőd, ha jól kérded, áldása visz tovább, ha őt eléred.<br><br>
            Az akromantula hálója kész, ha nem ismered bűbáját, súlyos seb ébresztés!<br><br>
            Thesztrál csak akkor tűnik eléd, ha életed egyre fogyatkozék, elrepít messze, az utolsó szörny elé, ha több életed van, csak az árnyék ér hozzád belépve.<br><br>
            Mumus, ki félelmed képét ölti fel, páratlan dobás, s a szíved rettegéssel tel.<br><br>
            Főnix tűzből támad fel újra, öt életet ad, s táncol tüzes szárnyaival furcsa.<br><br>
            Sárkány lehelete perzseli bőröd, ha szembe nézel vele, életed mínusz négy dörög.<br><br>
            Griff szárnyán utolsó termek felé visz, páratlan kell, különben három életet veszít itt a kis hit.<br><br>
            Unikornis, égi csodás állat, páros dobsz, és életed gyarapodhat, s szárnyalhat. De páratlant, s elijeszted, nem gyógyít téged.<br><br>
            Vigyázz tehát, bátor kalandor, a Rengetegben sok veszély honol!<br>
            S minden lépésed próbára tesz, ám aki győz, a végén dicsőséghez lesz!
        </p>
    `;

    // Append the container to the body
    document.body.appendChild(adventureContainer);
}

// Run the function to add the container when the page loads
window.addEventListener("load", addAdventureText);
