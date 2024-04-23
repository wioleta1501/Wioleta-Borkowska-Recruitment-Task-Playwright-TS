import { Locator, Page } from '@playwright/test';

export class CartPageLocators {
    constructor(private page: Page) {
        this.page = page;
    }

    public productInCartName: Locator = this.page.locator('#one-page-checkout a').nth(2);

}