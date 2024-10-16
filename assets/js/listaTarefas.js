const inputTarefa = document.querySelector('.input-tarefa');
const bntTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

// Capturar o evento de pressionar o botão (Enter)
inputTarefa.addEventListener('keypress', function(e){
    // console.log(e); // Visualize no console web o botão e a keycode
     if (e.keyCode === 13){
         if (!inputTarefa.value) return; // Se o retorno no botao for vazio 
         criaTask(inputTarefa.value);
        }
 });

 function limpaInput () {
    inputTarefa.value = '';
    inputTarefa.focus();
}

// Função para criar o botão de apagar 
function criaBotaoApagar (li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar'; 
    //botaoApagar.classList.add('Apagar');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function criaTask (textInput) {
    const li = criaLi();
    li.innerText = textInput;
    tarefas.appendChild(li); // Para add a task com o botao
    limpaInput();
    criaBotaoApagar();
    salvarTarefas(); 
}

// Capturar o click no botão de add a task 
bntTarefa.addEventListener('click', function(){
    if (!inputTarefa.value) return; // Se o retorno no botao for vazio 
    criaTask(inputTarefa.value); // add o valor da task 
});