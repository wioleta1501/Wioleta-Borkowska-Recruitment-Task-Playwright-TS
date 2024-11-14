import { Page } from "@playwright/test";
import { ShopPageLocators } from "../locators/ShopPageLocators";

export class ShopPage {

    private readonly locators: ShopPageLocators;

    constructor(page: Page) {
        this.locators = new ShopPageLocators(page);
    }

    async chooseItem(): Promise<void> {
        await this.locators.itemButton.click();
    }
}