<?php
?>
<!DOCTYPE html>
<html>
<head>
	<title>Formulaire de contact</title>
	<link rel="stylesheet" href="contact.css"/>
	<script type="text/javascript" src="contact.js"></script>
	<meta charset="UTF-8">
</head>

<body onload="valButton();">
	<div class="centrer">
		<h1>Contactez nous</h1>
		<form action="envoi.php" method="post" name="essai">
			<div class="donnee">
			<label for="Nom">Votre nom<br></label>
			<input type="text" placeholder="Nom" id="nom" onchange="validnom();" name="name" autofocus required>
			</div>
				
			<div class="donnee">
			<label for="mail">Email<br></label>
			<input type="email" placeholder="Adresse email" id="mail1" onchange="validmail();" name="email">
			</div>
				
			<div class="donnee">
			<label for="Nom">Votre message<br>
			</label>
			<TEXTAREA id="mess" placeholder="Entrez votre message" onchange="validmess();" name="message"></TEXTAREA>
			</div>
				
			<div class="donnee">
			<input type="submit" id="bouton" value="Envoyer"/>
			</div>
			</form>
			</div>
			</body>
			</html>