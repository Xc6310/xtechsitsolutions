<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // send to your email
    $to = "Xcu63@outlook.com";
    $subject = "New form submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    mail($to, $subject, $body);

    echo "Thank you! Your form was submitted.";
}
?>