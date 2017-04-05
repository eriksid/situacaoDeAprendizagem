function somaCalorias(){


};
var btnCalcular = document.querySelector(".btnCalcular");
btnCalcular.addEventListener("click",function (envent){
    event.preventDefault();
    
    var produto = document.querySelectorAll("input");
    var qtdProdutos = produto.length;
    var total= 0;

    for (i= 0; i < qtdProdutos; i++){
        if(produto[i].checked == true){
            total= total + parseInt(produto[i].value);
        } 
    }
    
    var totalcal = document.querySelector("#totalcal");
    totalcal.textContent = total;

})
