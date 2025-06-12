/*6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida, exiba a matriz na tela*/
let matriz = [];

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let num;
                do {
                    if (isNaN(num) || num < 0 || num > 9) {
                        alert("Erro: apenas números entre 0 e 9.");
                    }
                } while (isNaN(num) || num < 0 || num > 9);
            }
        }

        document.write("<h3>Matriz 3x3:</h3>");
        for (let i = 0; i < 3; i++) {
            document.write(matriz[i]);
        }