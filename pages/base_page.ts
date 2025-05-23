import { Locator, Page, expect } from '@playwright/test';
import BaseComponent from './base_component';

export default abstract class BasePage extends BaseComponent {
    private path: string

    constructor(page: Page, path: string) {
        super(page)
        this.path = path;
    }

    abstract elements: {
        componentWrapper: () => Locator;
        [key: string]: () => Locator;
    };

    async open(): Promise<void> {
        await this.page.goto(this.path);
    }

    async assertIsOpen() {
        await expect(this.page).toHaveURL(this.path);
        await expect(this.elements.componentWrapper()).toBeVisible();
    }
}