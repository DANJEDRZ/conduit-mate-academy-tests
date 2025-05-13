import { Locator, Page, expect } from '@playwright/test';

export default abstract class BasePage<T> {
    protected page: Page
    private path: string

    constructor(page: Page, path: string) {
        this.page = page;
        this.path = path;
    }

    abstract elements: {
        pageWrapper: () => Locator;
        [key: string]: () => Locator; // You can add other elements as well
    };

    async open(): Promise<void> {
        await this.page.goto(this.path);
    }

    async assertPageIsOpen() {
        await expect(this.page).toHaveURL(this.path);
        await expect(this.elements.pageWrapper()).toBeVisible();
    }
}