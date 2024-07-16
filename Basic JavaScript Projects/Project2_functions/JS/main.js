





function assigned_variables() {
    var variable1 = "Hello";
    var variable2 = "World";
    document.getElementById("Button_Text").innerHTML = (variable1 + " " + variable2);
}                            
                 
//a function that uses the +=operator
function MyFunction() {
    var sent1 = "I am learning";//creating the variable
    sent1 += " a lot from this course!";//using the += operator to add to the variable
    document.getElementById("Concatenate").innerHTML = sent1; //using document.getelementId()
}