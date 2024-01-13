//Lab3.1
let multiply = (num1,num2) => num1 * num2

let toCelsius = (fahrenheit) => (5/9)* (fahrenheit - 32);

let padZeros = (num , totalLen) => {
    let numStr = num.toString();
    let numZeros = totalLen - numStr.length;
    for(let i=1; i <= numZeros; i++){
        numStr = "0" + numStr;
    }
    return numStr;
}

let power = (base , exponent) => {
    let result = 1;
    for (let i=0 ; i < exponent;i++){
        result *= base ;
    }
    return result;
}
    let greet = (who) => console.log("Hi" + who);


//Lab3.2
let arr = [1,2,3,4,5,6,7]

let sumArray = (arr) => {
    let sum = 0;     
    arr.forEach(element => {
        sum += element;
    });
    return sum;           //tra ve
  };

console.log(sumArray(arr)); 



//Lab3.3
let Entity = function(name, delay) {
    this.name = name;
    this.delay = delay;
}

Entity.prototype.greet = function() {
    setTimeout(() => {
        console.log('Hi ten toi la : ', this.name);
    }, this.delay);
}

let java = new Entity('Java', 50);
let cpp = new Entity('C++', 30);

java.greet();
cpp.greet();


// Lab3.4
let convertTemperature = (temperature, unit) => {
    if (unit === "C") {      
      return (temperature * 9/5) + 32; // Chuyển đổi Celsius sang Fahrenheit
    } else if (unit === "F") {      
      return (temperature - 32) * 5/9; // Chuyển đổi Fahrenheit sang Celsius
    } else {      
      return undefined;
    }
  };
  
  console.log(convertTemperature(30, "C")); 
  console.log(convertTemperature(86, "F")); 
  
