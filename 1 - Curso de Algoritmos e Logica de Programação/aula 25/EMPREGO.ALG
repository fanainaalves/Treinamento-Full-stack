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
resposta: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
repita
   Escreva("Digite o salário: ")
   leia(salário)

   se(salario <= 2000) entao
        escreva ("Digite a carga horária:)
        leia( horario)
        se(horario >= 7) entao
            escreva("Candidato foi selecionado")
        fimse
   fimse
       escreva("Digite 'N' para repetir o cadastro ou 'S' para sair")
       leia(resposta)
ate resposta = "S"
Fimalgoritmo