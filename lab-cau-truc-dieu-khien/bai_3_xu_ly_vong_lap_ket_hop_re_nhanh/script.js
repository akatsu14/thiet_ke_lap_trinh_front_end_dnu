function createReport() {
  const lessonCodes = ["if", "switch", "for"];
  const completed = [true, false, true];
  let report = `
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>Mã bài</th>
          <th>Tên bài học</th>
          <th>Trạng thái</th>
        </tr>
      </thead>
      <tbody>
    `;

  for (let i = 0; i < lessonCodes.length; i++) {
    let lessonName = "";
    switch (lessonCodes[i]) {
      case "if":
        lessonName = "Thực hành với if-else";
        break;
      case "switch":
        lessonName = "Thực hành với switch-case";
        break;
      case "for":
        lessonName = "Học cấu trúc vòng lặp for";
        break;
      default:
        lessonName = "Bài học không hợp lệ";
    }
    const status = completed[i] ? "Đã hoàn thành" : "Chưa hoàn thành";
    report += `
        <tr>
          <td>${i + 1}</td>
          <td>${lessonCodes[i]}</td>
          <td>${lessonName}</td>
          <td>${status}</td>
        </tr>
        `;
  }
  report += `
      </tbody>
    </table>
    `;
  document.getElementById("result").innerHTML = report;
}
