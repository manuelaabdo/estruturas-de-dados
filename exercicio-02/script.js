let numerosAleatorios = [];
let numAleatorios = " "

for (let i = 0; i < 7; i++) {
    numerosAleatorios[i] = Math.floor(Math.random() * 100);
    numAleatorios += " " + numerosAleatorios[i] + ",";
}


alert(`Os números aleatórios gerados foram: ${numAleatorios}`)
