const matriz = [];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const num = parseInt((`Digite o número para a posição [${i}][${j}]:`));
  }
}

console.log("Matriz 3x3:");
for (let i = 0; i < 3; i++) {
  let linha = "";
  for (let j = 0; j < 3; j++) {
    linha += matriz[i][j] + " ";
  }
  console.log(linha);
}