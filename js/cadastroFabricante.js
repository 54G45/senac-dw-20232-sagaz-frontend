async function buscarCEP() {
    limpar();
    var txtCep = document.getElementById('cep');
    var cepInformado = txtCep.value;

    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(resultado => resultado.json())
        .then(json => {
            if (json.erro) {
                mostrarTelaErro();
            } else {
                preencherCamposComJSON(json);
            }
        })
        .catch(erro => {
            mostrarTelaErro();
        })
}

//Preencher os dados do endereço obtido na página HTML
function preencherCamposComJSON(json) {
    estado.value = json.uf;
    cidade.value = json.localidade;
}

function limpar() {

    cidade.value = '';
    estado.value = '';
    cidade.disabled = true;
    estado.disabled = true;
}

function mostrarTelaErro() {
    limpar();
    alert('CEP informado não existe');
}





async function cadastrarFabricante() {

    const url = 'http://localhost:8080/api/fabricantes';

    let txtnome = document.getElementById('nome');
    let txtcnpj = document.getElementById('cnpj');
    let txtcidade = document.getElementById('cidade');
    let txtestado = document.getElementById('estado');


    let options = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            nome: txtnome.value,
            cnpj: txtcnpj.value,
            cidade: txtcidade.value,
            estado: txtestado.value

        })
    };

    //const despesaUsuario = await fetch('http://localhost:8080/controle-gastos/rest/despesa/cadastrar', options);
    //const despesaJson = await despesaUsuario.json();

    const despesaUsuario = await fetch(url, options);
    const despesaJson = await despesaUsuario.json().then((data) => {
        console.log('Resposta:', data);
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
}


