import { Page } from "@playwright/test";
import { ProductPageLocators } from "../locators/ProductPageLocators";

export class ProductPage {

    private readonly locators: ProductPageLocators;

    constructor(page: Page) {
        this.locators = new ProductPageLocators(page);
    }

    async addProductToCart(): Promise<void> {
        await this.locators.addToCartButton.click();
    }

    async getProductName(): Promise<String> {
        return this.locators.productName.textContent();
    }

    async checkCartCounter() {
        return this.locators.cartCounter.textContent();
    }

    async goToCheckout(): Promise <void> {
        await this.locators.cartPageButton.click();
    }

}