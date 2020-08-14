# Proffy
>  **Proffy é uma plataforma online para conetar alunos com professores para ter aulas online.**



![landing](https://user-images.githubusercontent.com/60434681/90255992-6c427780-de1b-11ea-9f7d-eb019fb62939.png)












## Tecnologias Utilizadas
>- [TypeScript](https://www.typescriptlang.org/] (https://www.typescriptlang.org/))  
>- [Visual Studio Code](https://code.visualstudio.com/](https://code.visualstudio.com/))
>- [NodeJS](https://nodejs.org/en/](https://nodejs.org/en/))
>- [ReactJS](https://pt-br.reactjs.org/](https://pt-br.reactjs.org/))
>- [React Native](https://reactnative.dev/](https://reactnative.dev/))



## Front-end com React js <img src="https://img.icons8.com/color/144/000000/react-native.png"/>


> **React** é uma biblioteca de construção de interface que visa a construção de SPA para melhorara a **experiencia do usuário final.**

##### Single Page Applications (SPA)
- são aplicações cuja funcionalidade está concentrada em uma única página. Ao invés de recarregar toda a página ou redirecionar o usuário para uma página nova, apenas o conteúdo principal é atualizado de forma assíncrona, mantendo toda a estrutura da página estática.

- [x] Explicando Conceitos
	- [x] JSX   
	> (HTML dentro do JavaScript)
	- [x] Componentes
		>- são formas de a gente isolar pequenos trechos de códigos a fim de torná-los repetitivos dentro da aplicação.
		
	- [x] Propriedades
		>-	São atributos repassados de um componente pai para o filho.
			
	- [x] Estado
		 >- Trata-se de uma informação a ser mantida pelo componente. Toda vez que o estado é alterado, o componente faz a renderização novamente exibindo as novas informações em tela.
			

### Criando Projeto <img src="https://img.icons8.com/emoji/48/000000/rocket-emji.png"/>
````

$ yarn create reacct-app (project-name) --template typescript

$ npx create-react-app (project-name) --template typescript

````


![gif-proffy](https://user-images.githubusercontent.com/60434681/90255952-6187e280-de1b-11ea-9713-bc9d725bbdd8.gif)


## Back-end com Nodejs <img src="https://img.icons8.com/color/144/000000/nodejs.png"/>

O back-end é responsável por cálculos, lógica de negócio, interações de database e performance. Ele conversa e dá suporte para os serviços de front-end.

- ### Particularidade da API REST
    Retorna apenas o dados da lista de Usuários do Back-end


### Criando Projeto <img src="https://img.icons8.com/fluent/48/000000/server.png"/>

```
# yarn init -y || npm init -y 

# instalar typescript: yarn add typescript -D

# Criar o arquivo de configuração do TS: yarn tsc --init || npx tsc --init
```

- [x] Configuração do ambiente 
```
# instalar a lib ts-node-dev: yarn add ts-node-dev -D

## No arquivo Package.json iremos criar um scripts chamado start adicionar os seguites comandos
 "scripts": {
  "start": "tsnd --transpile-only --ignore-watch node_modules --respawn src/server.ts", 
  }
```
- **flag transpile-only:**  não irá verificar se tem erros no código, isso vai acelerar o processo de execução da não aplicação.

- **ignore-watch node_modules:** para não tentar realizar conversões de código de TS/JS dentro da pasta node_modules.

- **respawn:** toda vez que tivemos uma alteração no código a aplicação restart automaticamente.

- [x] Explicando Conceitos
	- [x] Rotas e Recursos 
		> - **Rotas:** Endereço completo da requisição
		> - **Recursos:** Qual entidade estamos acessando no sistema
	- [x] Métodos HTTP
		> -  **GET:**  Buscar ou listar uma informação
		> - **POST:**  Criar alguma nova informação 
		> - **PUT:** Atualizar uma informação existente 
		>- **DELETE:** Deletar uma informação existente
		
	- [x] Parâmetros
		> - **Corpo (Request Body):** Dados para criação ou atualização de um registro. 
		>- **Route Params:** Identificar qual recurso eu quero atualizar ou deleta. 
		> - **Query Params:** Paginação, filtros, ordenação.

- [x] Identificando os casos de uso
	- [x] Aulas 
		 >- Rota para criar uma aula; 
		 >- Rota para listar aulas; 
		 >- Filtrar por matéria, dia da semana e horário; 
	- [x] Conexões 
		 >- Rota para listar o total de conexões realizadas; 
		 >- Rota para criar uma nova conexão;

 ###  Configurando Conexão com o banco de dados. <img src="https://img.icons8.com/fluent/48/000000/data-configuration.png"/>
	 
- [x] BANCO SQLITE3 
	 >- npm install sqlite3
- [x] Query Builder KNEXJS 
	>-  npm install knex --save
- [x] Knex Documentação
         [Documentação Knex.js](http://knexjs.org) 



 
  #### Criar as Migrations: 
  > No arquivo **package.json** nos scripts adicione esse comando
  
 >- "knex:migrate": "knex --knexfile knexfile.ts migrate:latest", 
	 
>-	 Obs: Caso seu banco de dados  apresente algum erro é recomendado deleta o banco corrija o erro e execute o comando knex:migrate novamente. 



# Mobile com React Native <img src="https://img.icons8.com/nolan/128/react-native.png"/>

## Expo <img src="https://img.icons8.com/dusk/64/000000/developer-mode.png"/>

[Introduction to Expo](https://docs.expo.io/)

-   Com as ferramentas, serviços e React da Expo, você pode criar, implantar e iterar rapidamente em aplicativos nativos do Android, iOS e da web a partir da mesma base de código JavaScript.

- [x] Instalar Expo

>  Instalar o expo de formar global na sua maquina.
>-  **npm install expo-cli**

- [x]  Criar projeto com Expo
    
 >-  **expo init  (project name)**
 > 
 > *Execute projeto*
 >- ``yarn start`` ou ``expo start``  
    
-  [x] Diferenças de React Native para ReactJS
	- [x] Elementos
	
	
	![rn1](https://user-images.githubusercontent.com/60434681/90257568-b9bfe400-de1d-11ea-9c9d-3fec321f837a.png)
	


- [x] Estilização



![rn2](https://user-images.githubusercontent.com/60434681/90257574-bb89a780-de1d-11ea-906a-83a62ab59b5e.png)



