function tensao(){
    var lugar = document.querySelector(".calcPlace")
    /*Setando Título */
    var titulo = document.createElement("h2")
    var textoTitulo = document.createTextNode("Calculo de tensão")
    titulo.appendChild(textoTitulo)
    lugar.appendChild(titulo)
    /* Criando os campos */
    var campoResistencia = document.createElement("input")
    campoResistencia.setAttribute("placeholder","Insira o valor da resistência")
    campoResistencia.setAttribute("class","resistencia")
    var campoCorrente = document.createElement("input")
    campoCorrente.setAttribute("placeholder","Insira o valor da corrente")
    campoCorrente.setAttribute("class","corrente")

    /*Colocando os campos em seus devidos lugares */
    lugar.appendChild(campoResistencia)
    lugar.appendChild(campoCorrente)

    /*Criando um botao input */
    var botInput = document.createElement("button")
    botInput.setAttribute("class","botaoInput")
    botInput.setAttribute("onclick","tensaoCalc()")
    var textoBotao = document.createTextNode("Calcular")
    botInput.appendChild(textoBotao)
    /*Colocando o botão em seu devido lugar */
    lugar.appendChild(botInput)

    /*Criando um espaço*/
    var espaço = document.createElement("br")
    lugar.appendChild(espaço)
}

function tensaoCalc(){
    /*Recebendo os valores*/
    var lugar = document.querySelector(".calcPlace")
    var valorResistencia = document.querySelector(".resistencia").value
    var valorCorrente = document.querySelector(".corrente").value

    /*Calculando*/
    var tensao = valorResistencia * valorCorrente
    
    /*Imprimindo resultado na tela */
    var resultado = document.createTextNode(`O valor da tensão é ${tensao} volts`)
    var separador = document.createElement("div")
    separador.setAttribute("id","separador")
    var espaço = document.createElement("br")
    lugar.appendChild(resultado)
    lugar.appendChild(separador)
    lugar.appendChild(espaço)
}

function resistencia(){
    var lugar = document.querySelector(".calcPlace")
    /*Setando Título */
    var titulo = document.createElement("h2")
    var textoTitulo = document.createTextNode("Calculo de resistência")
    titulo.appendChild(textoTitulo)
    lugar.appendChild(titulo)
    /* Criando os campos */
    var campoVoltagem = document.createElement("input")
    campoVoltagem.setAttribute("placeholder","Insira o valor da tensão")
    campoVoltagem.setAttribute("class","tensaoR")
    var campoCorrente = document.createElement("input")
    campoCorrente.setAttribute("placeholder","Insira o valor da corrente")
    campoCorrente.setAttribute("class","correnteR")

    /*Colocando os campos em seus devidos lugares */
    lugar.appendChild(campoVoltagem)
    lugar.appendChild(campoCorrente)

    /*Criando um botao input */
    var botInput = document.createElement("button")
    botInput.setAttribute("class","botaoInput")
    botInput.setAttribute("onclick","resistCalc()")
    var textoBotao = document.createTextNode("Calcular")
    botInput.appendChild(textoBotao)
    /*Colocando o botão em seu devido lugar */
    lugar.appendChild(botInput)

    /*Criando um espaço*/
    var espaço = document.createElement("br")
    lugar.appendChild(espaço)
}

function resistCalc(){
    /*Recebendo os valores*/
    var lugar = document.querySelector(".calcPlace")
    var valorTensao = document.querySelector(".tensaoR").value
    var valorCorrente = document.querySelector(".correnteR").value

    /*Calculando*/
    var resistencia = valorTensao / valorCorrente
    
    /*Imprimindo resultado na tela */
    var resultado = document.createTextNode(`O valor da resistência é ${resistencia.toFixed(4)} ohm`)
    var separador = document.createElement("div")
    separador.setAttribute("id","separador")
    var espaço = document.createElement("br")
    lugar.appendChild(resultado)
    lugar.appendChild(separador)
    lugar.appendChild(espaço)
}

