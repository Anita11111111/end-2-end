import { test, expect } from './fixtures/fixtures.ts';

test.use({paramsFixture: 'Senpai'})

test('testing fixture', async({loginPage, inventoryPage, paramsFixture}) => {
    console.log('This is paramsFixture')
    await loginPage.login('test', 'sooo')
    await inventoryPage.returnPrice('Black')
})
