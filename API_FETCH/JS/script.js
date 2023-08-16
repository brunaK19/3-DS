
function fetchProducts() {
    return fetch('JSON/produtos.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
      });
  }

  function renderProducts(products) {
    const productListElement = document.getElementById('products');
  
    products.forEach(product => {

      const productElement = document.createElement('div');
      productElement.className = 'product';

      productElement.innerHTML = ` <a href="desc.html?codigo=${product.codigo}">
      <img src="${product.url_imagem}" alt="${product.name}" />
        <h2>${product.nome}</h2>
        <span>Preço: $${product.preco}</span>
        </a>
      `;

      productListElement.appendChild(productElement);
    });
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


  
