import { Page } from "@playwright/test";
import { HomePageLocators } from "../locators/HomePageLocators";

export class HomePage {

    private readonly locators: HomePageLocators;

    constructor(page: Page) {
        this.locators = new HomePageLocators(page);
    }

    async acceptCookies(): Promise<void> {
        await this.locators.cookieAcceptButton.click();
    }

    async confirmAge(): Promise<void> {
        await this.locators.ageConfirmButton.click();
    }

    async openShopPage(): Promise<void> {
        await this.locators.shopPageButton.click();
    }

}