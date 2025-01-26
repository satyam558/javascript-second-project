function add(){
    let num1 = document.getElementById('number-one').value;
    let num2 = document.getElementById('number-two').value;

    let num3 = parseInt(num1) + parseInt(num2);

    document.getElementById('output').innerHTML=`Addition of two number is : ${num3}`;
}
function sub(){
    let num1 = document.getElementById('number-one').value;
    let num2 = document.getElementById('number-two').value;

    let num3 = parseInt(num1) - parseInt(num2);

    document.getElementById('output').innerHTML=`Subtraction of two number is : ${num3}`;
}

function mul(){
    let num1 = document.getElementById('number-one').value;
    let num2 = document.getElementById('number-two').value;

    let num3 = parseInt(num1) * parseInt(num2);

    document.getElementById('output').innerHTML=`Multiplication of two number is : ${num3}`;
}
function div(){
    let num1 = document.getElementById('number-one').value;
    let num2 = document.getElementById('number-two').value;

    let num3 = parseInt(num1) / parseInt(num2);

    document.getElementById('output').innerHTML=`Division of two number is : ${num3}`;
}

function module(){
    let num1 = document.getElementById('number-one').value;
    let num2 = document.getElementById('number-two').value;

    let num3 = parseInt(num1) % parseInt(num2);

    document.getElementById('output').innerHTML=`Module of two number is : ${num3}`;
}

