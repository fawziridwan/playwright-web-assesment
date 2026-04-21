const BasePage = require("./BasePage");

class CheckoutOverviewPage extends BasePage {
  constructor(page) {
    super(page);
    this.finishButton = '[data-test="finish"]';
    this.cancelButton = '[data-test="cancel"]';
    this.summaryInfo = '.summary_info';
  }

  async finish() {
    await this.click(this.finishButton);
  }
}

module.exports = CheckoutOverviewPage;
