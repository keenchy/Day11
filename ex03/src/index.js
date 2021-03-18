// Create a myPetsArray array here

myPetsArray["Dog", "Cat"]


// End of myPetsArray array

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];

    //Only change code below this line

    myNewPets["Bird", "Fish"];
    myNewPets.push("Lion");


    //Only change code above this line

}

console.log(myArrayFunction(myNewPets)); // Change this line
module.exports = myArrayFunction;