function corrente(){
    var lugar = document.querySelector(".calcPlace")
    /*Setando Título */
    var titulo = document.createElement("h2")
    var textoTitulo = document.createTextNode("Calculo de corrente")
    titulo.appendChild(textoTitulo)
    lugar.appendChild(titulo)
    /* Criando os campos */
    var campoVoltagem = document.createElement("input")
    campoVoltagem.setAttribute("placeholder","Insira o valor da tensão")
    campoVoltagem.setAttribute("class","tensaoC")
    var campoResistencia = document.createElement("input")
    campoResistencia.setAttribute("placeholder","Insira o valor da resistencia")
    campoResistencia.setAttribute("class","resistenciaC")

    /*Colocando os campos em seus devidos lugares */
    lugar.appendChild(campoVoltagem)
    lugar.appendChild(campoResistencia)

    /*Criando um botao input */
    var botInput = document.createElement("button")
    botInput.setAttribute("class","botaoInput")
    botInput.setAttribute("onclick","correCalc()")
    var textoBotao = document.createTextNode("Calcular")
    botInput.appendChild(textoBotao)
    /*Colocando o botão em seu devido lugar */
    lugar.appendChild(botInput)

    /*Criando um espaço*/
    var espaço = document.createElement("br")
    lugar.appendChild(espaço)
}

function correCalc(){
    /*Recebendo os valores*/
    var lugar = document.querySelector(".calcPlace")
    var valorTensao = document.querySelector(".tensaoC").value
    var valorResistencia = document.querySelector(".resistenciaC").value

    /*Calculando*/
    var corrente = valorTensao / valorResistencia
    
    /*Imprimindo resultado na tela */
    var resultado = document.createTextNode(`O valor da resistência é ${corrente.toFixed(4)} Ampére`)
    var separador = document.createElement("div")
    separador.setAttribute("id","separador")
    var espaço = document.createElement("br")
    lugar.appendChild(resultado)
    lugar.appendChild(separador)
    lugar.appendChild(espaço)
}

function potencia1(){
    var lugar = document.querySelector(".calcPlace")
    /*Setando Título */
    var titulo = document.createElement("h2")
    var textoTitulo = document.createTextNode("Calculo de Potência")
    titulo.appendChild(textoTitulo)
    lugar.appendChild(titulo)
    /* Criando os campos */
    var campoVoltagem = document.createElement("input")
    campoVoltagem.setAttribute("placeholder","Insira o valor da tensão")
    campoVoltagem.setAttribute("class","tensaoP")
    var campoCorrente = document.createElement("input")
    campoCorrente.setAttribute("placeholder","Insira o valor da corrente")
    campoCorrente.setAttribute("class","correnteP")

    /*Colocando os campos em seus devidos lugares */
    lugar.appendChild(campoVoltagem)
    lugar.appendChild(campoCorrente)

    /*Criando um botao input */
    var botInput = document.createElement("button")
    botInput.setAttribute("class","botaoInput")
    botInput.setAttribute("onclick","pot1Calc()")
    var textoBotao = document.createTextNode("Calcular")
    botInput.appendChild(textoBotao)
    /*Colocando o botão em seu devido lugar */
    lugar.appendChild(botInput)

    /*Criando um espaço*/
    var espaço = document.createElement("br")
    lugar.appendChild(espaço)
}

function pot1Calc(){
    /*Recebendo os valores*/
    var lugar = document.querySelector(".calcPlace")
    var valorTensao = document.querySelector(".tensaoP").value
    var valorCorrente = document.querySelector(".correnteP").value

    /*Calculando*/
    var potencia = valorTensao * valorCorrente
    
    /*Imprimindo resultado na tela */
    var resultado = document.createTextNode(`O valor da potência é ${potencia.toFixed(4)} watts`)
    var separador = document.createElement("div")
    separador.setAttribute("id","separador")
    var espaço = document.createElement("br")
    lugar.appendChild(resultado)
    lugar.appendChild(separador)
    lugar.appendChild(espaço)
}

