const formulario = document.querySelector('#formularioItens');
const lista = document.querySelector('#lista');

const criaElementoEmTela = (el) => {
	const itemLista = document.createElement('li');
	itemLista.classList.add('item');

	const quantidadeItem = document.createElement('strong');
	quantidadeItem.innerHTML = el.quantidade;
	quantidadeItem.dataset.id = el.id;
	itemLista.appendChild(quantidadeItem);

	itemLista.innerHTML += el.nome;

	lista.appendChild(itemLista);
	// eslint-disable-next-line no-use-before-define
	itemLista.appendChild(criaBotaoDeletar(el.id));
};

const atualizaElemento = (itemAutal) => {
	document.querySelector(`[data-id='${itemAutal.id}']`).innerHTML =
		itemAutal.quantidade;
};

const itens = JSON.parse(localStorage.getItem('DadosUsuario')) || [];
itens.forEach((el) => {
	criaElementoEmTela(el);
});

const setLocalSotrage = (param) => {
	localStorage.setItem('DadosUsuario', JSON.stringify(param));
};

const limpaInput = (form) => {
	form.children.nome.value = '';
	form.children.quantidade.value = '';

	form.children.nome.focus();
};

function deletaElemento(param, id) {
	param.remove();
	itens.splice(
		itens.findIndex((elemento) => elemento.id === id),
		1
	);
	setLocalSotrage(itens);
}

function criaBotaoDeletar(id) {
	const botaoDel = document.createElement('button');
	botaoDel.innerText = 'X';
	// eslint-disable-next-line func-names
	botaoDel.addEventListener('click', function () {
		deletaElemento(this.parentNode, id);
	});

	return botaoDel;
}

// comecar aqui
formulario.addEventListener('submit', (ev) => {
	ev.preventDefault();

	const { nome } = ev.target.elements;
	const { quantidade } = ev.target.elements;

	const elementoExiste = itens.find((elemento) => elemento.nome === nome.value);

	const itemAutal = {
		nome: nome.value,
		quantidade: quantidade.value,
	};

	if (elementoExiste) {
		itemAutal.id = elementoExiste.id;
		atualizaElemento(itemAutal);
		itens[itens.findIndex((elemento) => elemento.id === elementoExiste.id)] =
			itemAutal;
	} else {
		itemAutal.id = itens[itens.length - 1] ? itens[itens.length - 1].id + 1 : 0;

		criaElementoEmTela(itemAutal);
		itens.push(itemAutal);
	}

	setLocalSotrage(itens);
	limpaInput(formulario);
});
