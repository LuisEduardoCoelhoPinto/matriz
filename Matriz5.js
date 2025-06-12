var matriz = [];
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        var num = parseInt(("Digite o n\u00FAmero para a posi\u00E7\u00E3o [".concat(i, "][").concat(j, "]:")));
    }
}
console.log("Matriz 3x3:");
for (var i = 0; i < 3; i++) {
    var linha = "";
    for (var j = 0; j < 3; j++) {
        linha += matriz[i][j] + " ";
    }
    console.log(linha);
}
