var total = $("#total-salgados");
total.on("click",function(){total.text(parseInt(total.text())+2)});
var coxinha = $("#coxinha");
var coxinhaP =$("#coxinhaP").text();
coxinha.on("click"function(){
	total.text(coxinhaP);
})
