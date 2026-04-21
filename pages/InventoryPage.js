const BasePage = require("./BasePage");

class InventoryPage extends BasePage {
  constructor(page) {
    super(page);
    this.title = '[data-test="title"]';
    this.inventoryItems = '[data-test="inventory-item"]';
    this.addToCartButtons = '[data-test^="add-to-cart-"]';
    this.cartIcon = '[data-test="shopping-cart-link"]';
    this.cartBadge = '[data-test="shopping-cart-badge"]';
    this.productTitle = "//span[@data-test='title']";
  }

  async getProductTitle() {
    return await this.getText(this.productTitle);
  }

  async getPageTitle() {
    return await this.getText(this.title);
  }

  async addItemToCartByIndex(index) {
    const buttons = await this.page.locator(this.addToCartButtons);
    await buttons.nth(index).click();
  }

  async addItemToCartByName(name) {
    const selector = `[data-test="add-to-cart-${name.toLowerCase().replace(/ /g, "-")}"]`;
    await this.click(selector);
  }

  async goToCart() {
    await this.click(this.cartIcon);
  }

  async getCartBadgeCount() {
    if (await this.isVisible(this.cartBadge)) {
      return await this.getText(this.cartBadge);
    }
    return "0";
  }
}

module.exports = InventoryPage;
