
let prompt = require('prompt-sync')();

let curso = prompt ('Qual o Nome do seu Curso?');
console.log('Curso: ' + curso);

let fase = Number(prompt('Informe sua Fase: '));
console.log('Fase: ' + fase);

let sol = true;
let vento = false;

if(sol == true){
    console.log('vo pa praia');
}else{
    console.log('n vo pa praia');
}

if(sol == true && vento == false){
    console.log('vo pa praia');
}else{
    console.log('n vo pa praia');
}

let tempo = 'sol';

switch(tempo){
    case 'sol' : {
        console.log('vo pa praia');
        break;
    }
    case 'nublado' : {
        console.log('vo po cine');
        break;
    }
    default : {
        console.log('a mimir');
        break;
    }
}