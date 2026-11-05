import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class CartPageLocators extends BasePage {
     inventoryItems: Locator;
    
        constructor(page: Page) {
            super(page)
            this.inventoryItems = this.page.locator('.cart_item')
        }

    productByName(productName: string): Locator {
        return this.inventoryItems.filter({ hasText: productName })
    }

    removeFromCardButton(productName: string): Locator {
        return this.productByName(productName).getByRole('button', {name: 'Remove'})

    }

    getPriceByTitle(productName: string): Locator {
        return this.productByName(productName).locator('[data-test="inventory-item-price"]')
    }    


}