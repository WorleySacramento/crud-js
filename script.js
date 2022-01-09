window.addEventListener('load',start);

//Declarando as Variáveis Globais
var globalNames = ['Um', 'Dois', 'Três'];
var nomes =document.querySelector('#nomes');
var ul =document.createElement('ul');
var input =document.getElementById('input');
var form =document.getElementById('formulario');
var isEditing = false;
var posicao;

function start(){
    prevenirComportamentoDefault(form);
    aplicarFoco(input);
    capturarValorDigitado(input);
    exibirVetor();
}

function prevenirComportamentoDefault(objeto){
    objeto.addEventListener('submit', function(event){
        event.preventDefault();
    });
}

function aplicarFoco(Objeto) {
    Objeto.focus();
}
  
function capturarValorDigitado(Objeto) {
    Objeto.addEventListener('keyup', function (event) {
      if (event.key === 'Enter') {
        var valorDigitado = event.target.value; // Obtendo conteudo digitado
  
        // Se algum valor tiver sido digitado, então editar ou inserir
        if (valorDigitado) {
          if (isEditing) {
            // Editando valores
            globalNames.splice(posicao, 1, valorDigitado);
            isEditing = false; // Desativando modo de edição
          } else {
            // Inserindo valores
            globalNames.push(valorDigitado); // Inserindo no array GlobalNames
          }
        }
  
        exibirVetor(); // Atualizar site e Exibir vetor com novo valor
      }
    });
}
  
function exibirVetor() {
    // Limpando conteudo da ul e input para receber novos valores
    ul.innerHTML = '';
    input.value = '';
  
    // Para cada posição do vetor, executar a função PercorrerVetor
    globalNames.forEach(percorrerVetor);
    nomes.appendChild(ul); // Adicionar ul na div nomes para ser exibida no site
}
  
function percorrerVetor(item) {
    var li = document.createElement('li');
  
    li.appendChild(criarBotao()); // Cria e adiciona o botão x na li
    li.appendChild(criarSpan(item)); // Cria e adiciona o span na li
    ul.appendChild(li); // Adicionando li na ul
}
  
function criarBotao() {
    var botao = document.createElement('button');
    // Adicionando classe DeleteButton
    botao.classList.add('DeleteButton');
    botao.textContent = 'x'; // Adicionando conteúdo x
  
    // Retornando botão criado ao ponto de chamada desta função
    return botao;
}
  
function criarSpan(valor) {
    var span = document.createElement('span');
    span.textContent = valor; // Adicionando o valor dentro do span
    span.classList.add('clicavel');
    span.addEventListener('click', editarItem);
    // Retornando valor dentro do span
    return span;
}
  
function editarItem(event) {
    // Capturando valor do elemento clicado
    var valor = event.target.innerHTML;
  
    var index = globalNames.indexOf(valor); // Identificando índice
    input.value = globalNames[index];
    aplicarFoco(input); // Aplicando Foco no Input
    isEditing = true;
    posicao = index;
 }
  
  // Deletando elementos da lista que forem clicados
 ul.addEventListener('click', function (event) {
    // Realizar evento apenas quando o usário clicar no botão
    if (event.target.localName === 'button') {
      // Capturando valor do elemento clicado
      var valor = event.srcElement.nextElementSibling.innerHTML;
  
      // Deletando elemento de Global Names
      var index = globalNames.indexOf(valor); // Identificando índice
      globalNames.splice(index, 1);
  
      var ancestral = event.target.parentElement;
      ancestral.remove(); // Removendo elemento do site
      exibirVetor(); // Atualizar site e Exibir vetor com novo valor
    }
});
