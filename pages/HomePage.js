const BasePage = require("./BasePage");

class HomePage extends BasePage {
    constructor(page) {
        super(page);

        // Locators
        this.welcomeMessage = '.welcome-message';
        this.userAvatar = '.user-avatar';
        this.logoutButton = 'button:has-text("Logout")';
        this.navigationMenu = '.nav-menu';
        this.searchInput = 'input[placeholder="Search"]';
        this.searchButton = 'button[aria-label="Search"]';
    }

    async getWelcomeMessage() {
        return await this.getText(this.welcomeMessage);
    }

    async isUserLoggedIn() {
        return await this.isVisible(this.userAvatar);
    }
}