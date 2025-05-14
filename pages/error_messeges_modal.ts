import { Page } from '@playwright/test';
import BaseModal from './base_modal';

export default class ErrorMessagesModal extends BaseModal {
    constructor(page: Page) {
        super(page);
    }

    elements = {
        componentWrapper: () => this.page.locator('div.home-page')
    }
}