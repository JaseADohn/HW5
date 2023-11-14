var labels = [];
var results = [];
var chart;

$(document).ready(function () {
    function getSum() {
        var num1 = $('#num1').val();
        var num2 = $('#num2').val();
        var result = parseFloat(num1) + parseFloat(num2);
        labels.push('Sum');
        results.push(result);
        $('#result').text(result);
        displayChart(result);
    }


    function getDivide() {
        var num1 = $('#num1').val();
        var num2 = $('#num2').val();
        var result = parseFloat(num1) / parseFloat(num2);
        labels.push('Divide');
        results.push(result);
        $('#result').text(result);
        displayChart(result);
    }


    function getMultiply() {
        var num1 = $('#num1').val();
        var num2 = $('#num2').val();
        var result = parseFloat(num1) * parseFloat(num2);
        labels.push('Multiply');
        results.push(result);
        $('#result').text(result);
        displayChart(result);
    }

    function getSubtract() {
        var num1 = $('#num1').val();
        var num2 = $('#num2').val();
        var result = parseFloat(num1) - parseFloat(num2);
        labels.push('Subtract');
        results.push(result);
        $('#result').text(result);
        displayChart(result);
    }

    function clearEntries() {
        $('#num1').val('');
        $('#num2').val('');
        $('#result').text('');
        labels = [];
        results = [];
        displayChart();
    }

function displayChart() {
        var ctx = document.getElementById('resultChart').getContext('2d');
        var formattedDate = moment().format('MMMM Do YYYY, h:mm:ss a');
        console.log('Current formatted date:', formattedDate);
        if (chart) {
            chart.destroy(); // Destroy the existing chart instance
        }
        chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Calculation Results',
                    data: results,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    Mousetrap.bind('`', function () {
        clearEntries();
    });

    $('#additionBtn').click(getSum);
    $('#divisionBtn').click(getDivide);
    $('#multiplicationBtn').click(getMultiply);
    $('#subtractionBtn').click(getSubtract);
    $('#clearBtn').click(clearEntries);

    displayChart();

});
