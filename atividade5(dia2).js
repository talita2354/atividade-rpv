
const promptSync = require('prompt-sync');
const prompt = promptSync();

let nomeFuncionario = prompt("digite o nome do funcionario:");
let salario = Number(prompt("Digite o seu salario:"));

aumento = salario + (salario * 0.10)

console.log("o nome do funcionario é:", nomeFuncionario );
console.log("O salario é de:");
console.log("O salario com aumento é:", aumento);

