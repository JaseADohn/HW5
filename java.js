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

const ctx = document.getElementById('myChart').getContext('2d');
const chartData = {
    labels: ['Sum', 'Subtract', 'Divide', 'Multiply'],
    datasets: [{
        label: 'Operations Result',
        data: [],
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 205, 86, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 205, 86, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1
    }]
};

const myChart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

