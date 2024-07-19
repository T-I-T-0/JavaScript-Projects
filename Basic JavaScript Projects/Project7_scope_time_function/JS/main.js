
// A global variable
var x = 20;
function Add_number_1() {
    document.write(20 + x + "<br>");
}
function Add_number_2() {
    document.write(x + 100 + "<br>");
}
Add_number_1();
Add_number_2();

// A local variable and an intentional error in function Add_number_4()
function Add_number_3() {
    var y = 10;
    document.write(20 + y + "<br>");
}
function Add_number_4() {
    document.write(y + 100);
}
Add_number_3();
Add_number_4();

// A local variable
function Add_number_3() {
    var y = 10;
    console.log(20 + y + "<br>");
}
function Add_number_4() {
    console.log(y + 100);
}
Add_number_3();
Add_number_4();

// if statement

function get_Date() {
    if (new Date().getHours() < 10) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
// else statements

function Age_Function() {
    Age= document.getElementById("Age").value;
    if (Age >=18) {
        Vote = "You are old enough to vote!";

    }
    else {
        Vote = "You are not old enough to vote";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote
}


// Else If Statement

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}


