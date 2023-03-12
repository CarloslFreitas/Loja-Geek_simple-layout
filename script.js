let itens = [
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto7 = {
        image: './assets/img/actions/lilith.webp',
        name: 'Lilith',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto8 = {
        image: './assets/img/actions/chibi.jpg',
        name: 'Chibi Devil',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto9 = {
        image: './assets/img/actions/devil.jpg',
        name: 'Blue',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto10 = {
        image: './assets/img/painting/agori.jpg',
        name: 'Death Rune',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto11 = {
        image: './assets/img/painting/hellgound tibia.jpg',
        name: 'HellHound',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto12 = {
        image: './assets/img/painting/inarius.png',
        name: 'Inarius',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto13 = {
        image: './assets/img/painting/maltael.jpg',
        name: 'HellHound',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto14 = {
        image: './assets/img/painting/tibia.jpg',
        name: 'Tibia',
        price: 'R$100,00',
        type: 'Painting'
    },
]
//ARRAYS PARA ARMAZENAR OS ITENS DE CADA CATEGORIA
let listFigures = []
let listFrames = []

//CONSTANTES RECEBENDO/ACESSANDO AS CLASSES UL DIRETAMENTE DO HTML
let SectionFrames = document.querySelector('.frames')
let SectionFigures = document.querySelector('.figures')

//ATRIBUINDO OS OBJETOS EM DIFERENTES ARRAYS QUE ATENDEREM AS CONDIÇÕES
function separateItens(listC){
    for(let i = 0; i < listC.length; i++){
        
        if (listC[i].type == 'Action Figures') {
            listFigures.push(listC[i])
            
        }else if(listC[i].type == 'Painting'){
            listFrames.push(listC[i])
        }
    }
}
separateItens(itens)

// UTILIZANDO O ARRAY "GAVETINHA", VOU CRIAR OS ELEMENTOS E SETAR NA SECTION
function listingCards(listC, UList) {
    for (let i = 0; i < listC.length; i++) {
        //-------------------------------------------------------------------------//   
        //                           | CRIANDO O CARD |
        //-------------------------------------------------------------------------//                
        let cardItem = document.createElement('div')
        let imgDiv = document.createElement('div')
        let img = document.createElement('img')
        let titleNameH3 = document.createElement('h3')
        let priceP = document.createElement('p')

        //ATRIBUINDO CLASSES
        cardItem.className = 'card'
        imgDiv.className = 'img_div'
        titleNameH3.className = 'h3_title'
        priceP.className = 'p_preco'

        //ATRIBUINDO OS VALORES DAS KEYS
        img.src = listC[i].image
        titleNameH3.innerText = listC[i].name
        priceP.innerText = listC[i].price

        //INSERINDO OS ELEMENTOS FILHO DENTRO DO ELEMENTO PAI
        cardItem.appendChild(imgDiv)
        imgDiv.appendChild(img)
        cardItem.appendChild(titleNameH3)
        cardItem.appendChild(priceP)
        //-------------------------------------------------------------------------//   

        //CRIANDO A <LI> PARA RECEBER 'CARDITEM'
        let liProduto = document.createElement('li')
        liProduto.className = 'li_produto'
        liProduto.appendChild(cardItem)

        //-------------------------------------------------------------------------//   
        //ADICIONANDO A <LI> AO PAI <UL>
        UList.appendChild(liProduto)
    }
}

listingCards(listFrames, SectionFrames)
listingCards(listFigures, SectionFigures)



