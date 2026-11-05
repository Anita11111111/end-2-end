import { SideBarLocators } from "./sideBarLocators";

export class SideBarMethods extends SideBarLocators {

    async logout() {
        await this.sideBarButton.click()
        await this.logoutButton.click()

    }

}