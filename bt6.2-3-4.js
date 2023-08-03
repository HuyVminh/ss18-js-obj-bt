// Bài 2: Viết chương trình tạo đối tượng student có cặp key và value tương ứng như dưới đây,
// sau đó khởi tạo đối tượng newStudent có các thuộc tính tương tự(value tự điền).
// Sau đó tạo mảng “students” để chứa chúng.Cuối cùng truy xuất các thuộc tính của
// đối tượng “newStudent” sau khi thêm vào mảng “students”

class Student {
    ability;
    constructor(id, name, gender, age, mark) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.mark = mark;
    }
}
let newStudent1 = new Student(1, "Nguyễn Văn A", "Nam", 20, 8);
let newStudent2 = new Student(2, "Nguyễn Văn B", "Nam", 22, 4);
let newStudent3 = new Student(3, "Nguyễn Văn C", "Nam", 23, 9);
let newStudent4 = new Student(4, "Nguyễn Văn D", "Nam", 24, 6);
let student = [];
student.push(newStudent1);
student.push(newStudent2);
student.push(newStudent3);
student.push(newStudent4);
console.log(student);


// Bài 3: Với dữ liệu từ bài 2 hãy tìm ra học sinh có điểm trung bình cao hơn
// và in ra toàn bộ thông tin của học sinh đó

let index;
let max = student[0].mark;
for (const i in student) {
    if (student[i].mark > max) {
        index = i;
        max = student[i].mark;
    }
}
console.log("Học sinh điểm cao nhất là");
console.log(student[index]);

// Bài 4: Tạo thêm đối tượng “newStudent2” với các thuộc tính tương tự
// như đối tượng “newStudent” với value bất kỳ.Sau đó thêm vào mảng “students” (ở bài 2).
// Tính điểm trung bình của các học sinh trong mảng students trên.Nếu trên 7.5 thì
// đánh giá lớp khá, từ 5 đến 7.5 thì đánh giá lớp trung bình, dưới 5 là lớp yếu

for (i = 0; i < student.length; i++) {
    if (student[i].mark >= 7.5) {
        student[i].ability = "Khá";
    } else if (student[i].mark >= 5 && student[i].mark < 7.5) {
        student[i].ability = "Trung bình";
    } else {
        student[i].ability = "Yếu";
    }
}
console.log(student);