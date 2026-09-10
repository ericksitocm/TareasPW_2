const carritofrutas = []

//Programa que simula un carro de compras con un prompt que le pregunta al usuario si quiere comprar una fruta
var fruta;
const frutas = [];
while (true){
      if(confirm("¿Quieres agregar otra fruta?")){
        fruta = prompt("¿Qué fruta?")
        frutas.push(fruta)
      }else{
        console.log(frutas);
        break;
        
      }
      
}