//Tạo Object lưu họ tên, chiều cao, cân nặng và BMI.
const person = {
  name: "Nguyễn Văn A",
  height: 1.7,
  weight: 60,
  bmi: 20.76,
};
const jsonPerson = JSON.stringify(person); // Chuyển Object thành chuỗi JSON.
console.log(jsonPerson);
const parsedPerson = JSON.parse(jsonPerson); // Chuyển chuỗi JSON thành Object
//In thông tin ra console
console.log(parsedPerson.name);
console.log(parsedPerson.bmi);
