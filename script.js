//login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
});
//deposit button event handler
const addDeposit = document.getElementById('add-deposit');
addDeposit.addEventListener('click', function () {
    const depositNumber = getInputNumber('deposit-amount');

    updateSpanText('current-deposit', depositNumber);
    updateSpanText('current-balance', depositNumber);
    document.getElementById('deposit-amount').value = '';
});

//withdraw button event handler
const addWithdraw = document.getElementById('add-withdraw');
addWithdraw.addEventListener('click', function () {
    const withdrawAmount = getInputNumber('withdraw-amount');
    updateSpanText('current-withdraw', withdrawAmount);
    updateSpanText('current-balance', -1 * withdrawAmount);

    document.getElementById('withdraw-amount').value = '';
});

function getInputNumber(id) {
    const input = document.getElementById(id).value;
    const inputNumber = parseFloat(input);
    return inputNumber;
}

function updateSpanText(id, numberOfAmount) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = numberOfAmount + currentNumber;
    document.getElementById(id).innerText = total;
}
