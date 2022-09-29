export default class Order {
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
    let taxes = 0;
    this.items.forEach((item) => {
      taxes += item.calculateTax(item.getTax());
    });
    return taxes;
  }
}
