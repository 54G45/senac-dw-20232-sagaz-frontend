//npm i prompt-sync

let prompt = require('prompt-sync')();

let cepInformado = prompt ('Informe o cep: ');

buscarCep(cepInformado);

async function buscarCep(cep){

    let options = {
        method: "GET",
        headers: {"Content-type": "application/json"}
    };

    const promiseConsultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`, options);

    const json = await promiseConsultaCEP.json();

    console.log(json);

}
