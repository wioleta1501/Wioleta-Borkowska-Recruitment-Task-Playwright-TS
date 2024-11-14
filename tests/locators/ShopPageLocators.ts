import { Locator, Page } from '@playwright/test';

export class ShopPageLocators {
    constructor(private page: Page) {
        this.page = page;
    }

    public itemButton: Locator = this.page.locator('[data-sku="ploom-x-advanced"]');

}