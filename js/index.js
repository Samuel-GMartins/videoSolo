
let user = localStorage.emailUser
let bemVindo = document.querySelector('#bemVindo')
let entrar = document.querySelector('#entrar')
let sair = document.querySelector('#sair')



function msgUser(){
    let nomeUser = user.substring(0,user.indexOf('@'))
    bemVindo.innerHTML='<span>Olá</span>, <b class="text-danger">' + nomeUser + '</b>'
    entrar.style.display="none"
    cad.style.display="none"

}

function resetUser(){
    sair.style.display="none"
}

sair.onclick=function(){
    localStorage.removeItem('emailUser')
    location.href='index.html'
}
localStorage.emailUser ? msgUser() : resetUser()


///////////////////////////////////////////////////////////////////

console.log(localStorage.length)

function imprimeTela() {
    let favorito1 = localStorage.getItem()
}

favorito1 = document.querySelector('#favorito1').src = localStorage.getItem('Doutor Estranho')
favorito2 = document.querySelector('#favorito2').src = localStorage.getItem('A Freira')
favorito3 = document.querySelector('#favorito3').src = localStorage.getItem('Em Defesa de Cristo')


console.log(localStorage.getItem())