<?php
  $to='sylvaine.meynieux@orange.fr'; // Insérer votre adresse email ICI
  $subject ='Message envoyé par ' .$_POST["name"];
  $message=$_POST["message"];
  mail($to, $subject,$message);
 ?>