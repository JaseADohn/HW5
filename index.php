<?php
$pageTitle = "Home";
include "view-header.php";
?>

<html>
      <head>
          <title>Addition Calculator</title>
      </head>
      <body>
          <h1>Addition Calculator</h1>
          <input type="number" id="num1" placeholder="Enter first number">
          
          <input type="number" id="num2" placeholder="Enter second number">
          <button onclick="getSum()">Calculate</button>
          <p>Result: <span id="result"></span></p>
          <script src="script.js"></script>
      </body>
</html>

<?php
include "view-footer.php";
?>

