
$(document).ready(function () {
    function getSum() {
        var num1 = $('#num1').val();
        var num2 = $('#num2').val();
        var result = parseFloat(num1) + parseFloat(num2);
        $('#result').text(result);
    }


    function getDivide() {
        var num1 = $('#num1').val();
        var num2 = $('#num2').val();
        var result = parseFloat(num1) / parseFloat(num2);
        $('#result').text(result);
    }


    function getMultiply() {
        var num1 = $('#num1').val();
        var num2 = $('#num2').val();
        var result = parseFloat(num1) * parseFloat(num2);
        $('#result').text(result);
    }

    function getSubtract() {
        var num1 = $('#num1').val();
        var num2 = $('#num2').val();
        var result = parseFloat(num1) - parseFloat(num2);
        $('#result').text(result);
    }

    function clearEntries() {
        $('#num1').val('');
        $('#num2').val('');
        $('#result').text('');
    }

    $('#additionBtn').click(getSum);
    $('#divisionBtn').click(getDivide);
    $('#multiplicationBtn').click(getMultiply);
    $('#subtractionBtn').click(getSubtract);
    $('#clearBtn').click(clearEntries);
});
