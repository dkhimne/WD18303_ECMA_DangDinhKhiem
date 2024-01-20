const response = await fetch("./db.json");
const data = await response.json();

let html = document.getElementById('product');

products.forEach(element => {                                
  let row = `
    <div>
      <div><img src="${element.image}"/></div>
      <div>${element.cate_id}</div>
      <h4>${element.name}</h4>
      <div>${element.price}</div>
    </div>`;  

  html.innerHTML += row;
});