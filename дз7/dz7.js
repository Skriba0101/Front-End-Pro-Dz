// пункт1
const dog = {
    name: "Meri",
    age: 13,
    breed: "ovcharka",
    weight: 24,
    food: "meat"
}
function copy(obj) {
    const dogNew = {}
    for (const key in obj) {
        const value = obj[key]
        dogNew[key] = value
    } return dogNew
}

const dog1 = copy(dog)
console.log(dog1)


// пункт2 
const dog2 = {
    name: "Taison",
    age: 11,
    breed: "ovcharca",
    weight: 30,
    food: "meat",
    play: "boll"
}

function compare(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
    } for (let key in obj1) {
        if (obj1[key] !== obj2[key])
            return false
    } return true
}
const compare1 = compare(dog, dog2)
console.log(compare1)


//  пункт3 

const letter = "aaabbc"
const resaultLetter = {}
function numberLetter(str) {
    for (i = 0; i <= str.length - 1; i++) {
        let key = str[i]
        resaultLetter[key] = resaultLetter[key] + 1 || 1
    } return resaultLetter
}
console.log(numberLetter(letter))

