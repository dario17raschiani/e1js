//ejerciciO1
const imparesPares = num=> {
    if (num % 2 == 0) {
        console.log("par");
    }else {
        console.log("impar");
    }
}  
imparesPares(2)
  

//ejercicio2
const mayorOmenor = (a,b) => {
    if ( a > b) {console.log("${a} es mayor que ${b}");
}else if (a<b){console.log("${b} es mayor que ${a}");
}else {console.log("son iguales");}
};
mayorOmenor(1,1);
mayorOmenor(1,2);
mayorOmenor(2,1);

//ejercicio3
  
const multiplo5 = num => {num %5 ==0 ? console.log("es multiplo de 5")
: console.log("no es multiplo de 5");
};
multiplo5(5);
multiplo5(4);

//ejercicio4

const porConsola = num=> {
    for (let index = 0 ; index <= num ; index++){console.log(index);}
};
porConsola(4)

//ejercicio5
//no me sale ni a palos
//ejercicio 6

const arrayXconsola= array=> {
    for (let i = 0 ; i < array.length; i++){
        console.log(array[i]);
    }
};
const a= [1,2,3,4,5,6,7,"palabra"];
console.log(a.length);
arrayXconsola(a)

//ejecicio7??????
const menosEl5 = array=> {
    for( let i = 0 ; i < array.length; i++) {
        if ( i == 4) {continue}
        console.log(array[i]);
    }
};
menosEl5([1,2,3,4,5,6,7,8,9,10])

//ejercicio8
// i'm sorry