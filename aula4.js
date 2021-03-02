const readlineSync = require('readline-sync');

let run = true;
const idades = [];

while(run) {
  const input = readlineSync.question('Qual a sua idade? ');

  if (input === 'Sair') {
    run = false;

    console.log(idades);
    break;
  }

  idades.push(input);

  console.log(idades);
}
