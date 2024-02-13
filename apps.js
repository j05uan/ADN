document.getElementById("verificarBtn").addEventListener("click", function() {
    const cromosomas_ingresados = document.getElementById("cromosomas").value;
    if (cromosomas_ingresados) {
        const muestras = [
            ["Pedro", "00000101010101010101"],
            ["Juan", "00101010101101110111"],
            ["Diego", "00100010010000001001"]
        ];

        const lista_porcentaje = [];

        for (let i = 0; i < muestras.length; i++) {
            const [nombre, cromosomas_muestra] = muestras[i];
            let coincidencias = 0;
            for (let j = 0; j < cromosomas_ingresados.length; j++) {
                if (cromosomas_ingresados[j] === cromosomas_muestra[j]) {
                    coincidencias++;
                }
            }
            const porcentaje_similitud = (coincidencias / cromosomas_ingresados.length) * 100;
            lista_porcentaje.push(porcentaje_similitud);
        }

        const indice_max = lista_porcentaje.indexOf(Math.max(...lista_porcentaje));
        document.getElementById("resultado").innerHTML = `<p>El mayor porcentaje de similitud fue con ${muestras[indice_max][0]} (${lista_porcentaje[indice_max].toFixed(2)}%).</p>`;
    }
});
