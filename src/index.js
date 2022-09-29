class Item {
  constructor(category, description, price) {
    this.category = category;
    this.description = description;
    this.price = price;
    console.log(this.category);
  }

  calculateTax() {
    if (this.category === "Beer") return 0.2;
    if (this.category === "Cigar") return 0.25;
    if (this.category === "Eletronics") return 0.3;
    if (this.category === "Water") return 0;
  }
}

class Order {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getTotal() {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price;
    });
    return total;
  }

  getTaxes() {
    let tax = 0;
    this.items.forEach((item) => {
      tax += item.price * item.calculateTax();
    });
    return tax;
  }
}

const order = new Order();
order.addItem(new Item("Beer", "Brahma", 6));
order.addItem(new Item("Cigar", "Malboro", 10));
order.addItem(new Item("Eletronics", "IPhone 13", 13000));
order.addItem(new Item("Water", "Crystal", 1));
const taxes = order.getTaxes();
console.log(order);
console.log(taxes);
