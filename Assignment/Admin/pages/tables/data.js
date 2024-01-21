fetch("db.json")
    .then((response) => {
        response.json().then((data) => {
            const products = data.products;
            const html = document.querySelector('#san-pham tbody');

            products.forEach(product => {
                html.innerHTML += `
                    <tr>
                        <td class="py-1">
                            <img src="${product.image}" alt="image"/>
                        </td>
                        <td>${product.cate_name}</td>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                    </tr>
                `;
            });
        });
    });
