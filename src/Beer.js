import TaxItem from "./TaxItem.js";

export default class Beer extends TaxItem {
  constructor(category, description, price) {
    super(category, description, price);
    this.tax = 0.2;
  }

  getTax() {
    return this.tax;
  }
}
