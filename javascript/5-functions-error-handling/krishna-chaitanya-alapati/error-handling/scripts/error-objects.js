function withdrawAmount(balance, amount) {
  if (amount > balance) {
    throw {
      errorCode: 101,
      errorMessage: "Insufficient funds for this transaction.",
    };
  }
  
  return balance - amount;
}

function handleWithdrawal() {
  const balanceElement = document.getElementById("balance");
  const resultElement = document.getElementById("result");
  const balance = parseFloat(balanceElement.innerText);
  const amount = parseFloat(
    document.getElementById("withdrawAmount").value.trim()
  );

  resultElement.innerText = "";

  if (isNaN(amount) || amount <= 0) {
    resultElement.innerText = "Error: Please enter a valid withdrawal amount.";
    return;
  }
  try {
    const newBalance = withdrawAmount(balance, amount);
    balanceElement.innerText = newBalance;
    resultElement.innerText = `Withdrawal successful! New Balance: ${newBalance}`;
  } catch (error) {
    resultElement.innerText = `Error Code: ${error.errorCode}, Message: ${error.errorMessage}`;
  }
}
