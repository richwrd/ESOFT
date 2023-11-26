// Função para verificar se um arrayay está ordenado
function VerificaOrdenacao(array) {

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}

function VerificaOrdenacao2(array){

    const sortedArray =  array.sort();
    return array.toString() === sortedArray.toString();

}

// Exemplo de arrays
const exemplo = [1, 3, 5, 7, 9];
const exemplo2 = [3, 4, 6, 8, 4];
const exemplo3 = [3, 3, 2, 7, 9];


// Verifica se o arrayay está ordenado
if (VerificaOrdenacao2(exemplo)) {
    console.log("Está ordenado.");
} else {
    console.log("Não está ordenado.");
}
