// Bài 2
// let name = "Dang Dinh Khiem"; 

// let birthday = "2004/21/01";

// //arrow function
// let sayHello = () => {
//     console.log(`My name ${name},${birthday}`);
// }

// let name1 = "Dinh Khiem Dang"; 

// let birthday1 = "2004/01/21";

// //arrow function
// let sayHello1 = () => {
//     console.log(`My name ${name1},${birthday1}`);
// }
// // sayHello();
// // sayHello1();

//Bài 3
// fetch("https://api.publicapis.org/entries")
//     .then((response)=>{
//         response.json().then((data)=>{
//             console.log(data.entries);
//             let array = data.entries;

//             let html = document.getElementById('pc05680');
            
//             let child_html = `<ul><li><strong>COUNT : </strong>${data.count}</li>`;

//             array.forEach(element => {
//                 console.log(element.Description);
//                 child_html += `<li>${element.Description}</li>`;
//             });

//             child_html += '</ul>';
//             html.innerHTML = child_html;


//         })
//     })

//Bài 4 api đầu tiên

// fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
// .then((response) => {
//   response.json().then((data) => {
//     let table = document.getElementById('table').querySelector("table");

//     data.data.forEach(element => {                      //mảng có tên data
//       let row = `
//         <tr>
//           <td>${element.Nation}</td>
//           <td>${element.Year}</td>
//           <td>${element.Population}</td>`;  
    
//       table.innerHTML += row;
//     });
//   });
// });


//bài 4 api kế 
fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
.then((response) => {
  response.json().then((data) => {
    let table = document.getElementById('table').querySelector("table");

    data.forEach(element => {                               //mảng kh có tên
      let row = `
        <tr>
          <th>${element.id}</th>
          <td><img src="${element.avatar}"/></td>
          <td>${element.name}</td>
          <td>${element.createdAt}</td>`;  
    
      table.innerHTML += row;
    });
  });
});