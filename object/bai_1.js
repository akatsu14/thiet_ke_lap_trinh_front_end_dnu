// 1. Khởi tạo Object tên là drink
const drink = {
  name: "Cà phê sữa đá",
  price: 35000,
  isAvailable: true,
};

// 2. Truy xuất dữ liệu để in tên và giá món nước ra console
console.log("Tên món:", drink.name);
console.log("Giá cơ bản:", drink.price);

// 3. Thực hiện cập nhật (thay đổi giá trị) của thuộc tính price
drink.price = 40000;

// In ra kiểm tra sau khi cập nhật
console.log("Giá sau khi cập nhật:", drink.price);