function potencia2(){
    var lugar = document.querySelector(".calcPlace")
    /*Setando Título */
    var titulo = document.createElement("h2")
    var textoTitulo = document.createTextNode("Calculo de Potência")
    titulo.appendChild(textoTitulo)
    lugar.appendChild(titulo)
    /* Criando os campos */
    var campoResistencia = document.createElement("input")
    campoResistencia.setAttribute("placeholder","Insira o valor da resistência")
    campoResistencia.setAttribute("class","resistP2")
    var campoCorrente = document.createElement("input")
    campoCorrente.setAttribute("placeholder","Insira o valor da corrente²")
    campoCorrente.setAttribute("class","correnteP2")

    /*Colocando os campos em seus devidos lugares */
    lugar.appendChild(campoResistencia)
    lugar.appendChild(campoCorrente)

    /*Criando um botao input */
    var botInput = document.createElement("button")
    botInput.setAttribute("class","botaoInput")
    botInput.setAttribute("onclick","pot2Calc()")
    var textoBotao = document.createTextNode("Calcular")
    botInput.appendChild(textoBotao)
    /*Colocando o botão em seu devido lugar */
    lugar.appendChild(botInput)

    /*Criando um espaço*/
    var espaço = document.createElement("br")
    lugar.appendChild(espaço)
}

function pot2Calc(){
    /*Recebendo os valores*/
    var lugar = document.querySelector(".calcPlace")
    var valorResistencia = document.querySelector(".resistP2").value
    var valorCorrente = document.querySelector(".correnteP2").value

    /*Calculando*/
    var potencia = valorResistencia * valorCorrente
    
    /*Imprimindo resultado na tela */
    var resultado = document.createTextNode(`O valor da potência é ${potencia.toFixed(4)} watts`)
    var separador = document.createElement("div")
    separador.setAttribute("id","separador")
    var espaço = document.createElement("br")
    lugar.appendChild(resultado)
    lugar.appendChild(separador)
    lugar.appendChild(espaço)
}

function potencia3(){
    var lugar = document.querySelector(".calcPlace")
    /*Setando Título */
    var titulo = document.createElement("h2")
    var textoTitulo = document.createTextNode("Calculo de Potência")
    titulo.appendChild(textoTitulo)
    lugar.appendChild(titulo)
    /* Criando os campos */
    var campoVoltagem = document.createElement("input")
    campoVoltagem.setAttribute("placeholder","Insira o valor da voltagem²")
    campoVoltagem.setAttribute("class","tensaoP3")
    var campoResistencia = document.createElement("input")
    campoResistencia.setAttribute("placeholder","Insira o valor da resistência")
    campoResistencia.setAttribute("class","resistP3")

    /*Colocando os campos em seus devidos lugares */
    lugar.appendChild(campoVoltagem)
    lugar.appendChild(campoResistencia)

    /*Criando um botao input */
    var botInput = document.createElement("button")
    botInput.setAttribute("class","botaoInput")
    botInput.setAttribute("onclick","pot3Calc()")
    var textoBotao = document.createTextNode("Calcular")
    botInput.appendChild(textoBotao)
    /*Colocando o botão em seu devido lugar */
    lugar.appendChild(botInput)

    /*Criando um espaço*/
    var espaço = document.createElement("br")
    lugar.appendChild(espaço)
}

function pot3Calc(){
    /*Recebendo os valores*/
    var lugar = document.querySelector(".calcPlace")
    var valorResistencia = document.querySelector(".resistP3").value
    var valorTensao = document.querySelector(".tensaoP3").value

    /*Calculando*/
    var potencia = valorTensao / valorResistencia
    
    /*Imprimindo resultado na tela */
    var resultado = document.createTextNode(`O valor da potência é ${potencia.toFixed(4)} watts`)
    var separador = document.createElement("div")
    separador.setAttribute("id","separador")
    var espaço = document.createElement("br")
    lugar.appendChild(resultado)
    lugar.appendChild(separador)
    lugar.appendChild(espaço)
}

