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
