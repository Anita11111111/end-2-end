
import { CartPageLocators } from "./cartPageLocators";

export class CartPageMethods extends CartPageLocators {

    async removeFromCartByTitle(productName: string) {
        await this.removeFromCardButton(productName).click()
    }

    async returnPrice(product: string) {
        const price = await this.getPriceByTitle(product).textContent()
        return price
    }
}