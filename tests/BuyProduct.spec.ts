import { expect } from '@playwright/test';
import { test } from "./fixtures/TestFixtures";

let ploomUrl = 'https://www.ploom.co.uk/en';

test('Choose product and add to cart', async ({page, homePage, shopPage, productPage, cartPage}) => {

    await page.goto(ploomUrl);

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