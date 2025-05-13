import type { Page, Locator } from '@playwright/test';

export default class LoginPage {
    private page: Page

    constructor(page: Page) {
        this.page = page;
    }

    elements = {
        emailInputField: () => this.page.getByRole('textbox', { name: 'Email' }),
        passwordInput: () => this.page.getByRole('textbox', { name: 'Password' }),
        signInButton: () => this.page.getByRole('button', { name: 'Sign in' }),
        errorMessage: () => this.page.locator('ul.error-messages'),
        logginPageWrapper: () => this.page.locator('div.auth-page')
    }

    async open() {
        await this.page.goto('/user/login');
    }

    async login(email: string, password: string) {
        await this.elements.emailInputField().fill(email);
        await this.elements.passwordInput().fill(password);
        await this.elements.signInButton().click();
    }


}