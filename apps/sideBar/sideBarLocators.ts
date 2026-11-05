import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class SideBarLocators extends BasePage {
     sideBarButton: Locator;
     logoutButton: Locator;

    constructor(page: Page) {
        super(page)
            this.sideBarButton = page.locator('#react-burger-menu-btn')
            this.logoutButton = page.locator('#logout_sidebar_link')

    }

}