fruta = prompt("Entre com o nome da fruta: ");

switch(fruta){
    case "laranja":
        console.log("R$ 3,50");
        break
    case "limão":
        console.log("R$ 3,00");
        break
    case "acerola":
        console.log("R$ 3,50");
        break
    case "manga":
        console.log("R$ 4,00");
        break
    case "melancia":
        console.log("R$ 4,00");
        break
    case "morango":
        console.log("R$ 5,00");
        break
    case "maracuja":
        console.log("R$ 4,50");
        break
    case "açai":
        console.log("R$ 6,00");
        break
    default:
        console.log("Não temos esse suco");
}