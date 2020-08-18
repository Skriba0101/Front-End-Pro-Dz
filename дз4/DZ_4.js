const pi = 3.14
let r = 8

function s(pi, r) {
    let resaultS = pi * (r ** 2)
    console.log(resaultS)
}

s(pi, r)

function c(pi, r) {
    let resaultC = 2 * pi * r
    console.log(resaultC)
}
c(pi, r)

function average(pi, r) {
    let resauilAverage = (pi + r) / 2
    console.log(resauilAverage)
}
average(pi, r)



function calc(x, y, action=x-y) {
    console.log(action)
}

calc(8, 5)
