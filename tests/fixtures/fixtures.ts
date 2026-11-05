import {test as base, expect, Page} from '@playwright/test'
import { LoginPageMethods } from '../../apps/loginPage/loginPageMethods';
import { InventoryPageMethods } from '../../apps/inventoryPage/inventoryPageMethods';
import { CartPageLocators } from '../../apps/cartPage/cartPageLocators';
import { CartPageMethods } from '../../apps/cartPage/cartPageMethods';
import { SideBarMethods } from '../../apps/sideBar/sideBarMethods';
import { users, User } from '../swagLabWithFixtures/swag-labs.data';


type MyFixtures = {
    courseName: string;
    loginPage: LoginPageMethods
    sideBarPage: SideBarMethods;
    inventoryPage: InventoryPageMethods;
    cartPage: CartPageMethods;
    textFixture: void;
    login: void;
    logout: void;
    products: Record<string, unknown>;
    paramsFixture: any;
    userToLogin: User
    shouldLogout: boolean
}

// fixture parametrization


const test = base.extend<MyFixtures>({
    paramsFixture: undefined,
    userToLogin: [ users.standard , { option: true }],
    shouldLogout: [true, { option: true }],
    login: [async ({page, loginPage, userToLogin}, use) => {
        await page.goto('https://www.saucedemo.com/')
        await loginPage.login(userToLogin.login, userToLogin.password);
        await use();
    },
     { auto: true },
],

logout: [async ({sideBarPage, shouldLogout}, use) => {
    await use();
    if (shouldLogout) {
        await sideBarPage.logout()
    }
},
{ auto: true },
],

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

    sideBarPage: async ({page}, use) => {
        const sideBarPage = new SideBarMethods(page);

        await use(sideBarPage)
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