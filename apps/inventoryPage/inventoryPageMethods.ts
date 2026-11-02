import { InventoryPageLocators } from "./inventoryPageLocators";

export class InventoryPageMethods extends InventoryPageLocators {

    async addProductToCart(productName: string) {
        await this.addToCartButton(productName).click()
    }

    async removeFromCartByTitle(productName: string) {
        await this.removeFromCardButton(productName).click()
    }

    async returnPrice(product: string) {
        const price = await this.getPriceByTitle(product).textContent()
        return price
    }
}
