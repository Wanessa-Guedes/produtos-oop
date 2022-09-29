import Order from "../src/Order.js";
import Beer from "../src/Beer.js";
import Cigar from "../src/Cigar.js";
import Eletronics from "../src/Eletronics.js";
import Water from "../src/Water.js";

test("Deve criar um pedido e calcular o total", () => {
  const order = new Order();
  order.addItem(new Beer("Beer", "Brahma", 6));
  order.addItem(new Cigar("Cigar", "Malboro", 10));
  order.addItem(new Eletronics("Eletronics", "IPhone 13", 13000));
  order.addItem(new Water("Water", "Crystal", 1));
  const total = order.getTotal();
  expect(total).toBe(13017);
});

test("Deve criar um pedido e calcular os impostos", () => {
  const order = new Order();
  order.addItem(new Beer("Beer", "Brahma", 6));
  order.addItem(new Cigar("Cigar", "Malboro", 10));
  order.addItem(new Eletronics("Eletronics", "IPhone 13", 13000));
  order.addItem(new Water("Water", "Crystal", 1));
  const taxes = order.getTaxes();
  expect(taxes).toBe(3903.7);
});
