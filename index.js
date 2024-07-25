const prompt = require('prompt-sync')({sigint: true});

const {criar, listar, atualizar, remover, calcularIdade} = require('./backend.js')

while (true) {
    console.log(`
    1. Adicionar um novo aluno
    2. Listar todos os alunos
    3. Atualizar um aluno
    4. Remover um aluno
    5. Idade alunos
    0. Sair
    `);

    let opcao = prompt('Escolha uma opção: ');

    switch (opcao) {
        case '1':
            criar();
            break;
        case '2':
            listar();
            break;
        case '3':
            atualizar();
            break;
        case '4':
            remover();
            break;
        case '5':
            calcularIdade();
            break;
        case '0':
            console.log('Saindo do sistema. Até logo!');
            process.exit();
        default:
            console.log('Opção inválida, digite uma opção válida!');
    }
}