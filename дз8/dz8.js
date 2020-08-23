// пункт 1 

function isSymbolPresentInString(str, symbol) {
    console.log(str.includes(symbol))
}

isSymbolPresentInString("abc", "a")
isSymbolPresentInString("abc", "e")

// пункт2


function getSymbolInde(str, symbol) {
    console.log(str.indexOf(symbol))
}
getSymbolInde("hello lol", "h")
getSymbolInde("hello lol", "l")
getSymbolInde("hello lol", "v")


// пункт3 
// я не понимаю почему она не работает так как я хочу!!! обьясните,пожалуйста
function getNumberOfEven(number) {
    let even = 0
    for (i = 0; i <= number.length; i++) {
        if (number[i] % 2 === 0) {
            return even + 1
        }
    } console.log(even)
}
getNumberOfEven(223344)


