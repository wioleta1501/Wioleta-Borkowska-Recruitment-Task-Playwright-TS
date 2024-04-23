import { Locator, Page } from "@playwright/test";

export class ShopPage {

    constructor(private page: Page) {
        this.page = page;
    }

    public itemButton: Locator = this.page.locator('[data-sku="ploom-x-advanced"]');

    async chooseItem(): Promise<void> {
        await this.itemButton.click();
    }
}