const list = document.querySelectorAll('.list')
function activeLink() {
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}
    list.forEach((item) => 
    item.addEventListener('click', activeLink))

    const texto = "Desenvolvedor Front-end";
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
  "https://img.icons8.com/color/48/git.png",
  "https://img.icons8.com/fluency/48/vite.png",
  "https://img.icons8.com/color/48/typescript.png",
  "https://img.icons8.com/color/48/nodejs.png",
  "https://img.icons8.com/color/48/nextjs.png",
  "https://img.icons8.com/external-those-icons-flat-those-icons/24/external-MySQL-programming-and-development-those-icons-flat-those-icons.png"
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

// Seleciona todas as seções e todos os itens da navbar
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".navigation ul li");

// Função que atualiza a navbar com base na rolagem
function updateActiveNav() {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach((li) => {
        li.classList.remove("active");
        const anchor = li.querySelector("a");
        if (anchor.getAttribute("href") === `#${current}`) {
            li.classList.add("active");
        }
    });
}

// Escuta o evento de scroll
window.addEventListener("scroll", updateActiveNav);
