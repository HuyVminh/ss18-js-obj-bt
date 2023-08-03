let products = [
    { id: 1, name: "Milk", count: 100 },
    { id: 2, name: "Yakult", count: 100 },
    { id: 3, name: "Butter", count: 100 }
];
// Thêm đối tượng có các thuộc tính tương tự các đối tượng có trong mảng “products”
products.push({ id: 4, name: "Cheese", count: 100 })
console.log(products);
// Xóa đối tượng có id là 2
products.splice(1, 1);
// Truy vấn đến đối tượng có id là 3, sau đó cập nhật lại giá trị count = 0
products[1].count = 0;
// Cho từ khóa “Butter”. Kiểm tra từ khóa có trong mảng “products” hay không ?
// Nếu Có in toàn bộ thông tin, nếu Không hiển thị thông báo “Không có dữ liệu bạn tìm kiếm”
let n = "Butter";
let check = true;
for (const i in products) {
    if (products[i].name == n) {
        console.log(products[i]);
        check = false;
    } 
}
if (check) {
    console.log("Không có dữ liệu bạn tìm kiếm");
}