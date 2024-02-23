//cau 1
// ...

//cau 3

const API_URL = "https://onthiemca-default-rtdb.firebaseio.com/";

let getCategory = async () => {
    let response = await fetch(API_URL + "categories.json");
    return await response.json();
};
//sua
let editCategory = (idCategory)=>{
    let getOneCategory = async (idCategory) => {
        let response = await fetch(API_URL + "categories/" + idCategory + ".json");
        return await response.json();
    };
    
    getOneCategory(idCategory).then((categories) =>{
        console.log(categories);
        //field du lieu vao form
        document.querySelector('input[name="id"]').value= categories.id;
    });

};

//xoa
let deleteCategory = (idCategory)=>{
    let getOneCategory = async (idCategory) => {
        let response = await fetch(API_URL + "categories/" + idCategory + ".json", {
            method: 'DELETE'
        });
        return await response.json();
    };
    
    getOneCategory(idCategory).then((categories) =>{
        console.log(categories);
        //field du lieu vao form
        document.querySelector('input[name="id"]').value= categories.id;
    });

};

// goi ham
getCategory()
    .then((categories) => {

        let html = ``;
        let tbody = document.getElementById('listCate');

        Object.entries(categories).forEach(([key, cate]) => {

            html += `
            <tr class="">
            <td scope="row">${cate.id}</td>
            <td>${cate.name}</td>
            <td><button onclick= "editCategory('${key}')" class="btn btn-warning">Edit</button>
            <button onclick= "deleteCategory('${key}') "class="btn btn-danger">Delete</button></td>

        </tr>   `;
        });
        tbody.innerHTML = html;
        //Thanh cong thi vao day
    }).catch((error) => {

    })

//add
let addCategory = (form) => {
    // console.log(form);
    let data = new FormData(form);
    // let elements = form.elements;
    // console.log(elements.id.value , elements.name.value);

    let object = {
        "id": data.get('id'),
        "name": data.get('name')
    }

    fetch(API_URL + "categories.json", {
        method: 'POST',
        body: JSON.stringify(object)
    });

};