const promptSync = require('prompt-sync');
const prompt = promptSync();

let A = Number (prompt("Digite A:"));
let B = Number (prompt("Digite B:"));

if (A == B){
    soma = A + B 
    console.log(" A soma dos dois é:",soma);
} else{
    mult = A * B 
    console.log("A multiplicaçãp é:" ,mult);
}
