const arrayObjetos = [
  {
    id: 1,
    titulo: "ContrastChecker",
    url: "https://contrastchecker.com/",
    src: "contrastchecker.jpg",
    categoria: "Cores",
    descricao:
      "É uma ferramenta de verificação de contrastes de acordo com as diretrizes da WCAG nas versões 2.0 e 2.1, do World Wide Web Consortium (W3C).",
  },
  {
    id: 2,
    titulo: "Adobe Color",
    url: "https://color.adobe.com/pt/explore",
    src: "adobecolor.jpg",
    categoria: "Cores",
    descricao:
      "Crie paletas de cores com a roda de cores ou imagem e navegue por milhares de combinações de cores na comunidade do Adobe Color.",
  },
  {
    id: 3,
    titulo: "CSS-Tricks",
    url: "https://css-tricks.com/",
    src: "csstricks.jpg",
    categoria: "CSS",
    descricao:
      "Recursos, dicas e tutoriais sobre CSS, incluindo guias abrangentes, snippets de código e uma ativa comunidade de desenvolvedores.",
  },
  {
    id: 4,
    titulo: "Can I use",
    url: "https://caniuse.com/",
    src: "caniuse.jpg",
    categoria: "Compatibilidade",
    descricao:
      "Verifique a compatibilidade de recursos da web em navegadores e dispositivos específicos para garantir uma experiência consistente para os usuários.",
  },
  {
    id: 5,
    titulo: "Google Fonts",
    url: "https://fonts.google.com/",
    src: "googlefonts.jpg",
    categoria: "Tipografia",
    descricao:
      "Explore uma vasta biblioteca de fontes gratuitas e fáceis de usar, que podem ser incorporadas em seus projetos web.",
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
  },
  {
    id: 8,
    titulo: "Stack Overflow",
    url: "https://stackoverflow.com/",
    src: "stackoverflow.jpg",
    categoria: "Comunidade",
    descricao:
      "Uma comunidade de desenvolvedores dedicada a perguntas e respostas sobre programação e desenvolvimento web.",
  },
  {
    id: 9,
    titulo: "Awwwards",
    url: "https://www.awwwards.com/",
    src: "awwwards.jpg",
    categoria: "Inspiração",
    descricao:
      "Um prêmio que reconhece o talento e a criatividade em design de sites, com uma coleção de designs",
  }]

const ul = document.getElementById("myList");

arrayObjetos.map((objeto) => {
  const li = document.createElement("li");

  li.innerHTML = `
      <a class="link" href="${objeto.url}">
      <img src="assets/${objeto.src}" alt="${objeto.titulo}">   
      <p> <span id='titulo'>${objeto.titulo}</span>${objeto.descricao}<br/> <span id='categoria'> Categoria: ${objeto.categoria}</span>
      </p></a>
   
    
    `;

  ul.appendChild(li);
});


