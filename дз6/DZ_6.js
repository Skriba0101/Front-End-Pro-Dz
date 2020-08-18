const array = [1, 2, 3, 4, 5, 6, 7, 8];


function callback(key) {
    console.log(key);
}

// forEach
function myForEach(array, callback) {
    for (let key of array) {
        callback(key);
    }
}
myForEach(array, callback);



// map 


function myMap(array, callbackForMap) {
    const resaultMyMap = [];
    for (let key of array) {
        resaultMyMap.push(callbackForMap(key))

    } console.log(resaultMyMap)
}
function callbackForMap(key) {
    return (key + 10)
}


myMap(array, callbackForMap)






// filter 

function myFilter(array, callback) {
    const resaultMyFilter = [];
    for (let key of array) {
        if (key % 2 === 0) {
            resaultMyFilter.push(callbackForFilter(key))
        }
    } console.log(resaultMyFilter)
}

function callbackForFilter(key) {
    return (key)
}


myFilter(array, callback)







// some 

function mySome(array, callbackForSome) {
    for (let key of array) {
        if (callbackForSome(key)) {
            return true
        }
    } return false

}
function callbackForSome(key) {
    return key % 2 === 0
}
const resault = mySome(array, callbackForSome)
console.log(resault)




// every 
function myEvery(array, callbackForEvery) {
    for (let key of array) {
        if (callbackForEvery(key)) {
            return true
        } return false
    }
}
function callbackForEvery(key) {
    return key % 2 === 0
}
const resault2 = myEvery(array, callbackForEvery)
console.log(resault2)