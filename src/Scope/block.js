function fruits(){
   if(true){
    var fruit1 = 'Apple';//Fuction scope
    let fruit2 = 'Kiwi';//Block scope
    const fruit3 = 'Banana';//Blocj scope
    console.log(fruit2);
    console.log(fruit3);
   }
   console.log(fruit1);
}

fruits();