console.log("Teste")

var filmes = [
    ["A Freira", "afreira.jpeg", "Quando uma jovem freira de uma abadia enclausurada na Romênia tira a própria vida, um padre com um passado assombrado e uma noviciada no limiar de seus votos finais são enviados pelo Vaticano para investigar. Juntos, eles descobrem o segredo profano da ordem. Arriscando não apenas suas vidas, mas sua fé e suas próprias almas, eles enfrentam uma força malévola na forma de uma freira demoníaca.", "R$9,99"],

    ["A Hora Do Rush", "bateroucorrer.jpeg", "Quando a filha de um diplomata chinês é sequestrada em Los Angeles, ele chama o detetive de Hong Kong Lee (Jackie Chan) para ajudar o FBI no caso. Mas o FBI não quer nada com Lee, e eles o jogam no LAPD, que designa o detetive James Carter (Chris Tucker) para vigiá-lo. Embora Lee e Carter não se suportem, eles decidem trabalhar juntos para resolver o caso por conta própria quando descobrem que foram abandonados pelo FBI e pela polícia.", "R$9,99"],

    ["Como Eu Era Antes De Você", "comoeueraantesdevc.jpeg", "A jovem e peculiar Louisa Lou Clark (Emilia Clarke) muda de um emprego para outro para ajudar sua família a sobreviver. Sua atitude alegre é posta à prova quando ela se torna cuidadora de Will Traynor (Sam Claflin), um jovem banqueiro rico que ficou paralisado de um acidente dois anos antes. A visão cínica de Will começa a mudar quando Louisa mostra a ele que a vida vale a pena ser vivida. À medida que seu vínculo se aprofunda, suas vidas e corações mudam de maneiras que ninguém poderia imaginar.", "R$9,99"],

    ["Corra", "corra.jpeg", "Agora que Chris e sua namorada, Rose, atingiram o marco do namoro de conhecer os pais, ela o convida para uma escapadela de fim de semana no interior com seus pais, Missy e Dean. A princípio, Chris vê o comportamento excessivamente acomodado da família como tentativas nervosas de lidar com o relacionamento interracial de sua filha, mas à medida que o fim de semana avança, uma série de descobertas cada vez mais perturbadoras o leva a uma verdade que ele nunca poderia ter imaginado.", "R$9,99"],

    ["Em Defesa De Cristo", "cristo.jpeg", "Em 1980, a premiada reportagem investigativa de Lee Strobel (Mike Vogel) lhe rendeu uma promoção a editor jurídico do Chicago Tribune. As coisas em casa não estão indo tão bem. A nova fé de sua esposa Leslie (Erika Christensen) em Cristo obriga Lee a utilizar seu treinamento jornalístico e jurídico para tentar refutar as alegações do cristianismo, colocando seu ateísmo resoluto contra sua fé crescente.", "R$9,99"],

    ["Doutor Estranho", "doutorestranho.jpg", "A vida do Dr. Stephen Strange (Benedict Cumberbatch) muda depois que um acidente de carro o rouba do uso de suas mãos. Quando a medicina tradicional falha, ele procura cura e esperança em um misterioso enclave. Ele rapidamente descobre que o enclave está na linha de frente de uma batalha contra forças das trevas invisíveis empenhadas em destruir a realidade. Em pouco tempo, Strange é forçado a escolher entre sua vida de fortuna e status ou deixar tudo para trás para defender o mundo como o feiticeiro mais poderoso que existe.", "R$9,99"],

    ["Homem Aranha: Sem Volta Pra Casa", "semvoltapracasa.jpeg", "Com a identidade do Homem-Aranha agora revelada, nosso amigável lançador de teias da vizinhança é desmascarado e não é mais capaz de separar sua vida normal como Peter Parker dos altos riscos de ser um super-herói. Quando Peter pede ajuda ao Doutor Estranho, as apostas se tornam ainda mais perigosas, forçando-o a descobrir o que realmente significa ser o Homem-Aranha.", "R$9,99"],

    ["Shrek", "sherek.jpeg", "Era uma vez, em um pântano distante, vivia um ogro chamado Shrek (Mike Myers), cuja preciosa solidão é subitamente destruída por uma invasão de irritantes personagens de contos de fadas. Todos eles foram banidos de seu reino pelo malvado Lord Farquaad (John Lithgow). Determinado a salvar sua casa para não mencionar a dele Shrek faz um acordo com Farquaad e sai para resgatar a princesa Fiona (Cameron Diaz) para ser a noiva de Farquaad. Resgatar a princesa pode ser pequeno comparado ao seu segredo profundo e sombrio.", "R$9,99"],

    ["To Ryca", "toryca.jpeg", "Selminha (Samantha Schmütz) é uma frentista que tem a chance de deixar seus dias de pobreza para trás ao descobrir uma herança de família. Mas para conseguir colocar a mão nessa grana, ela terá que cumprir o desafio lançado por seu tio: precisa gastar R$ 30 milhões em 30 dias, sem acumular nada e nem contar para ninguém. Mas, nessa louca maratona, ela vai acabar descobrindo que tem coisas que o dinheiro não compra.", "R$9,99"],

    ["Veloses e Furiosos", "velosesefuriosos.jpeg", "Dominic Toretto (Vin Diesel) gosta da adrenalina das corridas de carros de rua e seus fãs o tratam como uma estrela do rock. Depois de um encontro ardente com o implacável Johnny Tran, Dom decide levar Brian (Paul Walker), um recém-chegado às corridas de rua, sob sua asa. A irmã de Dom, Mia, também vê algo de que gosta em Brian. O problema é que nenhum deles percebe que ele é um policial disfarçado, e Dominic e seu rival Johnny Tran são os principais suspeitos em um caso envolvendo dinheiro sujo e sequestro de grande plataforma.", "R$9,99"]

]

var galeria = document.querySelector("#galeria")

for (var i = 0; i< filmes.length; i++){
    var img = new Image()
    img.src = "images/" + filmes[i][1]
    img.width= 200
    galeria.innerHTML += "<h1>" + "<strong>" + filmes[i][0] + "<br>"
    galeria.appendChild(img)
    galeria.innerHTML += "<p>" + filmes[i][2]
    galeria.innerHTML += "<p>" + filmes[i][3] + "<hr>"

}