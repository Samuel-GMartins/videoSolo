valorpro1 = 1
valorpro2 = 2
valorpro3 = 1

prepro1= 12.50
prepro2= 15
prepro3= 11



preco1 = prepro1 * valorpro1
preco2 = prepro2 * valorpro2
preco3 = prepro3 * valorpro3

quantidaDeProdutos = valorpro1 + valorpro2 + valorpro3
somatotal = preco1 + preco2 + preco3


let pro1 = document.querySelector('#pro1').innerHTML = valorpro1
let pro2 = document.querySelector('#pro2').innerHTML = valorpro2
let pro3 = document.querySelector('#pro3').innerHTML = valorpro3
let pre1 = document.querySelector('#pre1').innerHTML = telas1()
let pre2 = document.querySelector('#pre2').innerHTML = telas2()
let pre3 = document.querySelector('#pre3').innerHTML = telas3()


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




document.querySelector("#btCont").onclick = function () {
    telas1(), telas2(), telas3()

}

function telas1() {
    if (tela1.value == 2) {
        var porc7 = parseFloat((preco1 * 7) / 100)
        preco1 = (preco1 + porc7).toFixed(2)
        var pre1 = document.querySelector('#pre1').innerHTML = 'R$ ' + parseFloat(preco1).toFixed(2)

    } else if (tela1.value == 3) {
        var porc7 = parseFloat((preco1 * 14) / 100)
        preco1 = (preco1 + (porc7 * 2)).toFixed(2)
        var pre1 = document.querySelector('#pre1').innerHTML = 'R$ ' + parseFloat(preco1).toFixed(2)

    } else if (tela1.value == 4) {
        var porc7 = parseFloat((preco1 * 21) / 100)
        preco1 = (preco1 + (porc7 * 3)).toFixed(2)
        var pre1 = document.querySelector('#pre1').innerHTML = 'R$ ' + parseFloat(preco1).toFixed(2)

    } else if (tela1.value == 5) {
        var porc7 = parseFloat((preco1 * 28) / 100)
        preco1 = (preco1 + (porc7 * 4)).toFixed(2)
        var pre1 = document.querySelector('#pre1').innerHTML = 'R$ ' + parseFloat(preco1).toFixed(2)

    } else if (tela1.value == 1) {
        let pre1 = document.querySelector('#pre1').innerHTML = 'R$ ' + parseFloat(preco1).toFixed(2)

    }
}

function telas2() {
    if (tela2.value == 2) {
        var porc7 = parseFloat((preco2 * 7) / 100)
        preco2 = (preco2 + porc7).toFixed(2)
        var pre2 = document.querySelector('#pre2').innerHTML = 'R$ ' + parseFloat(preco2).toFixed(2)

    } else if (tela2.value == 3) {
        var porc7 = parseFloat((preco2 * 14) / 100)
        preco2 = (preco2 + (porc7 * 2)).toFixed(2)
        var pre2 = document.querySelector('#pre2').innerHTML = 'R$ ' + parseFloat(preco2).toFixed(2)

    } else if (tela2.value == 4) {
        var porc7 = parseFloat((preco2 * 21) / 100)
        preco2 = (preco2 + (porc7 * 3)).toFixed(2)
        var pre2 = document.querySelector('#pre2').innerHTML = 'R$ ' + parseFloat(preco2).toFixed(2)

    } else if (tela2.value == 5) {
        var porc7 = parseFloat((preco2 * 28) / 100)
        preco2 = (preco2 + (porc7 * 4)).toFixed(2)
        var pre2 = document.querySelector('#pre2').innerHTML = 'R$ ' + parseFloat(preco2).toFixed(2)

    } else if (tela2.value == 1) {
        let pre2 = document.querySelector('#pre2').innerHTML = 'R$ ' + parseFloat(preco2).toFixed(2)

    }

}

function telas3() {
    if (tela3.value == 2) {
        var porc7 = parseFloat((preco3 * 7) / 100)
        preco3 = (preco3 + porc7).toFixed(2)
        var pre3 = document.querySelector('#pre3').innerHTML = 'R$ ' + parseFloat(preco3).toFixed(2)

    } else if (tela3.value == 3) {
        var porc7 = parseFloat((preco3 * 14) / 100)
        preco3 = (preco3 + (porc7 * 2)).toFixed(2)
        var pre3 = document.querySelector('#pre3').innerHTML = 'R$ ' + parseFloat(preco3).toFixed(2)

    } else if (tela3.value == 4) {
        var porc7 = parseFloat((preco3 * 21) / 100)
        preco3 = (preco3 + (porc7 * 3)).toFixed(2)
        var pre3 = document.querySelector('#pre3').innerHTML = 'R$ ' + parseFloat(preco3).toFixed(2)

    } else if (tela3.value == 5) {
        var porc7 = parseFloat((preco3 * 28) / 100)
        preco3 = (preco3 + (porc7 * 4)).toFixed(2)
        var pre3 = document.querySelector('#pre3').innerHTML = 'R$ ' + parseFloat(preco3).toFixed(2)

    } else if (tela3.value == 1) {
        let pre3 = document.querySelector('#pre3').innerHTML = 'R$ ' + parseFloat(preco3).toFixed(2)

    }

}



document.querySelector("#excluir1").onclick = function () {
    var x;
    var resposta = confirm("Você Tem Certeza Disso?");
    if (resposta==true){
        x="você pressionou OK!";
        linha1.remove()
  } else {
      null
  }
}



document.querySelector("#excluir2").onclick = function () {
    var x;
    var resposta = confirm("Você Tem Certeza Disso?");
    if (resposta==true){
        x="você pressionou OK!";
        linha2.remove()
  } else {
    null
}
}


document.querySelector("#excluir3").onclick = function () {
    var x;
    var resposta = confirm("Você Tem Certeza Disso?");
    if (resposta==true){
        x="você pressionou OK!";
        linha3.remove()
  } else {
    null
}
}

document.querySelector("#limparCar").onclick = function () {
    var x;
    var resposta = confirm("Você Tem Certeza Disso?");
    if (resposta==true){
        carrinhoProd.remove()

  } else {
    null
}
}