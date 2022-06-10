//const { argv } = require('process');
const {createFile} = require('./helpers/multiplicacion');
const argv = require('./config/yargs');

console.clear();

/*//Forma rudimentaria de hacerlo
console.log(process.argv);
const [,,arg3 = 'Base = 5'] = process.argv;
const [, base = 5] = arg3.split('=');


console.log(arg3, base);*/

//console.log(argv);

createFile(argv.base, argv.h, argv.l).then(archivo => console.log(archivo)).catch(err => console.log(err));