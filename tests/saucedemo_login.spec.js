const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");
const InventoryPage = require("../pages/InventoryPage");

test.describe("Test Suites - Sauce Demo Login", () => {
  let loginPage;
  let inventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
  });

  test("Test Login Positive Flow", async ({ page }) => {
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
    expect(await inventoryPage.getProductTitle()).toBe("Products");
    expect(await inventoryPage.getPageTitle()).toBe("Products");
  });

  test("Test Login Negative Flow - Incorrect Username or Password", async ({
    page,
  }) => {
    await loginPage.goto();
    await loginPage.login("fawzi_tester", "invalidpassword");
    expect(await loginPage.getErrorMessage()).toBe(
      "Epic sadface: Username and password do not match any user in this service",
    );
  });

  test("Test Login Negative Flow – Mandatory Field Username", async ({
    page,
  }) => {
    await loginPage.goto();
    await loginPage.login("", "invalidpassword");
    expect(await loginPage.getErrorMessage()).toBe(
      "Epic sadface: Username is required",
    );
  });

  test("Test Login Negative Flow – Mandatory Field Password", async ({
    page,
  }) => {
    await loginPage.goto();
    await loginPage.login("invalidusername", "");
    expect(await loginPage.getErrorMessage()).toBe(
      "Epic sadface: Password is required",
    );
  });
});
