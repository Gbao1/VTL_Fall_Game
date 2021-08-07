// Bài 1
// let arr1 = [1,2,3,5]
// let arr2 = [...arr1]
// let arrCopy = []
// arr1.forEach(a => { //phương thức gọi một hàm một lần cho mỗi phần tử trong một mảng, theo thứ tự. 
//     arrCopy.push(a)
// })

// console.log(arr2)
// console.log(arrCopy)

// Bài 2
// let arrA = ['Hello', ' Xin chào']
// let arrB = ['Bonjour', 'Olá']

// let waysToSayHello = arrA.concat(arrB)
// let waysToSayHello2 = [...arrA, ...arrB]

// console.log(waysToSayHello)
// console.log(waysToSayHello2)

// Bài 3
// let arrX = [0,1,2,3,4,5,6,7,8]
// let arrSquare = []
// let arrOdds = []

// arrX.forEach(a => {
//     arrSquare.push(a*a)
// })

// arrX.forEach(e => {
//     if (e%2 == 1) {
//         arrOdds.push(e)
//     }
// })

// console.log(arrSquare)
// console.log(arrOdds)

// Bài 4
//  let arr = [2,4,6,8,10,12]
//  let a = prompt('Nhập vị trí đầu')
//  let b = prompt('Nhập vị trí cuối')
//  let aTOb = []

//  function filterRange(arr, a, b) {
//      if (a > b) {
//          alert('...')
//      }
//      else {
//         for (let i = a; i <= b; i++) {
//             aTOb.push(arr[i])
//         } 
//         console.log(aTOb)
//      }
//  }
//  filterRange(arr, a, b)

// Bài 5
// Câu a)
//  let arr = [2,4,6,8,10,12]
//  let a = prompt('Nhập vị trí đầu')
//  let b = prompt('Nhập vị trí cuối')
//  let aTOb = []

//  function filterRange(arr, a, b) {
//      if (a > b) {
//          alert('...')
//      }
//      else {
//         for (let i = a +++ 1; i < b; i++) {
//             aTOb.push(arr[i])
//         } 
//         console.log(aTOb)
//      }
//  }
//  filterRange(arr, a, b)

// Câu b e ko bt làm ạ

// Bài 6
// let student = [
//     {
//         name: "Duong",
//         age: 11,
//         hobbies: ["video game","sleep","learn"]
//     },
//     {
//         name: "Dong",
//         age: 12,
//         hobbies: ["video game","sick","study"]
//     },
//     {
//         name: "Minh",
//         age: 13,
//         hobbies: ["video game","sick","learn"]
//     },
//     {
//         name: "Thanh",
//         age: 9,
//         hobbies: ["play game","sleep","learn"]
//     },
//     {
//         name: "Hung",
//         age: 11,
//         hobbies: ["play game","sick","study"]
//     }
// ]

// Câu a)
// let a = prompt("Độ tuổi cần tìm ?")
// for (let i = 0; i < student.length; i ++) {
//     if (a == student[i].age) {
//         console.log(student[i].name)
//     }
// }
// Câu b)
// let b = prompt("Sở thích ?")
// for (let i = 0; i < student.length; i++) {
//     for (let e = 0; e < student[i].hobbies.length; e++) {
//         if (b == student[i].hobbies[e]) {
//             console.log(student[i].name)
//             console.log(student[i].hobbies)
//         }
//     }
// }
// Câu c)
// let c = "study"
// for (let i = 0; i < student.length; i++) {
//     for (let e = 0; e < student[i].hobbies.length; e++) {
//         if (c == student[i].hobbies[e]) {
//             console.log(student[i].name)
//             console.log(student[i].hobbies)
//         }
//     }
// }
//Câu d)
// let d = student.map(tuoiMoi)
// function tuoiMoi(d) {
//     if (d.age == 11) {
//         d.age += 4
//     }
// }
// console.log(d)
//Bài thêm
// const array1 = ["hello", "bye", "world", "gia bao"];
// const arr2 = array1.slice(0,3)
// console.log(arr2); 