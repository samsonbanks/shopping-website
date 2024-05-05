<?php
  $firstName = $_POST['firstName'];
  $lastName = $_POST['lastName'];
  $gender = $_POST['gender'];
  $password = $_POST['password']

  $conn = new mysqli('localhost','root','','login');
  if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
  }else{
    $stmt = $conn->prepare("insert into registration(firstName, lastName, gender, password)values(?, ?, ?, ?)");
    $stmt->bind_param("sssssi", $firstName, $lastName, $gender, $password);
    $stmt->execute();
    echo "registration Successfully...";
    $stmt->close();
    $conn->close();
  }
?>