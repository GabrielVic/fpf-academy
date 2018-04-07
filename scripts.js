$(function(){

    // Selecionando o botão do menu
    var botaoMenu = $("#botao-menu");

    botaoMenu.on("click", function(){
        $(".topo").toggleClass("topo-expandido");
    });

    // Adicionando contador de caracteres para contato
    var mensagem = $("#mensagem");
    var controle = false;
    if(mensagem != undefined){
        mensagem.on('keypress keyup blur focus', function(event){
            var texto = mensagem.val();
            
            var total_letras = $("#total_letras");
            total_letras.html(texto.length);

            if(texto.length > 280 && controle == false){
                alert("Seu texto deve conter no máximo 280 carectres!");
                controle = true;
                event.preventDefault();
            }
        });
    }

});