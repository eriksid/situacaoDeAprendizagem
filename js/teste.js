function somaCalorias(){
var produto =document.getElementsByTagName("input");
var qtdProdutos = produto.length;
var total= 0;

for (i= 0; i < qtdProdutos; i++){
    if(produto[i].checked == true){
        total= total + parseInt(produto[i].value);
    } 
}
    $("#totalcal").text(total);
};

