//Início <title> em movimento:
var txt= '   ' + document.title + '   '
var tempo=200;
var refresco=null;
function titulo() {
document.title=txt;
txt=txt.substring(1,txt.length)+txt.charAt(0); refresco=setTimeout("titulo()",tempo);}
titulo();
//Fim <title> em movimento.

function completarDados(){
	
	if (document.getElementsByName(animal) == "dully") {
		
		document.getElementById(raca2).innerHTML = "<label for='raca2'>"+Chow+"</label>";
	
	}
		
		
}

function efetuarAgendamento(){
	
	alert("Agendamento efetuado com sucesso!");
	
}