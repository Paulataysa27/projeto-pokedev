//criar variavel para trabalhar com a lista pokede
const listaSelecaoPokedevs = document.querySelectorAll('.pokedev');

//identificar o evento clique na lista
listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click",()=>{

        //remover a classe aberto só do cartao que está aberto
        const cartaoPokedevAberto = document.querySelector(".aberto");
        cartaoPokedevAberto.classList.remove("aberto")

        //pegar o id do pokedev p/ saber qual cartão abrir
       const idPokedevSelecionado = pokedev.attributes.id.value;

       //criei idDoCartaoPokedevParaAbrir recebendo todos que tiverem o cartao + idPokedevSelecionado
       const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;

       //cartaoPokedevParaAbrir receber os ids dos cartoes
       const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);

       //adicionei a classe aberto nos cartoes que tiverem o evento click
       cartaoPokedevParaAbrir.classList.add("aberto");

       //remover a classe ativo que marca o pokedev selecionado na lista
       const pokedevAtivoNaListagem = document.querySelector(".ativo");
       pokedevAtivoNaListagem.classList.remove("ativo");

       //adicionar a classe ativo no pokedev selecionado
       const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
       pokedevSelecionadoNaListagem.classList.add("ativo");
    })
})
