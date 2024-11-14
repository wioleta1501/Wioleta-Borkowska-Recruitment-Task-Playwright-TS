import { Locator, Page } from '@playwright/test';

export class ProductPageLocators {
    constructor(private page: Page) {
        this.page = page;
    }

    public addToCartButton: Locator = this.page.getByTestId('pdpAddToProduct');
    public productName: Locator = this.page.locator('h1');
    public cartCounter: Locator = this.page.locator('.mini-cart__icon-label');
    public cartPageButton: Locator = this.page.getByTestId('miniCartCheckoutButton');

}