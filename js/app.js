const formulario = document.querySelector('#novoItem');

formulario.addEventListener('submit', (ev) => {
	console.log(ev);
	ev.preventDefault();

	const nome = ev.target.elements.nome.value;
	const quantidade = ev.target.elements.quantidade.value;
});
