// import sum from "./math.js" //Đặt tên biến là gì cx đc
// import {sum, tru} from "./math.js" //Tên phải giống như bên export

// console.log(sum(8,2))

let x = [1,1,2,3]
let y = [...x] //...x gọi là rest (Với array)

let obj = {
    name: "Bảo",
    age: 16,
    address: {
        district: "Hoan Kiem",
        city: "Hanoi"
    }
}

//spread
let obj1 = {
    ...obj,
    ...obj.address
}

//destructuring
let {name, age} = obj
console.log(name);
console.log(age)