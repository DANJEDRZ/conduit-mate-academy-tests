import type { Page, Locator } from '@playwright/test';
import BasePage from './base_page';
import ErrorMessagesModal from './error_messeges_modal';

export default class LoginPage extends BasePage {
    error_messeges_modal = new ErrorMessagesModal(this.page);
     
    constructor(page: Page) {
        super(page, '/user/login')
    }

    elements = {
        emailInputField: () => this.page.getByRole('textbox', { name: 'Email' }),
        passwordInput: () => this.page.getByRole('textbox', { name: 'Password' }),
        signInButton: () => this.page.getByRole('button', { name: 'Sign in' }),
        componentWrapper: () => this.page.locator('div.auth-page')
    }

    async login(email: string, password: string) {
        await this.elements.emailInputField().fill(email);
        await this.elements.passwordInput().fill(password);
        await this.elements.signInButton().click();
    }
}