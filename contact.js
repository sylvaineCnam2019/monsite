var rep1=false;
var rep2=false;
var rep3=false;

function valbutton(){
	document.getElementById("bouton").disabled=true;}

function validnom(){
		if(document.forms["essai"].elements["nom"].value==""){
		document.forms["essai"].elements["nom"].value="Vous devez renseigner un nom !";
		rep1=false;
		document.forms["essai"].elements["nom"].style.color = 'red';
		document.forms["essai"].elements["nom"].style.fontStyle = "italic";}
		else{
		rep1=true;
		document.forms["essai"].elements["nom"].style.color = 'black';
		document.forms["essai"].elements["nom"].style.fontStyle = "normal";
		}
		if(rep1==true&&rep2==true&&rep3==true){
		document.getElementById("bouton").disabled=false;}
		else{
		document.getElementById("bouton").disabled=true;}
}


function validmail(){
	var email=document.getElementById("mail1");
		if(email.validity.typeMismatch==true||document.forms["essai"].elements["mail"].value==""){
		document.forms["essai"].elements["mail"].value="une adresse email SVP !!";
		rep2=false;
		document.forms["essai"].elements["mail"].style.color = 'red';
		document.forms["essai"].elements["mail"].style.fontStyle = "italic";}
		else{
		rep2=true;
		document.forms["essai"].elements["mail"].style.color = 'black';
		document.forms["essai"].elements["mail"].style.fontStyle = "normal";}
		if(rep1==true&&rep2==true&&rep3==true){
		document.getElementById("bouton").disabled=false;}
		else{
		document.getElementById("bouton").disabled=true;}
}

function validmess(){
		var bouton=document.getElementById("bouton");
		if(document.forms.essai.message.value==""){
		alert("Vous devez écrire un message !");
		rep3=false;
		document.getElementById("bouton").disabled=true;}
		else{
		rep3=true;}	
		if(rep1==true&&rep2==true&&rep3==true){
		document.getElementById("bouton").disabled=false;}		
}