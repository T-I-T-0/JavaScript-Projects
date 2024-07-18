function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound; //remove the KVP from the Dictionary
    
    document.getElementById("Dictionary").innerHTML = Animal.Breed
}