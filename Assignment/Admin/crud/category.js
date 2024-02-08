import { product } from "../../module/module.js";

 
function ListCate(){
  fetch("http://localhost:3000/categories")
  .then((response) => {
      response.json().then((data) => {
          const categories = data;
          const html = document.querySelector('#danh-muc tbody');

          categories.forEach(cate => {
              html.innerHTML += `
                  <tr>                        
                      <td>${cate.id}</td>
                      <td>${cate.name}</td>
                      <td>
                      <button type="button"   class="editButton" data-id="${cate.id}" data-type="product"  >Edit </button>
                      <button type="button"    class="deleteButton" data-id="${cate.id}" data-type="product">Delete</button>
                      </td>
                  </tr>
              `;
          });
      });
  });
}
ListCate();
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

  product.getlastId("http://localhost:3000/categories").then((lastId) => {
    const pro = {
      id: (Number(lastId) + 1).toString(),
      name: name,
    };
    product.addData(pro);
    addModal.style.display = "none";
    ListCate();
  });
};
// xoa id
document.querySelector("tbody").addEventListener("click", function (e) {
  if (e.target.classList.contains("deleteButton")) {
    const id = e.target.dataset.id;
    console.log(id);
    product.deleteData(id).then(() => {
      ListCate();
    });
  }
});
// sửa id
const editModal = document.querySelector("#editModal");

document.querySelector("tbody").addEventListener("click", function (e) {
  if (e.target.classList.contains("editButton")) {
    const id = e.target.dataset.id;
    product.getDataById(id).then((category) => {
      // Hiển thị form edit giữa màn hình
      editModal.style.display = "block";
      // Cập nhật nội dung của form edit
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

      // Xử lý sự kiện khi nhấn nút "Lưu"
      const saveButton = editModal.querySelector("#saveEditCategory");
      saveButton.addEventListener("click", function () {
        const categoryId = document.querySelector("#editCategoryId").value;
        const categoryName = document.querySelector("#editCategoryName").value;
        const updatedCategory = {
          id: categoryId,
          name: categoryName,
        };
        product.updateData(categoryId, updatedCategory).then(() => {
          // Đóng form edit và cập nhật lại danh sách
          editModal.style.display = "none";
          ListCate();
        });
      });
      // Xử lý sự kiện khi nhấn nút đóng
      const closeButton = editModal.querySelector(".close");
      closeButton.addEventListener("click", function () {
        // Đóng form edit
        editModal.style.display = "none";
      });
    });
  }
});