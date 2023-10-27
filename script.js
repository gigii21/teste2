function pedir(){
    var opcao = prompt("Escolha uma opção de 1 a 4")

    switch(Number(opcao)){
        case 1:
            alert("O seu pedido foi Pão")
            break;
        
        case 2:
            alert("O seu pedido foi Bolo")
            break;

        case 3:
            alert("O seu pedido foi Presunto")
            break;

        case 4:
            alert("O seu pedido foi Pão de queijo")
            break;
    }
}