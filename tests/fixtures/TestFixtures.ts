import { test as baseTest } from '@playwright/test';
import { HomePage } from "../pages/HomePage";
import { ShopPage } from "../pages/ShopPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";

type Pages = {
    homePage: HomePage;
    shopPage: ShopPage;
    productPage: ProductPage;
    cartPage: CartPage;
}

export const test = baseTest.extend<Pages>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    shopPage: async ({ page }, use) => {
        await use(new ShopPage(page));
    },
    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
});

test.afterEach( async ({page}) => {
    await page.close();
});

test.afterAll('Teardown', async () => {
    console.log('Tests done');
});