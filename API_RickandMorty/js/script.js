const characterId = document.getElementById('characterId');
const btnGo = document.getElementById('btn-go');
const btnReset = document.getElementById('btn-reset');
const content = document.getElementById('content');
const conteinerResult = document.getElementById('result-style');
const image = document.getElementById('img');


// Função que faz a requisição à API com base no ID do personagem
const fetchApi = (value) => {
  const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });

  return result;
};

// Lista de chaves que queremos da API
const keys = ['name', 'status', 'species', 'gender', 'origin'];

// traduções das chaves
const newKeys = {
  name: 'Nome',
  status: 'Status',
  species: 'Espécie',
  gender: 'Gênero',
  origin: 'Planeta de origem',
};

// Função para construir e exibir o resultado 
const buildResult = (result) => {
  const resultContainer = document.createElement('div'); // Cria um contêiner para os resultados

  keys.forEach((key) => {
    const newElem = document.createElement('p');

    if (Array.isArray(result[key])) {
      const arrayResult = result[key].join(', '); // Junta os itens do array com vírgula e espaço
      newElem.textContent = `${newKeys[key]}: ${arrayResult}`;
    } else if (key === 'origin') {
      newElem.textContent = `${newKeys[key]}: ${result[key].name}`;
    } else {
      newElem.textContent = `${newKeys[key]}: ${result[key]}`;
    }

    resultContainer.appendChild(newElem); // Adiciona o elemento ao container
  });

  content.innerHTML = ''; // Limpa o conteúdo atual
  content.appendChild(resultContainer); // Adiciona todos os elementos do resultado ao conteúdo
};

//evento do botao Pesquisar
btnGo.addEventListener('click', async (event) => {
  event.preventDefault();

  // Verifica se há um valor de ID do personagem
  if (characterId.value === '') {
    return content.innerHTML = 'Escolha um número.';
  }

  // Faz a requisição à API com base no ID e obtém os dados
  const result = await fetchApi(characterId.value);

  // Limpa o conteúdo atual e exibe a imagem do personagem
  content.innerHTML = ''; 
  conteinerResult.className = 'result-style';
  image.src = `${result.image}`;

  // Constrói e exibe todas as informações do personagem
  buildResult(result);
});

//Botao que limpa as informações
btnReset.addEventListener('click', () => location.reload());
