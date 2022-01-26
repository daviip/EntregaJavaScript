function adelante()
{
    document.getElementById("explicacion").hidden = true;
    document.getElementById("juego").hidden = false;

}

function regame()
{
    document.getElementById("letras").value = '';
    document.getElementById("p4").innerHTML = "De 4 letras:";
    document.getElementById("p5").innerHTML = "De 5 letras:";
    document.getElementById("p6").innerHTML = "De 6 letras:";
    document.getElementById("p7").innerHTML = "De 7 letras:";
    document.getElementById("p8").innerHTML = "De 8 letras:";
    document.getElementById("p9").innerHTML = "De 9 letras:";
    document.getElementById("dameV").disabled = false;
    document.getElementById("dameC").disabled = false;
    document.getElementById("regame").disabled = true;
}

var letr = [];

function dameV()
{
    let vocales = ["A", "E", "I", "O", "U"];
    let numeroR = Math.floor(Math.random() * (vocales.length - 0));
    let vocalR = vocales[numeroR];
    //console.log(vocalR);
    letr.push(vocalR);
    document.getElementById("letras").value += vocalR;
    if (document.getElementById("letras").value.length == 9)
    {
        document.getElementById("dameV").disabled = true;
        document.getElementById("dameC").disabled = true;
        document.getElementById("dameS").disabled = false;
    }
}

function dameC()
{
    let consonantes = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "N", "M", "Ñ", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
    let numeroR = Math.floor(Math.random() * (consonantes.length - 0));
    let consonanteR = consonantes[numeroR];
    //console.log(consonanteR);
    letr.push(consonanteR);
    document.getElementById("letras").value += consonanteR;
    if (document.getElementById("letras").value.length == 9)
    {
        document.getElementById("dameV").disabled = true;
        document.getElementById("dameC").disabled = true;
        document.getElementById("dameS").disabled = false;
    }
}

function dameS()
{
    letr.sort();
    console.log(letr);
    let soluciones = [];
    diccionario.forEach(element =>
    {
        var palabra = element.toUpperCase();
        //console.log(palabra.length);
        var coincidencia = "";

        for (let i = 0; i < palabra.length; i++)
        { //letras palabra dicc

            for (let j = 0; j < letr.length; j++)
            { //letras random

                if (palabra[i] == letr[j])
                {
                    coincidencia += palabra[i];
                }
            }
        }

        if (coincidencia == palabra && coincidencia.length >= 4)
        { //coinciden con la palabra del dicc
            soluciones.push(coincidencia);
        }
    });
    console.log(soluciones);
    soluciones.forEach(element =>
    {
        let tamañoPalabra = element.length;
        switch (tamañoPalabra)
        {
            case 4:
                document.getElementById("p4").innerHTML += " " + element + " ";
                break;
            case 5:
                document.getElementById("p5").innerHTML += " " + element + " ";
                break;
            case 6:
                document.getElementById("p6").innerHTML += " " + element + " ";
                break;
            case 7:
                document.getElementById("p7").innerHTML += " " + element + " ";
                break;
            case 8:
                document.getElementById("p8").innerHTML += " " + element + " ";
                break;
            case 9:
                document.getElementById("p9").innerHTML += " " + element + " ";
                break;
        }

    });
    document.getElementById("dameS").disabled = true;
    document.getElementById("regame").disabled = false;
}

