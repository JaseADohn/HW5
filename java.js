function getSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 + num2;
        const message = `Result: ${result}`;
        alert(message);
    } else {
        document.getElementById('result').textContent = 'Please enter valid numbers';
    }
}

function getSubtract() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 - num2;
        document.getElementById('result').textContent = result;
    } else {
        document.getElementById('result').textContent = 'Please enter valid numbers';
    }
}

function getDivide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 / num2;
        document.getElementById('result').textContent = result;
    } else {
        document.getElementById('result').textContent = 'Please enter valid numbers';
    }
}

function getMultiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 * num2;
        document.getElementById('result').textContent = result;
    } else {
        document.getElementById('result').textContent = 'Please enter valid numbers';
    }
}

function clearEntries() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').textContent = '';
}


