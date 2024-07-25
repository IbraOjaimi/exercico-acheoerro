const prompt = require("prompt-sync")();

const alunos = [];
let menorIdade = 0
let maiorIdade = 0

const modelo = () => {
    const nomeAluno = prompt("Nome do aluno: ");
    const anoNascimento = parseInt(prompt("Ano de nascimento (AAAA): "), 10);
    const curso = prompt("Descrição do curso: ");
    const periodo = prompt("Qual o período: ");

    if (nomeAluno != "" && curso != "" && periodo != "" && !isNaN(anoNascimento)) {
        return {
        nomeAluno,
        anoNascimento,
        curso,
        periodo,
        };
    } else {
        console.log("Dados inválidos");
        return undefined;
    }
};

const criar = () => {
    const aluno = modelo();
    if (aluno != undefined) {
    alunos.push(aluno);
    console.log("Aluno cadastrado com sucesso");
    console.log(alunos);
    }
};

const listar = () => {
    if (alunos.length === 0) {
    console.log("Nenhum aluno encontrado");
    return false;
    } else {
    alunos.forEach((aluno, indice) => {
    console.log(`
    ${indice + 1}.
    Nome do Aluno: ${aluno.nomeAluno}
    Ano de Nascimento: ${aluno.anoNascimento}
    Curso: ${aluno.curso}
    Período: ${aluno.periodo}
    ` );
    });
    return true;
    }
};


const atualizar = () => {
    const indice = parseInt(prompt("Qual o indice que deseja atualizar? "), 10) - 1;
    if(indice < alunos.length) {
        const nomeAluno = prompt("Nome do aluno: ");
        const anoNascimento = parseInt(prompt("Ano de nascimento(AAAA): "), 10);
        const curso = prompt("Descrição do curso: ");
        const periodo = prompt("Qual o período: ");
        
        const aluno = {
            nomeAluno,
            anoNascimento,
            curso,
            periodo,
        }
        
        if (aluno != undefined) {
            alunos[indice]= aluno;
            console.log("Aluno atualizado com sucesso");
            console.log(alunos);
        } else {
            console.log("Falha na atualização");
        }
    } else {
        console.log('Aluno inxistente!')
    }  
};

const remover = () => {
    const indice = parseInt(prompt("Qual indice você deseja remover? "), 10) - 1;
    if(indice < alunos.length){
    alunos.splice(indice, 1);
    console.log("Aluno removido com sucesso");
    console.log(alunos);
    } else {
        console.log('Aluno inexistente!')
    }
};

const calcularIdade = () => {
    alunos.forEach(aluno => {
        let anoAtual = 2024
        const idade = anoAtual - aluno.anoNascimento;
        if(idade >= 18) {
            maiorIdade ++;
        } else {
            menorIdade ++;
        }
    });
    console.log('Existe ' + maiorIdade + ' aluno(s) maior de idade e ' + menorIdade + ' aluno(s) menor de idade.')
}

module.exports = {
    criar,
    listar,
    atualizar,
    remover,
    calcularIdade,
}