import { expect, Page } from '@playwright/test';
import BasePage from './base_page';

export default class NewArticlePage extends BasePage<NewArticlePage> {
    constructor(page: Page) {
        super(page, '/editor');
    }

    elements = {
        articleTitleInput: () => this.page.getByRole('textbox', { name: 'Article Title' }),
        articleDescriptionInput: () => this.page.getByRole('textbox', { name: 'What\'s this article about?' }),
        articleContentInput: () => this.page.getByRole('textbox', { name: 'Write your article (in' }),
        tagsInput: () => this.page.getByRole('textbox', { name: 'Enter tags' }),
        publishArticleButton: () => this.page.getByRole('button', { name: 'Publish Article' }),
        pageWrapper: () => this.page.locator('div.editor-page'),
    }

    async publishArticle(articleData) {
        await this.elements.articleTitleInput().fill(articleData.title);
        await this.elements.articleDescriptionInput().fill(articleData.description);
        await this.elements.articleContentInput().fill(articleData.content);

        for (const tag of articleData.taggs) {
            await this.elements.tagsInput().fill(tag);
            await this.elements.tagsInput().press('Enter');
        }

        await this.elements.publishArticleButton().click();
    }
}