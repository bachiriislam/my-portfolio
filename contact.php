<?php
// Get form data
$name    = htmlspecialchars($_POST['name']);
$email   = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);

// Email setup
$to      = "mrbachiriislam@email.com"; // <- Replace with YOUR email
$subject = "Message from $name";
$headers = "From: $email" . "\r\n" .
           "Reply-To: $email" . "\r\n";

// Send the email
$mailSent = mail($to, $subject, $message, $headers);

// Response
if ($mailSent) {
    echo "Thank you! Your message has been sent.";
} else {
    echo "Oops! Something went wrong.";
}
?>