function potencia4(){
    var lugar = document.querySelector(".calcPlace")
    /*Setando Título */
    var titulo = document.createElement("h2")
    var textoTitulo = document.createTextNode("Calculo de Potência")
    titulo.appendChild(textoTitulo)
    lugar.appendChild(titulo)
    /* Criando os campos */
    var campoEnergia = document.createElement("input")
    campoEnergia.setAttribute("placeholder","Insira o valor dos Joules")
    campoEnergia.setAttribute("class","jouleP4")
    var campoTempo = document.createElement("input")
    campoTempo.setAttribute("placeholder","Insira o tempo em segundos")
    campoTempo.setAttribute("class","tempoP4")

    /*Colocando os campos em seus devidos lugares */
    lugar.appendChild(campoEnergia)
    lugar.appendChild(campoTempo)

    /*Criando um botao input */
    var botInput = document.createElement("button")
    botInput.setAttribute("class","botaoInput")
    botInput.setAttribute("onclick","pot4Calc()")
    var textoBotao = document.createTextNode("Calcular")
    botInput.appendChild(textoBotao)
    /*Colocando o botão em seu devido lugar */
    lugar.appendChild(botInput)

    /*Criando um espaço*/
    var espaço = document.createElement("br")
    lugar.appendChild(espaço)
}

function pot4Calc(){
    /*Recebendo os valores*/
    var lugar = document.querySelector(".calcPlace")
    var valorEnergia= document.querySelector(".jouleP4").value
    var valorTempo = document.querySelector(".tempoP4").value

    /*Calculando*/
    var potencia = valorEnergia / valorTempo
    
    /*Imprimindo resultado na tela */
    var resultado = document.createTextNode(`O valor da potência é ${potencia.toFixed(4)} watts`)
    var separador = document.createElement("div")
    separador.setAttribute("id","separador")
    var espaço = document.createElement("br")
    lugar.appendChild(resultado)
    lugar.appendChild(separador)
    lugar.appendChild(espaço)
}

function potencia5(){
    var lugar = document.querySelector(".calcPlace")
    /*Setando Título */
    var titulo = document.createElement("h2")
    var textoTitulo = document.createTextNode("Calculo de Potência")
    titulo.appendChild(textoTitulo)
    lugar.appendChild(titulo)
    /* Criando os campos */
    var campoEnergia = document.createElement("input")
    campoEnergia.setAttribute("placeholder","Insira o valor dos kWh")
    campoEnergia.setAttribute("class","kwhP5")
    var campoTempo = document.createElement("input")
    campoTempo.setAttribute("placeholder","Insira o tempo em horas")
    campoTempo.setAttribute("class","tempoP5")

    /*Colocando os campos em seus devidos lugares */
    lugar.appendChild(campoEnergia)
    lugar.appendChild(campoTempo)

    /*Criando um botao input */
    var botInput = document.createElement("button")
    botInput.setAttribute("class","botaoInput")
    botInput.setAttribute("onclick","pot5Calc()")
    var textoBotao = document.createTextNode("Calcular")
    botInput.appendChild(textoBotao)
    /*Colocando o botão em seu devido lugar */
    lugar.appendChild(botInput)

    /*Criando um espaço*/
    var espaço = document.createElement("br")
    lugar.appendChild(espaço)
}

function pot5Calc(){
    /*Recebendo os valores*/
    var lugar = document.querySelector(".calcPlace")
    var valorEnergia= document.querySelector(".kwhP5").value
    var valorTempo = document.querySelector(".tempoP5").value

    /*Calculando*/
    var potencia = valorEnergia / valorTempo
    
    /*Imprimindo resultado na tela */
    var resultado = document.createTextNode(`O valor da potência é ${potencia.toFixed(4)} Kilowatts\n${potencia.toFixed(4)} Kilowatts em watts é ${(potencia*1000).toFixed(4)} watts`)
    var separador = document.createElement("div")
    separador.setAttribute("id","separador")
    var espaço = document.createElement("br")
    lugar.appendChild(resultado)
    lugar.appendChild(separador)
    lugar.appendChild(espaço)
}

