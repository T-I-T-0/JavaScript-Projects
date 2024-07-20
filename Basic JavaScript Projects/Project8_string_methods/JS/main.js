// concat() Method
function full_sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// slice() method
function slice_method() {
    var sentence = "All work and no play makes Johnny a dull boy";
    var section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section;
}

// numbers method()
function string_Method() {
    var x = 522;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

// search box
function search_box() {
    var sentence1 = "Have fun";
    var position = sentence1.search("red");
    document.getElementById("search").innerHTML = position;
}

// uppercase method
function uppercase_method() {
    var lowercase = "apple";
    var uppercase = lowercase.toUpperCase();
    document.getElementById("uppercase").innerHTML = uppercase
}


// To Precision() method
function Precision_Method() {
    var x = 3323344.4354545656565767878787869;
    document.getElementById("precision").innerHTML = x.toPrecision(10);
}






