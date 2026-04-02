//ações que o carrinho pode fazer

// Adicionar item
async function addItem(userCart, item) {
  userCart.push(item);
}

// Deletar item
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index != -1) {
    userCart.splice(index, 1);
  }
}

// Remover um do item
async function removeItem(userCart, item) {
  //encontrar indice do item
  const indexFound = userCart.findIndex(
    (p) => p.name === item.name);

  //2. caso nao encontre o item
  if (indexFound == -1) {
    console.log("Item não encontrado!");
    return;
  }

  //3. item > 1 subtrair um item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  //4. item = 1 deletar o item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }

  console.log("item encontrado no index:");
  console.log(indexFound);
}

// Calcular Total
async function calculateTotal(userCart) {
  console.log("\nShopee Cart Total is:");
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`Total:${result}`);
}

// Mostrar  o que tem no carrinho
async function displayCart(userCart) {
  console.log("\n 🛒 Shopee Cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}.${item.name} - R$${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`,
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
