
function calcularResultado(valor1, valor2, operacao) {
    let resultado;
    switch (operacao) {
        case 'somar':
            resultado = valor1 + valor2;
            break;
        case 'subtrair':
            resultado = valor1 - valor2;
            break;
        case 'multiplicar':
            resultado = valor1 * valor2;
            break;
        case 'dividir':
            if (valor2 === 0) {
                alert("Não é possível dividir por zero!");
                return;
            }
            resultado = valor1 / valor2;
            break;
        default:
            alert("Operação inválida.");
            return;
    }
    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.value = resultado;
}


function apagarCampos() {
    document.getElementById("valor1").value = '';
    document.getElementById("valor2").value = '';
    document.getElementById("resultado").value = ''; // Limpa o campo de resultado
}

document.getElementById("somarBtn").addEventListener("click", function () {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);

    if (!isNaN(valor1) && !isNaN(valor2)) {
        calcularResultado(valor1, valor2, 'somar');
    } else {
        alert("Por favor, insira valores válidos.");
    }
});

document.getElementById("subtrairBtn").addEventListener("click", function () {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);

    if (!isNaN(valor1) && !isNaN(valor2)) {
        calcularResultado(valor1, valor2, 'subtrair');
    } else {
        alert("Por favor, insira valores válidos.");
    }
});

document.getElementById("multiplicarBtn").addEventListener("click", function () {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);

    if (!isNaN(valor1) && !isNaN(valor2)) {
        calcularResultado(valor1, valor2, 'multiplicar');
    } else {
        alert("Por favor, insira valores válidos.");
    }
});

document.getElementById("dividirBtn").addEventListener("click", function () {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);

    if (!isNaN(valor1) && !isNaN(valor2)) {
        calcularResultado(valor1, valor2, 'dividir');
    } else {
        alert("Por favor, insira valores válidos.");
    }
});


document.getElementById("apagarBtn").addEventListener("click", function () {
    apagarCampos();
});
