# Fundamentos ReactJS

Este é um projeto que tem como objetivo explorar os conceitos fundamentais do ReactJS, um framework JavaScript utilizado para construir interfaces de usuário interativas e escaláveis. O projeto consiste em um sistema onde o usuário pode inserir e remover novos posts, além de poder curtir os comentários existentes.

## Conceitos abordados

- Componentes (components): O ReactJS é baseado em componentes, que são blocos de construção reutilizáveis para a construção de interfaces de usuário. O projeto utiliza vários componentes para modularizar e organizar o código, tornando-o mais fácil de manter e expandir. Alguns dos componentes utilizados incluem:
  - **Avatar**: Este componente é usado para exibir a imagem do perfil do usuário.
  - **Comment**: Este componente é usado para exibir um comentário individual e permite que o usuário curta o comentário.
  - **Header**: Este componente é usado para exibir o cabeçalho da página, incluindo a logomarca.
  - **Post**: Este componente é usado para exibir um post individual, incluindo o título, cargo, data de postagem, conteúdo e comentários vinculados ao post.
  - **Sidebar**: Este componente é usado para exibir uma barra lateral com o avatar do usuário logado e seu cargo.
- Estado (state): O estado é uma das principais características do ReactJS e é usado para armazenar e gerenciar informações dinâmicas dentro dos componentes. Quando o estado de um componente é atualizado, o React automaticamente atualiza a interface do usuário para refletir as alterações.
- Propriedades (props): As propriedades são usadas para passar informações entre componentes. Elas permitem que um componente "pai" passe dados para um componente "filho". Isso torna o código mais modular e reutilizável.
- Eventos (events): Os eventos são usados para lidar com interações do usuário, como cliques e entradas de formulário. No ReactJS, os eventos são tratados de forma muito semelhante aos eventos do DOM, mas com algumas diferenças importantes..
- Renderização condicional: A renderização condicional é usada para exibir diferentes conteúdos com base em condições específicas. Por exemplo, é possível exibir um componente diferente com base em se o usuário está logado ou não.
- Estilização: O projeto utiliza CSS para estilizar os componentes e criar uma interface agradável. Existem várias maneiras de estilizar componentes no ReactJS, incluindo a utilização de arquivos CSS separados ou inline styles.
- Imutabilidade: O conceito de imutabilidade é importante no ReactJS para garantir que o estado seja atualizado de forma previsível e controlada. Em vez de modificar o estado diretamente, deve-se criar uma cópia do estado atual, fazer as alterações necessárias e, em seguida, atualizar o estado com a nova cópia.

## Tecnologias e Bibliotecas

- HTML
HTML é a sigla para **HyperText Markup Language**, que significa Linguagem de Marcação de Hipertexto. É uma linguagem de marcação utilizada para estruturar conteúdo na web. Com ela, é possível criar documentos que podem ser lidos por navegadores web.

- CSS
CSS é a sigla para **Cascading Style Sheets**, que significa Folhas de Estilo em Cascata. É uma linguagem de estilo utilizada para descrever a aparência e formatação de um documento escrito em HTML.

- JavaScript
JavaScript é uma linguagem de programação interpretada que permite adicionar interatividade a páginas da web. Com ela, é possível criar animações, validar formulários, manipular o DOM e muito mais.

- TypeScript
TypeScript é uma linguagem de programação que é um superconjunto do JavaScript. Ela adiciona recursos como tipagem estática e interfaces ao JavaScript, o que ajuda a tornar o código mais legível e fácil de manter. A tipagem estática permite que erros de tipo sejam detectados em tempo de codificação, em vez de apenas em tempo de execução, ajudando a prevenir erros e tornando o processo de desenvolvimento mais eficiente. Além disso, o uso de TypeScript pode melhorar a experiência de desenvolvimento ao fornecer recursos avançados de autocompletar e refatoração em IDEs compatíveis.

- React
React é uma biblioteca JavaScript para criar interfaces de usuário. Ela permite criar componentes reutilizáveis e gerenciar o estado da aplicação de forma eficiente.

- date-fns
date-fns é uma biblioteca JavaScript para manipulação de datas. Ela oferece diversas funções úteis para trabalhar com datas em diferentes formatos.

- phosphor-react
phosphor-react é uma biblioteca de ícones para React. Ela oferece uma ampla variedade de ícones em diferentes estilos que podem ser facilmente integrados em projetos React.


## Como usar

1. Clone este repositório para o seu computador utilizando o comando git clone `https://github.com/seu-usuario/nome-do-repositorio.git`.
2. Instale as dependências do projeto utilizando o comando `npm install` no seu terminal.
3. Inicie o servidor de desenvolvimento com o comando `npm run dev`
4. Abra o navegador e acesse `http://localhost:3001` para ver o projeto em ação.

## Licença

Este projeto está licenciado sob a licença MIT.