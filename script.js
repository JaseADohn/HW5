function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 + num2;
        document.getElementById('result').textContent = result;
    } else {
        document.getElementById('result').textContent = 'Please enter valid numbers';
    }
}

function generateRandomNumber() {
    const min = parseInt(prompt('Enter the minimum value:'));
    const max = parseInt(prompt('Enter the maximum value:'));

    if (!isNaN(min) && !isNaN(max)) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById('randomResult').textContent = `Random Number: ${randomNum}`;
    } else {
        document.getElementById('randomResult').textContent = 'Please enter valid minimum and maximum values.';
    }
}