function energia1(){
    var lugar = document.querySelector(".calcPlace")
    /*Setando Título */
    var titulo = document.createElement("h2")
    var textoTitulo = document.createTextNode("Calculo de Energia em Joule")
    titulo.appendChild(textoTitulo)
    lugar.appendChild(titulo)
    /* Criando os campos */
    var campoPotencia = document.createElement("input")
    campoPotencia.setAttribute("placeholder","Insira o valor da potencia em W")
    campoPotencia.setAttribute("class","Watts1")
    var campoTempo = document.createElement("input")
    campoTempo.setAttribute("placeholder","Insira o tempo em segundos")
    campoTempo.setAttribute("class","tempoE1")

    /*Colocando os campos em seus devidos lugares */
    lugar.appendChild(campoPotencia)
    lugar.appendChild(campoTempo)

    /*Criando um botao input */
    var botInput = document.createElement("button")
    botInput.setAttribute("class","botaoInput")
    botInput.setAttribute("onclick","ene1Calc()")
    var textoBotao = document.createTextNode("Calcular")
    botInput.appendChild(textoBotao)
    /*Colocando o botão em seu devido lugar */
    lugar.appendChild(botInput)

    /*Criando um espaço*/
    var espaço = document.createElement("br")
    lugar.appendChild(espaço)
}

function ene1Calc(){
    /*Recebendo os valores*/
    var lugar = document.querySelector(".calcPlace")
    var valorPotencia= document.querySelector(".Watts1").value
    var valorTempo = document.querySelector(".tempoE1").value

    /*Calculando*/
    var Energia = valorPotencia * valorTempo
    
    /*Imprimindo resultado na tela */
    var resultado = document.createTextNode(`O valor da energia é ${Energia.toFixed(4)} joules`)
    var separador = document.createElement("div")
    separador.setAttribute("id","separador")
    var espaço = document.createElement("br")
    lugar.appendChild(resultado)
    lugar.appendChild(separador)
    lugar.appendChild(espaço)
}

function energia2(){
    var lugar = document.querySelector(".calcPlace")
    /*Setando Título */
    var titulo = document.createElement("h2")
    var textoTitulo = document.createTextNode("Calculo de Energia em kWh")
    titulo.appendChild(textoTitulo)
    lugar.appendChild(titulo)
    /* Criando os campos */
    var campoPotencia = document.createElement("input")
    campoPotencia.setAttribute("placeholder","Insira o valor da potencia em KW")
    campoPotencia.setAttribute("class","Watts2")
    var campoTempo = document.createElement("input")
    campoTempo.setAttribute("placeholder","Insira o tempo em horas")
    campoTempo.setAttribute("class","tempoE2")

    /*Colocando os campos em seus devidos lugares */
    lugar.appendChild(campoPotencia)
    lugar.appendChild(campoTempo)

    /*Criando um botao input */
    var botInput = document.createElement("button")
    botInput.setAttribute("class","botaoInput")
    botInput.setAttribute("onclick","ene2Calc()")
    var textoBotao = document.createTextNode("Calcular")
    botInput.appendChild(textoBotao)
    /*Colocando o botão em seu devido lugar */
    lugar.appendChild(botInput)

    /*Criando um espaço*/
    var espaço = document.createElement("br")
    lugar.appendChild(espaço)
}

function ene2Calc(){
    /*Recebendo os valores*/
    var lugar = document.querySelector(".calcPlace")
    var valorPotencia= document.querySelector(".Watts2").value
    var valorTempo = document.querySelector(".tempoE2").value

    /*Calculando*/
    var Energia = valorPotencia * valorTempo
    
    /*Imprimindo resultado na tela */
    var resultado = document.createTextNode(`O valor da energia é ${Energia.toFixed(4)} kWh`)
    var separador = document.createElement("div")
    separador.setAttribute("id","separador")
    var espaço = document.createElement("br")
    lugar.appendChild(resultado)
    lugar.appendChild(separador)
    lugar.appendChild(espaço)
}

