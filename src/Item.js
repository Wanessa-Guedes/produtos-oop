export default class Item {
  constructor(category, description, price) {
    this.category = category;
    this.description = description;
    this.price = price;
  }

  calculateTax() {
    if (this.category === "Beer") return 0.2;
    if (this.category === "Cigar") return 0.25;
    if (this.category === "Eletronics") return 0.3;
    if (this.category === "Water") return 0;
  }
}
