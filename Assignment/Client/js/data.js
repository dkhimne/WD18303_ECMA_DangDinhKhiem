//index va shop
fetch("db.json")
  .then((response) => {
    response.json().then((data) => {
      const product = data.products;
      const html = document.getElementById('san-pham');

      product.forEach(product => {
        html.innerHTML += `
        
        <div class="col-md-6 col-lg-6 col-xl-4">
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
          </div>
      `;
      });
    });
  });


//best seller
 
  fetch("db.json")
  .then((response) => {
    response.json().then((data) => {
      const product = data.products;
      const html = document.getElementById('best-seller');

      product.forEach(product => {
        html.innerHTML += `   
        <div class="col-lg-6 col-xl-4">
                    <div class="p-4 rounded bg-light">
                        <div class="row align-items-center" >     
        <div class="col-6">
        <img src="${product.image}" class="img-fluid rounded-circle w-100" alt="">
        </div>
        <div class="col-6">
        <a href="#" class="h5">${product.name}</a>
        <div class="d-flex my-3">
          <i class="fas fa-star text-primary"></i>
          <i class="fas fa-star text-primary"></i>
          <i class="fas fa-star text-primary"></i>
          <i class="fas fa-star text-primary"></i>
          <i class="fas fa-star"></i>
          </div>
          <h4 class="mb-3">${product.price}</h4>
         <a href="cart.html" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
        </div>
        </div>
       </div>
       </div>   
      `;
      });
    });
  });

