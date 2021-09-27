#!/bin/node
const yar = require("yargs");

var entrada = yar.argv;

console.log(entrada._)
switch(entrada._)
{
    case ' ajuda ':
        console.log('Ajuda');
        break;
    default:
        console.log('Errror');
        break;
}


