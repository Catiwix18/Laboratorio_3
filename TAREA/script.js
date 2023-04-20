function calculate() {
	const currencyFrom = document.getElementById("currency-from").value;
	const currencyTo = document.getElementById("currency-to").value;
	const amount = document.getElementById("amount").value;

	// Aquí se realizaría el cálculo de conversión, dependiendo de las tasas de cambio disponibles

	const total = amount * 3.8; // Por ejemplo, se asume que 1 dólar = 3.8 soles

	alert(`Total a recibir: ${total.toFixed(2)} ${currencyTo}`);
  }