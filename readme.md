# 🛒 Carrinho Shopee (Backend)

Projeto simples de backend simulando as funcionalidades de um carrinho de compras, inspirado na Shopee.

## 📌 Objetivo

Praticar conceitos de JavaScript com Node.js, utilizando:
- Módulos (ESModules)
- Funções assíncronas
- Manipulação de arrays
- Organização em camadas (services)

---

## ⚙️ Tecnologias utilizadas

- Node.js
- JavaScript (ESModules)

---

## 📁 Estrutura do projeto
src/
├── services/
│ ├── cart.js
│ └── item.js
└── index.js


---

## 🧠 Funcionalidades

### 📦 Criar item
Cria um produto com:
- Nome
- Preço
- Quantidade
- Subtotal automático

---

### ➕ Adicionar item ao carrinho
Adiciona um item ao carrinho.

---

### ➖ Remover unidade do item
- Se quantidade > 1 → diminui 1
- Se quantidade = 1 → remove o item

---

### ❌ Deletar item
Remove completamente um item pelo nome.

---

### 🧾 Exibir carrinho
Lista todos os itens com:
- Nome
- Preço
- Quantidade
- Subtotal

---

### 💰 Calcular total
Soma todos os subtotais dos itens do carrinho.

---

## ▶️ Como executar

1. Clone o repositório: