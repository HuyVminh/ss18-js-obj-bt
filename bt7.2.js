// Bài 2: Tạo một class Dog có những thuộc tính:
class Dog {
    // Tên và tốc độ di chuyển
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    // Có khả năng thực hiện sủa
    bark() {
        console.log(`${this.name} gau gau`);
    }
    // Có khả năng bắt được mèo nếu tốc độ của chó lớn hơn
    catchCat() {
        if (this.speed > Cat.speed) {
            Cat.alive = false;
            console.log(`${this.name} bắt được ${Cat.name}`);
        } else {
            console.log(`${this.name} bắt được ${Cat.name}`);
        }
    }
}
// Tạo class Cat có những thuộc tính sau:
// Tên và tốc dộ di chuyển
class Cat {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
        this.alive = true;
    }
}
let bull = new Dog("Beo", 20);
let cat = new Cat("Tom", 10);
bull.bark();
bull.catchCat(cat);
