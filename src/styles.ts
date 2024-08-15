import { createGlobalStyle } from 'styled-components' // Importa a função createGlobalStyle do styled-components para criar estilos globais

// Define um objeto de cores para uso consistente em toda a aplicação
export const colors = {
  darkPink: '#E66767', // Cor rosa escuro
  pink: '#FFEBD9', // Cor rosa claro
  lightPink: '#FFF8F2', // Cor rosa muito claro
  white: '#ffffff', // Cor branca
  lightGray: '#e66767d2' // Cor cinza claro com opacidade
}

// Define os breakpoints para media queries, facilitando o design responsivo
export const breakpoints = {
  desktop: '1024px', // Largura máxima para desktops
  tablet: '768px' // Largura máxima para tablets
}

// Cria estilos globais que serão aplicados a toda a aplicação
export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0; // Remove a margem padrão de todos os elementos
    padding: 0; // Remove o padding padrão de todos os elementos
    box-sizing: border-box; // Define o box-sizing como border-box para todos os elementos
    font-family: 'Roboto', sans-serif; // Define a fonte padrão como Roboto
    list-style: none; // Remove o estilo padrão das listas
  }

  .container {
    max-width: 1024px; // Define a largura máxima do container
    width: 100%; // Define a largura do container como 100%
    margin: 0 auto; // Centraliza o container horizontalmente

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 90%; // Reduz a largura máxima do container em telas menores que o breakpoint desktop
    }
  }
`
