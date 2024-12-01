# Implementação Prática do Scrum na Criação de um Formulário de Cadastro de Cliente

Este projeto tem como objetivo a aplicação prática da metodologia ágil **Scrum** no desenvolvimento colaborativo de um **Formulário de Cadastro de Cliente**. A atividade promove a prática de conceitos como **interatividade com APIs**, **validações de dados** e **integração frontend-backend**, preparando os alunos para cenários reais de desenvolvimento de software.

---

## Funcionalidades do Formulário

- **Campos do Formulário**: 
  - Nome, Email, Endereço, Logradouro, Número, Bairro, Cidade, Estado, CEP, Celular, Sexo, CPF e Profissão.
  
- **Interatividade com a API ViaCEP**: 
  - Ao inserir o CEP, o sistema consulta a API ViaCEP para preencher automaticamente os campos:
    - Logradouro
    - Bairro
    - Cidade
    - Estado

- **Validações de Campo (JavaScript)**:
  - **CPF**: Verificação do dígito verificador para garantir um CPF válido.
  - **Email**: Checagem do formato para garantir a validade do endereço de email.
  - **Celular**: Garantir que o número inserido contém 11 dígitos.

---

## Estrutura do Projeto

1. **Grupo 1 (HTML)**: Estrutura do formulário com os campos e rótulos necessários.
2. **Grupo 2 (CSS)**: Estilização do formulário, garantindo uma interface responsiva e amigável.
3. **Grupo 3 (JavaScript)**: 
   - Implementação das validações dos campos.
   - Consumo da API ViaCEP para preenchimento automático do endereço.
4. **Grupo 4 (Backend)**:
   - Recebimento dos dados via POST.
   - Armazenamento das informações no banco de dados.

---

## Parte de JavaScript (Nós)
Minha contribuição foi na parte de **JavaScript**, com foco nas seguintes funcionalidades:

- Implementação de validações para CPF, email e celular.
- Interatividade com a API ViaCEP para preenchimento automático dos campos de endereço.
- Garantia de usabilidade e resposta ao usuário por meio de alertas e mensagens de erro.

---

## Ciclo de Trabalho no Scrum

- **Sprint 1**: Estrutura básica do formulário (HTML).
- **Sprint 2**: Estilização e responsividade (CSS).
- **Sprint 3**: Validações e interatividade (JavaScript).
- **Sprint 4**: Integração com backend e testes finais.

---

### Critérios de Avaliação

1. Participação e colaboração nas reuniões Scrum.
2. Qualidade do código (legibilidade, funcionalidade e boas práticas).
3. Validação correta dos campos do formulário.
4. Implementação e uso da API ViaCEP.

