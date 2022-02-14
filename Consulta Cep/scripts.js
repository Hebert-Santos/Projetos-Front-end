let respCampo = document.querySelector('.resultado')

//Procura os dados através do CEP
document.querySelector('button').addEventListener('click', async (e) => {
    e.preventDefault()

    let cep = document.querySelector('input').value
    let URL = cep !== '' ? `https://viacep.com.br/ws/${cep}/json/ ` : mostraErro('Por favor, Insira um CEP válido')

    if (cep.length !== 8) {
        mostraErro('Por favor, insira um CEP com a quantidade correta de dígitos (8 dígitos)')
    } else {
        let resultado = await fetch(URL)
        let json = await resultado.json()

        if (resultado.ok && json.erro !== true) {
            mostraInfo({
                rua: json.logradouro,
                bairro: json.bairro,
                cidade: json.localidade,
                uf: json.uf,
                DDD: json.ddd
            })
        } else {
            mostraErro('Localização não encontrada. Por favor, confira os dados inseridos.')
        }
    }
})

//Troca os campos de Consulta CEP para Procura CEP
document.querySelector('.procuraCep').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('main').classList.add('hidden')
    document.querySelector('.achaCep').classList.remove('hidden')
    respCampo.classList.contains('hidden') ? '' : respCampo.classList.add('hidden')
})

//Troca os campos de Procura CEP para Consulta CEP
document.querySelector('.procuraRua').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.achaCep').classList.add('hidden')
    document.querySelector('main').classList.remove('hidden')
    respCampo.classList.contains('hidden') ? '' : respCampo.classList.add('hidden')
})

//Procura o CEP através dos dados
document.querySelector('.achaCepBtt').addEventListener('click', async (e) => {
    e.preventDefault()
    let cidade = document.querySelector('.cidadeInput').value
    let uf = document.querySelector('.ufInput').value.toUpperCase()
    let rua = document.querySelector('.ruaInput').value
    let URL = `https://viacep.com.br/ws/${uf}/${cidade}/${rua}/json/`

    if (cidade.length > 3 && uf.length === 2 && rua.length > 3) {
        let resultado = await fetch(URL)
        let json = await resultado.json()

        mostraInfo({
            cep: json[0].cep,
            rua: json[0].logradouro,
            cidade: json[0].localidade,
            uf: json[0].uf
        })

    } else {
        mostraErro('Por favor, confira se os campos estão preenchidos corretamente.')
    }
})

function mostraErro(erro) {
    respCampo.classList.remove('hidden')
    respCampo.innerHTML = `<b>${erro}</b>`
}

function mostraInfo(json) {
    respCampo.classList.remove('hidden')
    respCampo.innerHTML = '<h2>Veja só o que encontramos :</h2>'

    for (campo in json) {
        let div = document.createElement('div')
        div.setAttribute('class', campo)

        let textoDiv = document.createTextNode(`${campo} : ${json[campo]}`)

        div.appendChild(textoDiv)
        respCampo.appendChild(div)
    }
}