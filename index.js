var displayScreen = document.querySelector(".screen");
var valuesNumerics = [];
var operator;
var maxElementsOnSreen = 8;

$(".button-clean").on("click",function(){
    $(".screen").text("");
    valuesNumerics = [];
})

$(".button-delete").on("click",function(){
    let values = $(".screen").text();
    $(".screen").text(values.slice(0,values.length-1));

})

$(".button-value-numeric").on("click",function(){
    let valuesScreen = displayScreen.textContent;
    let buttonInner = this.textContent;

    if(valuesScreen.length < maxElementsOnSreen){
        write(buttonInner, valuesScreen);
    }
})

// Events buttons aricmetics
$(".operator-adition").click(function(){
    valuesNumerics.push(parseFloat($(".screen").text()));
    $(".screen").text("");
    operator = adition;
})
$(".operator-substract").click(function(){
    valuesNumerics.push(parseFloat($(".screen").text()));
    $(".screen").text("");
    operator = substract;
})
$(".operator-multiply").click(function(){
    valuesNumerics.push(parseFloat($(".screen").text()));
    $(".screen").text("");
    operator = multiply;
})
$(".operator-division").click(function(){
    valuesNumerics.push(parseFloat($(".screen").text()));
    $(".screen").text("");
    operator = division;
})
$(".operator-pow").click(function(){
    valuesNumerics.push(parseFloat($(".screen").text()));
    $(".screen").text("");
    operator = pow;
})
//Event Button equals
$(".operator-equals").click(function(){
    valuesNumerics.push(parseFloat(displayScreen.textContent));
    calculate(valuesNumerics, operator);
    valuesNumerics = [];
})

//Function Calcule
function calculate(numbers, aricmeticfunction) {
    aricmeticfunction(numbers[0],numbers[1]);
}
//Function Aricmetics
function adition(number1, number2) {
    displayScreen.textContent = number1 + number2;
}
function substract(number1, number2){
    displayScreen.textContent = number1 - number2;
}
function multiply(number1, number2){
    displayScreen.textContent = number1 * number2;
}
function division(number1, number2){
    displayScreen.textContent = number1 / number2;
}
function pow(number1, number2){
    displayScreen.textContent = Math.pow(number1,number2);
}
//funtion write on Screen
function write(buttonInner, valuesScreen) {
    switch (buttonInner) {
        case "1":
            $(".screen").text((valuesScreen + "1"));
            break;
        case "2":
            $(".screen").text((valuesScreen + "2"));
            break;
        case "3":
            $(".screen").text((valuesScreen + "3"));
            break;
        case "4":
            $(".screen").text((valuesScreen + "4"));
            break;
        case "5":
            $(".screen").text((valuesScreen + "5"));
            break;
        case "6":
            $(".screen").text((valuesScreen + "6"));
            break;
        case "7":
            $(".screen").text((valuesScreen + "7"));
            break;
        case "8":
            $(".screen").text((valuesScreen + "8"));
            break;
        case "9":
            $(".screen").text((valuesScreen + "9"));
            break;
        case "0":
            $(".screen").text((valuesScreen + "0"));
            break;
        case "00":
            $(".screen").text((valuesScreen + "00"));
            break;
        case ".":
            $(".screen").text((valuesScreen + "."));
            break;
    
        default:console.log(buttonInner);
            break;
    }
}
