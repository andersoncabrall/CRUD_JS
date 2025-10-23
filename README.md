# CRUD Básico com Express.js

Um CRUD (Create, Read, Update, Delete) simples para gerenciamento de usuários, desenvolvido com Express.js e UUID para geração de IDs únicos.

## 🚀 Tecnologias Utilizadas

- **Express.js** - Framework web para Node.js
- **UUID** - Geração de IDs únicos universais
- **Node.js** - Ambiente de execução JavaScript

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/crud-express.git
cd crud-express
```

2. Instale as dependências:
```bash
npm install express uuid
```

3. Instale o nodemon para desenvolvimento (opcional):
```bash
npm install --save-dev nodemon
```

## 🛠️ Configuração do Package.json

Adicione estes scripts ao seu `package.json`:

```json
{
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js"
  }
}
```

## 🎯 Como Executar

### Modo Desenvolvimento (com nodemon):
```bash
npm run dev
```

### Modo Produção:
```bash
npm start
```

O servidor irá rodar em: `http://localhost:3003`

## 📡 Endpoints da API

### 📍 Base URL
```
http://localhost:3003
```

### 🔹 GET /
**Descrição:** Lista todos os usuários
**Método:** GET
**Resposta:**
```json
[
  {
    "id": "uuid-unico",
    "nome": "João Silva",
    "idade": 30
  }
]
```

### 🔹 POST /
**Descrição:** Cria um novo usuário
**Método:** POST
**Body:**
```json
{
  "nome": "Maria Santos",
  "idade": 25
}
```
**Resposta:** Status 201 com o usuário criado

### 🔹 PUT /:id
**Descrição:** Atualiza um usuário existente
**Método:** PUT
**Parâmetros:** `id` (UUID do usuário)
**Body:**
```json
{
  "nome": "Maria Oliveira",
  "idade": 26
}
```
**Resposta:** Usuário atualizado

### 🔹 DELETE /:id
**Descrição:** Remove um usuário
**Método:** DELETE
**Parâmetros:** `id` (UUID do usuário)
**Resposta:** Status 204 (No Content)

## 💡 Características do Projeto

- **IDs Únicos**: Utiliza UUID v4 para gerar identificadores únicos
- **JSON Nativo**: Configurado para trabalhar com JSON automaticamente
- **Armazenamento em Memória**: Dados armazenados em array (reinicia com o servidor)
- **Tratamento de Erros**: Retorna status HTTP apropriados para cada situação

## 🗂️ Estrutura de Dados

```javascript
{
  "id": "c7b3d8a0-5e0b-4a4c-9e2d-3f1a8b6c5d7e",
  "nome": "Nome do Usuário",
  "idade": 25
}
```

## 🔍 Códigos de Status HTTP Utilizados

- `200` - OK (Sucesso na requisição)
- `201` - Created (Recurso criado com sucesso)
- `204` - No Content (Sucesso sem retorno de conteúdo)
- `404` - Not Found (Usuário não encontrado)

## 📝 Exemplos de Uso

### Criar usuário:
```bash
curl -X POST http://localhost:3003/ \
  -H "Content-Type: application/json" \
  -d '{"nome":"Carlos","idade":28}'
```

### Listar usuários:
```bash
curl http://localhost:3003/
```

### Atualizar usuário:
```bash
curl -X PUT http://localhost:3003/uuid-do-usuario \
  -H "Content-Type: application/json" \
  -d '{"nome":"Carlos Silva","idade":29}'
```

### Deletar usuário:
```bash
curl -X DELETE http://localhost:3003/uuid-do-usuario
```

## ⚠️ Observações

- Os dados são armazenados em memória e serão perdidos ao reiniciar o servidor
- Para ambiente de produção, recomenda-se implementar persistência em banco de dados
- O UUID é gerado automaticamente para cada novo usuário

## 🚧 Próximos Passos

- [ ] Adicionar validação de dados
- [ ] Implementar banco de dados
- [ ] Adicionar autenticação
- [ ] Criar testes automatizados
- [ ] Adicionar documentação com Swagger

---

Desenvolvido para fins educacionais 💚