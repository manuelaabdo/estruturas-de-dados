let original = [];
let originalFormatado = "";

for (let i = 0; i < 10; i++) {
    original[i] = Number(prompt(`Insira o ${i+1}º número:`));
    originalFormatado += original[i] + " ";
}

let semDuplicados = [];
let posicaoLivre = 0;
let semDuplicadosFormatado = "";

for (let i = 0; i < 10; i++) {
    let jaExiste = false;
    
    for (let j = 0; j < posicaoLivre; j++) {
        if (original[i] === semDuplicados[j]) {
        jaExiste = true;
        }
    }

    if  (jaExiste === false) {
        semDuplicados[posicaoLivre] = original[i]
        semDuplicadosFormatado += semDuplicados[posicaoLivre] + " ";
        posicaoLivre++
    }
}

alert(`Vetor Original: ${originalFormatado}
Vetor sem Duplicados: ${semDuplicadosFormatado}`)