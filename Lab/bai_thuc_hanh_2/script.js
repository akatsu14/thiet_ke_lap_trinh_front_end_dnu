const students = [];

//Tạo hàm xử lý khi bấm nút "Lấy thông tin sinh viên"
function loadStudents() {
  const message = document.getElementById("message");
  const tableBody = document.getElementById("studentTableBody");

  message.innerText = "Đang lấy thông tin sinh viên...";

  tableBody.innerHTML = "";

  //Đọc dữ liệu từ file students.json
  fetch("students.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      students.length = 0;
      students.push(...data);
      message.innerText = "Lấy thông tin sinh viên thành công";
      displayStudents();
    })
    .catch(function (error) {
      message.innerText = "Không thể lấy thông tin sinh viên";
      console.log("Lỗi:", error);
    });
}

//hiển thị danh sách sinh viên ra bảng
function displayStudents() {
  const tableBody = document.getElementById("studentTableBody");

  tableBody.innerHTML = "";

  students.forEach(function (student) {
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

//Nếu danh sách có nhiều sinh viên, làm sao chỉ hiển thị sinh viên lớp CNTT01?
