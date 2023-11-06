/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

function stampaCani() {
  for(let cani = 0; cani < pets.length; cani++) {
    console.log(pets[cani])
  }
}

// stampaCani()


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

function sortPets(array) {
  console.log(array.sort())
}
// sortPets(pets)



/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

function sortPetsReverse(array) {
  console.log(array.sort().reverse())
}
// sortPetsReverse(pets)


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

function scambiaCane() {
  let primo = pets[0]
  let ultimo = pets[pets.length-1]
  pets[0] = ultimo
  pets[pets.length-1] = primo
  console.log(pets)
}
// scambiaCane()

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

function addPlate(array) {
  for(let i = 0; i < array.length; i++) {
    array[i].licensePlate = "CB770"
  }
  console.log(array)
}
// addPlate(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", 
    rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

function esercizio6(array) {
  array.push( 
    {
      brand: 'Volkswagen',
      model: 'Special777',
      color: 'white',
      trims: ['povera', 'bella', 'r-line'], 
    }
  )
  for(let i = 0; i < array.length; i++) {
    delete array[i].trims
  }
  console.log(array)
}
// esercizio6(cars)




/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

function aggiungiTrims(array) {
  for(let i = 0; i < array.length; i++) {
    justTrims.push(array[i].trims[0])
  }
  console.log(justTrims)
}
// aggiungiTrims(cars)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

function esercizio8(array) {
  for(let i = 0; i < array.length; i++) {
    if(array[i].color.charAt(0) == 'b') {
      console.log('Fizz')
    } else {
      console.log('Buzz')
    }
  }
}
// esercizio8(cars)


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let numeroMagico = true
while(numeroMagico == true) {
  for(let i = 0; i < numericArray.length; i++) {
    if(numericArray[i] === 32) {
      console.log(numericArray[i]);
      numeroMagico = false;
      break;
    }
    console.log(numericArray[i]);
  }
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array 
    composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
let numberArray = []
for(let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case 'a': numberArray.push(1); break;
    case 'b': numberArray.push(2); break;
    case 'c': numberArray.push(3); break;
    case 'd': numberArray.push(4); break;
    case 'e': numberArray.push(5); break;
    case 'f': numberArray.push(6); break;
    case 'g': numberArray.push(7); break;
    case 'h': numberArray.push(8); break;
    case 'i': numberArray.push(9); break;
    case 'l': numberArray.push(10); break;
    case 'm': numberArray.push(11); break;
    case 'n': numberArray.push(12); break;
    case 'o': numberArray.push(13); break;
    case 'p': numberArray.push(14); break;
    case 'q': numberArray.push(15); break;
    case 'r': numberArray.push(16); break;
    case 's': numberArray.push(17); break;
    case 't': numberArray.push(18); break;
    case 'u': numberArray.push(19); break;
    case 'v': numberArray.push(20); break;
    case 'z': numberArray.push(21); break;
    default: break;
  }
}
console.log(numberArray)

