// пункт1
let n=10
for (n=10; n<=20; n++){
    console.log (n)
}

// пункт2
let st = 2
for (let i=10; i<=20; i++) {
    console.log (i**2)
}
// пункт3
for(let t=7 ;t<=7;t++){
    for(let j=1;j<10;j++){
        console.log(`${j}*${t}=${j*t}`)
    }
}

// пункт4
let suma=0
for(let m=0;m<=15;m++) {
    suma +=m
    }console.log(suma)

// пункт5
let proizv = 1
for(let m=1;m<=15;m++) {
    proizv *=m
}
console.log(proizv)


// пункт6
let summ = 0
let p=0
for (p =0; p<=500;p++){
    sumP =  summ+=p
}  

// пункт7
let sum=0
for ( h=30;h<=80;h++){
    if(h%2===1) continue;
    sum+=1
} 
console.log (sum )

//  пункт8
 for(s=100;s<=200; s++){
     if(s%3==0){
         console.log(s)
     }
 }

//  пункт9
 let a = 6
 let count=0
 let smm=0
 for(i=1;i<=a;i++){
     if (a%i===0){
         console.log(i)
     }
     if(a%i===0&& i%2===0){
         count++
         smm+=i;
     }
 }
 console.log(count)
 console.log(smm)

//  пункт10
 for(let t=1 ;t<=10;t++){
    for(let j=1;j<=10;j++){
        console.log(`${j}*${t}=${j*t}`)
    }
}


