import { product } from "../../module/module.js";

 
function ListProduct(){
  fetch("http://localhost:3000/products")
  .then((response) => {
      response.json().then((data) => {
          const products = data;
          const html = document.querySelector('#san-pham tbody');

          products.forEach(product => {
              html.innerHTML += `
                  <tr>
                      <td>${product.id}</td>
                      <td class="py-1">
                          <img src="${product.image}" alt="image"  style="width: 100px;height: 100px;"/>
                      </td>
                      <td>${product.cate_name}</td>
                      <td>${product.name}</td>
                      <td>${product.price}</td>
                      <td>
                      <button class="editButton" data-id="${product.id}" data-type="product">Edit </button>
                      <button class="deleteButton" data-id="${product.id}" data-type="product">Delete</button>
                      </td>
                  </tr>
              `;
          });
      });
  });
}
ListProduct();

const addModal = document.getElementById("addModal1");
const closeAdd = document.querySelector(".close");
const addProductButton = document.getElementById("addpr");

addProductButton.onclick = function () {
  addModal.style.display = "block";
};

closeAdd.onclick = function () {
  addModal.style.display = "none";
};

document.getElementById("addpro1").onclick = function () {
  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);
  const image = document.getElementById("image").value.split("\\").pop();
  const cate_name = document.getElementById("cate_name").value;

  fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(products => {
      const lastId = products[products.length - 1].id;
      const product = {
        id: (Number(lastId) + 1).toString(),
        name: name,
        price: price,
        image: "../images/img/" + image.replace(/^.*[\\\/]/, ""),
        cate_name: cate_name,
      };
      fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      })
        .then(() => {
          addModal.style.display = "none";
          ListProduct();
        });
    });
};

//xoa
document.querySelector("tbody").addEventListener("click", function (e) {
  if (e.target.classList.contains("deleteButton")) {
    const id = e.target.dataset.id;
    const type = e.target.dataset.type;
    if (type === "product") {
      fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE"
      })
        .then(() => {
          ListProduct();
        });
    }
  }
});

const editModal = document.querySelector("#editModal");
document.querySelector("tbody").addEventListener("click", function (e) {
  if (e.target.classList.contains("editButton")) {
    const id = e.target.dataset.id;
    const type = e.target.dataset.type;
    if (type === "product") {
      fetch(`http://localhost:3000/products/${id}`)
        .then(response => response.json())
        .then(product => {
          editModal.style.display = "block";
          editModal.innerHTML = `
          <div class="modal-content">
            <span class="close">&times;</span>
            <div class="form">
              <input type="hidden" id="editProductId" value="${product.id}">
              <label for="editProductName">Tên sản phẩm:</label>
              <input type="text" id="editProductName" value="${product.name}">
              <label for="editProductPrice">Giá:</label>
              <input type="text" id="editProductPrice" value="${product.price}">
              <label for="editProductImage">Ảnh:</label>
              <input type="file" id="editProductImage" value="${product.image}">
              <label for="editProductCategories">Danh mục:</label>
              <input type="text" id="editProductCategories" value="${product.cate_name}">
              <button id="saveEditProduct">Lưu</button>
            </div>
          </div>
        `;
          const closeEdit = document.querySelector("#editModal .close");
          closeEdit.onclick = function () {
            editModal.style.display = "none";
          }
        });
    }
  }
});

editModal.addEventListener("click", function (e) {
  if (e.target.id === "saveEditProduct") {
    const productId = document.querySelector("#editProductId").value;
    const productName = document.querySelector("#editProductName").value;
    const productPrice = document.querySelector("#editProductPrice").value;
    const productImage = document.querySelector("#editProductImage").value;
    const productCategories = document.querySelector("#editProductCategories").value;

    const updatedProduct = {
      id: productId,
      name: productName,
      price: productPrice,
      // dùng biểu thức chính quy để lấy và loại bỏ kí tự :/C....
      image: "assets/img/gallery/" + productImage.replace(/^.*[\\\/]/, ""),
      categories: productCategories,
    };

    fetch(`http://localhost:3000/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedProduct)
    })
      .then(() => {
        editModal.style.display = "none";
        ListProduct();
      });
  }
});