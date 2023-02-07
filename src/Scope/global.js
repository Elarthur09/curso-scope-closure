//Variables
var a;//Declarando
var b = 'b';//Declaramos y asignamos

b= 'bb'//Redeclarando la variable
var a ='a'//Redeclaración


//Global Scope
var fruit  = 'Apple'//Global

function bestfruit(){
    console.log(fruit)
}


bestfruit();

function count(){
    country = 'Colombia';//Global
    console.log(country)
}

count()
console.log(country)