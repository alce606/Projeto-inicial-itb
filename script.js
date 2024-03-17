var botao = document.getElementById ("botao");
botao.addEventListener("click",ativarClick, false );
var nome = document.getElementById("nome");

function ativarClick(event) {
    alert (nome.value + " clicou no botao: " +  event.target.value);
}