import { Page } from '@playwright/test';
import BasePage from './base_page';

export default class HomePage extends BasePage {
    constructor(page: Page) {
        super(page, '/')
    }

    elements = {
        componentWrapper: () => this.page.locator('div.home-page')
    }
}