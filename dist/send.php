<?php

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];


// Загрузить автозагрузчик композитора
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Создание экземпляра и передача `true ' включает исключения
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  //Параметры сервера
  $mail->SMTPDebug = 0;                      // Включить отладочный вывод 
  $mail->isSMTP();                                            // Отправлять через SMTP
  $mail->Host       = 'smtp.gmail.com';                    // Установите SMTP-сервер для отправки через
  $mail->SMTPAuth   = true;                                   // Включить проверку подлинности SMTP
  $mail->Username   = 'mak205468@gmail.com';                     // Имя пользователя SMTP
  $mail->Password   = '379973Din';                               // SMTP пароль
  $mail->SMTPSecure = 'ssl';         // Включить шифрование TLS; 'PHPMailer:: ENCRYPTION_SMTPS' также принимается
  $mail->Port       = 465;                                    // TCP-порт для подключения
  $mail->CharSet = 'utf-8';

  //Получатели
  $mail->setFrom('mak205468@gmail.com', 'Диана');
  $mail->addAddress('mak205468@gmail.com');     // Добавление получателя

  // Content
  $mail->isHTML(true);                                  // Установите формат электронной почты в HTML
  $mail->Subject = 'Новая заявка с сайта';
  $mail->Body    = "Имя пользователя: ${userName}, Его телефон: ${userPhone}, Его email: ${userEmail}";

  if ($mail->send()) {
    echo "OK";
  } else {
    echo "Письмо не отправленно, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
  }

  $mail->send();
  header('Location: thanks.html');
} catch (Exception $e) {
  echo "Письмо не отправленно, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}
