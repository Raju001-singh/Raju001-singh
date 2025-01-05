const form = document.getElementById('interest-form');
const resultPara = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;

    resultPara.innerText = `Interest: $${interest.toFixed(2)}\nTotal Amount: $${totalAmount.toFixed(2)}`;
});


This code creates a simple interest calculator that takes the principal amount, interest rate, and time as input and calculates the interest and total amount. The result is displayed on the page.