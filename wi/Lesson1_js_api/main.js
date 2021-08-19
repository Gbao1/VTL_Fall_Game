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

// let getDataAPI = async (city)=> {
//     let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7674da634845e7c2d8c53ab0a48b8e29`

//     let preData = await fetch(api) //lấy data từ api
//     let data = await preData.json()
// // dùng preData.json() để lọc thông tin, chỉ lấy dạng json
//     renderData(data)
// }

// let renderData = (data)=> {
//     let dom = document.querySelector(".show")
//     let html = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
//     <h1>${parseInt(data.main.temp - 273)}</h1>
//     <hr>
//     <p>${data.name}</p>
//     <p>${data.weather[0].description}</p>`

//     dom.innerHTML = html
// }

// let form = document.querySelector("#inputCityName")
// form.onsubmit = (e)=> {
//     e.preventDefault()
//     let city = form.city.value
//     getDataAPI(city)
// }


let getDataAPI = async (city)=>{
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7674da634845e7c2d8c53ab0a48b8e29`
    let preData = await fetch(api)
    let data = await preData.json()

    render(data)
}

let render = (data)=>{
    let html = document.querySelector(".content")
    let {name,main:{temp},weather:{0:{icon,description}}} = data
    let dom = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="">
    <p>${parseInt(temp - 273)}</p>
    <hr>
    <h1>${name}</h1>
    <p class="paragragh">${description}</p>
    `
    html.innerHTML = dom
}

let input = document.querySelector("#input")
input.onsubmit = (e)=>{
    e.preventDefault()
    let city = input.city.value
    getDataAPI(city)        
}