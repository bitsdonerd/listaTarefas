const inputTarefa = document.querySelector('.input-tarefa');
const bntTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaTask (textInput) {
    const l = criaLi();
    l.innerText = textInput;
    tarefas.appendChild(l); // Para add a task com o botao 
}

// Capturar o click no botão de add a task 
bntTarefa.addEventListener('click', function(){
    if (!inputTarefa.value) return; // Se o retorno no botao for vazio 
    criaTask(inputTarefa.value); // add o valor da task 
});