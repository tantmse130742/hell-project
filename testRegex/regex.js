//  format number by regex //

// const phones = [
//   "0987654321",
//   "84987654321",
//   "+84987654321",
//   "0987-654-321",
//   "(+84) 987654321",
//   "0987-654-321",
// ];
// const standardizedPhones = phones.map((phone) => {
//   return phone
//     .replace(/[^0-9]/g, "")
//     .replace(/^84/, "0")
//     .replace(/^0?(\d{3})(\d{3})(\d{4})$/, "(+84) $1-$2-$3");
// });
// console.log(standardizedPhones);


// split hashtag in a pnage by regex //
// const post = "Hôm nay thật tuyệt! #sunshine #happyday #javascript #coding";
// const hastags = post.match(/#\w+/g);
// console.log(hastags);


//split URL //
// const text = `
// Truy cập website https://example.com hoặc http://test.com để biết thêm thông tin.
// Liên hệ qua https://support.example.com.
// https:test.com`;
// const urls = text.match(/https?:\/\/[^\s]+/g)
// console.log(urls);


// phân tích tiền tệ
// Đề : Thêm dấu phân cách hàng nghìn cho một chuỗi số.
// const numbers = ["10000", "123456789", "98765432"];

// const formattedNumber = numbers.map(number =>
//     number.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
// )
// console.log(formattedNumber);


// Xác nhận mật khẩu mạnh 
const passwords = ["password", "P@ssword1", "12345", "StrongP@ss123"];

const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const results = passwords.map(pwd => strongPasswordRegex.test(pwd));

console.log(results);
// Output: [false, true, false, true]



