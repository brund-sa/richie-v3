<?php
$to = "kevin@brund.run";
$first_name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

	$message = "First name: $name\nEmail: $email\nMessage: $message";
	$subject = "=?utf-8?B?".base64_encode("message from the site")."?=";
	$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/plain; charset=utf-8\r\n";

	if(mail($to, $subject, $message, $headers))
		echo "Good";
	else
		echo "Error";

?>