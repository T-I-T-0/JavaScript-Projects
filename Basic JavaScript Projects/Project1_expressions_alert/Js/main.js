
//window.alert method
window.alert("Hello, World!")

//document.write method
document.write("\"Be who you are and say what you feel,"
    + " because those who mind don\'t matter and those who matter don\'t mind.\""
    + "-Dr. Seuss");

//concatenated value to a variable
var B = "concatenated" + " string"
document.write(B)

//multiple var//

var Family ="The Arezzinies", Dad = "Jeremiah", Mom = "Hermoine", 
Doughter = "Penny", Son = "Zorro";
document.write(Mom)

//Expression//

document.write(6 + 6);

//Fuction//

function My_First_Function() {                                  //Defining a function and naming it
    var str = "This is the button text!";                       //Defining a variable and giving it 
    document.getElementById("Button_Text") .innerHTML = str;    //a string value
                                                                //putting the value of
                                                                //of the variable into the HTML elementfrompoint
                                                                //with the "Button_Text" id
}           
//creating two variables
var sent1 = "This is the beginning of the string";
var sent2 = "and this is the end of the string";

//displaying the variables using the document.write method
document.write(sent1 + sent2);
