function getProducts() {
  return new Promise(function (resolve, reject) {
    const listProductsJson = fetch(
      "https://6a0455b92afe8349b4b66d6c.mockapi.io/san_pham",
    );
    const listProducts = JSON.parse(listProductsJson);
    if (listProducts) {
      resolve(listProducts);
    } else {
      reject("Không thể tải danh sách sản phẩm");
    }
  });
}

function loadProducts() {
  const message = document.getElementById("message");
  const tableBody = document.getElementById("productTableBody");

  message.innerText = "Đang tải danh sách sản phẩm...";
  tableBody.innerHTML = "";

  getProducts()
    .then(function (products) {
      message.innerText = "Tải danh sách sản phẩm thành công";

      products.forEach(function (product) {
        tableBody.innerHTML += `
                    <tr>
                        <td>${product.id}</td>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>${product.quantity}</td>
                    </tr>
                `;
      });
    })
    .catch(function (error) {
      message.innerText = error;
    });
}
