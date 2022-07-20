const formulario = document.querySelector('#formularioItens');
const lista = document.querySelector('#lista');

const limpaInput = (form) => {
	form.children.nome.value = '';
	form.children.quantidade.value = '';

	form.children.nome.focus();
};

const criaElementoEmTela = (el) => {
	const itemLista = document.createElement('li');
	itemLista.classList.add('item');

	const quantidadeItem = document.createElement('strong');
	quantidadeItem.innerHTML = el.quantidade;
	quantidadeItem.dataset.id = el.id;
	itemLista.appendChild(quantidadeItem);

	itemLista.innerHTML += el.nome;

	lista.appendChild(itemLista);
};

const itens = JSON.parse(localStorage.getItem('DadosUsuario')) || [];
itens.forEach((el) => {
	criaElementoEmTela(el);
});

const atualizaElemento = (itemAutal) => {
	document.querySelector(`[data-id='${itemAutal.id}']`).innerHTML =
		itemAutal.quantidade;
};

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
		itens[elementoExiste.id] = itemAutal;
	} else {
		itemAutal.id = itens.length;

		criaElementoEmTela(itemAutal);
		itens.push(itemAutal);
	}

	localStorage.setItem('DadosUsuario', JSON.stringify(itens));
	limpaInput(formulario);
});
