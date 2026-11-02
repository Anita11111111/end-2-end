import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class LoginPageLocators extends BasePage {
    usernameInputField: Locator;
    usernameInputPassword: Locator;
    loginButton: Locator;

    constructor(page: Page) {
        super(page)
        this.usernameInputField = this.page.getByPlaceholder('Username')
        this.usernameInputPassword = this.page.getByPlaceholder('Password')
        this.loginButton = this.page.getByText('Login')
    }

}