function trocarImagem(filename, animalname){
    document.querySelector('.images').setAttribute('src', 'images/'+filename);
    document.querySelector('.images').setAttribute('data-animal', animalname);
}

function pegarAnimal() {
    let animal = document.querySelector('.images').getAttribute('data-animal');
    alert("O animal que aparece é o: "+animal);
}