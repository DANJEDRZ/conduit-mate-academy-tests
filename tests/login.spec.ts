import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login_page';
import testData from '../utils/testData';
import HomePage from '../pages/home_page';

test.describe('Login tests', () => {
  let login_page: LoginPage;
  let home_page: HomePage;

  test.beforeEach(async ({ page }) => {
    login_page = new LoginPage(page);
    home_page = new HomePage(page);
  });

  test('User can login', async () => {
    const { email, password } = testData.getUserData();

    await login_page.open();
    await login_page.login(email, password);

    await home_page.assertPageIsOpen();
  });

  test('User cannot login with incorrect credentials', async () => {
    const notExistingEmail = 'DOesnotExitEmail3213123123@3452345235test.ul';
    const wrongPassword = 'wrongPass';

    await login_page.open();
    await login_page.login(notExistingEmail, wrongPassword);

    await expect(login_page.elements.errorMessage()).toContainText('email or password:is invalid');
  });

  test('User cannot login with username', async ({ page }) => {
    const { userName, password } = testData.getUserData();
    const screenshotName = 'username.png';

    await login_page.open();
    await login_page.login(userName, password);

    await expect(home_page.elements.pageWrapper()).not.toBeVisible();
    await expect(page).toHaveScreenshot(screenshotName);
  });

  [
    { email: 'test.com', password: 'wrongPass', screenshot: 'email_no@.png' },
    { email: 'test@', password: 'wrongPass', screenshot: 'no_domain.png' },
    { email: 'test', password: 'wrongPass', screenshot: 'only_local.png' },
    { email: 'test@domain', password: 'wrongPass', screenshot: 'no_top_level_domain.png' },
  ].forEach(({ email, password, screenshot: screenshotName }) => {
    test(`User cannot log in with incorrectly formatted ${email} email`, async ({ page }) => {
      await login_page.open();
      await login_page.login(email, password);

      await expect(home_page.elements.pageWrapper()).not.toBeVisible();
      await expect(page).toHaveScreenshot(screenshotName);
    });
  });
});
