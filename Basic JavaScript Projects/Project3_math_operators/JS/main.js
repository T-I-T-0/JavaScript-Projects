


// Addition function
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math1").innerHTML = "2 + 2 = " + addition;
}

//Defining and naming the subtraction function
function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + Subtraction;

}
//Multiplication function
function multiplication_Function() {
    var simple_Math = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 * 8 = " + simple_Math;
}

//Division function
function division_Function() {
    var simple_Math = 6 / 8;
    document.getElementById("Math4").innerHTML = "6 / 8 = " + simple_Math;
}

//Multiple Math
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have  a remainder of: " + simple_Math;
}

//negation function
function negation_Operator() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;


}
//increment and dicrease
function Increment() {
    var value = 100;
    value++;
    document.getElementById("Incrementtext").innerHTML = value;
}


function Decrement() {
    var value = 100;
    value--;
    document.getElementById("Decrementtext").innerHTML = value;
}



//random
window.alert(Math.random()) ;

window.alert(Math.random() * 100) ;