function hora1(){
    var lugar = document.querySelector(".calcPlace")
    /*Setando Título */
    var titulo = document.createElement("h2")
    var textoTitulo = document.createTextNode("Calculo de tempo em segundos")
    titulo.appendChild(textoTitulo)
    lugar.appendChild(titulo)
    /* Criando os campos */
    var campoPotencia = document.createElement("input")
    campoPotencia.setAttribute("placeholder","Insira o valor da potencia em W")
    campoPotencia.setAttribute("class","WattsH1")
    var campoEnergia = document.createElement("input")
    campoEnergia.setAttribute("placeholder","Insira a energia em joules")
    campoEnergia.setAttribute("class","eneH1")

    /*Colocando os campos em seus devidos lugares */
    lugar.appendChild(campoPotencia)
    lugar.appendChild(campoEnergia)

    /*Criando um botao input */
    var botInput = document.createElement("button")
    botInput.setAttribute("class","botaoInput")
    botInput.setAttribute("onclick","h1Calc()")
    var textoBotao = document.createTextNode("Calcular")
    botInput.appendChild(textoBotao)
    /*Colocando o botão em seu devido lugar */
    lugar.appendChild(botInput)

    /*Criando um espaço*/
    var espaço = document.createElement("br")
    lugar.appendChild(espaço)
}

function h1Calc(){
    /*Recebendo os valores*/
    var lugar = document.querySelector(".calcPlace")
    var valorPotencia= document.querySelector(".WattsH1").value
    var valorEnergia = document.querySelector(".eneH1").value

    /*Calculando*/
    var tempo = valorEnergia / valorPotencia
    
    /*Imprimindo resultado na tela */
    var resultado = document.createTextNode(`O valor do tempo é ${tempo.toFixed(2)} segundos`)
    var separador = document.createElement("div")
    separador.setAttribute("id","separador")
    var espaço = document.createElement("br")
    lugar.appendChild(resultado)
    lugar.appendChild(separador)
    lugar.appendChild(espaço)
}

function hora2(){
    var lugar = document.querySelector(".calcPlace")
    /*Setando Título */
    var titulo = document.createElement("h2")
    var textoTitulo = document.createTextNode("Calculo de tempo em horas")
    titulo.appendChild(textoTitulo)
    lugar.appendChild(titulo)
    /* Criando os campos */
    var campoPotencia = document.createElement("input")
    campoPotencia.setAttribute("placeholder","Insira o valor da potencia em KW")
    campoPotencia.setAttribute("class","WattsH2")
    var campoEnergia = document.createElement("input")
    campoEnergia.setAttribute("placeholder","Insira a energia em kWh")
    campoEnergia.setAttribute("class","eneH2")

    /*Colocando os campos em seus devidos lugares */
    lugar.appendChild(campoPotencia)
    lugar.appendChild(campoEnergia)

    /*Criando um botao input */
    var botInput = document.createElement("button")
    botInput.setAttribute("class","botaoInput")
    botInput.setAttribute("onclick","h2Calc()")
    var textoBotao = document.createTextNode("Calcular")
    botInput.appendChild(textoBotao)
    /*Colocando o botão em seu devido lugar */
    lugar.appendChild(botInput)

    /*Criando um espaço*/
    var espaço = document.createElement("br")
    lugar.appendChild(espaço)
}

function h2Calc(){
    /*Recebendo os valores*/
    var lugar = document.querySelector(".calcPlace")
    var valorPotencia= document.querySelector(".WattsH2").value
    var valorEnergia = document.querySelector(".eneH2").value

    /*Calculando*/
    var tempo = valorEnergia / valorPotencia
    
    /*Imprimindo resultado na tela */
    var resultado = document.createTextNode(`O valor do tempo é ${tempo.toFixed(2)} horas`)
    var separador = document.createElement("div")
    separador.setAttribute("id","separador")
    var espaço = document.createElement("br")
    lugar.appendChild(resultado)
    lugar.appendChild(separador)
    lugar.appendChild(espaço)
}


