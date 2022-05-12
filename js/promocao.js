var filmes = [
    ["A Freira",
        "afreira.jpeg",
        "Terror",
        "2018",
        "Presa em um convento na Romênia, uma freira comete suicídio. Para investigar o caso, o Vaticano envia um padre assombrado e uma noviça prestes a se tornar freira."
    ],

    ["Corra",
        "corra.jpeg",
        "Terror",
        "2017",
        "Chris é um jovem fotógrafo negro que está prestes a conhecer os pais de Rose, sua namorada caucasiana. Com o tempo, ele percebe que a família dela esconde algo muito perturbador."
    ],

    ["A Hora do Rush",
        "bateroucorrer.jpeg",
        "Ação/Comédia",
        "1998",
        "A filha de um diplomata chinês é sequestrada em Los Angeles e o cônsul chama o inspetor Lee em Hong Kong para ajudar o FBI com o caso."
    ],

    ["Em Defesa de Cristo",
        "cristo.jpeg",
        "Drama/História",
        "2017",
        "Um jornalista investigativo, ateu convicto, parte em uma investida para desmentir a existência de Deus após sua esposa tornar-se cristã."
    ],

    ["Homem Aranha",
        "semvoltapracasa.jpeg",
        "Ação/Aventura",
        "2021",
        "O Homem-Aranha precisa lidar com as consequências da sua verdadeira identidade ter sido descoberta."
    ],

    ["Shrek",
        "sherek.jpeg",
        "Comédia/Fantasia",
        "2001",
        "Era uma vez um pântano distante, onde vivia um ogro chamado Shrek. De repente, seu sossego é interrompido pela invasão de personagens de contos de fadas que foram banidos de seu reino pelo maldoso Lorde Farquaad."
    ],
]

// Galeria Faz acesso ao elemento div com id=Galeria

var galeria = document.querySelector("#galeria")

// Lógica de iteração para consumo do array
for (var i = 0; i < filmes.length; i++) {

    // Cria um Elemento div principal
    var div = document.createElement('div');

    // Adiciona a classe com espaço 6
    div.classList.add('col-sm-4')
    div.classList.add('mt-3')

    // Cria um elemento div para o Conteudo
    var conteudo = document.createElement('div')

    //Cria uma classe pra div conteudo com nome row 
    conteudo.className = 'row'
    
    var descricao = (filmes[i][4]).substring(0,100) + '...'
    console.log(descricao)

    var categoria = '<p class="text-uppercase">Categoria: ' + filmes[i][2] + '</p>'
    var anoPub = '<p>Ano: ' + filmes[i][3] + '</p>'
    var resenha = '<div class="col-sm-8">' + categoria + anoPub + '<p>' + descricao + '</p></div>'


    //insere o h3 como Título
    conteudo.innerHTML += '<h3 class="col-sm-12">' + filmes[i][0] + '</h3>'

    // Insere a imagem com 100% dentro de uma div espaço 3
    conteudo.innerHTML += '<div class="col-sm-4"><img src="images/' + filmes[i][1] + '"class="w-100" /></div>'

    // Insere um parágrafo com a Sinopse dentro de uma div espaço 9
    conteudo.innerHTML += resenha



    //Div recebe conteudo
    div.appendChild(conteudo)

    // Galeria recebe div
    galeria.appendChild(div)

}