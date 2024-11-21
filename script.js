const arrayObjetos = [
	{
		id: 1,
		titulo: 'ContrastChecker',
		url: 'https://contrastchecker.com/',
		src: 'contrastchecker.jpg',
		categoria: 'Cores',
		descricao:
			'É uma ferramenta de verificação de contrastes de acordo com as diretrizes da WCAG nas versões 2.0 e 2.1, do World Wide Web Consortium (W3C).',
		favorito: true,
	},
	{
		id: 2,
		titulo: 'Adobe Color',
		url: 'https://color.adobe.com/pt/explore',
		src: 'adobecolor.jpg',
		categoria: 'Cores',
		descricao:
			'Crie paletas de cores com a roda de cores ou imagem e navegue por milhares de combinações de cores na comunidade do Adobe Color.',
		favorito: true,
	},
	{
		id: 3,
		titulo: 'CSS-Tricks',
		url: 'https://css-tricks.com/',
		src: 'csstricks.jpg',
		categoria: 'CSS',
		descricao:
			'Recursos, dicas e tutoriais sobre CSS, incluindo guias abrangentes, snippets de código e uma ativa comunidade de desenvolvedores.',
		favorito: true,
	},
	{
		id: 4,
		titulo: 'Can I use',
		url: 'https://caniuse.com/',
		src: 'caniuse.jpg',
		categoria: 'Compatibilidade',
		descricao:
			'Verifique a compatibilidade de recursos da web em navegadores e dispositivos específicos para garantir uma experiência consistente para os usuários.',
		favorito: true,
	},
	{
		id: 5,
		titulo: 'Google Fonts',
		url: 'https://fonts.google.com/',
		src: 'googlefonts.jpg',
		categoria: 'Tipografia',
		descricao:
			'Explore uma vasta biblioteca de fontes gratuitas e fáceis de usar, que podem ser incorporadas em seus projetos web.',

		favorito: true,
	},
	{
		id: 6,
		titulo: 'CodePen',
		url: 'https://codepen.io/',
		src: 'codepen.jpg',
		categoria: 'Desenvolvimento',
		descricao:
			'Crie e compartilhe protótipos interativos de HTML, CSS e JavaScript diretamente no navegador.',
	},
	{
		id: 7,
		titulo: 'MDN Web Docs',
		url: 'https://developer.mozilla.org/',
		src: 'mdn.jpg',
		categoria: 'Documentação',
		descricao:
			'Recursos abrangentes de documentação e referência para tecnologias web, incluindo HTML, CSS e JavaScript.',
		favorito: true,
	},
	{
		id: 8,
		titulo: 'Stack Overflow',
		url: 'https://stackoverflow.com/',
		src: 'stackoverflow.jpg',
		categoria: 'Comunidade',
		descricao:
			'Uma comunidade de desenvolvedores dedicada a perguntas e respostas sobre programação e desenvolvimento web.',
		favorito: true,
	},
	{
		id: 9,
		titulo: 'Awwwards',
		url: 'https://www.awwwards.com/',
		src: 'awwwards.jpg',
		categoria: 'Inspiração',
		descricao:
			'Um prêmio que reconhece o talento e a criatividade em design de sites, com uma coleção de designs',
		favorito: true,
	},
	{
		id: 9,
		titulo: 'JS CheatSheet',
		url: 'https://htmlcheatsheet.com/js/',
		src: 'jscheatsheet.png',
		categoria: 'CheatSheet',
		descricao: 'Um grande resumo com funções e tipos de dados',
		favorito: true,
	},
];

const ul = document.getElementById('myList');

arrayObjetos.map((objeto) => {
	const li = document.createElement('li');

	li.innerHTML = `
      <a target="_blank" class="link" href="${objeto.url}">

      <p> <span id='titulo'>${objeto.titulo}</span>       <span id='categoria'> ${objeto.categoria}</span>
      </p>
      <p> ${objeto.descricao}<br/> </p>
      </a>
   
    
    `;

	ul.appendChild(li);
});

