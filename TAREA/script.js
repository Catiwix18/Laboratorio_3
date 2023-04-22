function calculate() {
	const currencyFrom = document.getElementById("currency-from").value;
	const currencyTo = document.getElementById("currency-to").value;
	const amount = document.getElementById("amount").value;
	const total = amount * 3.8; 

	alert(`Total a recibir: ${total.toFixed(2)} ${currencyTo}`);
  }