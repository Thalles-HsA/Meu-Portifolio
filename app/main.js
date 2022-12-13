let projetos = []

projetos.push(
    {link: 'https://github.com/Thalles-HsA/AluraPlus', 
    imagem:'img/AluraPlus.PNG', 
    tag:'HTML',
    filtro: 'todos'
},
{
    link:'https://github.com/Thalles-HsA/AluraBooks', 
    imagem:'img/AluraBook.PNG', 
    tag: 'HTML',
    filtro: 'todos'
}, 

{
    link:'https://github.com/Thalles-HsA/Curso-CSS---Flex-box-e-Grid-', 
    imagem:'img/GridFlexCSS.PNG', 
    tag: 'HTML',
    filtro: 'todos'
}, 

{
    link:'https://github.com/Thalles-HsA/Barbearia-alura', 
    imagem:'img/BarbeariaAlura.PNG', 
    tag: 'HTML',
    filtro: 'todos'
}, 
{
    link:'https://github.com/Thalles-HsA/AluraMidi',
    imagem:'img/AluraMidi.PNG',
    tag: 'JS',
    filtro: 'todos'
}, 
{
    link:'https://github.com/Thalles-HsA/Freeway-JS', 
    imagem:'img/Freeway.jpg', 
    tag: 'JS',
    filtro: 'todos'
},
{
    link:'https://github.com/Thalles-HsA/Pong', 
    imagem:'img/Pong.PNG', 
    tag: 'JS',
    filtro: 'todos'
},
{
    link:'https://github.com/Thalles-HsA/MetodosArray', 
    imagem:'img/alurabookMetodosArray.PNG', 
    tag: 'JS',
    filtro: 'todos'
},
{
    link:'https://github.com/Thalles-HsA/OrientacaoObjetoJS', 
    imagem:'img/OOemJS.PNG', 
    tag: 'JS',
    filtro: 'todos'
},

)

const divProjetos = document.getElementById('projetos')

exibirOsProjetos(projetos)

function exibirOsProjetos(projetos) {
    divProjetos.innerHTML = ''

    projetos.forEach(projetos => {
        divProjetos.innerHTML += `
            <a href="${projetos.link}" target="_blank"><img src="${projetos.imagem}" alt="Projeto"  class="projeto__imagem" value="${projetos.tag}"></a>
            `
    })
}

const botoes = document.querySelectorAll('.botao')

botoes.forEach(botoes => botoes.addEventListener('click', filtrarProjetos))

function filtrarProjetos() {
    const elementoBotao = document.getElementById(this.id)
    const categoria = elementoBotao.value

    let projetosFiltrados = categoria == 'Todos' ? todos() : filtrarPorCategoria(categoria)

    exibirOsProjetos(projetosFiltrados)
}

function filtrarPorCategoria(categoria) {
return projetos.filter(projetos => projetos.tag == categoria)
}

function todos () {
    return projetos.filter(projetos => projetos.filtro == 'todos')
    }


