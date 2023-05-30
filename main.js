document.addEventListener('DOMContentLoaded', () => {
  new TypeIt(".animated", {
    speed: 200,
    loop: true,
  }).pause(5500)
    .go();
});

 const projects = document.querySelector('.all-projects2');

 function verMais() {
 projects.classList.add('active')
 };

// Obtém a referência para a imagem
//const imagem = document.getElementById('img1');

// Armazena o caminho da imagem original
//const imagemOriginal = imagem.src;

// Função para mudar a imagem quando o mouse é passado sobre ela
//function mudarImagem() {
//  imagem.src = 'project-3.jpg';
//}

// Função para restaurar a imagem original quando o mouse é retirado
//function restaurarImagem() {
  //imagem.src = imagemOriginal;
//}

// Adiciona os eventos ao elemento imagem
//imagem.addEventListener('mouseover', mudarImagem);
//imagem.addEventListener('mouseout', restaurarImagem);