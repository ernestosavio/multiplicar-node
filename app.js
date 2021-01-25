const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const argv = require("./config/yargs").argv;
const colors = require("colors");


console.log(argv)

let comando = argv._[0];

switch (comando) {

    case "listar":
        listarTabla(argv.base, argv.limite);
        break;

    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.brightGreen }`))
            .catch(err => console.log(err));
        break;

    default:
        console.log("Comando no reconocido".red);
        break;

}

// console.log("base:", argv.base);
// console.log("limite:", argv.limite);

//let parametro = argv[2];
//let base = parametro.split("=")[1]