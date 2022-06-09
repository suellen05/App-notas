function SalvarAnotacao(){
    novaAnotacao = document.getElementById("anotacao").value 
    document.getElementById("anotacoes-salvas").innerHTML += "<p>" + novaAnotacao + "<p>"
    document.getElementById("anotacao").value = " "
    alert("anotacao salvar\ncomsucesso!")


}

document.getElementById('salvar').addEventListener('click', function(){
SalvarAnotacao();
})