import { Page, expect } from '@playwright/test';

export default class homePage {
    private page: Page

    constructor(page: Page) {
        this.page = page;
    }

    elements = {
        homePageWrapperElement: () => this.page.locator('div.home-page')
    }

    async assertIsOpen() {
        await expect(this.page).toHaveURL('https://conduit.mate.academy/');
        await expect(this.elements.homePageWrapperElement()).toBeVisible();
    }
}