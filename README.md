# M1_Projeto_Avaliativo

# TrainsSys

#### Uma ferramenta de gerenciamento de alunos e treinos para preparadores físicos e instrutores de academia.

Com a crescente demanda por uma vida mais saudável, os profissionais dessa área veem-se cada vez mais ocupados. Com o intuito de facilitar a organização de suas aulas, criou-se o TrainSys, uma ferramenta de gerenciamento de alunos e treinos, de fácil acesso e usabilidade.

## Índice:

1. [Descrição do Projeto](#descrição)
2. [Como executar](#execução)
3. [Uso](#uso)
4. [Melhorias](#melhorias)

## Descrição do projeto

A aplicação foi feita com uso o framework Vue 3, utilizou as biblioteca vuetify para realização da interface e estilização dos componentes, e a biblioteca javascript axios, para simplificação da comunicação com a API.

## Execução

1.  Clonar repositório:
    > https://github.com/mcgmatheus/M1_Projeto_Avaliativo.git
2.  Clonar API:
    > https://github.com/DEVinZucchetti/api_academia.git
3.  Abrir a aplicação TrainSys em sua IDE e executar o comando:
    > npm install
4.  Abrir a aplicação da API em sua IDE e executar o comando:
    > npm install
5.  Na aplicação TrainSys, exercutar o seguinte comando para iniciar em um servidor local:
    > npm run dev
6.  Na aplicação da API, exercutar o seguinte comando para iniciar em um servidor local:
    > npm run server

## Uso

Para acessar o sistema, caso o usuário já possua cadastro, basta informar o login e senha. Caso contrário basta clicar no botão cadastre-se para ser redirecionado a tela de cadastro.
Nessa tela é necessário informar o nome completo (nome e sobrenome), e-mail válido, cadastrar uma senha com no mínimo 8 caracteres e selecionar um tipo de plano.
Após realizado o login, o usuário é encaminhado para a tela de dashboard, onde pode encontrar todas as funcionalidades do sistema.
Com o usuário logado o sistema permite:

- Cadastrar alunos:
  O sistema permite cadastrar alunos tanto clicando em Adicionar na tela de dashboard, quanto clicando em Aluno na barra de navegação.
  Para cadastro de novos alunos, o usuário deve informar, de forma obrigatória: Nome completo, contato e CEP. Ao informar o CEP, os campos correspondentes ao endereço do aluno são preenchidos automaticamente, sendo necessário apenas preencher o número da residência. Os campos de e-mail e data de nascimento não são obrigatórios, mas são validados caso preenchidos.

- Cadastro de exercícios:
  Nessa tela o usuário cadastra os exercícios que serão atribuídos aos treinos de seus alunos. Deve informar um nome de exercício no campo correspondente e clicar em cadastrar. Ao ser realizado com sucesso, esse exercício aparecerá listado abaixo e estará disponível para uso nos treinos.

- Visualização dos Alunos:
  Clicando no botão alunos, na barra de navegação, o usuário pode ver a lista de alunos cadastrados e utilizar o campo de busca para encontrar alunos. Nessa tela o usuário pode cadastrar um novo treino para o aluno especifico a partir do botão "Montar Treino". Na nova tela, o usuário deve selecionar um exercício previamente cadastrado, indicar a quantidade de repetições, carga a ser utilizada e pausa entre repetições (em segundos).
  Ainda na tela de Visualização de Alunos, ao clicar no botão ver treino, o sistema exibe no grupo "Treino de Hoje" os exercícios a serem realizados no dia pelo aluno, assim como as informações relacionadas. O sistema permite que o exercício seja marcado como concluído.
  Além disso, o sistema também exibe o treino por dia da semana, ou seja, é possível visualizar quais exercícios o aluno deve realizar em cada dia da semana assim como as informações do exercício (numero de repetições, carga e pausa).

## Melhorias

Sugestões de melhorias para o futuro do sistema:

- Identidade visual mais condizente ao ambiente de academias
- Exibir a lista de alunos cadastrados e exercícios cadastrados em ordem alfabética, para facilitar o uso caso o usuário não utilize a função de busca.
- Na tela de login, habilitar a opção para Mostrar senha, e exibir os caracteres digitados para conferencia do usuário.
