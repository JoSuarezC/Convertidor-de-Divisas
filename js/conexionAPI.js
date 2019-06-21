

const fetch = require('node-fetch');
module.exports.convert = function(moneyA, moneyB, quantity){	
	let promesa = fetch('https://api.cambio.today/v1/quotes/' + moneyA + '/' + moneyB + '/json?quantity=' + quantity + '&key=1562|M5*8NshKvHpgPGPNf3k6SaVRuYk0MPfc');
	promesa.then((res)=>{
		return res.json();
	}).then((json)=>{
		console.log(json);
	});
	return promesa;
}
