import { product } from "../../module/module.js";

 
// them id
const addModal = document.querySelector("#addModal");
const closeAdd = document.querySelector(".close");
document.querySelector("#addcategories").onclick = function () {
  addModal.style.display = "block";
};
closeAdd.onclick = function () {
  addModal.style.display = "none";
};
document.querySelector("#addpro").onclick = function () {
  const id = document.querySelector("#id");
  const name = document.querySelector("#name").value;

  fetch("http://localhost:3000/categories")
    .then(response => response.json())
    .then(categories => {
      const lastId = categories[categories.length - 1].id;
      const pro = {
        id: (Number(lastId) + 1).toString(),
        name: name,
      };
      fetch("http://localhost:3000/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pro)
      })
        .then(() => {
          addModal.style.display = "none";
          showCategories();
        });
    });
};

document.querySelector("tbody").addEventListener("click", function (e) {
  if (e.target.classList.contains("deleteButton")) {
    const id = e.target.dataset.id;
    fetch(`http://localhost:3000/categories/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        showCategories();
      });
  }
});

const editModal = document.querySelector("#editModal");

document.querySelector("tbody").addEventListener("click", function (e) {
  if (e.target.classList.contains("editButton")) {
    const id = e.target.dataset.id;
    fetch(`http://localhost:3000/categories/${id}`)
      .then(response => response.json())
      .then(category => {
        editModal.style.display = "block";
        editModal.innerHTML = `
          <div class="modal-content">
            <span class="close">&times;</span>
            <div class="form">
              <input type="hidden" id="editCategoryId" value="${category.id}">
              <label for="editCategoryName">Tên loại:</label>
              <input type="text" id="editCategoryName" value="${category.name}">
              <button id="saveEditCategory">Lưu</button>
            </div>
          </div>
        `;

        const saveButton = editModal.querySelector("#saveEditCategory");
        saveButton.addEventListener("click", function () {
          const categoryId = document.querySelector("#editCategoryId").value;
          const categoryName = document.querySelector("#editCategoryName").value;
          const updatedCategory = {
            id: categoryId,
            name: categoryName,
          };
          fetch(`http://localhost:3000/categories/${categoryId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedCategory)
          })
            .then(() => {
              editModal.style.display = "none";
              showCategories();
            });
        });

        const closeButton = editModal.querySelector(".close");
        closeButton.addEventListener("click", function () {
          editModal.style.display = "none";
        });
      });
  }
});