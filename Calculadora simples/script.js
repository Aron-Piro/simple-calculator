var n1 = document.querySelector("#n1");
var n2 = document.querySelector("#n2");
var result = document.querySelector('span');

function som() {
    result.innerHTML = parseInt(n1.value) + parseInt(n2.value)
    console.log(result);
}
function sub() {
    result.innerHTML = parseInt(n1.value) - parseInt(n2.value)
    console.log(result);
}
function mul() {
    result.innerHTML = parseInt(n1.value) * parseInt(n2.value)
    console.log(result);
}
function div() {
    result.innerHTML = parseInt(n1.value) - parseInt(n2.value)
    console.log(result);
}