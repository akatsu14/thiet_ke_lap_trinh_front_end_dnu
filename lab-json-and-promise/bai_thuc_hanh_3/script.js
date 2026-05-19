function getProducts() {
  return new Promise(function (resolve, reject) {
    fetch("https://6a0455b92afe8349b4b66d6c.mockapi.io/san_pham")
      .then(function (response) {
        return response.json();
      })
      .then(function (products) {
        resolve(products);
      })
      .catch(function () {
        reject("Không thể tải danh sách sản phẩm");
      });
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

// Bổ sung trạng thái: đang tải, thành công, thất bại, dữ liệu rỗng.
// Nếu danh sách rỗng: hiển thị “Không có sản phẩm”.
// Tính tổng giá trị kho: price × quantity.
// Không cho dữ liệu cũ bị lặp khi bấm nút nhiều lần.
