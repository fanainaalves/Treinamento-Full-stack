Algoritmo "Estrutura de dados"
//
//
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 11/12/2023
Var
// Seção de Declarações das variáveis
nomes: vetor [1..5] de caractere
vendas: vetor [1..5, 1..2] de real
comissao: vetor[1..5] de real
posicao: inteiro
posicao1: inteiro
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
para posicao de 1 ate 5 faca
   escreva("Nome do vendedor: ")
   leia (nomes [posicao])
   para posicao1 de 1 ate 2 faca
   escreva("Venda da semana", posicao1, "do vendedor ", nomes [posicao],  ": ")
   leia (vendas [posicao, posicao1])
   fimpara

comissao [posicao]:= (vendas [posicao, 1] + vendas [posicao, 2]) / 0.02
fimpara

para Posicao de 1 ate 5 faca
escreval("O vendedor", nomes [posicao], " vendeu (", vendas [posicao, 1], ", "
, vendas [posicao, 2], "0", "e sua comissao é: ", comissao [posicao])
fimpara
Fimalgoritmo