const BasePage = require("./BasePage");

class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    // locator
    this.usernameInput = '[data-test="username"]';
    this.passwordInput = '[data-test="password"]';
    this.loginButton = '[data-test="login-button"]';
    this.errorMessage = '[data-test="error"]';
  }

  async goto() {
    await this.navigate(`${process.env.BASE_URL}`);
  }

  async login(username, password) {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async getErrorMessage() {
    return await this.getText(this.errorMessage);
  }

  async isErrorVisible() {
    return await this.isVisible(this.errorMessage);
  }

  async clearLoginForm() {
    await this.fill(this.usernameInput, "");
    await this.fill(this.passwordInput, "");
  }
}

module.exports = LoginPage;
