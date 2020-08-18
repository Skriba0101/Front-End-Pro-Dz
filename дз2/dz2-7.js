// пункт 7
let name = "Как тебя зовут?";
let age = "Сколько тебе лет?";
let alcohol = "Алкоголь употребляем?"
let resaultName =(prompt(name))
let resaultAge =(+prompt(age))
let resaultAlcohol = (confirm(alcohol))
resaultName + resaultAge + resaultAlcohol;
console.log(resaultName +","+resaultAge+"," + resaultAlcohol);
if ((resaultAge>40)&&(resaultAlcohol==true)){
    alert(resaultName+","+"Не злоупотребляйте.")
} else if ((resaultAge<18)&&(resaultAlcohol==true)) {
    alert (resaultName+","+"Ты что? Маме расскажу!")
} else if ((18>=resaultAge<=40)&&(resaultAlcohol==true)) {
    alert(resaultName+","+"Водку с пивом не мешай..")
}else {
    alert (resaultName+","+"Так держать!")
}
