const list = document.querySelectorAll('.list')
function activeLink() {
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}
    list.forEach((item) => 
    item.addEventListener('click', activeLink))

    const texto = "Desenvolvedor Front End";
    const elemento = document.getElementById("digitando");
    
    let index = 0;
    let apagando = false;
    
    function loopDigitar() {
      if (!apagando) {
        elemento.innerHTML = texto.substring(0, index + 1);
        index++;
        if (index === texto.length) {
          apagando = true;
          setTimeout(loopDigitar, 1500); // pausa antes de apagar
          return;
        }
      } else {
        elemento.innerHTML = texto.substring(0, index - 1);
        index--;
        if (index === 0) {
          apagando = false;
        }
      }
    
      setTimeout(loopDigitar, apagando ? 50 : 150); // velocidade
    }
    
    loopDigitar();
    
    const container = document.querySelector('.bolhas-tecnologias');

const logos = [
  "https://img.icons8.com/color/48/html-5--v1.png",
  "https://img.icons8.com/color/48/css3.png",
  "https://img.icons8.com/color/48/firebase.png",
  "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
  "https://img.icons8.com/color/48/tailwindcss.png",
  "https://img.icons8.com/color/48/javascript--v1.png",
  "https://img.icons8.com/fluency/48/node-js.png",
  "https://img.icons8.com/color/48/git.png"
];

function criarBolha() {
  const img = document.createElement('img');
  img.src = logos[Math.floor(Math.random() * logos.length)];
  img.classList.add('bolha');

  const size = Math.floor(Math.random() * 20) + 30;
  img.style.width = `${size}px`;
  img.style.left = `${Math.random() * 100}%`;

  const duracao = Math.random() * 10 + 8;
  img.style.animationDuration = `${duracao}s`;

  container.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, duracao * 1000);
}

setInterval(criarBolha, 500); // quanto menor, mais logos sobem
