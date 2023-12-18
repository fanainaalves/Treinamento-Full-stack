function minhaFuncao(){
    console.log("testando");
}

minhaFuncao();
minhaFuncao();

const minhaFuncaoEmVariavel = function(){
    console.log("Funcao em variável")
}

minhaFuncaoEmVariavel();

function funcaoComParametro(txt){
    console.log(`imprimindo ${txt}`);
}
funcaoComParametro("imprimindo alguma coisa")
funcaoComParametro("Outra função")