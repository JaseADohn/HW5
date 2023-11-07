<?php
$pageTitle = "Subtraction";
include "view-header.php";
?>

<html>
      <head>
          <title>Subtraction Calculator</title>
      </head>
      <body>
          <h1>Subtraction Calculator</h1>
          <input type="number" id="num1" placeholder="Enter first number">
          <span> - </span>
          <input type="number" id="num2" placeholder="Enter second number">
          <button onclick="getSubtract()">Calculate</button>
          <p>Result: <span id="result"></span></p>
          <script src="script.js"></script>
      </body>
</html>

<?php
include "view-footer.php";
?>

