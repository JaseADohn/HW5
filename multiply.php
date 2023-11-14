<?php
$pageTitle = "Multiply";
include "view-header.php";
?>

<html>
      <head>
          <title>Multiplication Calculator</title>
            <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            text-align: center;
            margin: 0;
            padding: 0;
        }
        h1 {
            background-color: #ff8080;
            color: #fff;
            padding: 10px;
        }
        .calculator {
            background-color: #ff8080;
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
          <h1>Multiplication Calculator</h1>
          <input type="number" id="num1" placeholder="Enter first number">
          <span> * </span>
          <input type="number" id="num2" placeholder="Enter second number">
          <button id="multiplicationBtn">Calculate</button>
            <button id="clearBtn">Clear</button>
          <p>Result: <span id="result"></span></p>
          <canvas id="resultChart" width="400" height="200"></canvas>
          <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
          <script src="java.js"></script>
      </body>
</html>

<?php
include "view-footer.php";
?>

