import { test, expect } from '../fixtures/fixtures';

test.describe('Sauce Labs tests', () => {

  test('Add and remove product from the cart in inventory page', async({login, inventoryPage}) => {
    await inventoryPage.addProductToCart('Sauce Labs Backpack')
    await inventoryPage.removeFromCartByTitle('Sauce Labs Backpack')
  })

  test('Remove product from cart', async({login, page, inventoryPage, cartPage}) => {
    await inventoryPage.addProductToCart('Sauce Labs Backpack')
    await page.locator('.shopping_cart_link').click()
    await cartPage.removeFromCartByTitle('Sauce Labs Backpack')
    await expect(cartPage.productByName('Sauce Labs Backpack')).toHaveCount(0)
  })
})
