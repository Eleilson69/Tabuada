let number1 = document.querySelector('#Inicio')
let operador = document.querySelector('#txt')
let res = document.querySelector('.res')

function Tabuada() {
    if (number1.value.length == 0 || operador.value.length == 0) {
        alert('O valor esta incorreto')
        res.innerHTML = `RESULTADO INVALIDO`
    } else if (operador.value === "+") {
        let valor = Number(number1.value)
        let ope = operador.value
        res.innerHTML = `A TABUADA DE ADIÇÃO DE ${valor} É`
        for (let valorR = 1; valorR <= 10; valorR++) {
            res.innerHTML += `<p>${valor} ${ope} ${valorR} = ${valor+valorR}</p>`
        }
    } else if (operador.value === "-") {
        let valor = Number(number1.value)
        let ope = operador.value
        res.innerHTML = `A TABUADA DE SUBTRAÇÃO DE ${valor} É`
        for (let valorR = 1; valorR <= 10; valorR++) {
            res.innerHTML += `<p>${valor} ${ope} ${valorR} = ${valor-valorR}</p>`
        }
    } else if (operador.value === "*") {
        let valor = Number(number1.value)
        let ope = operador.value
        res.innerHTML = `A TABUADA DE MULTIPLICAÇÃO DE ${valor} É`
        for (let valorR = 1; valorR <= 10; valorR++) {
            res.innerHTML += `<p>${valor} ${ope} ${valorR} = ${valor*valorR}</p>`
        }
    } else if (operador.value === "/") {
        let valor = Number(number1.value)
        let ope = operador.value
        res.innerHTML = `A TABUADA DE DIVISÃO DE ${valor} É`
        for (let valorR = 1; valorR <= 10; valorR++) {
            res.innerHTML += `<p>${valor} ${ope} ${valorR} = ${valor/valorR}</p>`
        }

    }
}