//lisst product
fetch("http://localhost:3000/products")
    .then((response) => {
        response.json().then((data) => {
            const products = data;
            const html = document.querySelector('#san-pham tbody');

            products.forEach(product => {
                html.innerHTML += `
                    <tr>
                        <td class="py-1">
                            <img src="${product.image}" alt="image"  style="width: 100px;height: 100px;"/>
                        </td>
                        <td>${product.cate_name}</td>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>
                        <button type="button" class="btn btn-primary mt-3"  ">Edit </button>
                        <button type="button" class="btn btn-danger mt-3"  ">Delete</button>
                        </td>
                    </tr>
                `;
            });
        });
    });


//list cate
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
                        <button type="button" class="btn btn-primary mt-3"  ">Edit </button>
                        <button type="button" class="btn btn-danger mt-3"  ">Delete</button>
                        </td>
                    </tr>
                `;
            });
        });
    });

//list order
fetch("http://localhost:3000/orders")
    .then((response) => {
        response.json().then((data) => {
            const orders = data;
            const html = document.querySelector('#don-hang tbody');

            orders.forEach(or => {
                html.innerHTML += `
                    <tr>                        
                        <td>${or.id}</td>
                        <td>${or.customer_name}</td>
                        <td>${or.customer_address}</td>
                        <td>${or.customer_email}</td>
                        <td>${or.customer_phone_number}</td>
                        <td>${or.created_date}</td>
                        <td>${or.status}</td>
                    </tr>
                `;
            });
        });
    });