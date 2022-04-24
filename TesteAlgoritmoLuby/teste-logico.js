//1) Implemente um método que crie um novo array baseado nos valores passados.
//Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

function test1(numero, letra)
{
    let resultado =[];
    for (let i = 0; i < numero; i++) {
        resultado.push(letra);
    }
    return resultado;
}

console.log(`Test1:`, test1(3,'a'));

//2)Implemente um método que inverta um array, não utilize métodos nativos do array.
//Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

function test2(array)
{
    let arrayNovo = []; 
    for(let i= array.length; i > 0; i--) {
        arrayNovo.push(i);        
    }
    return arrayNovo;
}
console.log(`Test2:`,test2([1,2,3,4]));

//3) Implemente um método que limpe os itens desnecessários de um array 
//(false, undefined, strings vazias, zero, null).Entrada do método ([1,2,'', undefined]), 
//Resultado do método: [1,2]

function test3(array)
{
    let arrayNecessario = array.filter(numero =>
        {
            return numero !== 0
                && numero !== undefined
                && numero !== false
                && numero !== null
                && numero !== ''
        }
    );
    return arrayNecessario;
}
console.log(`Test3:`,test3([1, 2,'', undefined]));

//4) Implemente um método que a partir de um array de arrays, converta em um objeto
// com chave e valor. Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}

function test4(array)
{
    let obj ={};
    for(let i= 0; i < array.length; i++) {
        let atributo = array[i][0];
        obj[atributo] = array[i][1];
    }
    return obj;
}
console.log(`Test4:`,test4([["c",2],["d",4]]));

//5) Implemente um método que retorne um array, sem os itens passados por
// parâmetro depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3),
// Resultado do método: [4,2]

function test5(array, ...inteiro)
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

console.log(`Test5:`,test5([5,4,3,2,5], 5,3));

//6) Implemente um método que retorne um array, sem valores duplicados.
//Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

function test6(array)
{
    let resultado = [];
    for (const item of array) {
        if(!resultado.includes(item)) {
            resultado.push(item);
        }
    }
    return resultado;
}
console.log(`Test6:`,test6([1,2,3,3,2,4,5,4,7,3]));

//7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

function test7(array1, array2)
{
    let resultado = true;
    if(array1.length === array2.length) {
        for (let i = 0; i < array1.length; i++) {
            if(array1[i] !== array2[i]) {
                resultado = false;
                break;
            }
        }
    }else {
        resultado = false;
    }
    return resultado;
}
console.log(`Test7:`,test7([1,2,3,4],[1,2,3,4]));

//8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

function test8(array)
{
    let resultado = [];
    for (const elemento of array) {
        if(!Array.isArray(elemento)) {
            resultado.push(elemento)
        }else {
            for (const arrayElemento of elemento) {
                resultado.push(arrayElemento)
            }
        }
    }
    return resultado;
}
console.log(`Test8:`,test8([1, 2, [3], [4, 5]]));

//9) Implemente um método divida um array por uma quantidade passada por parâmetro.
// Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

function test9(array, divisor)
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
console.log(`Test9:`,test9([1, 2, 3, 4, 5], 2));

//10) Implemente um método que encontre os valores comuns entre dois arrays.
//Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

function test10(array1, array2)
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

console.log(`Test10:`,test10([6, 8], [8, 9]));