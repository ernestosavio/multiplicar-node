const fs = require('fs')
const colors = require("colors");

let data = '';

// tambien se puede exportar asi:
// module.export let creatArchivo = ...

let listarTabla = (base, limite) => {

    console.log("=================================".brightYellow);

    console.log(` ======== Tabla del ${base} ========`.rainbow)

    console.log("=================================".brightYellow);

    for (let a = 0; a <= limite; a++) {
        console.log(`${base}x${a}= ${base*a}`.brightMagenta);
    }

    console.log("=========================".brightYellow);


}



let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base no es un numero`)
            return;
        }

        for (let i = 0; i <= limite; i++) {
            data += `${base}x${i} = ${base*i} \n`;
        }

        fs.writeFile(`./tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-limite-${limite}.txt`);
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}