function fetchProducts() {
    return fetch('JSON/produtos.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
      });
  }

 const params = new URLSearchParams(window.location.search)
 var codigo = params.get('codigo')

  function renderProducts(products) {
    const productListElement = document.getElementById('products');

    products.forEach(product => {
    if(product.codigo == codigo){
        console.log(product)

      const productElement = document.createElement('div');
      productElement.className = 'product';
      productElement.innerHTML = `
      <img src="${product.url_imagem}" alt="${product.name}" />
        <h2>${product.nome}</h2>
        <p>${product.descricao}</p>
        <p>${product.fornecedor}</p>
        <span>Preço: $${product.preco}</span>
        <a href="index.html">VOLTAR</a>
        
      `;

      productListElement.appendChild(productElement);
    }});

  }

  document.addEventListener('DOMContentLoaded', () => {
    fetchProducts()
      .then(products => {
        renderProducts(products);
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  });