let tags = ['div','img','h1','p','p','a']
let listTags = []
let body = document.querySelector('body')

//criando as tags
tags.forEach(tag =>{
    let tagNova = createTag(tag)
    listTags.push(tagNova)
})

//colocando conteúdo nas tags de texto
listTags[1].src = "./img/autor.jpg"
listTags[2].textContent = "Bruna Karen Gomes Lopes"
listTags[3].textContent = "17 anos" 
listTags[4].textContent = "3º DS"
listTags[5].textContent = "Voltar ao início"
listTags[5].href = "index.html"

//adicionando div no DOM
body.appendChild(listTags[0])
body.appendChild(listTags[5])

listTags[0].classList.add('container')

//colocando items dentro da div
listTags[0].appendChild(listTags[1])
listTags[0].appendChild(listTags[2])
listTags[0].appendChild(listTags[3])
listTags[0].appendChild(listTags[4])



//função para criar tags
function createTag(tag){
    let novaTag = document.createElement(tag)
    return novaTag
}
