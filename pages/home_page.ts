import { Page } from '@playwright/test';
import BasePage from './base_page';

export default class HomePage extends BasePage<HomePage> {
    constructor(page: Page) {
        super(page, '/')
    }

    elements = {
        pageWrapper: () => this.page.locator('div.home-page')
    }
}