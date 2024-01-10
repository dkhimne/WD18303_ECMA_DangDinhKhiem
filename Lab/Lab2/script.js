//Bài 2.5
// function generateTableHeader(headerTitles){
//     if(!headerTitles || headerTitles.length === 0 ){
//         return "";
//     }
//     let html = ``;
//     headerTitles.forEach(element => {
//         html += `<th>${element}</th>`;
//     });    
//     return `<thead><tr>${html}</tr></thead>`;
// }
 
// function generateTableRowStudent(object){
//     return  `<tr>
//         <td>${object.id}</td>
//         <td>${object.name}</td>
//         <td><img src="${object.avatar}" height=100px></td>
//         <td>${object.createAt}</td>
//             </tr>`;
// }

// let list =[
// {
//     id:1,
//     name:"Le Van A",
//     avatar:"https://genk.mediacdn.vn/k:2014/1-29c555674dfc24d17a8049a18b7d959a-1413790610953/nen-chon-buc-anh-dai-dien-nao-tren-facebook.jpg",
//     createAt:"2024/01/21"
// },
// {
//     id:2,
//     name:"Le Van B",
//     avatar:"https://genk.mediacdn.vn/k:2014/1-29c555674dfc24d17a8049a18b7d959a-1413790610953/nen-chon-buc-anh-dai-dien-nao-tren-facebook.jpg",
//     createAt:"2024/01/21"
// }
// ];

// let header = [
//     "ID",
//     "Ho Va Ten",
//     "Anh Dai Dien",
//     "Ngay Tao"
// ]
// document.write(generateTable(header,list));

// function generateTable(headers,data){
//     if(!headers || !data || headers.length === 0 || data.length === 0){
//         return "";
//     }
//     let headerRow = generateTableHeader(headers);
//     let html = ``;
//     data.forEach(element =>{
//         html += generateTableRowStudent(element);
//     });
//     return  `<table>${headerRow}<tbody>${html}</tbody></table>`;
// }

//Bài 1
// let result ={
//     success : ["max-length","no-amd","prefer-arrow-functions"],
//     failure : ["no-var","var-on-top","linebreak"],
//     skipped : ["no-extra-semi","no-dep-keys"]
// };
// function makelist (arr) {

//     let failureItems = [];
    
//     arr.forEach(element => {
//     failureItems.push(`<li class="text-warning">${element}</li>`);
//     });
  
//     return failureItems;
  
//   }
// let failureList = makelist(result.failure);
// console.log(failureList);

//Bài 2 : 
// let source = [1,2,3,4,5,6,7,8,9,10];

// function removeFirstTwo(list) {

//   let [, , ...arr] = list;

//   return arr;

// }

// let arr = removeFirstTwo (source);

// console.log(arr) 
// console.log(source) 

//Bài 3 
// let arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;

// arr2 = [...arr1];

// console.log(arr2); 

//Bài 4 
function spreadOut(){
    let fragment = ['to', 'code'];
    let sentence = ['learning',...fragment,'is','fun'];
    return sentence;
}
console.log(spreadOut());