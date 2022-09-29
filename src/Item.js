export default class Item {
  constructor(category, description, price) {
    this.category = category;
    this.description = description;
    this.price = price;
  }

  getTax() {
    return 0;
  }

  calculateTax(tax) {
    return 0;
  }
}
