// Bài 3: Tạo một đối tượng User chưa thông tin người dùng bao gồm:
// tên, email, địa chỉ, điện thoại.Tạo class Admin kế thừa từ class User.
// Thêm thuộc tính “role” vào 2 đối tượng Admin(value = 1) và User(value = 0)
class User {
    role = 0;
    constructor(name, email, address, phone) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
    }
}
class Admin extends User {
    role = 1;
    constructor(name, email, address, phone) {
        super(name, email, address, phone)
    }
}

// Tạo danh sách người dùng(dạng mảng) và thêm vào 3 user, 1 admin
let list = [];
let user1 = new User("A", "a@mail.com", "HN", "0987654321");
let user2 = new User("B", "b@mail.com", "DN", "0983457622");
let user3 = new User("C", "c@mail.com", "HCM", "0983452235");
let admin1 = new Admin("AD", "ad@gmail.com", "LC", "0923477237");
list.push(user1);
list.push(user2);
list.push(user3);
list.push(admin1);
console.log(list);
// Xóa người dùng thông qua tên của họ(không xóa được admin)
let del = "B";
let flag = true;
for (i = 0; i < list.length; i++) {
    if (list[i].name == del) {
        if (list[i].role == 0) {
            flag = false;
            list.splice(i, 1);

        } else if (list[i].role == 1) {
            flag = false;
            console.log("Bạn không thể xóa được admin");
        }
    }
}
if (flag) {
    console.log("Tên người dùng không tồn tại");
}
// Sửa thông tin người dùng thông qua id(không sửa được thông tin admin)
// fixId = prompt("Nhập Id người dùng bạn muốn sửa")
// let check = true;
// for (i = 0; i < list.length; i++) {
//     if (i == fixId) {
//         if (list[i].role == 0) {
//             check = false;
//             let n = prompt("Nhập thuộc tính bạn muốn sửa(name/email/address/phone)");
//             if (n == "name" || n == "email" || n == "address" || n == "phone") {
//                 list[i][n] = prompt("Nhập dữ liệu bạn muốn sửa");
//                 console.log(list[i]);
//             }
//         } else if (list[i].role == 1) {
//             check = false;
//             console.log("Bạn không thể xóa được admin");
//         }
//     }
// }
// if (check) {
//     console.log("ID người dùng không tồn tại");
// }

// Thêm 1 nick admin vào mảng danh sách người dùng.
// Sau đó tìm kiếm toàn bộ thông tin các tài khoản là admin và in ra
let admin2 = new Admin("BD", "bd@gmail.com", "CM", "0974626232");
list.push(admin2);
let adm = [];
for (i = 0; i < list.length; i++) {
    if (list[i].role == 1) {
        adm.push(list[i]);
    }
}
console.log(adm);