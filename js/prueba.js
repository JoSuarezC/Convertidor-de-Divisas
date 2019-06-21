
const fetch = require('node-fetch');

function convert(){
     fetch('https://api.cambio.today/v1/quotes/' + 'USD' + '/' + 'CRC' + '/json?quantity=' + '1' + '&key=1562|M5*8NshKvHpgPGPNf3k6SaVRuYk0MPfc').then((res)=>{
    return res.json();
    }).then((json)=>{
        console.log(json);
    });  
}
 


