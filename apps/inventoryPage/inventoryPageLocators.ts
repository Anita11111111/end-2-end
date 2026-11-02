import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class InventoryPageLocators extends BasePage {
    inventoryItems: Locator;

    constructor(page: Page) {
        super(page)
        this.inventoryItems = this.page.locator('.inventory_item')
    }

    productByName(productName: string): Locator {
        return this.inventoryItems.filter({ hasText: productName })
    }

    addToCartButton(productName: string): Locator {
        return this.productByName(productName).getByRole('button', { name: 'Add to cart' })
    }

    removeFromCardButton(productName: string): Locator {
        return this.productByName(productName).getByRole('button', {name: 'Remove'})

    }

    getPriceByTitle(productName: string): Locator {
        return this.productByName(productName).locator('[data-test="inventory-item-price"]')
    }

}
