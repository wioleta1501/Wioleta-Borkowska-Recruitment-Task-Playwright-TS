import { test, expect } from '@playwright/test';
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";

let homePage: HomePage;
let shopPage: ShopPage;
let productPage: ProductPage;
let cartPage: CartPage

test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    shopPage = new ShopPage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
});

test.afterEach( async ({page}) => {
    await page.close();
});

test.afterAll('Teardown', async () => {
    console.log('Tests done');
});

test('Choose product and add to cart', async ({page}) => {

    await page.goto('https://www.ploom.co.uk/en');

    await homePage.acceptCookies();
    await homePage.confirmAge();
    await homePage.openShopPage();

    await shopPage.chooseItem();

    await productPage.addProductToCart();
    let productNameFromProductPage = (await productPage.getProductName()).toLowerCase();
    console.log('Product name from product page: ' + productNameFromProductPage);

    let counter = await productPage.checkCartCounter();
    console.log('Counter from cart icon: ' + productNameFromProductPage);
    expect.soft(counter, 'Counter on cart icon should have value "1"').toEqual('1');

    await productPage.goToCheckout();
    let productNameFromCart = (await cartPage.getProductNameFromCart()).toLowerCase();
    console.log('Product name from cart: ' + productNameFromProductPage);

    expect(productNameFromCart, 'Chosen product should be in cart').toEqual(productNameFromProductPage);

});