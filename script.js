const imagem = document.querySelector('.caveirabocafechadagu.png');

const imgFechada = 'caveirabocafechadagu.png';
const imgAberta = 'icewizard.png';

imagem.addEventListener('mouseover', function() {
    // Muda a imagem para a boca aberta
    imagem.src = imagens/icewizard.png; 
});

imagem.addEventListener('mouseout', function() {
    // Volta a imagem para a boca fechada
    imagem.src = imagens/caveirabocafechadagu.png;
});