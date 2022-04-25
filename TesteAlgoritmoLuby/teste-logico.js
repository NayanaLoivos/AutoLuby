//1) Implemente um método que crie um novo array baseado nos valores passados.
//Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

function novoArray(repete, elemento)
{
    let resultado =[];
    for (let i = 0; i < repete; i++) {
        resultado.push(elemento);
    }
    return resultado;
}

console.log(`Novo array:`, novoArray(3,'a'));

//2)Implemente um método que inverta um array, não utilize métodos nativos do array.
//Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

function iverteArray(array)
{
    let arrayNovo = []; 
    for(let i= array.length; i > 0; i--) {
        arrayNovo.push(i);        
    }
    return arrayNovo;
}
console.log(`Iverte array:`, iverteArray([1,2,3,4]));

//3) Implemente um método que limpe os itens desnecessários de um array 
//(false, undefined, strings vazias, zero, null).Entrada do método ([1,2,'', undefined]), 
//Resultado do método: [1,2]

function limpaItensArray(array)
{
    let arrayTratado = array.filter(numero =>
        {
            return numero !== 0
                && numero !== undefined
                && numero !== false
                && numero !== null
                && numero !== ''
        }
    );
    return arrayTratado;
}
console.log(`Limpa itens do array:`, limpaItensArray([1, 2,'', undefined]));

//4) Implemente um método que a partir de um array de arrays, converta em um objeto
// com chave e valor. Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}

function converteArrayAObjeto(array)
{
    let objeto = {};
    for(let i= 0; i < array.length; i++) {
        let chave = array[i][0];
        objeto[chave] = array[i][1];
    }
    return objeto;
}
console.log(`Converte array a objeto:`,converteArrayAObjeto([["c",2],["d",4]]));

//5) Implemente um método que retorne um array, sem os itens passados por
// parâmetro depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3),
// Resultado do método: [4,2]

function retornaArrayFiltrado(array, ...inteiro)
{
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        let inteiroEmArray = false;
        for (let j = 0; j < inteiro.length; j++) {
            if(array[i] == inteiro[j]) {
                inteiroEmArray = true;
                break
            }
        }
        if(!inteiroEmArray) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}

console.log(`retorna apenas a array:`, retornaArrayFiltrado([5,4,3,2,5], 5,3));

//6) Implemente um método que retorne um array, sem valores duplicados.
//Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

function arraySemElemDuplicado(array)
{
  let arraySemRepeticao = [...new Set(array)];
  return arraySemRepeticao;
}

console.log(`array sem elementos duplicados:`, arraySemElemDuplicado([1,2,3,3,2,4,5,4,7,3]));

//7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

function igualdadeDeArrays(array1,array2) {
    
    return Array.isArray(array1) 
    && Array.isArray(array2) 
    && array1.length === array2.length 
    && array1.every((elem, index) => elem === array2[index]);
}

console.log("Igualdade de arrays: ", igualdadeDeArrays([1,2,3,4],[1,2,3,4]));


//8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

function removeAninhamentosArray(array)
{
   return arraySemAninhamentos = array.flat();    
}

console.log(`Remove aninhamentos de array:`,removeAninhamentosArray([1, 2, [3], [4, 5]]));

//9) Implemente um método divida um array por uma quantidade passada por parâmetro.
// Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

function dividirArrayEmPartes(array, divisor)
{
    let resultado = [];
    let tempArray = [];
    for (let i = 0; i < array.length; i++) {
        if(i % divisor === 0 && i !== 0) {
            resultado.push(tempArray);
            tempArray = [];
            tempArray.push(array[i]);
        }else if(i % divisor !== 0) {
            tempArray.push(array[i]);
        } else if (i === 0) {
            tempArray.push(array[i]);
        }
        if(i === array.length-1) {
            resultado.push(tempArray);
        }
    }
    return resultado;
}
console.log(`Dividir array em partes:`, dividirArrayEmPartes([1, 2, 3, 4, 5], 2));

//10) Implemente um método que encontre os valores comuns entre dois arrays.
//Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

function valoresIguaisArrays(array1, array2)
{
    let resultado = [];
    for (const array1Elemento of array1) {
        for (const array2Elemento of array2) {
            if(array1Elemento === array2Elemento) {
                resultado.push(array1Elemento);
            }
        }
    }
    return resultado;
}

console.log(`valoresIguaisArrays:`,valoresIguaisArrays([6, 8], [8, 9]));