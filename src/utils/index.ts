// Função para formatar um preço em reais (BRL)
export const priceFormat = (price = 0) => {
  // Utiliza a API Intl.NumberFormat para formatar o número como moeda brasileira
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency', // Define o estilo como moeda
    currency: 'BRL' // Define a moeda como Real Brasileiro
  }).format(price) // Formata o preço e retorna como string
}

// Função para calcular o preço total de uma lista de produtos
export const getTotalPrice = (items: ProductType[]) => {
  // Utiliza o método reduce para somar os preços dos produtos
  return items.reduce((accumulator, currentValue) => {
    // Adiciona o preço do produto atual ao acumulador
    return (accumulator += currentValue.preco)
  }, 0) // Inicializa o acumulador com 0
}
