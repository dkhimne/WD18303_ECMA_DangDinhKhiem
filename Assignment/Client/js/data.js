fetch("db.json")
  .then((response) =>{
    response.json().then((data) => {
    const product = data.products ;
    const html = document.getElementById('san-pham');
      
    product.forEach(product => {
      html.innerHTML += `
        <div class="rounded position-relative fruite-item" >
          <div class="fruite-img">
           <a href="shop-detail.html"> <img src="${product.image}" class="img-fluid w-100 rounded-top" alt=""> </a>
          </div>
          <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">${product.cate_name}</div>
          <div class="p-4 border border-secondary border-top-0 rounded-bottom">
            <h4>${product.name}</h4>
            <p>San pham huu co khong phan bon</p>
            <div class="d-flex justify-content-between flex-lg-wrap">
              <p class="text-dark fs-5 fw-bold mb-0">${product.price}</p>
              <a href="cart.html" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
            </div>
          </div>
        </div>
      `;
      });
    });
  });
  
