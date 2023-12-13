Algoritmo "EMPREGO"
//
//
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 11/12/2023
Var
// Seção de Declarações das variáveis
horario: inteiro
salario: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
Escreva("Digite o salário: ")
leia(salário)

se(salario <= 2000) entao
           escreva ("Candidato selecionado para a primeira fase)
senao
           escreva("Candidato não preencheu os requisiitos da condicional composta")
           leia( horario)
           se(horario >= 7) entao
                escreva("Candidato pre selecionado para a fase da condicional encadeada")
           senao
                escreva("Candidatp não preencheu os requisitos da vaga")
           fimse
fimse
Fimalgoritmo