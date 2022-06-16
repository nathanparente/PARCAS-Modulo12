document.querySelector('.texto').offsetHeight // MEDE TANTO A ALTURA, PADDING, BORDER, MARGIN, SCROLL-BAR

document.querySelector('.texto').offsetWidth // MEDE TANTO A LARGURA, PADDING, BORDER, MARGIN, SCROLL-BAR

document.querySelector('.texto').clientWidth // NÃO MEDE A BORDA E O MARGIN E O TAMANHO É MEDIDO EXCLUINDO O TAMANHO DO SCROLL-BAR NA LATERAL

document.querySelector('.texto').clientHeight // NÃO MEDE A BORDA E O MARGIN 

document.querySelector('.texto').scrollHeight // MEDE O TAMANHO REAL DO CONTEUDO (NESSE CASO DO TEXTO)

document.querySelector('.texto').scrollWidth // MEDE O TAMANHO REAL DO CONTEUDO (NESSE CASO DO TEXTO) EXCLUINDO O DA SCROLL-BAR

