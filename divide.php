<?php
$pageTitle = "Divide";
include "view-header.php";
?>

<html>
      <head>
          <title>Division Calculator</title>
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
          <h1>Division Calculator</h1>
          <input type="number" id="num1" placeholder="Enter first number">
          <span> / </span>
          <input type="number" id="num2" placeholder="Enter second number">
          <button id="divisionBtn">Calculate</button>
            <button id="clearBtn">Clear</button>
          <p>Result: <span id="result"></span></p>
            <canvas id="resultChart" width="400" height="200"></canvas>
            <script>
              anime({
                  targets: '#divisionBtn',
                  translateY: [20, 0],
                  opacity: [0, 1],
                  easing: 'easeInOutQuad',
                  duration: 1000,
                  delay: 500,
              });
          </script>
      </body>
</html>

<?php
include "view-footer.php";
?>

