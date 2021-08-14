let arr1 = [0,2,4,6,8]
let arr2 = [1,3,5,7]

document.getElementById("arr1").innerHTML = "arr1: " + arr1
document.getElementById("arr2").innerHTML = "arr2: " + arr2

// câu a
let cauA =()=> {
    let a = arr1.concat(arr2)
    let filter = a.filter((e)=>{
        return e > 3
    }) 
    document.getElementById("a").innerHTML = "arr3: " + filter
}

// câu b
let cauB =()=> {
    arr2.shift()
    let b = arr1.concat(arr1[1], arr2)
    document.getElementById("b").innerHTML = "arr4: " + b   
}

// câu c
let cauC =()=> {
    arr2.unshift(1)
    let c = arr1.concat(arr2)
    c.sort(function(a, b) {
        return a - b
    })
    document.getElementById("c").innerHTML = "arr5: " + c
}
