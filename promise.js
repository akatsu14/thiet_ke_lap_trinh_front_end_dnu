const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const success = true;

    if (success) {
      const bmiData = {
        name: "Nguyễn Văn A",
        height: 1.7,
        weight: 60,
        bmi: 20.76,
      };

      resolve(bmiData);
    } else {
      reject("Không lấy được dữ liệu BMI");
    }
  }, 2000);
});

promise
  .then(function (data) {
    console.log("Dữ liệu BMI:", data);
  })
  .catch(function (error) {
    console.log("Lỗi:", error);
  });
