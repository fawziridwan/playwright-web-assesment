const BasePage = require("./BasePage");

class CheckoutCompletePage extends BasePage {
  constructor(page) {
    super(page);
    this.completeHeader = '[data-test="complete-header"]';
    this.backHomeButton = '[data-test="back-to-products"]';
  }

  async getHeaderText() {
    return await this.getText(this.completeHeader);
  }

  async backHome() {
    await this.click(this.backHomeButton);
  }
}

module.exports = CheckoutCompletePage;
