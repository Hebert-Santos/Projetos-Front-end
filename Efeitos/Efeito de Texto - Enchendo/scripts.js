function startAnimation(){
    let form = document.querySelector('.form')
    form.classList.add('hidden')

    let nome = document.querySelector('.nome').value
    let sex = document.querySelector('.sex').value.toUpperCase()
    let h2space = document.querySelector('.texto')
    let h3space = document.querySelector('body')
    
    let h3 = document.createElement('h3')
    let h3Text = sex === 'M'?document.createTextNode('Bem-Vindo'):document.createTextNode('Bem-Vinda')
    h3.appendChild(h3Text)
    
    let h2 = document.createElement('h2')
    h2.setAttribute('data-text', nome)
    
    let h2Text = document.createTextNode(nome)
    h2.appendChild(h2Text)
    
    h3space.appendChild(h3)
    h2space.appendChild(h2)
}
