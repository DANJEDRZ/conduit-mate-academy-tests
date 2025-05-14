import { Locator, Page, expect } from '@playwright/test';

export default abstract class BaseComponent {
    protected page: Page

    constructor(page: Page) {
        this.page = page;
    }

    abstract elements: {
        componentWrapper: () => Locator;
        [key: string]: () => Locator;
    };

    abstract assertIsOpen(): Promise<void>;
}