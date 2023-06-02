/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

// EX 1 ANSWER
const printArray = function(myArray) {
  for( let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
  }
}
// printArray(pets)

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

// EX 2 ANSWER
const sortArray = function(myArray) {
  myArray.sort()
}

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

// EX 3 ANSWER
const reversePrint = function(myArray) {
  for( let i = myArray.length - 1; i >= 0; i-- ) {
    console.log(myArray[i])
  }
}
// reversePrint(pets)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

// EX 4 ANSWER
const firstToLast = function(myArray) {
  myArray.push(myArray.shift())
}
// firstToLast(pets)
// console.log(pets)

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

// EX 5 ANSWER
const addLicensePlate = function(myArrayOfObjects = cars) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let alpIndex = 0
  for( let i = 0; i < myArrayOfObjects.length; i++) {
    let licensePlate = ""
    for( let j = 0; j < 3; j++) {
      alpIndex = Math.floor(Math.random()*alphabet.length) // Generate random index for alphabet
      licensePlate += alphabet.charAt(alpIndex) // Take letter from random index generated before and add it to licensePlate
    }
    licensePlate += " "
    licensePlate += Math.floor(Math.random()*10)
    licensePlate += Math.floor(Math.random()*10)
    alpIndex = Math.floor(Math.random()*alphabet.length)
    licensePlate += alphabet.charAt(alpIndex)
    myArrayOfObjects[i].licensePlate = licensePlate
  }
}
// addLicensePlate(cars)
// console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

// EX 6 ANSWER
let newCar = {
  brand: "Lamborghini",
  model: "Gallardo",
  color: "yellow",
  trims: ['titanium', 'st', "life", "GT"],
}
const addNewObject = function(newObjectToAdd = newCar) {
  cars.push(newObjectToAdd)
}

addNewObject()
const deleteLastTrims = function(myArray = cars) {
  for( let i = 0; i < myArray.length; i++) {
    myArray[i].trims.pop()
  }
}
// deleteLastTrims()

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

// EX 7 ANSWER
const saveFirstTrims = function(myArray = cars) {
  for ( let i = 0; i < myArray.length; i++) {
    justTrims[i] = myArray[i].trims[0]
  }
}
// saveFirstTrims()
// console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

// EX 8 ANSWER
const colorType = function(myArray = cars) {
  for( let i = 0; i < myArray.length; i++) {
    if(myArray[i].color.charAt(0) === "b") {
      console.log("This car have Fizz color type", myArray[i])
    } else {
      console.log("This car have Buzz color type", myArray[i])
    }
  }
}
// colorType()

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

// EX 9 ANSWER
const printArrayUntil = function(myArray = numericArray, numBreak = 32) {
  let i = 0
  while( i < myArray.length) {
    if( myArray[i] === numBreak) {
      console.log("Number break reached", myArray[i])
      return i
    } else {
      console.log("Number in position", i, myArray[i])
      i++
    }
  }
}
// printArrayUntil()

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]
const arrayAlphabetPosition = []

// EX 10 ANSWER
const alphabetPosition = function(myArray = charactersArray) {
  for( let i = 0; i < myArray.length; i++) {
    switch(myArray[i]) {
      case "a" : arrayAlphabetPosition.push(1)
      break
      case "b" : arrayAlphabetPosition.push(2)
      break
      case "c" : arrayAlphabetPosition.push(3)
      break
      case "d" : arrayAlphabetPosition.push(4)
      break
      case "e" : arrayAlphabetPosition.push(5)
      break
      case "f" : arrayAlphabetPosition.push(6)
      break
      case "g" : arrayAlphabetPosition.push(7)
      break
      case "h" : arrayAlphabetPosition.push(8)
      break
      case "i" : arrayAlphabetPosition.push(9)
      break
      case "l" : arrayAlphabetPosition.push(10)
      break
      case "m" : arrayAlphabetPosition.push(11)
      break
      case "n" : arrayAlphabetPosition.push(12)
      break
      case "o" : arrayAlphabetPosition.push(13)
      break
      case "p" : arrayAlphabetPosition.push(14)
      break
      case "q" : arrayAlphabetPosition.push(15)
      break
      case "r" : arrayAlphabetPosition.push(16)
      break
      case "s" : arrayAlphabetPosition.push(17)
      break
      case "t" : arrayAlphabetPosition.push(18)
      break
      case "u" : arrayAlphabetPosition.push(19)
      break
      case "v" : arrayAlphabetPosition.push(20)
      break
      case "z" : arrayAlphabetPosition.push(21)
      break
      default : console.log("Not a letter")
    }
  }
  console.log("My array have letters in position", arrayAlphabetPosition, "of italian alphabet")
}
// alphabetPosition()
