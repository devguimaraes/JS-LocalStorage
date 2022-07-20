const formulario = document.querySelector('#formularioItens');
const lista = document.querySelector('#lista');

<<<<<<< HEAD
=======
const limpaInput = (form) => {
	form.children.nome.value = '';
	form.children.quantidade.value = '';

	form.children.nome.focus();
};

>>>>>>> ab70c94940f238b450f90c52fd2f7fab83ddada7
const criaElementoEmTela = (el) => {
	const itemLista = document.createElement('li');
	itemLista.classList.add('item');

	const quantidadeItem = document.createElement('strong');
	quantidadeItem.innerHTML = el.quantidade;
	quantidadeItem.dataset.id = el.id;
	itemLista.appendChild(quantidadeItem);

	itemLista.innerHTML += el.nome;

	lista.appendChild(itemLista);
<<<<<<< HEAD
	// eslint-disable-next-line no-use-before-define
	itemLista.appendChild(criaBotaoDeletar(el.id));
};

const atualizaElemento = (itemAutal) => {
	document.querySelector(`[data-id='${itemAutal.id}']`).innerHTML =
		itemAutal.quantidade;
=======
>>>>>>> ab70c94940f238b450f90c52fd2f7fab83ddada7
};

const itens = JSON.parse(localStorage.getItem('DadosUsuario')) || [];
itens.forEach((el) => {
	criaElementoEmTela(el);
});

<<<<<<< HEAD
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

=======
const atualizaElemento = (itemAutal) => {
	document.querySelector(`[data-id='${itemAutal.id}']`).innerHTML =
		itemAutal.quantidade;
};

>>>>>>> ab70c94940f238b450f90c52fd2f7fab83ddada7
// comecar aqui
formulario.addEventListener('submit', (ev) => {
	ev.preventDefault();

<<<<<<< HEAD
	const { nome } = ev.target.elements;
	const { quantidade } = ev.target.elements;
=======
	const nome = ev.target.elements.nome.value;
	const quantidade = ev.target.elements.quantidade.value;
>>>>>>> ab70c94940f238b450f90c52fd2f7fab83ddada7

	const elementoExiste = itens.find((elemento) => elemento.nome === nome.value);

	const itemAutal = {
		nome: nome.value,
		quantidade: quantidade.value,
	};

	if (elementoExiste) {
		itemAutal.id = elementoExiste.id;
		atualizaElemento(itemAutal);
<<<<<<< HEAD
		itens[itens.findIndex((elemento) => elemento.id === elementoExiste.id)] =
			itemAutal;
	} else {
		itemAutal.id = itens[itens.length - 1] ? itens[itens.length - 1].id + 1 : 0;
=======
		itens[elementoExiste.id] = itemAutal;
	} else {
		itemAutal.id = itens.length;
>>>>>>> ab70c94940f238b450f90c52fd2f7fab83ddada7

		criaElementoEmTela(itemAutal);
		itens.push(itemAutal);
	}

<<<<<<< HEAD
	setLocalSotrage(itens);
=======
	localStorage.setItem('DadosUsuario', JSON.stringify(itens));
>>>>>>> ab70c94940f238b450f90c52fd2f7fab83ddada7
	limpaInput(formulario);
});
