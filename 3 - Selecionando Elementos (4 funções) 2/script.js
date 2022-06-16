//Selecionar um elemento pela class

//Como no HTML eu posso ter várias "class" 
// o atributo é no plural Elements

//Depois de colocar o nome da Class é preciso selecionar qual delas 
//você irá alterar, faz-se isso pelo array [valor].innerHTML

document.getElementsByClassName('lista')[0].innerHTML = "<b>item alterado</b>"

document.getElementsByClassName('lista')[1].innerHTML = "<i>ITEM ALTERADO</i>"

document.getElementsByTagName('button')[0].innerHTML = "BOTÃO JS"

document.getElementsByTagName('input')

document.getElementsByName('email')

document.getElementsByName('telefone')