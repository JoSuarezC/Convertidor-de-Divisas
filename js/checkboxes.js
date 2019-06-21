
// Recibe la fila agregada como favorita
function getChecked(n){
	var row = n.parentNode.parentNode;
	var cols = row.getElementsByTagName("td");
	if (checkInsertion(cols[1].textContent.trim()) == true){
        addRow(cols[1].textContent, cols[2].textContent);
    }	
}


// Insertar nueva fila a la tabla favoriteCountriesTable
function addRow(flag, money) {
	var table = document.getElementById("favoriteCountriesTable");
	var row = table.insertRow(1);
	
	var cell_flag = row.insertCell(0);
	var cell_money = row.insertCell(1);
	var cell_amount = row.insertCell(2);
	
	cell_flag.innerHTML = "<img src=\'img/flags/" + flag.trim() + ".png\'>" + flag.trim(); 
	cell_money.innerHTML = money;
	cell_amount.innerHTML = "<p>" + "0" + "</p>";
}


// Verificar la existencia de la fila a insertar en la tabla favoriteCountriesTable
function checkInsertion(code) {
	var table, tr, td, i;
	table = document.getElementById("favoriteCountriesTable");
	tr = table.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++){
		td = tr[i].getElementsByTagName("td")[0]; // Obtiene columna 0 de la fila i de la tabla favoriteCountriesTable
		if (td){
		  if ((td.textContent.trim()) == code) {
			deleteRow(i);
			return false; 
		  }
		}       
	}
	return true; 
}

// Deseleccionar fila en la tabla favoriteCountriesTable.
function deleteRow(row) {
	document.getElementById("favoriteCountriesTable").deleteRow(row);
}
