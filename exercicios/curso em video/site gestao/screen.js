function clickMenu(){

    var itens = document.getElementById('itens');
    var burguerIcon = document.getElementById('burguerIcon');
    var closeIcon = document.getElementById('closeIcon');

    if (itens.style.display == 'block'){
        itens.style.display = 'none'
        burguerIcon.style.display = 'block'
        closeIcon.style.display = 'none'

    } else {
        itens.style.display = 'block'
        burguerIcon.style.display = 'none'
        closeIcon.style.display = 'block'
    }
}

function populaMenu(){
    let itens = document.getElementById('itens');
    const menus = [
        {
           titulo: 'Quem somos', 
           href: "#home"
        },
        {
            titulo: 'Funcionalidades do Sistema', 
            href: "#funcionalidades"
         },
         {
            titulo: 'Nossos Planos', 
            href: "#nossosPlanos"
         },
         {
            titulo: 'Contato', 
            href: "#contato"
         }
       
       
    ];
    let lista = "";
    menus.forEach(menu => {
        console.log(menu.titulo);
        lista += `<li id="li"><a onclick="clickMenu()" href="${menu.href}">${menu.titulo}</a></li>\n`
    })
    itens.innerHTML = lista;
}