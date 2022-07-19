const formulario = document.querySelector('#formularioItens');
const lista = document.querySelector('#lista');
const itensLocalStorage = [];

const limpaInput = (form) => {
	form.children.nome.value = '';
	form.children.quantidade.value = '';

	form.children.nome.focus();
};

const storageLocal = (nome, quantidade) => {
	const itemNovo = {
		nome,
		quantidade,
	};

	const jsonItem = JSON.stringify(itemNovo);
	itensLocalStorage.push(jsonItem);

	localStorage.setItem('DadosUsuario', itensLocalStorage);
};

const criaElementoEmTela = (nome, quantidade) => {
	const itemLista = document.createElement('li');
	itemLista.classList.add('item');

	const quantidadeItem = document.createElement('strong');
	quantidadeItem.innerHTML = quantidade;

	const nomeItem = document.createElement('p');
	nomeItem.innerHTML = nome;

	lista.appendChild(itemLista);

	itemLista.appendChild(quantidadeItem);
	itemLista.appendChild(nomeItem);
};

formulario.addEventListener('submit', (ev) => {
	ev.preventDefault();

	const { nome } = ev.target.elements;
	const { quantidade } = ev.target.elements;

	criaElementoEmTela(nome.value, quantidade.value);
	storageLocal(nome.value, quantidade.value);
	limpaInput(formulario);
});
