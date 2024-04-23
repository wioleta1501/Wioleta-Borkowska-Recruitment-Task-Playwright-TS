import { Locator, Page } from '@playwright/test';

export class HomePageLocators {
    constructor(private page: Page) {
        this.page = page;
    }

    public cookieAcceptButton: Locator = this.page.getByRole('button', {name: 'GOT IT'});
    public ageConfirmButton: Locator = this.page.locator('.ageconfirmation__actionWrapper > div').first();
    public shopPageButton: Locator = this.page.getByTestId('headerItem-1');

}