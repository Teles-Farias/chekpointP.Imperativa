function microondas ( opção, tempo ) {
 
    let tempopadão
   
    if (opção === "pipoca") {
        tempopadão = 10;
    } else if ( opção === "macarrão") {
        tempopadão = 8;
    }else if ( opção === "carne") {
        tempopadão = 15;
    }else if ( opção === "feijao") {
        tempopadão = 12;
    }else if ( opção === "brigadeiro") {
        tempopadão = 8;
    } else {
        return "Prato inexistente"
    }

    /*Checando o tempo Padrao */
    if (tempo < tempopadão) {
        return "TEMPO INSUFICIENTE";
    } else if (tempo > (2 * tempopadão) && tempo <= (3 * tempopadão)) {
        return "A COMIDA QUEIMOU" 
    } else if (tempo > (3 * tempopadão)) {
        return "Kabummmmm!!"
    }

}
console.log("_____PIPIPIPI_____")
console.log(microondas("macarrão", 50) );