import { expect, test } from '@playwright/test';
import NewArticlePage from '../pages/new_article_page';
import LoginPage from '../pages/login_page';
import testData from '../utils/testData';
import ArticlePage from '../pages/article_page';
import HomePage from '../pages/home_page';
import TestHelpers from '../utils/TestHelpers';


test.describe('Article creation tests', () => {
    const articleData = { title: 'Test article title', description: 'Test article description', content: 'Test article content', taggs: ['tag1', 'tag2'] }
    const { email, password } = testData.getUserData();
    let new_article_page: NewArticlePage
    let login_page: LoginPage
    let article_page: ArticlePage
    let home_page: HomePage


    test.beforeEach(async ({ page }) => {
        new_article_page = new NewArticlePage(page);
        login_page = new LoginPage(page);
        home_page = new HomePage(page);
    });

    test('User can create an acrticle', async ({ page }) => {
        const createArticleResponsePromise = page.waitForResponse('**/api/articles');

        await login_page.open();
        await login_page.login(email, password);
        await home_page.assertPageIsOpen();
        await new_article_page.open();
        await new_article_page.publishArticle(articleData);


        article_page = new ArticlePage(page, await TestHelpers.extractFromResponse(createArticleResponsePromise, 'article.slug'));
    });


    test('User cannot create an acrticle unauthorised', async ({ page }) => {
        const createArticleResponsePromise = page.waitForResponse('**/api/articles');

        await new_article_page.open();
        await new_article_page.publishArticle(articleData);

        await new_article_page.assertPageIsOpen();
        const response = await createArticleResponsePromise;
        expect(response.status()).toBe(401);
    });
});
