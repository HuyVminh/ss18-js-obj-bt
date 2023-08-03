let stores = [
    { id: 1, name: "Milk", count: 100 },
    { id: 2, name: "Yakult", count: 100 },
    { id: 3, name: "Butter", count: 100 }
];
let carts = [];
function find(index) {
    let check = false;
    for (let i = 0; i < carts.length; i++) {
        if (carts[i].id == index) {
            check = true;
            return index - 1;
        }
    }
    if (check == false) {
        console.log("Không tồn tại");
        return -1;
    }
}
// Cho người dùng nhập vào 5 chữ cái C / R / U / D / E
let action = prompt("Nhap vao hanh dong ban C/R/U/D va E de ket thuc").toLocaleLowerCase();
while (true) {

    // C – Cho người dùng nhập vào tên sản phẩm muốn mua.
    // Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1
    if (action == "c") {
        let newId = carts.length + 1;
        let product = prompt("Nhap vao san pham ban muon mua");
        let index = stores.findIndex((value) => {
            return product == value.name;
        });
        if (index >= 0) {
            let indexOfCart = carts.findIndex(value => value.name == product)
            if (indexOfCart >= 0) {
                carts[indexOfCart].count += 1;

            } else {
                carts.push({ id: newId, name: product, count: 1 });
            }
            console.log(carts)
            stores[index].count--;
            console.log(stores);
        } else {
            console.log("Cua hang khong ban san pham nay");
        }
        // R – In ra toàn bộ các sản phẩm trong stores và carts
    } else if (action == "r") {
        console.log(stores);
        console.log(carts);


        // U – Hỏi người dùng vị trí update trong carts.
        // Nếu tồn tại cho người dùng nhập vào số lượng muốn thay đổi và khi đó
        // count trong stores cũng cập nhật theo.Update xong in lại stores và carts
    } else if (action == "u") {
        let indexUpdate = +prompt("Nhập vị trí bạn muốn update trong carts");
        let indexUp = find(Number(indexUpdate));
        if (indexUp >= 0) {
            console.log("==> ", indexUp);
            carts[indexUp].count = +prompt("Nhap so luong ban muon thay doi");
            let indexStores = stores.findIndex(value => value.name == carts[indexUp].name);
            stores[indexStores].count = 100 - carts[indexUp].count;
            console.log(carts);
            console.log(stores);
        }
        // D – Hỏi người dùng vị trị của sản phẩm muốn xóa trong carts.Tiến hành xóa và in ra lại
    } else if (action == "d") {
        let indexDelete = +prompt("Nhập vị trí bạn muốn xóa trong carts");
        let indexDel = find(Number(indexDelete));
        carts.splice(indexDel, 1);
        console.log(carts);

        // E – Biến chương trình thành vòng lặp vĩnh cứu và khi người
        // dùng nhập vào E thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Stores”
    } else if (action == "e") {
        alert("Cảm ơn bạn đã đến với Rikkei Academy")
        break;
    }
    else { }
    action = prompt("Nhap vao hanh dong ban C/R/U/D va E de ket thuc").toLocaleLowerCase();
}



