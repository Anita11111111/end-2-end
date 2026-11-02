import {test as base, expect, Page} from '@playwright/test'
import { LoginPageMethods } from '../../apps/loginPage/loginPageMethods';
import { InventoryPageMethods } from '../../apps/inventoryPage/inventoryPageMethods';
import { CartPageLocators } from '../../apps/cartPage/cartPageLocators';
import { CartPageMethods } from '../../apps/cartPage/cartPageMethods';


type MyFixtures = {
    courseName: string;
    loginPage: LoginPageMethods
    inventoryPage: InventoryPageMethods;
    cartPage: CartPageMethods;
    textFixture: void;
    login: void;
    users: {standard: {login: string; password: string}};
    products: Record<string, unknown>;
    paramsFixture: any;
    userToLogin: {login: string; password: string}
}

// fixture parametrization


const test = base.extend<MyFixtures>({
    paramsFixture: undefined,
    users: {
        standard: {
            login: process.env.SAUCE_STANDARD_USERNAME!,
            password: process.env.SAUCE_PASSWORD!
        }
    },
    userToLogin: [{ login: process.env.SAUCE_STANDARD_USERNAME!, password: process.env.SAUCE_PASSWORD! }, { option: true }],
    login: async ({page, loginPage, userToLogin}, use) => {
        await page.goto('https://www.saucedemo.com/')
        await loginPage.login(userToLogin.login, userToLogin.password);
        await use();
    },

    // textFixture: async ({}, use) => {
    //     console.log('1. Fixture has started'),
    //     const fx = '2. test triggered',
    //     await use (),
    //     //console.log('1. Fixture has finished'),
    // },

    loginPage: async ({page}, use) => {
        const loginPage = new LoginPageMethods(page);

        await use(loginPage)
    },

    inventoryPage: async  ({page}, use) => {
        const inventoryPage = new InventoryPageMethods(page);

        await use(inventoryPage)
    },

    cartPage: async  ({page}, use) => {
        const cartPage = new CartPageMethods(page);

        await use(cartPage)
    }
})

export {test, expect}
export type { Page }