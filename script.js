let slide1 = document.getElementById("slide1")
let output1 = document.getElementById("output1")
let slide2 = document.getElementById("slide2")
let output2 = document.getElementById("output2")
let slide3 = document.getElementById("slide3")
let output3 = document.getElementById("output3")
let btn = document.querySelector(".theme")



let isOriginal = true

btn.addEventListener("click",() => {
    if(isOriginal){
        document.body.style.backgroundImage = 'url("loan cal.png")'
    }else{
        document.body.style.backgroundImage = 'url("back-image.png")'
    }
    isOriginal = !isOriginal
})



let p = Number(slide1.value) || 0; 
let r = Number(slide2.value) || 0; 
let n = Number(slide3.value) || 0;


let slide_output1 = document.getElementById("slide-output1")
let slide_output2 = document.getElementById("slide-output2")
let slide_output3 = document.getElementById("slide-output3")
let slide_output4 = document.getElementById("slide-output4")


let emi = document.getElementById("emi")




function calculate_emi() {
    if (!p || !r || !n) return; // Ensure all values exist before calculating

    let monthlyRate = r / 100 / 12; // Convert annual rate to monthly decimal
    let totalMonths = n * 12; // Convert years to months

    let cal_emi = (p * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                  (Math.pow(1 + monthlyRate, totalMonths) - 1); // Correct division
    
    let total_amount = cal_emi * (totalMonths) - (p);
    emi.innerText = "₹" + cal_emi.toFixed(2) ; // Round EMI to two decimal places
    slide_output4.innerText = "₹ " + total_amount.toFixed(2);
}



slide1.addEventListener("input", function() {
    output1.value = slide1.value;
    slide_output1.textContent  = slide1.value
    slide_output1.textContent = slide_output1.textContent + " ₹"
    p = Number(slide1.value)
    calculate_emi()
})



slide2.addEventListener("input", function() {
    output2.value = slide2.value;
    slide_output2.textContent = slide2.value
    slide_output2.textContent = slide_output2.textContent + " %"
    r = Number(slide2.value)
    calculate_emi()
})



slide3.addEventListener("input", function() {
    output3.value = slide3.value;
    slide_output3.textContent = slide3.value
    slide_output3.textContent = slide_output3.textContent + " Yr"
    n = Number(slide3.value)
    calculate_emi()
})



