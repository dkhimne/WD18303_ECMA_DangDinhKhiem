let object = {
    fullname : "Khim ",
    age: 25,
    city :"Kanthor",
    playGame : function(){
        console.log(this); //this dai dien cho object
        // console.log(this.name +  "is playing game");
    },
    cooking:() => {
        console.log(this.fullname);
        console.log(this);
        console.log("Cooking something delicious");
    }
}
object.name = "Khiem "; // doi khim => khiem
object.cooking();
// object.playGame(); // Khim is playing game

function helloWord(button){
    console.log(button.getAttribute('attribute-name'));

}

let multiply = (a,b) => a*b;

console.log(multiply(1,2));


let increment = (number ,value = 1) => number + value;

console.log(increment(5,2));
console.log(increment(5));


function* swimming(number){
    yield number;
    yield number + 2;
    yield number + 5;
}
let s = swimming(1000000000)
console.log(s.next());

console.log(s.next()); 

console.log(s.next());
