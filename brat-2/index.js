function mudarCor() {
    const h1 = document.getElementById('brat');  // Seleciona o h1 pelo id
    const link = h1.querySelector('a');  // Seleciona o link dentro do h1

    let alternaCor = false;  // Variável para controlar o estado das cores

    // Usamos setInterval para alternar as cores a cada 1 segundo
    setInterval(function() {
        if (alternaCor) {
            // Cor de fundo verde e texto preto (incluindo o link)
            h1.style.backgroundColor = "#89CC04";  // Cor de fundo verde
            h1.style.color = "black";  // Cor do texto preta
            link.style.color = "black";  // Cor do link preta
        } else {
            // Cor de fundo preta e texto verde (incluindo o link)
            h1.style.backgroundColor = "black";  // Cor de fundo preta
            h1.style.color = "#89CC04";  // Cor do texto verde
            link.style.color = "#89CC04";  // Cor do link verde
        }

        alternaCor = !alternaCor;  // Alterna o estado das cores
    }, 1000);  // Intervalo de 1 segundo
}

// Chama a função assim que a página estiver carregada
window.onload = mudarCor;


/*
function mudarCor(){
    alert('teste');
    for(i=0; i<10; i++){
        setInterval(function() {
            h1.style.backgroundColor = "black";
            h1.style.color = "#89CC04";
        }, 1000);
    
        setInterval(function(){
            h1.style.backgroundColor = "#89CC04";
            h1.style.color = "black";
        }, 1000);
    }
}
*/