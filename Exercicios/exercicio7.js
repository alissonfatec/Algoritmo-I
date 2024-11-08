num1 = prompt("Entre com um número: ");
num2 = prompt("Entre com um número: ");
num3 = prompt("Entre com um número: ");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

if (num2 > num1 && num2 > num3){
    console.log("O maior número é "+ num2);
}

else {
    if (num3 > num1 && num3 > num2){
    console.log("O maior número é "+ num3);
    }
    else {
        console.log("O maior número é "+ num1)
    }
}