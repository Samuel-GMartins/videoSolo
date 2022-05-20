valorpro1 = 1
valorpro2 = 2
valorpro3 = 1

preco1 = 12.50
preco2 = 15
preco3 = 11

quantidaDeProdutos = valorpro1 + valorpro2 + valorpro3
somatotal = preco1 + preco2 + preco3


let pro1 = document.querySelector('#pro1').innerHTML = valorpro1
let pro2 = document.querySelector('#pro2').innerHTML = valorpro2
let pro3 = document.querySelector('#pro3').innerHTML = valorpro3

let pre1 = document.querySelector('#pre1').innerHTML = 'R$ ' + parseFloat(preco1).toFixed(2)
let pre2 = document.querySelector('#pre2').innerHTML = 'R$ ' + parseFloat(preco2).toFixed(2)
let pre3 = document.querySelector('#pre3').innerHTML = 'R$ ' + parseFloat(preco3).toFixed(2)


let totprod = document.querySelector('#totprod').innerHTML = quantidaDeProdutos + ' Produtos'

let tot = document.querySelector('#tot').innerHTML = 'R$ ' + parseFloat(somatotal).toFixed(2)



function calculaValor1() {
    // desconto em porcentagem
    var desconto10 = 10
    var total = somatotal - parseFloat((somatotal * desconto10) / 100);

    document.querySelector('#tot').innerHTML = 'R$ ' + total.toFixed(2);
}

function calculaValor2() {
    // desconto em porcentagem
    var desconto20 = 20

    var total = somatotal - parseFloat((somatotal * desconto20) / 100);

    document.querySelector('#tot').innerHTML = 'R$ ' + total.toFixed(2);
}

document.querySelector("#botao").onclick = function () {

    if (formDesconto.cupom.value == "CUPOM123") {
        calculaValor1()
    } else if (formDesconto.cupom.value == "CUPOM456") {
        calculaValor2()
    } else if (formDesconto.cupom.value != "CUPOM123", "CUPOM456") {
        alert("Ops, cupom inválido!")
    } else {
        formDesconto.submit()

    }
}