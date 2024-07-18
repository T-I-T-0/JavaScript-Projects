//Type of Operator
document.write(typeof "word"); //string output
document.write("<br>");

document.write(typeof 3); //number output
document.write("<br>");

document.write("10" + 10); //Type Coercion
document.write("<br>");

document.write(2e310); //infinity
document.write("<br>");

document.write(-3e310); //Negative infinity
document.write("<br>");

document.write(10>2); // True Boloean
document.write("<br>");

document.write(10<2); // false Boloean
document.write("<br>");

console.log(2+2); // Bolean and console
document.write("<br>");

console.log(5>=2); // Bolean and console
document.write("<br>");

document.write(11==10); //Double Equal Sign
document.write("<br>");

document.write(3==3);
document.write("<br>");


x=100
y=100
document.write(x===y); //true triple equal sign
document.write("<br>");

x=100
y="10"
document.write(x===y); //false triple equal sign
document.write("<br>");


x="100" 
y=100 
document.write(x===y); //false triple equal sign
document.write("<br>");

x=100
y=200
document.write(x===y); //false triple equal sign
document.write("<br>");

document.write(9>3 && 8>7);// True Logical 
document.write("<br>");

document.write(9<3 && 8>7);//false Logical 
document.write("<br>");

document.write(9<3 || 8>7);//True Logical 
document.write("<br>");

document.write(9<3 || 8<7);//False Logical 
document.write("<br>");

//Not Operatoror
function not_Function() {
    document.getElementById("Not1").innerHTML = !(5>2);

}
document.write("<br>");

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(2>5);
}
document.write("<br>");








