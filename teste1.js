function fatorialWhile(num){
    let resultado = 1;
    while(num > 0){
        resultado = resultado * num;
        num--
    }
    return resultado
}

// console.log(fatorialWhile(10))




function fatorialFor(num){
    let resultado = 1;
    for(let i = 1; i < num; num--){
        resultado = resultado * num;
    }
    return resultado
}

console.log(fatorialFor(10))




function combinacao(num1, num2){

    if(num1 <= 0 || isNaN(num1)){
        console.error(`Tente denovo`);
        return

    }
    if(num2 <= 0 || isNaN(num2)){
        console.error(`Tente denovo`)
    }

    let calculo1 = 1;
    let calculo2 = 1;

    for(let i = 1; i <= num1; i++){
        calculo1 *= i;
    }

    for(let i = 1; i <= num2; i++){
        calculo2 *= i;
    }

    const resultadoTotal = calculo1 / calculo2;
    return resultadoTotal
}

// console.log(combinacao(6, 2))




function arranjo(num1, num2){
    if(num1 <= 0 || isNaN(num1)){
        console.error(`Tente denovo`);
        return

    }
    if(num2 <= 0 || isNaN(num2)){
        console.error(`Tente denovo`)
    }

    let calculo1 = 1;
    let calculo2 = 2;

    for(let i = 1; i <= num1; i++){
        calculo1 *= num1;
    }
    
    for(let i = 1; i <= num2; i++){
        calculo2 *= num2;
    }
    
    let diferenca = (num1 - num2)
    console.log(diferenca)

    const resultadoArranjo = calculo1 / (calculo2 * diferenca)
    return resultadoArranjo
}

// console.log(arranjo(10,2))