// const ulFav = document.getElementById('myFavoriteList');

// let favoritos = arrayObjetos.filter((site) => site.favorito === true);

// console.log(favoritos);

// favoritos.map((favorito) => {
// 	const li = document.createElement('li');

// 	li.innerHTML = `
//       <a target="_blank" class="link" href="${favorito.url}"> 
//       <p> <span id='tituloFav'>${favorito.titulo}</span>
//       </p></a>
   
    
//     `;

// 	ulFav.appendChild(li);
// });

function getAdvice() {
	fetch('https://api.adviceslip.com/advice')
		.then((response) => response.json())
		.then((data) => {
			const advice = data.slip.advice;
			console.log(`Conselho: ${advice}`);
			let divAdvice = document.querySelector('#advice');
			const adviceText = divAdvice.querySelector('#adviceText');

			adviceText.innerText = `"${advice}"`;
		})
		.catch((error) => {
			console.log('Não foi possível obter um conselho neste momento.', error);
		});
}

getAdvice();

let moodButtons = document.querySelector('.mood').querySelectorAll('button');
const root = document.documentElement;

function getTheme(e) {
	e.preventDefault();

	let newSelected = e.target.getAttribute('data-name');
	localStorage.setItem('mood', newSelected);

	moodButtons.forEach((btn) => {
		if (btn.getAttribute('data-name') != newSelected) {
			btn.style.backgroundColor = 'white';
			btn.style.color = 'black';
		} else {
			e.target.style.backgroundColor = 'var(--cor-do-botao)';
			btn.style.color = 'var(--cor-do-texto)';
		}
	});

	changeRootColors(newSelected);
}

function initTheme() {
	let newSelected = localStorage.getItem('mood');
	changeRootColors(newSelected || '');

	if (newSelected) {
		moodButtons.forEach((btn) => {
			if (btn.getAttribute('data-name') != newSelected) {
				btn.style.backgroundColor = 'white';
			} else {
				btn.style.backgroundColor = 'var(--cor-do-botao)';
				btn.style.color = 'var(--cor-do-texto)';
			}
		});
	}
}

function changeRootColors(theme) {
	switch (theme) {
		case 'code':
			root.style.setProperty('--cor-de-fundo', '#000000');
			root.style.setProperty('--cor-do-texto', '#00FF00');
			root.style.setProperty('--cor-do-botao', '#011404');
			root.style.setProperty('--cor-componentes', '#0d0d12');
			break;

		case 'relax':
			root.style.setProperty('--cor-de-fundo', '#231a0f');
			root.style.setProperty('--cor-do-texto', '#FFFFFF');
			root.style.setProperty('--cor-do-botao', '#1a361c');
			root.style.setProperty('--cor-componentes', '#323a14');
			break;

		case 'focus':
			root.style.setProperty('--cor-de-fundo', '#230c33');
			root.style.setProperty('--cor-do-texto', '#ffffff');
			root.style.setProperty('--cor-do-botao', '#c01c9c');
			root.style.setProperty('--cor-componentes', 'rgb(111, 111, 197)');
			break;

		default:
			root.style.setProperty('--cor-de-fundo', '#230c33');
			root.style.setProperty('--cor-do-texto', '#ffffff');
			root.style.setProperty('--cor-do-botao', '#c01c9c');
			root.style.setProperty('--cor-componentes', 'rgb(111, 111, 197)');
	}
}

initTheme();

const taskList = document.querySelector('#taskList');
const taskInput = document.querySelector('#taskInput');

function addTask(event) {
	event.preventDefault();

	if (taskInput.value) {
		let newLi = document.createElement('li');

		newLi.innerHTML = ` ${taskInput.value} <div><input type="checkbox"/><button>X</button></div>`;
		newLi.className = 'listItem';

		taskList.appendChild(newLi);

		taskInput.value = '';
	}
}

function onEnter(event) {
	if (event.key == 'Enter' && taskInput == document.activeElement) {
		addTask(event);
	}
}
document.body.addEventListener('keydown', onEnter);
