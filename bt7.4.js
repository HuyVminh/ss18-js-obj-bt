// Bài 4: Tạo dữ liệu để có thể in ra nội dung
let id = 1;
class Course {
    constructor(name, complete) {
        this.id = id++;
        this.name = name;
        this.complete = complete;
    }
}
let course1 = new Course("HTML", "false");
let course2 = new Course("CSS", "false");
let course3 = new Course("Basic Of Javascript", "false");
let course4 = new Course("Node Package Manager (npm)", "false");
let course5 = new Course("Git", "false");
let list = [];
list.push(course1);
list.push(course2);
list.push(course3);
list.push(course4);
list.push(course5);
// Cho người dùng nhập vào 5 chữ cái C / R / U / D / E
let action = prompt("Nhap vao hanh dong ban C/R/U/D va E de ket thuc").toLocaleLowerCase();
// C – Cho người dùng nhập vào khóa học mới và trạng thái hoàn thành.
// Sau đó cập nhật lại mảng dữ liệu và in ra giống như trên
function find(index) {
    let check = false;
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == index) {
            check = true;
            return index;
        }
    }
    if (check == false) {
        console.log("Không tồn tại");
        return -1;
    }
}
while (true) {
    if (action == "c") {
        let newCourse = prompt("Nhập khóa học bạn muốn thêm");
        let newStatus = prompt("Nhập trạng thái hoàn thành");
        list.push(new Course(newCourse, newStatus));
        console.log(list);
    } else if (action == "r") {
        // R – In ra toàn bộ các khóa học theo mẫu trên
        console.log(list);
    } else if (action == "u") {
        // U – Hỏi người dùng vị trí update khóa học.Nếu tồn tại cho
        // người dùng nhập vào tên muốn update và trạng thái mới.Update xong in lại như trên
        let indexUpdate = prompt("Nhập vị trí bạn muốn update khóa học");
        let indexUp = find(Number(indexUpdate));
        list[indexUp].name = prompt("Tên khóa học bạn muốn update");
        list[indexUp].complete = prompt("Trạng thái bạn muốn update");
        console.log(list);
    } else if (action == "d") {
        // D – Hỏi người dùng vị trị của khóa học muốn xóa.Tiến hành xóa và in ra như trên
        let indexDel = prompt("Nhập vị trí bạn muốn delete");
        let indexD = find(Number(indexDel));
        list.splice(indexD, 1);
        console.log(list);
    } else if (action == "e") {
        // E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E
        // thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Academy”
        alert("Cảm ơn bạn đã đến với Rikkei Academy")
        break;
    }
    else { }
    action = prompt("Nhap vao hanh dong ban C/R/U/D va E de ket thuc").toLocaleLowerCase();
}






