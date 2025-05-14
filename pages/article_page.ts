import { Page, expect } from '@playwright/test';
import BasePage from './base_page';
import { ArticleData } from '../data-models/article.types';

export default class ArticlePage extends BasePage {
    constructor(page: Page, articleId) {
        super(page, `/article/${articleId}`);
    }

    elements = {
        componentWrapper: () => this.page.locator('div.article-page'),
        titlebanner: () => this.page.locator('div.banner'),
        articleContent: () => this.page.locator('div.article-content'),
        articleTags: () => this.page.locator('ul.tag-list'),
    }

    async assertArticleHasCorrectData(expectedArticle: ArticleData) {
        await expect(this.elements.titlebanner()).toContainText(expectedArticle.title);
        await expect(this.elements.articleContent()).toContainText(expectedArticle.content);

        for (const tag of expectedArticle.taggs) {
            await expect(this.elements.articleTags()).toContainText(tag);

        }
    }
}