import { Locator, Page, expect } from '@playwright/test';
import BaseComponent from './base_component';

export default abstract class BaseModal extends BaseComponent {
    constructor(page: Page) {
        super(page)
    }

    abstract elements: {
        componentWrapper: () => Locator;
        [key: string]: () => Locator;
    };

    async assertIsOpen() {
        await expect(this.elements.componentWrapper()).toBeVisible();
    }
}