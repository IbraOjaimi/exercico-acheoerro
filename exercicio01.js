const prompt = require("prompt-sync")();
const alunos = [
{
'nomeAluno': "Edson",
'anoNascimento': 1988,
'curso': "dev",
'periodo': "noite",
},
{
'nomeAluno': "Aluno 1",
'anoNascimento': 2010,
'curso': "dev",
'periodo': "noite",
},
];

const modelo = () => {
    const nomeAluno = prompt("Nome do aluno: ");
    const anoNascimento = parseInt(prompt("Ano de nascimento (AAAA): "), 10);
    const curso = prompt("Descrição do curso: ");
    const periodo = prompt("Qual o período: ");

    if (nomeAluno != "" && curso !=
"" && periodo != "" &&
!isNaN(anoNascimento)) {
return {
nomeAluno,
dataNascimento,
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
    criar()