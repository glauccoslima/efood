# efood 🍽️

Este projeto é um sistema de delivery interativo chamado **efood**, onde os usuários podem explorar restaurantes, visualizar menus e fazer pedidos online.

🌐 [**Visite o site!**](https://efood-two-flax.vercel.app/) 👈

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Componentes Principais](#componentes-principais)
- [Estrutura do Projeto](#estrutura-do-projeto)

## Sobre o Projeto

O objetivo deste projeto é criar uma aplicação web para pedidos online, permitindo que os usuários explorem restaurantes, visualizem menus e façam pedidos de forma intuitiva e rápida. A aplicação interage com uma API para obter informações dos restaurantes e processar pedidos.

## Funcionalidades

- **Exploração de Restaurantes**: Os usuários podem visualizar uma lista de restaurantes disponíveis.
- **Visualização de Menus**: É possível ver o cardápio completo de cada restaurante, com descrição, fotos e preços.
- **Adição ao Carrinho**: Os usuários podem adicionar produtos ao carrinho de compras.
- **Finalização de Pedido**: A aplicação permite que os usuários finalizem seus pedidos, fornecendo informações de entrega e pagamento.
- **Integração com API**: A aplicação realiza chamadas a uma API para buscar informações dos restaurantes e processar os pedidos.

## Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface.
- **Redux Toolkit**: Gerenciamento de estado da aplicação.
- **Styled-Components**: Para estilização dos componentes.
- **Formik & Yup**: Para gerenciamento de formulários e validação.
- **React-Router-DOM**: Para navegação entre páginas.
- **TypeScript**: Para tipagem estática e melhor manutenção do código.
- **ESLint & Prettier**: Para garantir a qualidade do código.
- **Concurrently & Nodemon**: Para execução e monitoramento de tarefas em desenvolvimento.

## Como Executar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/glauccoslima/efood
   ```

2. **Navegue até o diretório do projeto:**

   ```
   cd efood
   ```

3. **Instale as dependências:**

   ```
   npm install
   ```

4. **Execute a aplicação:**

   ```
   npm run start
   ```

## Componentes Principais

### Cart

- Responsável por gerenciar o carrinho de compras.
- Permite ao usuário adicionar e remover itens, além de calcular o preço total.

### Checkout

- Gerencia o processo de finalização de pedido, incluindo a coleta de informações de entrega e pagamento.

### Footer

- Exibe o rodapé com informações adicionais e links para redes sociais.

### Header

- Navegação principal da aplicação, com link para a página inicial e o status do carrinho.

### Modal

- Exibe informações detalhadas de produtos ou confirmações.

## Estrutura do Projeto

- `src/components`: Contém os componentes reutilizáveis da aplicação.
- `src/pages`: Contém as páginas principais da aplicação.
- `src/store`: Gerenciamento de estado usando Redux Toolkit.
- `src/styles`: Contém os estilos globais e temas do projeto.
- `src/services`: Integração com APIs externas.
- `public`: Contém os arquivos públicos e estáticos da aplicação.

---

```plaintext
    |-- .editorconfig
    |-- .eslintrc.json
    |-- .gitignore
    |-- .prettierrc
    |-- README.md
    |-- package-lock.json
    |-- package.json
    |-- tsconfig.json
    |-- public
    |   |-- favicon.svg
    |   |-- index.html
    |   |-- manifest.json
    |   |-- robots.txt
    |-- src
        |-- App.tsx
        |-- index.tsx
        |-- react-app-env.d.ts
        |-- reportWebVitals.ts
        |-- routes.tsx
        |-- setupTests.ts
        |-- styles.ts
        |-- types.d.ts
        |-- assets
        |   |-- images
        |       |-- barca-sushi-1.jpg
        |       |-- close.png
        |       |-- facebook.svg
        |       |-- garbage-icon.png
        |       |-- header.svg
        |       |-- hero.svg
        |       |-- hioki-sushi-big.png
        |       |-- hioki-sushi.png
        |       |-- instagram.svg
        |       |-- ladolcevita-big.png
        |       |-- ladolcevita-trattoria.png
        |       |-- logo.svg
        |       |-- marguerita-modal.png
        |       |-- pizza-marguerita.png
        |       |-- star.svg
        |       |-- temaki.jpg
        |       |-- twitter.svg
        |-- components
        |   |-- Button
        |   |   |-- index.tsx
        |   |   |-- styles.ts
        |   |-- Cart
        |   |   |-- index.tsx
        |   |   |-- styles.ts
        |   |-- Checkout
        |   |   |-- index.tsx
        |   |   |-- styles.ts
        |   |-- Footer
        |   |   |-- index.tsx
        |   |   |-- styles.ts
        |   |-- Header
        |   |   |-- index.tsx
        |   |   |-- styles.ts
        |   |-- Hero
        |   |   |-- index.tsx
        |   |   |-- styles.ts
        |   |-- Loader
        |   |   |-- index.tsx
        |   |   |-- styles.ts
        |   |-- Modal
        |   |   |-- index.tsx
        |   |   |-- styles.ts
        |   |-- Presentation
        |   |   |-- index.tsx
        |   |   |-- styles.ts
        |   |-- Product
        |   |   |-- index.tsx
        |   |   |-- styles.ts
        |   |-- ProductsList
        |   |   |-- index.tsx
        |   |   |-- styles.ts
        |   |-- Restaurant
        |   |   |-- index.tsx
        |   |   |-- styles.ts
        |   |-- RestaurantsList
        |   |   |-- index.tsx
        |   |   |-- styles.ts
        |   |-- Tag
        |       |-- index.tsx
        |       |-- styles.ts
        |-- pages
        |   |-- Home
        |   |   |-- index.tsx
        |   |-- Perfil
        |       |-- index.tsx
        |-- services
        |   |-- api.ts
        |-- store
        |   |-- index.ts
        |   |-- reducers
        |       |-- cart.ts
        |       |-- checkout.ts
        |       |-- modal.ts
        |-- utils
            |-- index.ts

Este projeto foi desenvolvido para fornecer uma experiência de compra fácil e intuitiva, garantindo a melhor usabilidade e performance para os usuários.
```
