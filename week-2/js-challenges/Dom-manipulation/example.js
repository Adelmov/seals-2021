// // variables
// // dynamicall typed 

let firstName = "adelmo";
const lastName = " Villanueva"
// lastName = " Rosales"
firstName = "edenilson"
console.log( " Hello my name is" + firstName)
//boolean 
let isGameRunning = false; 
if ( isGameRunning) {
    console.log ( " the game is running ");

} else {
    console.log( "the game is not running");
}
// object 
let person = {
    "age": 15, 
    "personName": " Adelmo"
}
console.log ( person.age);
let y = 5;
let x = 7;
// function 
function addTwo (x,y){
    return x + y
}
console.log(addTwo(x,y))
addTwo(x, y);
// // dom manipulation 
function changeImage(){
    let image = document.getElementById('myImage');
    if (image.src.match("sun.png"))  {
        image.src="./assets/moon.png";
    }
    else { image.src= "./assets/sun.png";
     }
    console.log('clicked');

};

//function 
//  const getName = ()=> {

//  }
function infoAlert(){
    // step 1 determine input variable 
    let input = " ";
    // step 2 get the input from the html
    input =document.getElementById("mInput").value;
    // step 3 build alert 
    alert(input);
    console.log(input);
};
let listOfName = [ "adelmo", "dino","nose"]
// loops 
// for loop
//list is in the are access start from 0 to n
console.log(listOfName [0]);
for ( let i = 0; i <3; i++) {
 console.log(listOfName[i])
};
let i = 0;
while ( i < 3 ) {
    console.log(listOfName[i]);
    i++;
}

function getAnswers(n){
    let product = 0;
    let timestables = [];
    for (let i = 0; i < 11; i++){
        product = n * i;
        timestables.push(product);
    }
    for (let i = 0; i <11; i++){
        console.log(timestables[i]);      
    }
}
getAnswers(7);

