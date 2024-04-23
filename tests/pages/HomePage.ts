import { Locator, Page } from "@playwright/test";

export class HomePage {

    constructor(private page: Page) {
        this.page = page;
    }

    public cookieAcceptButton: Locator = this.page.getByRole('button', {name: 'GOT IT'});
    public ageConfirmButton: Locator = this.page.locator('.ageconfirmation__actionWrapper > div').first();
    public shopPageButton: Locator = this.page.getByTestId('headerItem-1');

    async acceptCookies(): Promise<void> {
        await this.cookieAcceptButton.click();
    }

    async confirmAge(): Promise<void> {
        await this.ageConfirmButton.click();
    }

    async openShopPage(): Promise<void> {
        await this.shopPageButton.click();
    }

}