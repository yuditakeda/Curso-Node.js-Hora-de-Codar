# O que é MVC?

- Um acrônimo de **Model View Controller**;
- É um padrão de **arquitetura de Software**, que pode deixar nossa aplicações mais organizadas;
- A aplicação é dividida em camadas, cada sua **responsabilidade**;
- Teremos uma **nova estrutura de arquivos e pastas**;
- E a aplicação obedece um novo fluxo, que se repete para todas as ações;
- Aplicações em MVC tendem a ter uma manutenção/evolução mais fácil;

## Camada do Modelo (Model)
- É uma camada onde vamos **interagir com o banco de dados**;
- Normalmente interage com os **arquivos do Controller**;
- Responsável por **resgatar, atualizar, remover e criar** dados;
- É comum que **cada tabela seja um Model**, assim como fazemos com o setup do Sequelize;
- Os Models são quem **controlam a arquetetura do sistema**, é fácil entender a regra de negócios analisando eles;

## Camada de visualização (View)
- É onde **apresentamos os dados** que estão no banco;
- Geralmente a view **interage com o Controller**, que é o meio de campo;
- E também nas views temos a **interação com o usuário**, como formulários para inserir dados no sistema;
- É correto não haver **lógica/regra de negócios** na view, ou o mínimo possível;
- Normalmente a exibição é feita **através do HTML**;

## Camada de controle (Controller)
- É onde temos a **interação entre Model e View**;
- Podemos definir qual view será impressa, processar  dados que foram enviados para o banco ou para a view;
- Os Controllers terão um **código parecido com os das rotas**, que estamos criando até então no curso;

# Nossa estrutura com MVC
- Nossa estrutura será composta por:
- **controller**: pasta que ficam os arquivos de Controller;
- **nodels**: pasta que ficam os arquivos de Model;
- **views**: pasta que ficam os arquivos de View;
- **routes**: pasta que ficam os arquivos de rotas;
- **index.js**: arquivo de inicializa a aplicação;
- Vamos criar nosso app!