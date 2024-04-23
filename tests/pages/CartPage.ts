import { Page } from "@playwright/test";
import { CartPageLocators } from "../locators/CartPageLocators";

export class CartPage {

    private readonly locators: CartPageLocators;

    constructor(page: Page) {
        this.locators = new CartPageLocators(page);
    }

    async getProductNameFromCart(): Promise <String> {
        return this.locators.productInCartName.textContent();
    }

}