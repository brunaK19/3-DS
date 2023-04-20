let tags = ['div','form','h1','p','p','p','input','input','input','button']
let listTags = []
let body = document.querySelector('body')

//criando as tags
tags.forEach(tag =>{
    let tagNova = createTag(tag)
    listTags.push(tagNova)
})

//colocando conteúdo nas tags de texto
listTags[2].textContent = "CADASTRO DE ALUNOS"
listTags[3].textContent = "Nome Completo"
listTags[4].textContent = "CPF"
listTags[5].textContent = "Email"
listTags[9].textContent = "Enviar"

//adicionando div no DOM
body.appendChild(listTags[0])
listTags[0].classList.add('container')

//colocando form dentro da div
listTags[0].appendChild(listTags[1])

//adicionando as outras tags dentro de form
listTags[1].appendChild(listTags[2])
listTags[1].appendChild(listTags[3])
listTags[1].appendChild(listTags[6])
listTags[1].appendChild(listTags[4])
listTags[1].appendChild(listTags[7])
listTags[1].appendChild(listTags[5])
listTags[1].appendChild(listTags[8])
listTags[1].appendChild(listTags[9])



//função para criar tags
function createTag(tag){
    let novaTag = document.createElement(tag)
    return novaTag
}
