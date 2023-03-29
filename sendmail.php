<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host = 'smtp.example.com'; // replace with your SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'your_username'; // replace with your SMTP username
    $mail->Password = 'your_password'; // replace with your SMTP password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    //Recipients
    $mail->setFrom($email, $name); // replace with your sender email and name
    $mail->addAddress('laflamablanca988@hotmail.com', 'Ombre'); // replace with your recipient email and name

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'New message from ' . $name;
    $mail->Body    = '<p>' . $message . '</p>';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Error: ', $mail->ErrorInfo;
}
?>
