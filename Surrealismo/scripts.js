window.addEventListener('scroll', ()=>{
    const menu = document.querySelector('.menu_header')
    menu.classList.toggle('transparente', window.scrollY <= 0 )
})


function mostrar(){
    const menuItens = document.querySelector('.itens')
    menuItens.classList.toggle('mostrar')
}

