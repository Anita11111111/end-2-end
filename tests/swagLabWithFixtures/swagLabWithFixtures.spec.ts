import { test, expect } from '../fixtures/fixtures';
import {users} from './swag-labs.data';

test.describe('Sauce Labs tests', () => {
  test('Add and remove product from the cart in inventory page', async({inventoryPage}) => {
    await inventoryPage.addProductToCart('Sauce Labs Backpack')
    await inventoryPage.removeFromCartByTitle('Sauce Labs Backpack')
  })

  test('Remove product from cart', async({page, inventoryPage, cartPage}) => {
    await inventoryPage.addProductToCart('Sauce Labs Backpack')
    await page.locator('.shopping_cart_link').click()
    await cartPage.removeFromCartByTitle('Sauce Labs Backpack')
    await expect(cartPage.productByName('Sauce Labs Backpack')).toHaveCount(0)
  })
})


test.describe('Locked out user', () => {
  test.use({userToLogin: users.locked_out_user, shouldLogout: false})

  test('Add and remove product from the cart in inventory page', async({page}) => {
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.')
  })
})