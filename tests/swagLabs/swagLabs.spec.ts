import { test, expect } from '@playwright/test';
import { LoginPageMethods } from '../../apps/loginPage/loginPageMethods';
import { InventoryPageMethods } from '../../apps/inventoryPage/inventoryPageMethods';
import { CartPageMethods } from '../../apps/cartPage/cartPageMethods';

test.describe('Sauce Labs tests', () => {

    test('Login to Sauce Lab website', async({page})  => {
    const loginPageMethods = new LoginPageMethods(page);
    
    await loginPageMethods.login('standard_user', 'secret_sauce');
    await page.locator('#react-burger-menu-btn').click()
    expect (page.locator('[data-test="logout-sidebar-link"]')).toBeVisible()
}) 

  test('Add and remove product from the cart in inventory page', async({page}) => {
  const loginPageMethods = new LoginPageMethods(page);
  const inventoryPageMethods = new InventoryPageMethods(page)

    await loginPageMethods.login('standard_user', 'secret_sauce');
    await inventoryPageMethods.addProductToCart('Sauce Labs Backpack')
    await inventoryPageMethods.removeFromCartByTitle('Sauce Labs Backpack')
  })

  test('Remove product from card', async({page}) => {
    const loginPageMethods = new LoginPageMethods(page);
    const inventoryPageMethods = new InventoryPageMethods(page)
    const cardPageMethods = new CartPageMethods(page)

    await loginPageMethods.login('standard_user', 'secret_sauce');
    await inventoryPageMethods.addProductToCart('Sauce Labs Backpack')
    await page.locator('.shopping_cart_link').click()
    await cardPageMethods.removeFromCartByTitle('Sauce Labs Backpack')
  })
}) 

