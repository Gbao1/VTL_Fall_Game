let arr = [1,5,8,7,6]
// // let newArr = arr.sort((a,b) => {
// //     return a - b
// // })
// // console.log(newArr)

for (let i = 0; i <= arr.length; i++) {
    let temp = 0
    for (let j = i + 1; j < arr.length; j++) {
        if(arr[j] < arr[i]) {
            temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
        }
    }
}
console.log(arr)

class Car {
    name;
    speed;
    seats;
    brand;

    // Khởi tạo giá trị của class
    constructor (name, speed, seats, brand) {
        this.name = name;
        this.speed = speed;
        this.seats = seats;
        this.brand = brand;
    }



    start(){
        console.log(`${this.name} đã xuất phát, vận tốc là ${this.speed}`);
    }

    stop(){}

    honk(){
        console.log(`Đây là tiếng bô của xe ${this.name}`)
    }
}
// let car1 = new Car("Lamborghini Aventador", 200,2, "Lamborghini")
// car1.start();

// Tính kế thừa 
class SupperCar extends Car{
    // Static là ko cần khởi tạo mà vẫn dùng đc
    static limitSpeed(){
        return 120
    }
    constructor (name, speed, seats, brand, topSpeed) {
        super(name, speed, seats, brand)
        this.topSpeed = topSpeed
    }

    turboBoost(){
        console.log(`${this.name} đang Boost với top speed là ${this.topSpeed}`);
    }

    honk() {
        super.honk()
        console.log(`Đây là xe của hãng ${this.brand}`)
    }
}

let spCar1 = new SupperCar("Ferrari 488", 200, 2, "Ferrari", 300)
spCar1.start()
spCar1.honk()