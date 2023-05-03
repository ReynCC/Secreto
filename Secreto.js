function secreto(texto) {
    let textoSecreto = "";
    let inicioParentesis = -1;
    let parentesisAbiertos = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "(") {
            if (parentesisAbiertos === 0) {
                textoSecreto += texto.substring(inicioParentesis + 1, i);
                inicioPar = i;
            }
            parentesisAbiertos++;
        } else if (texto[i] === ")") {
            if (parentesisAbiertos > 0) {
                parentesisAbiertos--;
                if (parentesisAbiertos === 0) {
                    let palabras = texto.substring(inicioParentesis + 1, i).split(" ");
                    let palabrasRevertidas = palabras.map(palabra => {
                        return palabra.split("").reverse().join("");
                    });
                    textoSecreto += "(" + palabrasRevertidas.join(" ") + ")";
                    inicioParentesis = i;
                }
            }
        }
    }

    textoSecreto += texto.substring(inicioParentesis + 1);

    return textoSecreto;
}