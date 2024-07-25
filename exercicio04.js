const prompt = require("prompt-sync")();

const alunos = [
    {
    nomeAluno : "Edson",
    anoNascimento : 1988,
    curso: "dev",
    periodo : "noite",
    },
    {
    nomeAluno : "Aluno 1",
    anoNascimento : 2010,
    curso: "dev",
    periodo : "noite",
    },
    {
    nomeAluno : "Aluno 2",
    anoNascimento : 1999,
    curso: "dev",
    periodo : "tarde",
    },
    ];

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
            }else{
            console.log('Aluno inxistente!')
            }  
    }
            atualizar()
    