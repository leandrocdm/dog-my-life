//Início <title> em movimento:
var txt= '   ' + document.title + '   '
var tempo=200;
var refresco=null;
function titulo() {
document.title=txt;
txt=txt.substring(1,txt.length)+txt.charAt(0); refresco=setTimeout("titulo()",tempo);}
titulo();
//Fim <title> em movimento.


//Inicio validação
function enviardados(){

	if(document.dados.tx_nome.value=="" || document.dados.tx_nome.value.length < 8) 
	{
		document.dados.tx_nome.focus();
		return false; }
	}
	
return true;
//Fim Validação


function efetuarCadastro(){
	
	alert("Cadastro efetuado com sucesso!");
	
}
    