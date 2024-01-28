// import  
//     User,   // do export defautl nên để phía ngoài 
// {
//     API_URL,
//     name,
//     sum,
//     minus, 
//     module2,
//     APICaller,
//     Post
// } from './module.js'

// console.log(API_URL);

// console.log(name);

// console.log(sum(1,2));

// console.log(minus(2,1));

// console.log(module2);

// new APICaller;

// new Post('http://127.0.0.1:5500/index.html')

// new User;

//bai 1
import {
    uppercaseString, 
    lowercaseString,
    subtract,
    subtract2
} from './module.js'

const upperCaseString = uppercaseString("Về");
console.log(upperCaseString);  

const lowerCaseString = lowercaseString("Quê");
console.log(lowerCaseString); 

//Bai2
import * as stringFunctions from './module.js';

const an = stringFunctions.uppercaseString("Ăn");
console.log(an);  

const tet = stringFunctions.lowercaseString("Tết!");
console.log(tet);  

//Bai3
console.log(subtract(2,1));

//Bai4 
console.log(subtract2(7,4));