const arrayObjetos = [
  {
    id: 1,
    titulo: "Item 1",
    url: "https://contrastchecker.com/",
    src: "assets/contrastchecker.png",
    categoria: "Cores",
    descricao:
      "É uma ferramenta de verificação de contrastes de acordo com as diretrizes da WCAG nas versões 2.0 e 2.1, do World Wide Web Consortium (W3C).",
  },
  {
    id: 2,
    titulo: "Adobe Color",
    url: "https://color.adobe.com/pt/explore",
    src: "assets/adobecolor.jpg",
    categoria: "Cores",
    descricao: "Crie paletas de cores com a roda de cores ou imagem e navegue por milhares de combinações de cores na comunidade do Adobe Color.",
  },
  // Adicione mais objetos conforme necessário
];

const ul = document.getElementById("myList");

arrayObjetos.map((objeto) => {
  const li = document.createElement("li");

  li.innerHTML = `
      <a class="link" href="${objeto.url}">
      <img src="${objeto.src}" alt="${objeto.titulo}">   
      <p> <span id='titulo'>${objeto.titulo}</span>- ${objeto.descricao}<br/>  <span id='categoria'>Categoria(s): ${objeto.categoria}</span>
      </p></a>
   
    
    `;

  ul.appendChild(li);
});
