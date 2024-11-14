import { expect } from '@playwright/test';
import { test } from "./fixtures/TestFixtures";

let ploomUrl = 'https://www.ploom.co.uk/en';

test.describe('Buying products on "https://www.ploom.co.uk/en" website', () => {

    test('Choose product and add to cart', {tag: ['@cart', '@ploom-x-advanced'],}, async ({page, homePage, shopPage, productPage, cartPage}) => {
        //open main page
        await page.goto(ploomUrl);
        //accept cookies and confirm age
        await homePage.acceptCookies();
        await homePage.confirmAge();
        //go to shop page and choose item
        await homePage.openShopPage();
        await shopPage.chooseItem();
        //add product to cart and get its name, it will be used to compare product name from cart to verify assertion
        await productPage.addProductToCart();
        let productNameFromProductPage: string = (await productPage.getProductName()).toLowerCase();
        console.log('Product name from product page: ' + productNameFromProductPage);
        //check counter from cart icon
        let counter = await productPage.checkCartCounter();
        console.log('Counter from cart icon: ' + productNameFromProductPage);
        //I choose expect with 'soft' to do not stop test after and check what happened next, even it will give fail result
        expect.soft(counter, 'Counter on cart icon should have value "1"').toEqual('1');
        //move to cart and get product name from here to assertion
        await productPage.goToCheckout();
        let productNameFromCart: string = (await cartPage.getProductNameFromCart()).toLowerCase();
        console.log('Product name from cart: ' + productNameFromProductPage);
        //main assertion of test - checking if product was added to cart correct by comparing product names (lowercase to be sure)
        expect(productNameFromCart, 'Chosen product should be in cart').toEqual(productNameFromProductPage);

    });

});
