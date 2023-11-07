<?php
$pageTitle = "Multiply";
include "view-header.php";
?>

<html>
      <head>
          <title>Multiplication Calculator</title>
      </head>
      <body>
          <h1>Multiplication Calculator</h1>
          <input type="number" id="num1" placeholder="Enter first number">
          
          <input type="number" id="num2" placeholder="Enter second number">
          <button onclick="getMultiply()">Calculate</button>
          <p>Result: <span id="result"></span></p>
          <script src="script.js"></script>
          <button onclick="generateRandomNumber()">Generate Random Number</button>
          <p id="randomResult"></p>
      </body>
</html>

<?php
include "view-footer.php";
?>

