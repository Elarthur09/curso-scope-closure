//Redeclaración
//Reasignación
var firstname;//Declaramos y tiene un valor de undefined
firstname ='Oscar'//Asignamos
console.log(firstname)

var lastname = 'Granados'//Declaramos y asignamos
lastname ='Zarco'//Reasignamos
console.log(lastname)//=Zarco

var secondName = 'Gutierrez'//Declarando y asignando
var secondName = 'Santo'//Reasignando
console.log(secondName)//=Santo

//-----------------------------------------------Ahora con la variable let--------------------------------
let fruit = 'Apple';//Declarar y asignar
fruit = 'Kiwi';//Reasingnando

console.log(fruit)//=Kiwi

let fruit = 'Banana'//No se puede redeclarar
console.log(fruit)

//--------------------------------------------------Ahora con const----------------------------------------
const animal = 'Dog'//Declarar y asignar    
animal = 'Cat';//Reasingnando
const animal ='Snake'
console.log(animal)//=Error => Assignment to constant variable