let slide1 = document.querySelector(".slide1")
let slide2 = document.querySelector(".slide2")
let slide3 = document.querySelector(".slide3")

let slide_output1 = document.querySelector(".slide-output1")
let slide_output2 = document.querySelector(".slide-output2")
let slide_output3 = document.querySelector(".slide-output3")


let output1 = document.getElementById("output1")
let output2 = document.getElementById("output2")
let output3 = document.getElementById("output3")
let output4 = document.getElementById("output4")


let btn = document.querySelector(".theme2")

let ma, mr, n;

let result = document.querySelector(".result");
let gain;

function calculate_return() {
    if (ma === undefined || mr === undefined || n === undefined) return; // Prevent errors
    gain = ma * (((1 + mr) ** n - 1) / mr) * (1 + mr)
    output4.innerText = (ma * n).toFixed(0) + " ₹";
    result.innerText = gain.toFixed(0) + " ₹";;
}







slide1.addEventListener("input", function() {
    slide_output1.value = slide1.value 
    output1.innerText = slide1.value
    output1.innerText = output1.innerText + " ₹"
    ma = Number(slide1.value)
    calculate_return()
})


slide2.addEventListener("input", function() {
    slide_output2.value = slide2.value 
    output2.innerText = slide2.value
    output2.innerText = output2.innerText + " %"
    mr = (Number(slide2.value) / 100) / 12
    calculate_return()
})


slide3.addEventListener("input", function() {
    slide_output3.value = slide3.value 
    output3.innerText = slide3.value
    output3.innerText = output3.innerText + " Yr"
    n = Number(slide3.value) * 12
    calculate_return()
})



let isOriginal = true

btn.addEventListener("click",() => {
    console.log("btn clicked")
    if(isOriginal){
        document.querySelector(".main-box").style.backgroundImage = 'url("loan cal2.png")';
    }else{
        document.querySelector(".main-box").style.backgroundImage = 'url("back-image2.jpg")';
    }
    isOriginal = !isOriginal
})

