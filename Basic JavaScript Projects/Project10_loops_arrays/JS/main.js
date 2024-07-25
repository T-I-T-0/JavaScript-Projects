// call loop
function call_loop() {
    var Digit = "";
    var x = 1;
    while (x < 10) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = Digit;
}

// for loop
var Instruments = ["Guitar", "Drums", "piano", "Base", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Array and Objects
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] +".";
}

// const
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Musical_Instrument.type + " was " + Musical_Instrument.price;
}

// let.length
function length() {
let text = "Hello World!";
let length = text.length;
document.getElementById("demo").innerHTML = length;
}

// let keyword
var x = 82;
document.write(x);
{let x = 33;
    document.write("<br>" + x);
}
document.write("<br>" + x +"<br>");



 var x = 82;
 document.write(x);
 {
    var x = 33;
    document.write("<br>" + x);
 }
 document.write("<br>" + x +"<br>");


// Object with the let keyword

function car() {
    let car = {
        make: "Dodge ",
        model: "Viper ",
        year: "2021 ",
        color: "red ",
 
    };
    document.getElementById("car").innerHTML = 
        "The car is a " + car.year + " " + car.color + " " + car.make + " " + car.model + ".";
}











