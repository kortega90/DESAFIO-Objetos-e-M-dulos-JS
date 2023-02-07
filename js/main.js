import Order from './models/order.js';
import * as orderService from './services/orderService.js';

const data = document.getElementById("OrderInput").innerHTML.split('\n');

const order = new Order(data[0], Number(data[1]),Number(data[2]));

const netOrder = orderService.total(order);
console.log (`Pedido código ${order.code}`);
console.log (`Valor total: ${netOrder.toFixed(2)}`);