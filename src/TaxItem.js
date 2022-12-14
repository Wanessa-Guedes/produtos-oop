import Item from "./Item.js";

export default class TaxItem extends Item {
  constructor(category, description, price) {
    super(category, description, price);
  }

  calculateTax(tax) {
    return this.price * tax;
  }
}
