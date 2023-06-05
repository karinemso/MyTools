const arrayObjetos = [
  {
    id: 1,
    titulo: "ContrastChecker",
    url: "https://contrastchecker.com/",
    src: "contrastchecker.jpg",
    categoria: "Cores",
    descricao:
      "É uma ferramenta de verificação de contrastes de acordo com as diretrizes da WCAG nas versões 2.0 e 2.1, do World Wide Web Consortium (W3C).",
    favorito: true  
  },
  {
    id: 2,
    titulo: "Adobe Color",
    url: "https://color.adobe.com/pt/explore",
    src: "adobecolor.jpg",
    categoria: "Cores",
    descricao:
      "Crie paletas de cores com a roda de cores ou imagem e navegue por milhares de combinações de cores na comunidade do Adobe Color.",
      favorito: true
    },
  {
    id: 3,
    titulo: "CSS-Tricks",
    url: "https://css-tricks.com/",
    src: "csstricks.jpg",
    categoria: "CSS",
    descricao:
      "Recursos, dicas e tutoriais sobre CSS, incluindo guias abrangentes, snippets de código e uma ativa comunidade de desenvolvedores.",
      favorito: true  
  
    },
  {
    id: 4,
    titulo: "Can I use",
    url: "https://caniuse.com/",
    src: "caniuse.jpg",
    categoria: "Compatibilidade",
    descricao:
      "Verifique a compatibilidade de recursos da web em navegadores e dispositivos específicos para garantir uma experiência consistente para os usuários.",
      favorito: true  
  
    },
  {
    id: 5,
    titulo: "Google Fonts",
    url: "https://fonts.google.com/",
    src: "googlefonts.jpg",
    categoria: "Tipografia",
    descricao:
      "Explore uma vasta biblioteca de fontes gratuitas e fáceis de usar, que podem ser incorporadas em seus projetos web.",
 
      favorito:true  
    },
  {
    id: 6,
    titulo: "CodePen",
    url: "https://codepen.io/",
    src: "codepen.jpg",
    categoria: "Desenvolvimento",
    descricao:
      "Crie e compartilhe protótipos interativos de HTML, CSS e JavaScript diretamente no navegador.",
  },
  {
    id: 7,
    titulo: "MDN Web Docs",
    url: "https://developer.mozilla.org/",
    src: "mdn.jpg",
    categoria: "Documentação",
    descricao:
      "Recursos abrangentes de documentação e referência para tecnologias web, incluindo HTML, CSS e JavaScript.",
      favorito: true
  },
  {
    id: 8,
    titulo: "Stack Overflow",
    url: "https://stackoverflow.com/",
    src: "stackoverflow.jpg",
    categoria: "Comunidade",
    descricao:
      "Uma comunidade de desenvolvedores dedicada a perguntas e respostas sobre programação e desenvolvimento web.",
      favorito: true
  },
  {
    id: 9,
    titulo: "Awwwards",
    url: "https://www.awwwards.com/",
    src: "awwwards.jpg",
    categoria: "Inspiração",
    descricao:
      "Um prêmio que reconhece o talento e a criatividade em design de sites, com uma coleção de designs",
      favorito: true,
      
  },
  {
    id: 9,
    titulo: "JS CheatSheet",
    url: "https://htmlcheatsheet.com/js/",
    src: "jscheatsheet.png",
    categoria: "CheatSheet",
    descricao:
      "Um grande resumo com funções e tipos de dados",
      favorito: true,
      
  },
]

const ul = document.getElementById("myList");

arrayObjetos.map((objeto) => {
  const li = document.createElement("li");

  li.innerHTML = `
      <a target="_blank" class="link" href="${objeto.url}">
      <img src="assets/${objeto.src}" alt="${objeto.titulo}">   
      <p> <span id='titulo'>${objeto.titulo}</span>${objeto.descricao}<br/> <span id='categoria'> Categoria: ${objeto.categoria}</span>
      </p></a>
   
    
    `;

  ul.appendChild(li);
});



const ulFav = document.getElementById("myFavoriteList");

let favoritos = arrayObjetos.filter(site => site.favorito === true)

console.log(favoritos)

favoritos.map((favorito)=> {
  const li = document.createElement("li");

  li.innerHTML = `
      <a target="_blank" class="link" href="${favorito.url}"> 
      <p> <span id='tituloFav'>${favorito.titulo}</span>
      </p></a>
   
    
    `;

  ulFav.appendChild(li);

})


fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    const advice = data.slip.advice;
    console.log(`Conselho: ${advice}`);
    let divAdvice = document.querySelector('#advice')
const h2 = document.createElement("h2");

h2.innerText = `"${advice}"`;

divAdvice.appendChild(h2);
  })
  .catch(error => {
    console.log('Não foi possível obter um conselho neste momento.', error);
  });


