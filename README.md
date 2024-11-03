

**Random-Poke: Consumindo API no Ionic**

### Projeto desenvolvido em Ionic para consumir a PokeAPI e exibir informações aleatórias de Pokémon.

## Visão Geral

Este projeto é um aplicativo de exemplo criado com **Ionic** e **Angular**, que consome a [PokeAPI](https://pokeapi.co/), permitindo que o usuário visualize informações de um Pokémon aleatório ao clicar em um botão. Ele serve como um exemplo prático de como consumir APIs em aplicativos Ionic, gerenciar dados e exibir informações dinâmicas.

## Funcionalidades

- **Pokémon Aleatório**: O usuário pode clicar em um botão para gerar e exibir as informações de um Pokémon aleatório.
- **Integração com a PokeAPI**: O aplicativo consome dados da PokeAPI, como nome, tipo, habilidades e movimentos de Pokémon.
- **Interface Dinâmica**: A interface muda dinamicamente, exibindo as informações do Pokémon gerado.
- **Exibição de Movimentos**: São exibidos os primeiros quatro movimentos do Pokémon gerado.

## Tecnologias Utilizadas

- **Ionic Framework**: Utilizado para a criação da interface e navegação.
- **Angular**: Framework usado para a construção da aplicação web.
- **PokeAPI**: API pública utilizada para acessar dados sobre os Pokémon.
- **HttpClientModule**: Para realizar requisições HTTP à API.
- **TypeScript**: Linguagem principal usada no desenvolvimento do projeto.

## Estrutura do Projeto

- **src/app/**: Contém os componentes e serviços da aplicação.
  - **random-poke.page.ts**: Página principal onde o Pokémon aleatório é exibido.
  - **pokeapi.service.ts**: Serviço responsável por consumir a API e retornar os dados do Pokémon.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado:

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn** (para gerenciamento de pacotes)
- **Ionic CLI** (caso ainda não tenha, instale globalmente com `npm install -g @ionic/cli`)

## Instalação e Configuração

Siga os passos abaixo para executar o projeto em sua máquina local:

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/seu-usuario/random-poke.git
   cd random-poke
   ```

2. **Instale as Dependências:**

   Usando **npm**:

   ```bash
   npm install
   ```

   Ou, usando **yarn**:

   ```bash
   yarn install
   ```

3. **Executar o Projeto em Ambiente de Desenvolvimento:**

   ```bash
   ionic serve
   ```

   O comando irá abrir o projeto no navegador, permitindo que você visualize o aplicativo no seu ambiente de desenvolvimento.


## Uso do Projeto

Após iniciar a aplicação, o usuário verá uma página com um botão que permite gerar um Pokémon aleatório. As informações do Pokémon serão exibidas dinamicamente, incluindo seu nome, tipo, habilidades e movimentos.

### Gerando um Pokémon Aleatório

1. **Clique no botão "Gerar Pokémon"**.
2. O sistema usará uma lógica que escolhe um Pokémon aleatório entre os 1025 disponíveis.
3. As informações do Pokémon selecionado serão exibidas na tela, como nome, tipos e movimentos.

## Exemplo de Uso

Aqui está uma captura de tela mostrando como a interface se parece ao gerar um Pokémon aleatório:

![Exemplo de interface](https://prnt.sc/fW9PfpYGgB8q)  
*Captura de tela: Exibindo um Pokémon aleatório e seus dados.*


## Contato

Desenvolvido por Thiago Santos(https://github.com/ThsSantos).  
Entre em contato: https://www.linkedin.com/in/thiago-santos-54a759212/
