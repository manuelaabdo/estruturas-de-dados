let numeros = [];
let contador = 0;

for (let i = 0; i < 10; i++) {
    numeros[i] = Number(prompt(`Insira o ${i+1}º número:`));
}

let busca = Number(prompt("Qual número deseja encontrar?"))

for (i = 0; i < 10; i++) {
    if (numeros[i] === busca) {
        contador++;
    }
}

alert(`O número aparece ${contador} vez(es) na lista.`)