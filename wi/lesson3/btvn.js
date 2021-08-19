// Bài 3
class people{
    constructor(ten,tuoi,noio){
    this.ten = ten
    this.tuoi = tuoi
    this.noiO = noiO
    }
}

class student extends people{
    constructor(ten, tuoi, noiO, lop, truong){
    super(ten, tuoi, noiO)
    this.lop = lop
    this.truong = truong
    }
}
// Bài 4
class Animal {
    constructor(name){
        this.name = name
    }
}

class Rabbit extends Animal{
    constructor(name){
    super(name) //this.name = name; sai
    this.created = Date.now()
    }
}

let rabbit = new Rabbit("White Rabbit")
alert(rabbit.name)