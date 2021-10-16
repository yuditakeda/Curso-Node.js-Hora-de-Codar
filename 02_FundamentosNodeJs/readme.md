# Fundamentos de Node.js

## O que são módulos

- Módulos são **scripts reaproveitáveis**, que utilizamos bastante programando em Node;
- Eles são divididos em três categorias:
- **Internos**: módulos que nós desenvolvemos;
- **Core Modules**: módulos que vem com o Node.js;
- **Externos**: módulos que instalamos via npm;

### Módulos internos

- Os **módulos internos** são criados nas pastas do nosso projeto;
- Precisamos **exportar** o módulo;
- Podemos utilizar a instrulção o **module.exports**
- E **importar** onde precisamos utilizar;
- Para importar vamos utilizar a instrução **require**;
- Vamos criar o módulo!

### Export e Import

- Com o Node.js também é possível utilizar o **export e import do ES6**;
- São funcionalidades mais modernas de **importação e exportação**;
- Com **mais recursos** do que as que vimos anteriormente;
- Para isso precisamos modificar os nossos arquivos para a extensão **.mjs**;
- E então podemos exportar uma com **export default**;
- E importar com **import**, uma única função, caso seja necessário;

### Core Modules

- No Node temos diversos **Core Modules**, que são os que vêm prontos para serem utilizados;
- Eles resolvem diversos problemas, como: **trabalhar com arquivos e diretórios, servir aplicações** e etc.
- **Precisamos importar** estes módulos no projeto para poder utilizar;
- Vamos utilizar um Core Module!

### Ler argumentos

- O Node permite o **envio de argumentos via linha de comando**;
- Passamos eles após a instrução de execução do arquivo;
- Os argumentos ficam em um array chamado: **process.argv**;
- Onde podemos **fazer um loop e resgatar os valores** enviados;
- Vamos ver na prática!

### Módulos Externos

- Os módulos externos podem ser instalados via **npm**;
- Para isso precisamos inicializar o npm no projeto, com: **npm init**;
- A partir daí os módulos ficam mapeados e podemos instalar módulos;
- Que são salvos na pasta **node_modules**;
- Podemos instalar módulos com **npm install `<nome>`**;

### Algo prático com argumentos

- Podemos **utilizar os argumentos recebidos** para aplicar no nosso programa alguma lógica;
- Basta **encapsular em variáveis** e depois utilizá-los;
- Ou seja, podemos a partir do terminal, **executar também uma função de um módulo interno nosso**, por exemplo;
- Vamos ver na prática!

### Explorando o console

- Temos uma grande variedade de métodos no **console**, como o
console.log;
- Podemos **imprimir mais de uma variável** por vez;
- Inserir **variáveis entre strings**;
- Há um método para limpar as mensagens de console;
- Vamos ver na prática!