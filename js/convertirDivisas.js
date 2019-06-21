

function convertValuta(){

	var selectPicker = document.getElementById ("selectpicker");
	var moneySelected = selectPicker.options [selectPicker.selectedIndex].value;
	var quantityValuta = document.getElementById("msg").value;
	var table, tr, valutaLabel, valutaCode, i;
	table = document.getElementById("favoriteCountriesTable");
	tr = table.getElementsByTagName("tr");
  
	for (i = 1; i < tr.length; i++) {
		valutaLabel = tr[i].getElementsByTagName("td")[2];
		valutaCode = tr[i].getElementsByTagName("td")[0];
		
		converterAPI(moneySelected, valutaCode.textContent, quantityValuta, valutaLabel);
	}
}

// Llamar al servicio web para convertir la divisa ingresada
function converterAPI(valutaA, valutaB, quantity, output){
	var HttpClient = function() {
	this.get = function(aUrl, aCallback) {
		var anHttpRequest = new XMLHttpRequest();
		anHttpRequest.onreadystatechange = function() { 
			if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
			aCallback(anHttpRequest.responseText);
		}
		anHttpRequest.open( "GET", aUrl, true ); 
		anHttpRequest.send( null ); 
		}
	}
	var query = valutaA + '_' + valutaB;
	var theurl='https://free.currencyconverterapi.com/api/v6/convert?q='+ query + '&compact=y';
	var client = new HttpClient();
	client.get(theurl, function(response) {
		var response1 = JSON.parse(response);
		for (var clave in response1){
			if (response1.hasOwnProperty(clave)) {
				output.innerHTML = (response1[clave].val * quantity);
			}
		}
	}); 
}
