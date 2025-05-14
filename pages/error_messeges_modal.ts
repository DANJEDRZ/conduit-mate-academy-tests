import { Page, expect } from '@playwright/test';
import BaseModal from './base_modal';

export default class ErrorMessagesModal extends BaseModal {
    constructor(page: Page) {
        super(page);
    }

    elements = {
        componentWrapper: () => this.page.locator('ul.error-messages')
    }

    async assertErrorIsShown(errorMessage: string) {
        await expect(this.elements.componentWrapper()).toContainText(errorMessage);
    }
}