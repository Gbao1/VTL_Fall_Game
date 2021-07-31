// let b1 = (n)=>{
//     var output = ""
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 == 0) {
//             output += i
//             if (i < n-1) {
//                 output += ","
//             }
//         }  
//     }
//     console.log(output);
// }
// b1(7)
// b1(8)

let getDatAPI = async (city)=> {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7674da634845e7c2d8c53ab0a48b8e29`

    let preData = await fetch(api) //lấy data từ api
    let data = await preData.json()
// dùng preData.json() để lọc thông tin, chỉ lấy dạng json
    console.log(data)
}
getDatAPI("hanoi")
