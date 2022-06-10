const argv = require('yargs')
                    .options({
                        'b': {
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            description: 'Base de la multiplicacion'
                        },
                        'l': {
                            alias: 'list',
                            type: 'boolean',
                            default: false,
                            description: 'Muestra la tabla de multiplicar en la consola' 
                        },
                        'h':
                        {
                            alias: 'height',
                            type: 'number',
                            demandOption: true,
                            description: 'Limite de la multiplicacion'
                        }
                    }).check((argv, options) => 
                    {
                        if(isNaN(argv.base) || isNaN(argv.h)) 
                        {
                            throw 'El parametro debe ser un número'
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;