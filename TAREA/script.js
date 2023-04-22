function muestraOpccion() {
	var monedaOrigen = document.getElementsByName("monedaOrigen");
	var monedaDestino = document.getElementsByName("monedaDestino");
  
	var monedaOrigenSeleccionada = "";
	var monedaDestinoSeleccionada = "";
  
	for (var i = 0; i < monedaOrigen.length; i++) {
	  if (monedaOrigen[i].checked) {
		monedaOrigenSeleccionada = monedaOrigen[i].value;
		break;
	  }
	}
  
	for (var i = 0; i < monedaDestino.length; i++) {
	  if (monedaDestino[i].checked) {
		monedaDestinoSeleccionada = monedaDestino[i].value;
		break;
	  }
	}
  
	var tipoCambio = 0;
  
	if (monedaOrigenSeleccionada === "dolar" && monedaDestinoSeleccionada === "soles") {
	  tipoCambio = 4.00;
	} else if (monedaOrigenSeleccionada === "dolar" && monedaDestinoSeleccionada === "euro") {
	  tipoCambio = 0.85;
	} else if (monedaOrigenSeleccionada === "soles" && monedaDestinoSeleccionada === "dolar") {
	  tipoCambio = 0.25;
	} else if (monedaOrigenSeleccionada === "soles" && monedaDestinoSeleccionada === "euro") {
	  tipoCambio = 0.21;
	} else if (monedaOrigenSeleccionada === "euro" && monedaDestinoSeleccionada === "dolar") {
	  tipoCambio = 1.18;
	} else if (monedaOrigenSeleccionada === "euro" && monedaDestinoSeleccionada === "soles") {
	  tipoCambio = 4.79;
	}
  
	document.getElementById("tipo-cambio").innerHTML = "Tipo de cambio: 1 " + monedaOrigenSeleccionada + " = " + tipoCambio + " " + monedaDestinoSeleccionada;
  }
  
  function calcularTotal() {
	var cantidad = parseFloat(document.getElementById("cantidad").value);
	var monedaOrigen = document.getElementsByName("monedaOrigen");
	var monedaDestino = document.getElementsByName("monedaDestino");
  
	var monedaOrigenSeleccionada = "";
	var monedaDestinoSeleccionada = "";
  
	for (var i = 0; i < monedaOrigen.length; i++) {
	  if (monedaOrigen[i].checked) {
		monedaOrigenSeleccionada = monedaOrigen[i].value;
		break;
	  }
	}
  
	for (var i = 0; i < monedaDestino.length; i++) {
	  if (monedaDestino[i].checked) {
		monedaDestinoSeleccionada = monedaDestino[i].value;
		break;
	  }
	}
  
	var tipoCambio = 0;
  
	if (monedaOrigenSeleccionada === "dolar" && monedaDestinoSeleccionada === "soles") {
	  tipoCambio = 4.00;
	} else if (monedaOrigenSeleccionada === "dolar" && monedaDestinoSeleccionada === "euro") {
	  tipoCambio = 0.85;
	} else if (monedaOrigenSeleccionada === "soles" && monedaDestinoSeleccionada === "dolar") {
	  tipoCambio = 0.25;
	} else if (monedaOrigenSeleccionada === "soles" && monedaDestinoSeleccionada === "euro") {
	tipoCambio = 0.21;
	} else if (monedaOrigenSeleccionada === "euro" && monedaDestinoSeleccionada === "dolar") {
	tipoCambio = 1.18;
	} else if (monedaOrigenSeleccionada === "euro" && monedaDestinoSeleccionada === "soles") {
	tipoCambio = 4.79;
	}
	
	var montoConvertido = cantidad * tipoCambio;
	
	document.getElementById("resultado").innerHTML = "Recibirás " + montoConvertido.toFixed(2) + " " + monedaDestinoSeleccionada;
	}