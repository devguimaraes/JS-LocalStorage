const formulario = document.querySelector('#formularioItens');
const lista = document.querySelector('#lista');

const limpaInput = (form) => {
	form.children.nome.value = '';
	form.children.quantidade.value = '';

	form.children.nome.focus();
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

	const nome = ev.target.elements.nome.value;
	const quantidade = ev.target.elements.quantidade.value;

	criaElementoEmTela(nome, quantidade);
	limpaInput(formulario);
});
