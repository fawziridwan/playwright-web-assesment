const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");
const InventoryPage = require("../pages/InventoryPage");
const CartPage = require("../pages/CartPage");
const CheckoutInformationPage = require("../pages/CheckoutInformationPage");
const CheckoutOverviewPage = require("../pages/CheckoutOverviewPage");
const CheckoutCompletePage = require("../pages/CheckoutCompletePage");

test.describe("Sauce Demo Page Object Model Tests", () => {
  let loginPage;
  let inventoryPage;
  let cartPage;
  let checkoutInfoPage;
  let checkoutOverviewPage;
  let checkoutCompletePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutInfoPage = new CheckoutInformationPage(page);
    checkoutOverviewPage = new CheckoutOverviewPage(page);
    checkoutCompletePage = new CheckoutCompletePage(page);

    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
  });

  test("should complete a purchase successfully", async ({ page }) => {
    // Inventory
    expect(await inventoryPage.getPageTitle()).toBe("Products");
    await inventoryPage.addItemToCartByIndex(0);
    expect(await inventoryPage.getCartBadgeCount()).toBe("1");
    await inventoryPage.goToCart();

    // Cart
    await cartPage.checkout();

    // Checkout Information
    await checkoutInfoPage.fillInformation("John", "Doe", "12345");

    // Checkout Overview
    await checkoutOverviewPage.finish();

    // Checkout Complete
    const headerText = await checkoutCompletePage.getHeaderText();
    expect(headerText).toBe("Thank you for your order!");
  });

  test("should verify cart badge updates", async ({ page }) => {
    await inventoryPage.addItemToCartByIndex(0);
    expect(await inventoryPage.getCartBadgeCount()).toBe("1");
    await inventoryPage.addItemToCartByIndex(1);
    expect(await inventoryPage.getCartBadgeCount()).toBe("2");
  });
});
