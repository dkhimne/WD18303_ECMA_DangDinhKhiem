// Lấy dữ liệu sản phẩm từ file JSON
const getProducts = () => {
  const url = `db.json`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data);
};

// Hiển thị dữ liệu sản phẩm lên giao diện
const renderProducts = (products) => {
  const productContainer = document.querySelector(".products");
  products.forEach(product => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    // Tạo phần tử ảnh sản phẩm
    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.classList.add("product-image");
    productImage.alt = product.name;
  });
}