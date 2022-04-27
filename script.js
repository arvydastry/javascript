;//Vienos linijos komentaras//

/*
Multiline komentaras
*/



// kintamieji
let myName;
let age;
let mySurname;
let fullName;
let result;
let average;

// console.log(myName); // undefined - sukurtas, neturi reiksmes

//reiksmes
myName = "Arvydas"; // sring "" arba ''
age = 35; // Number - tik skaiciai
mySurname = "Trybe";
fullName = myName + " " + mySurname; // sudetis tarp tu paciu tipu (string-string)
result = age + age -9;
result = result + result;
average = (8 + 8 + 9 + 10 + 10) / 5; // 45 / 5 = 9
// is viso 60e, atnesiau 20
percent = 100 * 20 / 60;


percentOutput = percent + "%"; //33.33% number + string =string
//console.log(percent + "%");

// console.log(9 + 9); //18
// console.log("9" + "9"); // "99"
// console.log(48 + "768"); // 40768

//435 i 443355
//78 i 7788    "7" + "7" + "8" + "8"


// sukuriam kintamuosius su const
const myDogName = "Cipas";
const myDogAge = 7;
const doubleDogName = myDogName + myDogName;
const greetings = "Sveikas" + " " + myDogName + "!";

// console.log(question);

// console.log(myDogName);
// console.log(greetings);

// question = "kaip laikaisi?";


// 1. kada naudoti 
// let tik tada tik kada reiksme kintanti
//const kai nera kintanti reiksme


// 2. sukurus kintamaji visada priskiriam pradine reiksme

// 3. visada naudojame === (tikrina reiksme ir tipa)

// 4. visos neigiamos reiksmes yra undefined, null, 0, "", false. 


// string, number, boolean, 

const yes = true;
const no = false;
let isAdult = true;


// console.log(10 == 15); // 10 yra lygu 15 - ne
// console.log("Rokas" == "Rokas"); //Rokas ar vygus Rokas 
// console.log(10 != 10); // 10 yra nelygu 10 - ne

// console.log("5" == 5); //stringas nelygus skaiciui - true
// // dviguba lygybe tikrina ar reiksme yra lygi

// console.log("5" === 5);
// //triguba lygybe tikrina ar reiksme yra lygi ir tipas yra tooks pat


// console.log("4" != 4);
// console.log("4" !== 4);


