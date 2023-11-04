document.addEventListener("DOMContentLoaded", function () {
    const numeroUnoInput = document.getElementById("numeroUno");
    const numeroDosInput = document.getElementById("numeroDos");
    const resultadoSpan = document.getElementById("resultado");

    document.getElementById("suma").addEventListener("click", function () {
        realizarOperacion("suma");
    });

    document.getElementById("resta").addEventListener("click", function () {
        realizarOperacion("resta");
    });

    document.getElementById("multiplicacion").addEventListener("click", function () {
        realizarOperacion("multiplicacion");
    });

    document.getElementById("division").addEventListener("click", function () {
        realizarOperacion("division");
    });

    function realizarOperacion(operacion) {
        const numeroUno = parseFloat(numeroUnoInput.value);
        const numeroDos = parseFloat(numeroDosInput.value);

        if (!isNaN(numeroUno) && !isNaN(numeroDos)) {
            let resultado = 0;

            switch (operacion) {
                case "suma":
                    resultado = numeroUno + numeroDos;
                    break;
                case "resta":
                    resultado = numeroUno - numeroDos;
                    break;
                case "multiplicacion":
                    resultado = numeroUno * numeroDos;
                    break;
                case "division":
                    if (numeroDos !== 0) {
                        resultado = numeroUno / numeroDos;
                    } else {
                        resultadoSpan.innerHTML = "No se puede dividir por cero";
                        return;
                    }
                    break;
            }

            resultadoSpan.innerHTML = ` ${resultado}`;
        } else {
            resultadoSpan.innerHTML = "Ingrese números válidos en los campos.";
        }
    }
});
