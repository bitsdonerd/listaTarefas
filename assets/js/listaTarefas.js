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
    botaoApagar.setAttribute('class', 'apagar'); // Para setar o atributo do botão
    botaoApagar.setAttribute('title', 'Apagar esta tarefa'); // Para ficar visível a função do botão
    li.appendChild(botaoApagar);
}

function criaTask (textInput) {
    const li = criaLi();
    li.innerText = textInput;
    tarefas.appendChild(li); // Para add a task com o botao
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
   
}

// Capturar o click no botão de add a task 
bntTarefa.addEventListener('click', function(){
    if (!inputTarefa.value) return; // Se o retorno no botao for vazio 
    criaTask(inputTarefa.value); // add o valor da task 
});

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove(); // Para remover o pai do elemento no HTML (li)
        salvarTarefas();
    }
});

// Função para salvar as tarefas 
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li'); // Selecionar todas as tasks 
    const listaDeTarefas = []; // Array vazio para iterar sobre as tasks 

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas); // Salva o array como um JSON de strings 
    localStorage.setItem('tarefas', tarefasJSON);
    
}
function adicionaTarefasSalvas () {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // Convertendo de volta o JSON para um objeto JS 

    for (let tarefa of listaDeTarefas) {
        criaTask(tarefa);
    }
}
adicionaTarefasSalvas();