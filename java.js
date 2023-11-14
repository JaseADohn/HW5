
$(document).ready(function () {
    function getSum() {
        var num1 = $('#num1').val();
        var num2 = $('#num2').val();
        var result = parseFloat(num1) + parseFloat(num2);
        $('#result').text(result);
        displayChart(result);
    }


    function getDivide() {
        var num1 = $('#num1').val();
        var num2 = $('#num2').val();
        var result = parseFloat(num1) / parseFloat(num2);
        $('#result').text(result);
        displayChart(result);
    }


    function getMultiply() {
        var num1 = $('#num1').val();
        var num2 = $('#num2').val();
        var result = parseFloat(num1) * parseFloat(num2);
        $('#result').text(result);
        displayChart(result);
    }

    function getSubtract() {
        var num1 = $('#num1').val();
        var num2 = $('#num2').val();
        var result = parseFloat(num1) - parseFloat(num2);
        $('#result').text(result);
        displayChart(result);
    }

    function clearEntries() {
        $('#num1').val('');
        $('#num2').val('');
        $('#result').text('');
    }

function displayChart(result) {
    var ctx = document.getElementById('resultChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Result'],
            datasets: [{
                label: 'Calculation Result',
                data: [result],
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


    $('#additionBtn').click(getSum);
    $('#divisionBtn').click(getDivide);
    $('#multiplicationBtn').click(getMultiply);
    $('#subtractionBtn').click(getSubtract);
    $('#clearBtn').click(clearEntries);
});
