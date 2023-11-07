<?php
$pageTitle = "Divide";
include "view-header.php";
?>

<html>
      <head>
          <title>Division Calculator</title>
      </head>
      <body>
          <h1>Division Calculator</h1>
          <input type="number" id="num1" placeholder="Enter first number">
          <span> / </span>
          <input type="number" id="num2" placeholder="Enter second number">
          <button onclick="getDivide()">Calculate</button>
            <button onclick="clearEntries()">Clear</button>
          <p>Result: <span id="result"></span></p>
          <script src="java.js"></script>
      </body>
</html>

<?php
include "view-footer.php";
?>

