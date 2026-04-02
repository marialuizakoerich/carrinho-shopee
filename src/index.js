import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";
const Mycart = [];
const MyWishList = [];

console.log("Welcome to the youy Shopee Cart!");

//criando 2 itens
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);
const item3 = await createItem("hotwheels xxx", 39.99, 3);

await cartService.addItem(Mycart, item1);
await cartService.addItem(Mycart, item2);
await cartService.addItem(Mycart, item3);



await cartService.removeItem(Mycart, item2);
await cartService.removeItem(Mycart, item2);


await cartService.displayCart(Mycart);

//await cartService.deleteItem(Mycart, item2.name);
//await cartService.deleteItem(Mycart, item1.name);

await cartService.calculateTotal(Mycart);
