import { expect, test } from '@playwright/test';
import NewArticlePage from '../pages/new_article_page';
import LoginPage from '../pages/login_page';
import testData from '../utils/testData';
import ArticlePage from '../pages/article_page';
import HomePage from '../pages/home_page';
import TestHelpers from '../utils/TestHelpers';
import { ArticleData } from '../data-models/article.types';
import Assertions from '../utils/assertions';


test.describe('Article creation tests', () => {
    const articleData: ArticleData = {
        title: 'Test article title',
        description: 'Test article description',
        content: 'Test article content',
        taggs: ['tag1', 'tag2']
    }
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
        const createAericleCall = page.waitForResponse('**/api/articles');

        await login_page.open();
        await login_page.login(email, password);
        await home_page.assertIsOpen();
        await new_article_page.open();
        await new_article_page.publishArticle(articleData);


        article_page = new ArticlePage(page, await TestHelpers.extractFromResponse(createAericleCall, 'article.slug'));
        await article_page.assertIsOpen();
        await article_page.assertArticleHasCorrectData(articleData);
    });

    test('User cannot create an acrticle unauthorised', async ({ page }) => {
        const createAericleCall = page.waitForResponse('**/api/articles');

        await new_article_page.open();
        await new_article_page.publishArticle(articleData);

        await new_article_page.assertIsOpen();
        Assertions.assertResponseCodeIs(createAericleCall, 401);
    });

        test('User cannot submit an empty artcle', async ({ page }) => {
        await login_page.open();
        await login_page.login(email, password);
        await home_page.assertIsOpen();
        await new_article_page.open();
        await new_article_page.clickPublishArticleButton();



    });

});
