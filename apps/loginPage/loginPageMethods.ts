import { LoginPageLocators } from "./loginPageLocators";

export class LoginPageMethods extends LoginPageLocators {

    async login(login: string, password: string) {
        await this.usernameInputField.fill(login)
        await this.usernameInputPassword.fill(password)
        await this.loginButton.click()
    }

}