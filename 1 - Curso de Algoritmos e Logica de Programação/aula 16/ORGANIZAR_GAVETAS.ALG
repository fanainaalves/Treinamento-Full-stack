Algoritmo "Organizar_gavetas"
//
//
//
//
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 11/12/2023
Var
// Seção de Declarações das variáveis
g1, g2, g3, nome, sobrenome, nomeCompleto : caracter
obj1, obj2, obj3 : inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
escreva ("Nome do dono: ")
leia (nome)

escreva("Sobrenome do dono: ")
leia(sobrenome)
nomeCompletoo <- nome + "" + sobrenome

escreva("Nome da gaveta 1 e tecle ENTER: ")
leia(g1)
escreva("Nome da gaveta 2 e tecle ENTER: ")
leia(g2)
escreva("Nome da gaveta 3 e tecle ENTER: ")
leia(g3)

escreva ("Quantidade de Objetos na gaveta 1: ")
leia(obj1)
escreva ("Quantidade de Objetos na gaveta 2: ")
leia(obj2)
escreva ("Quantidade de Objetos na gaveta 3: ")
leia(obj3)

escreval("Dono do Armário: ", nomeCompleto, ".")
escreval("Os nomes das gavetas são: ", g1 + "," + g2 + ", " + g3+".")
escreval("A quantidade de objetos em cada gaveta são: ", obj1, ", ", obj2, ", ", obj3 ".")
escreval("Gaveta e suas quantidades: ", g1, "", obj1, ", " g2, "", obj2 ", ", g3, "", obj3 ".")

Fimalgoritmo