let student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    }
    ]

// document.getElementById("demo").innerHTML = 
// student[0].name + ", " + student[0].age + ", " + student[0].course + "<br>" +
// student[1].name + ", " + student[1].age + ", " + student[1].course + "<br>" +
// student[2].name + ", " + student[2].age + ", " + student[2].course + "<br>" +
// student[3].name + ", " + student[3].age + ", " + student[3].course + "<br>" ;

// Câu b
function timTuoi() {
    let ages = prompt("Độ tuổi cần tìm?")
    if (ages < 15 || ages > 18) {
        alert("Không tìm thấy!")
    } else {
        if (ages == 15) {
            let a = 3 
            checkAge(a)
        }
        if (ages == 16) {
            let a = 0
            checkAge(a)
        }
        if (ages == 17) {
            let a = 2
            checkAge(a)
        }
        if (ages == 18) {
            let a = 1
            checkAge(a)
        } 
    }
}

function checkAge(a) {
    document.getElementById("demo").innerHTML =
    "Tên: " + student[a].name + "<br> " + "Tuổi: " + student[a].age + "<br>" + "Các khóa học: " + student[a].course;
}
// Câu a
function timKhoa() {
    document.getElementById("demo2").innerHTML = "";
    let courses = prompt("Khóa học cần tìm?")
    if (courses == "mindX 01") {
        document.getElementById("demo2").innerHTML =
        "Tên: " + student[0].name + "<br> " + "Tuổi: " + student[0].age + "<br>" +
        "Tên: " + student[1].name + "<br> " + "Tuổi: " + student[1].age + "<br>" +
        "Tên: " + student[2].name + "<br> " + "Tuổi: " + student[2].age + "<br>" +
        "Tên: " + student[3].name + "<br> " + "Tuổi: " + student[3].age + "<br>" ;
    }
    if (courses == "mindX 02") {
        document.getElementById("demo2").innerHTML =
        "Tên: " + student[0].name + "<br> " + "Tuổi: " + student[0].age + "<br>" +
        "Tên: " + student[1].name + "<br> " + "Tuổi: " + student[1].age + "<br>" +
        "Tên: " + student[3].name + "<br> " + "Tuổi: " + student[3].age + "<br>" ;
    }
    if (courses == "mindX 03") {
        document.getElementById("demo2").innerHTML =
        "Tên: " + student[0].name + "<br> " + "Tuổi: " + student[0].age + "<br>" +
        "Tên: " + student[2].name + "<br> " + "Tuổi: " + student[2].age + "<br>" +
        "Tên: " + student[3].name + "<br> " + "Tuổi: " + student[3].age + "<br>" ;
    }
    if (courses == "mindX 04") {
        document.getElementById("demo2").innerHTML =
        "Tên: " + student[1].name + "<br> " + "Tuổi: " + student[1].age + "<br>" +
        "Tên: " + student[2].name + "<br> " + "Tuổi: " + student[2].age + "<br>" ;
    }   
    check()
}

function check() {
    let i = document.getElementById("demo2").innerHTML
    if ( i == "") {
        alert("Chưa có lớp học này")
    }
}