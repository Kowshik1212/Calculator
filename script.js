const numbers_ele = document.querySelector(".numbers");
const input_ele = document.querySelector("input");
const button_ele_plus = document.querySelector(".operationplus");
const button_ele_minus = document.querySelector(".operationminus");
const button_ele_cross = document.querySelector(".operationcross");
const button_ele_div = document.querySelector(".operationdiv");
const button_ele_percent = document.querySelector(".operationpercent");
const specialButton_eleC = document.querySelector(".specialButtonC");
const specialButton_eleCE = document.querySelector(".specialButtonCE");
const specialButton_ele = document.querySelector(".specialButton");

for (let i = 1; i <= 9; i++) {
    renderButton(i);
}

function renderButton(number) {
    let number_ele = document.createElement("button");
    number_ele.textContent = number;
    numbers_ele.append(number_ele);
    number_ele.addEventListener('click', function () {
        input_ele.value += number;
    })
}

button_ele_plus.addEventListener('click', function (e) {
    input_ele.value += "+";
})

button_ele_minus.addEventListener('click', function (e) {
    input_ele.value += "-";
})

button_ele_cross.addEventListener('click', function (e) {
    input_ele.value += "*";
})

button_ele_div.addEventListener('click', function (e) {
    input_ele.value += "/";
})

button_ele_percent.addEventListener('click', function (e) {
    input_ele.value += "%";
})

specialButton_ele.addEventListener('click', function (e) {
    let input_str = input_ele.value;
    input_ele.value = eval(input_str)
})

specialButton_eleC.addEventListener('click', function (e) {
    input_ele.value = "";
})

specialButton_eleCE.addEventListener('click', function (e) {
    let input_str = input_ele.value;
    input_str = input_str.slice(0, -1);
    input_ele.value = input_str;
})