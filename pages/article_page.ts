import { Page } from '@playwright/test';
import BasePage from './base_page';

export default class ArticlePage extends BasePage<ArticlePage> {

    constructor(page: Page, articleId) {
        super(page, `/article/${articleId}`);
    }

    elements = {
        pageWrapper: () => this.page.locator('div.article-page'),
    }
}