function req1(){
    var lugar = document.querySelector(".calcPlace")
    /*Setando Título */
    var titulo = document.createElement("h2")
    var textoTitulo = document.createTextNode("Calculo de Resistência Equivalente entre dois resistores em paralelo")
    titulo.appendChild(textoTitulo)
    lugar.appendChild(titulo)
    /* Criando os campos */
    var campoR1 = document.createElement("input")
    campoR1.setAttribute("placeholder","Insira o valor da Resistência 1")
    campoR1.setAttribute("class","r1")
    var campoR2 = document.createElement("input")
    campoR2.setAttribute("placeholder","Insira o valor da Resistência 2")
    campoR2.setAttribute("class","r2")

    /*Colocando os campos em seus devidos lugares */
    lugar.appendChild(campoR1)
    lugar.appendChild(campoR2)

    /*Criando um botao input */
    var botInput = document.createElement("button")
    botInput.setAttribute("class","botaoInput")
    botInput.setAttribute("onclick","req1Calc()")
    var textoBotao = document.createTextNode("Calcular")
    botInput.appendChild(textoBotao)
    /*Colocando o botão em seu devido lugar */
    lugar.appendChild(botInput)

    /*Criando um espaço*/
    var espaço = document.createElement("br")
    lugar.appendChild(espaço)
}


function req1Calc(){
    /*Recebendo os valores*/
    var lugar = document.querySelector(".calcPlace")
    var valorR1= document.querySelector(".r1").value
    var valorR2 = document.querySelector(".r2").value

    var vr1 = parseFloat(valorR1)
    var vr2 = parseFloat(valorR2)

    /*Calculando*/
    var Req = (vr1 * vr2) / (vr1 + vr2)
    
    /*Imprimindo resultado na tela */
    var resultado = document.createTextNode(`O valor da resistência equivalente é ${Req.toFixed(4)} ohm`)
    var separador = document.createElement("div")
    separador.setAttribute("id","separador")
    var espaço = document.createElement("br")
    lugar.appendChild(resultado)
    lugar.appendChild(separador)
    lugar.appendChild(espaço)
}


function req2(){
    var lugar = document.querySelector(".calcPlace")
    /*Setando Título */
    var titulo = document.createElement("h2")
    var textoTitulo = document.createTextNode("Calculo de Resistência Equivalente entre resistores em série")
    titulo.appendChild(textoTitulo)
    lugar.appendChild(titulo)
    /* Criando os campos */
    var repeticoes = document.createElement("input")
    repeticoes.setAttribute("placeholder","Insira a quantidade de resistores em série")
    repeticoes.setAttribute("class","rep1")
   
    /*Colocando os campos em seus devidos lugares */
    lugar.appendChild(repeticoes)

    /*Criando um botao input */
    var botInput = document.createElement("button")
    botInput.setAttribute("class","botaoInput")
  //botInput.setAttribute("onclick","req1Calc()")
    var textoBotao = document.createTextNode("Continuar")
    botInput.appendChild(textoBotao)
    /*Colocando o botão em seu devido lugar */
    lugar.appendChild(botInput)

    /*Criando um espaço*/
    var espaço = document.createElement("br")
    lugar.appendChild(espaço)

    botInput.onclick=function(){
        var lugar = document.querySelector(".calcPlace")
        var valorRep = document.querySelector(".rep1").value

        while(valorRep != -1) 
        {
            if(valorRep >= 1){
            var nomeResis = `r${valorRep}`
            var resistN = document.createElement("input")
            resistN.setAttribute("placeholder","Insira o valor da resistência")
            resistN.setAttribute("class",nomeResis)

            lugar.appendChild(resistN)
            valorRep -= 1 
            }
            else if(valorRep===0)
            {
                var botCalc = document.createElement("button")
                botCalc.setAttribute("class","botaoCalc")
                botCalc.setAttribute("onclick","req2Calc()")
                var Textobotao = document.createTextNode("Calcular")
                botCalc.appendChild(Textobotao)
                
                lugar.appendChild(botCalc)

                valorRep -= 1
            }
        } 

    }
}

function req2Calc(){
    var lugar = document.querySelector(".calcPlace")
    var valorRep = document.querySelector(".rep1").value
    var resultado = 0
    

    while(valorRep != 0)
    {
    var nomedoinput = `r${valorRep}` 
     var resistN = document.getElementsByClassName(nomedoinput)[0]
     var resistValor = parseFloat(resistN.value)
     var resultado = resultado + resistValor
     
     valorRep -= 1
    }

    var resultadoF = document.createTextNode(`O valor da resistência equivalente é ${resultado.toFixed(4)} ohm`)
    var separador = document.createElement("div")
    separador.setAttribute("id","separador")
    var espaço = document.createElement("br")
    lugar.appendChild(resultadoF)
    lugar.appendChild(separador)
    lugar.appendChild(espaço)
}


