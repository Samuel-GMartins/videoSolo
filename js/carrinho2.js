qtd1 = localStorage.setItem('qtd1',1)
qtd2 = localStorage.setItem('qtd2',2)
qtd3 = localStorage.setItem('qtd3',1)

prepro1=  localStorage.setItem('preco1',(12.50).toFixed(2))
prepro2= localStorage.setItem('preco2',(15).toFixed(2))
prepro3= localStorage.setItem('preco3',(11).toFixed(2))

tela1 = localStorage.setItem('tela1',document.querySelector('#tela1').value)
tela2 = localStorage.setItem('tela2',document.querySelector('#tela2').value)
tela3 = localStorage.setItem('tela3',document.querySelector('#tela3').value)


pre1.innerHTML = localStorage.getItem('preco1')
pre2.innerHTML = localStorage.getItem('preco2')
pre3.innerHTML = localStorage.getItem('preco3')

pro1.innerHTML  = localStorage.getItem('qtd1')
pro2.innerHTML  = localStorage.getItem('qtd2')
pro3.innerHTML  = localStorage.getItem('qtd3')


function autoRefresh() {
    window.location = window.location.href;
}
setInterval('autoRefresh()', 2000);
















let carrinho = {
    titulo: 'Meu Carrinho',
    imprimeTitulo: function(el,titulo) {
        el.innerHTML = titulo
    },

    limparCarrinho: function(el,click){
        var x;
        var resposta = confirm("Você Tem Certeza Disso?");
        if (resposta==true){
            carrinhoProd.remove()
    
      } else {
        null
    }
    },
    multiplicarTelas: function(tela,valor){
        if (tela.value == 2) {
            var porc7 = parseFloat((valor * 7) / 100)
            valor = (valor + porc7).toFixed(2)
            var pre1 = document.querySelector('#pre1').innerHTML = 'R$ ' + parseFloat(preco1).toFixed(2)
            
    
        } else if (tela.value == 3) {
            var porc7 = parseFloat((valor * 14) / 100)
            valor = (valor + (porc7 * 2)).toFixed(2)
            var pre1 = document.querySelector('#pre1').innerHTML = 'R$ ' + parseFloat(preco1).toFixed(2)
        }

    }

}
carrinho.multiplicarTelas(document.querySelector('#pre1'),prepro1)



//Imprime Titulos Carrinho
carrinho.imprimeTitulo(document.querySelector('#tituloCarrinho'), 'Meu Carrinho')
carrinho.imprimeTitulo(document.querySelector('#titProd'), 'Produtos')
carrinho.imprimeTitulo(document.querySelector('#titTelas'), 'Telas')
carrinho.imprimeTitulo(document.querySelector('#titQtd '), 'QTD')
carrinho.imprimeTitulo(document.querySelector('#titPre '), 'Preço')

// carrinho.limparCarrinho(document.querySelector('#limparCar ')

carrinho.multiplicarTelas(document.querySelector('#pre1').innerHTML = prepro1.value)