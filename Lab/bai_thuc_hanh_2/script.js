//Tạo mảng rỗng để lưu danh sách sinh viên
const students = [];

//Tạo hàm xử lý khi bấm nút "Lấy thông tin sinh viên"
function loadStudents() {
  //Truy xuất phần tử hiển thị thông báo và phần thân bảng
  const message = document.getElementById("message");
  const tableBody = document.getElementById("studentTableBody");

  //Hiển thị thông báo đang tải dữ liệu
  message.innerText = "Đang lấy thông tin sinh viên...";

  //Xóa dữ liệu cũ trong bảng trước khi hiển thị dữ liệu mới
  tableBody.innerHTML = "";

  //Đọc dữ liệu từ file students.json
  fetch("students.json")
    //Chuyển dữ liệu JSON nhận được thành Object/Array JavaScript
    .then(function (response) {
      return response.json();
    })

    //Nhận danh sách sinh viên sau khi chuyển đổi thành công
    .then(function (data) {
      //Xóa dữ liệu cũ trong mảng students
      students = [];

      // Thêm các Object sinh viên vào mảng students
      students.push(...data);

      // Hiển thị thông báo thành công
      message.innerText = "Lấy thông tin sinh viên thành công";

      // Gọi hàm hiển thị danh sách sinh viên ra bảng
      displayStudents();
    })

    // Xử lý khi đọc file JSON thất bại
    .catch(function (error) {
      message.innerText = "Không thể lấy thông tin sinh viên";
      console.log("Lỗi:", error);
    });
}

// Tạo hàm hiển thị danh sách sinh viên ra bảng
function displayStudents() {
  // Truy xuất phần thân của bảng
  const tableBody = document.getElementById("studentTableBody");

  // Xóa nội dung cũ trong bảng
  tableBody.innerHTML = "";

  // Duyệt từng sinh viên trong mảng students
  students.forEach(function (student) {
    // Thêm từng sinh viên vào bảng HTML
    tableBody.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.className}</td>
                <td>${student.email}</td>
            </tr>
        `;
  });
}
