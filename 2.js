// 06. Peça ao usuário uma quantidade de linhas e outra de colunas,
// depois declare
// tal matriz, inicialize todos os elementos de 1 até 'linha x coluna'.

// 2, 2
// Matrix 2x2
// [
//   [2, 2],
//   [3, 4]
// ]
//
// 1ª Linha => [2, 2]
// 2ª Linhas => [3, 4]
//
// linha = matrix[0]
// valor = linha[0] => 1
// matrix[0]0] = 2
//

// Entrada => x colunas e y linhas
// Processamento =>
// 1. Criar y linhas, percorrer as y linhas e atribuir o valor das colunas.
// Saida => Matrix contendo x coluns e n linhas e todos os
// elementos preenchidos, iniciando em 1.


const createMatrix = (columnCount, lineCount) => {
  const matrix = [];
  let number = 1;

  for(let i = 0; i < lineCount; i++) {
    const line = [];

    for(let j = 0; j < columnCount; j++) {
      line.push(number);
      number++;
    }

    matrix.push(line);
  }

  return matrix;
};

console.log(createMatrix(3,3));







