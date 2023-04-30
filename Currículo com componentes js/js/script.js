let tags = ['div','form','h1','p','p','p','p','h2','p','h3','p','h4','p','p', 'a']
let listTags = []
let body = document.querySelector('body')

//criando as tags
tags.forEach(tag =>{
    let tagNova = createTag(tag)
    listTags.push(tagNova)
})

//colocando conteúdo nas tags de texto
listTags[2].textContent = "Bruna Karen Gomes Lopes"
listTags[3].textContent = "17 anos, Solteira" 
listTags[4].textContent = "E-mail: brunakarengl@gmail.com"
listTags[5].textContent = "Contato: (11)99983-3019"
listTags[6].textContent = "Endereço: Rua conto de areia, Conjunto Habitacional Castro Alves, São Paulo"
listTags[7].textContent = "FORMAÇÃO"
listTags[8].textContent = "Ensino Médio integrado as Técnico em Desenvolvimento de sistemas - ETEC de Cidade Tiradentes (2023)"
listTags[9].textContent = "OBJETIVO"
listTags[10].textContent = "Procuro a minha primeira oportunidade de trabalho na área de tecnologia"
listTags[11].textContent = "CURSOS COMPLEMENTARES"
listTags[12].textContent = "Linguagem de Modelagem Unificada (UML)"
listTags[13].textContent = "Cultura digital"
listTags[14].textContent = "Autora da página"
listTags[14].href = "autor.html"

//adicionando div no DOM
body.appendChild(listTags[0])
body.appendChild(listTags[14])

listTags[0].classList.add('container')

//colocando form dentro da div
listTags[0].appendChild(listTags[1])


//adicionando as outras tags dentro de form
listTags[1].appendChild(listTags[2])
listTags[1].appendChild(listTags[3])
listTags[1].appendChild(listTags[4])
listTags[1].appendChild(listTags[5])
listTags[1].appendChild(listTags[6])
listTags[1].appendChild(listTags[7])
listTags[1].appendChild(listTags[8])
listTags[1].appendChild(listTags[9])
listTags[1].appendChild(listTags[10])
listTags[1].appendChild(listTags[11])
listTags[1].appendChild(listTags[12])
listTags[1].appendChild(listTags[13])


//função para criar tags
function createTag(tag){
    let novaTag = document.createElement(tag)
    return novaTag
}
