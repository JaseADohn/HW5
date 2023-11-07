<?php
$pageTitle = "Addition";
include "view-header.php";
?>

<html>
      <head>
          <title>Addition Calculator</title>
            <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            text-align: center;
            margin: 0;
            padding: 0;
        }
        h1 {
            background-color: #007bff;
            color: #fff;
            padding: 10px;
        }
        .calculator {
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 300px;
            margin: 20px auto;
            padding: 20px;
        }
        input[type="number"] {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        select {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            background-color: #ff8080;
            color: #fff;
            border: 1px solid #ccc;
            padding: 10px 20px;
            cursor: pointer;
            width: 100%;
        }
        p {
            margin-top: 20px;
            font-weight: bold;
        }
          </style>
      </head>
      <body>
          <h1>Addition Calculator</h1>
          <input type="number" id="num1" placeholder="Enter first number">
          <span> + </span>
          <input type="number" id="num2" placeholder="Enter second number">
          <button onclick="getSum()">Calculate</button>
          <button onclick="clearEntries()">Clear</button>
          <p>Result: <span id="result"></span></p>
          <script src="java.js"></script>
      </body>
</html>

<?php
include "view-footer.php";
?>

