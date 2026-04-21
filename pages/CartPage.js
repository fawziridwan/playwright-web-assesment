const BasePage = require("./BasePage");

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.checkoutButton = '[data-test="checkout"]';
    this.continueShoppingButton = '[data-test="continue-shopping"]';
    this.cartItems = '[data-test="inventory-item"]';
    this.removeButtons = '[data-test^="remove-"]';
  }

  async checkout() {
    await this.click(this.checkoutButton);
  }

  async continueShopping() {
    await this.click(this.continueShoppingButton);
  }

  async removeItemByIndex(index) {
    const buttons = await this.page.locator(this.removeButtons);
    await buttons.nth(index).click();
  }
}

module.exports = CartPage;
