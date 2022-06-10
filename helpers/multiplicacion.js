const fs = require('fs');
const colors = require('colors');

const createFile = (base = 5, tope = 10, list = false) => 
{
    if(list) console.log(colors.cyan.bold("TABLA DE MULTIPLICAR DE " + base));
    const promise = new Promise((resolve, reject) => {
        let data = ''
        let salida = '';
        for(i = 1; i <= tope; i++)
        {
            salida += (colors.magenta(base) + colors.blue('x') + colors.red(i) + colors.blue('=') + colors.white(base*i) + '\n');
            data += `${base} x ${i} = ${base * i}\n`;
        }
        if(list) console.log(salida);

        fs.writeFileSync(`tablas/tabla-${base}.txt`, data);
    
        if(!data.err) resolve(`tabla-${base}.txt creado`);
        else reject(`Error al crear tabla-${base}.txt`);
    });
    return promise;
}

module.exports = 
{
    createFile
}