// пункт 1

let name = "Как тебя зовут?";
let age = "Какого ты года рождения?";
let resaultName = prompt(name)
let resaultAge = +prompt(age)
resaultName + resaultAge;
let ageModern = (2020-resaultAge)
alert(resaultName + ","+ageModern)
console.log(resaultName + ","+ageModern)


// пункт 2 и3
let a = 5;
let b = 8;
let c = 4;
let summa = a+b+c
console.log(summa)
let resaultA = a % 2 == 0 ? "Четное":"Нечетное";
let resaultB = b % 2 == 0 ? "Четное":"Нечетное";
let resaultC = c % 2 == 0 ? "Четное":"Нечетное";
console.log(resaultA);
console.log(resaultB);
console.log(resaultC);
console.log(summa/3);

// пункт4
let fiveN = 12345;
let resaultN = (fiveN - (fiveN % 10000)) / 10000 +
" " +
(((fiveN - (fiveN % 1000)) / 1000) % 10) +
" " +
(((fiveN - (fiveN % 100)) / 100) % 10) +
" " +
(((fiveN - (fiveN % 10)) / 10) % 10) +
" " + (fiveN % 10);
console.log(resaultN);

// пункт5
let nastya = 23;
let tanya = 26; 
if (nastya > tanya) {
    console.log("Настя старше!")
} else if (tanya > nastya) {
    console.log("Таня старше!")
} else {
    console.log ("Одногодки")
};


// пункт6
let one = 85
let resaultOne = one%2 ==0 ? "Четное":"Нечетное";
console.log(resaultOne)
console.log(one%10)