function req3(){
    var lugar = document.querySelector(".calcPlace")
    /*Setando Título */
    var titulo = document.createElement("h2")
    var textoTitulo = document.createTextNode("Calculo de Resistência Equivalente entre resistores em paralelo")
    titulo.appendChild(textoTitulo)
    lugar.appendChild(titulo)
    /* Criando os campos */
    var repeticoes = document.createElement("input")
    repeticoes.setAttribute("placeholder","Insira a quantidade de resistores em paralelo")
    repeticoes.setAttribute("class","rep2")
   
    /*Colocando os campos em seus devidos lugares */
    lugar.appendChild(repeticoes)

    /*Criando um botao input */
    var botInput = document.createElement("button")
    botInput.setAttribute("class","botaoInput")
  //botInput.setAttribute("onclick","req1Calc()")
    var textoBotao = document.createTextNode("Continuar")
    botInput.appendChild(textoBotao)
    /*Colocando o botão em seu devido lugar */
    lugar.appendChild(botInput)

    /*Criando um espaço*/
    var espaço = document.createElement("br")
    lugar.appendChild(espaço)

    botInput.onclick=function(){
        var lugar = document.querySelector(".calcPlace")
        var valorRep = document.querySelector(".rep2").value

        while(valorRep != -1) 
        {
            if(valorRep >= 1){
            var nomeResis = `r${valorRep}`
            var resistN = document.createElement("input")
            resistN.setAttribute("placeholder","Insira o valor da resistência")
            resistN.setAttribute("class",nomeResis)

            lugar.appendChild(resistN)
            valorRep -= 1 
            }
            else if(valorRep===0)
            {
                var botCalc = document.createElement("button")
                botCalc.setAttribute("class","botaoCalc")
                botCalc.setAttribute("onclick","req3Calc()")
                var Textobotao = document.createTextNode("Calcular")
                botCalc.appendChild(Textobotao)
                
                lugar.appendChild(botCalc)

                valorRep -= 1
            }
        } 

    }
}


function req3Calc(){
    var lugar = document.querySelector(".calcPlace")
    var valorRep = document.querySelector(".rep2").value
    var resultado = 0
    

    while(valorRep != 0)
    {
    var nomedoinput = `r${valorRep}` 
     var resistN = document.getElementsByClassName(nomedoinput)[0]
     var resistValor = parseFloat(resistN.value)
     var resultado = resultado +( 1 / resistValor )
     var resultDefi = 1 / resultado 
     valorRep -= 1
    }

    var resultadoF = document.createTextNode(`O valor da resistência equivalente é ${resultDefi.toFixed(4)} ohm`)
    var separador = document.createElement("div")
    separador.setAttribute("id","separador")
    var espaço = document.createElement("br")
    lugar.appendChild(resultadoF)
    lugar.appendChild(separador)
    lugar.appendChild(espaço)
}


function menu(valor){
/*Recebendo valor */
    var value = valor
/*Rodando o menu */
    if(value==="1")
       setTimeout(tensao(),1000)
    else if(value==="2")
        setTimeout(resistencia(),1000)
    else if(value==="3")
        setTimeout(corrente(),1000)
    else if(value==="4")
        setTimeout(potencia1(),1000)
    else if(value==="5")
        setTimeout(potencia2(),1000)
    else if(value==="6")
        setTimeout(potencia3(),1000)
    else if(value==="7")
        setTimeout(potencia4(),1000)
    else if(value==="8")
        setTimeout(potencia5(),1000) 
    else if(value==="9")
        setTimeout(energia1(),1000)
    else if(value==="10")
        setTimeout(energia2(),1000)
    else if(value==="11")
        setTimeout(hora1(),1000)
    else if(value==="12")
        setTimeout(hora2(),1000)
    else if(value==="13")
        setTimeout(req1(),1000)
    else if(value==="14")
        setTimeout(req2(),1000)
    else if(value==="15")
        setTimeout(req3(),1000)

}


function limpar(){
    document.location.reload(true)
}