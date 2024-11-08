num1 = prompt("Entre com um número inteiro: ");
num2 = prompt("Entre com um número inteiro: ");
num1 = parseInt(num1);
num2 = parseInt(num2);
if(num1 % num2 == 0){
    console.log("O número " + num1 + " é múltiplo de " + num2);
}
else{
    console.log("O número "+ num1 +" não é múltiplo de " + num2);
}