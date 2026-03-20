# Projeto API

## Descrição

Esta é uma API REST desenvolvida em Node.js utilizando Express, que permite o gerenciamento de produtos.
Com ela é possível criar, listar, buscar, atualizar e deletar produtos.

---

## Tecnologias utilizadas

* Node.js
* Express
* Postman (para testes)

---

## Base URL

http://localhost:80

---

## Endpoints

---

### GET /

Retorna o status da API.

#### Resposta:

```json
{
  "mensagem": "🎉 Minha primeira API funcionando!",
  "status": "sucesso",
  "timestamp": "2026-03-20T00:00:00.000Z"
}
```

---

### GET /info

Retorna informações da API.

#### Resposta:

```json
{
  "nome": "Minha API REST",
  "versao": "1.0.0",
  "autor": "Gabriel Patriota"
}
```

---

### GET /produtos

Lista todos os produtos cadastrados.

#### Resposta:

```json
[
  {
    "id": 1,
    "nome": "Notebook",
    "preco": 3500
  }
]
```

---

### GET /produtos/:id

Busca um produto pelo ID.

#### Exemplo:

GET /produtos/1

#### Resposta (sucesso):

```json
{
  "id": 1,
  "nome": "Notebook",
  "preco": 3500
}
```

#### Resposta (erro):

```json
{
  "erro": "Produto não encontrado"
}
```

---

### POST /produtos

Cria um novo produto.

#### Body:

```json
{
  "nome": "Notebook",
  "preco": 3500
}
```

#### Resposta (sucesso):

```json
{
  "id": 1,
  "nome": "Notebook",
  "preco": 3500
}
```

#### Resposta (erro):

```json
{
  "erro": "Preço deve ser um número maior que 0"
}
```

---

### PUT /produtos/:id

Atualiza um produto existente.

#### Body:

```json
{
  "nome": "Notebook Atualizado",
  "preco": 4000
}
```

#### Resposta:

```json
{
  "id": 1,
  "nome": "Notebook Atualizado",
  "preco": 4000
}
```

---

### DELETE /produtos/:id

Remove um produto pelo ID.

#### Exemplo:

DELETE /produtos/1

#### Resposta:

```json
{
  "mensagem": "Produto removido com sucesso"
}
```

---

## Validações implementadas

* Nome é obrigatório
* Nome deve ser uma string válida (não pode ser vazio)
* Preço é obrigatório
* Preço deve ser um número
* Preço deve ser maior que 0

---

## Testes realizados

Os testes foram feitos utilizando o Postman, incluindo:

* Criação de produtos (POST)
* Atualização de produtos (PUT)
* Listagem de produtos (GET)
* Busca por ID (GET)
* Remoção de produtos (DELETE)
* Testes de validação (erros 400)

---

## Evidências dos testes

Foram realizados prints demonstrando:

* POST funcionando
* GET listando produtos
* Erros de validação
* DELETE funcionando

---

## Collection do Postman

A collection contendo todos os endpoints testados está incluída no repositório.

---

## Autor

Gabriel Patriota
