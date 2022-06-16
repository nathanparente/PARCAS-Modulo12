/*document.querySelector('.texto').scrollTop //PEGA A POSIÇÃO DO SCROOL NA VERTICAL

document.querySelector('.texto').scrollLeft //PEGA A POSIÇÃO DO SCROOL NA HORIZONTAL

window.scrollY // PARA VER O SCROLL DA TELA INTEIRA VERTICAL

window.scrollX // PARA VER O SCROLL DA TELA INTEIRA HORIZONTAL

document.querySelector('.texto').scrollTo(x, y); //POSICIONA O SCROLL DO ELEMENTO

window.scrollTo(x, y); //PARA POSICIONAR O SCROLL DA TELA*/



decidirBotaoScroll()

function subirTela(){
    window.scrollTo ({
        top:0,
        left:0,
        behavior:"smooth",
    })
}

function decidirBotaoScroll(){
    if (window.scrollY === 0){
        //ocultar o botão
        document.querySelector('.scrollButton').style.display = 'none';
    } else {
        //mostrar botão
        document.querySelector('.scrollButton').style.display = 'block';
    }
}

window.addEventListener('scroll', decidirBotaoScroll);