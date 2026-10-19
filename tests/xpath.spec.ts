import { test, expect } from '@playwright/test';

test.describe('Actions with check-boxes and sorting button', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://104.168.59.50/laboratory/interactions');
  });

  test('Actions with check-box', async ({ page }) => {
  const authorizationCheckbox = page.locator(`//input[@aria-label='Вибрати Авторизація']`);
  const fileUploadCheckbox = page.locator(`//input[@aria-label='Вибрати Завантаження файлу']`);
  const tagSearchCheckbox = page.locator(`//input[@aria-label='Вибрати Пошук за тегом']`);
  const articleCreationCheckbox = page.locator(`//input[@aria-label='Вибрати Створення статті']`);
  const selectedCount = page.locator( `//span[@data-testid='interactions-selected-count']` );

  await authorizationCheckbox.check();
  expect(selectedCount).toHaveText('Вибрано: 1');
  await fileUploadCheckbox.check();
  expect(selectedCount).toHaveText('Вибрано: 2');
  await tagSearchCheckbox.check();
  await articleCreationCheckbox.check();
  expect(selectedCount).toHaveText('Вибрано: 4');

  await authorizationCheckbox.uncheck();
  await fileUploadCheckbox.uncheck();
  await tagSearchCheckbox.uncheck();
  await articleCreationCheckbox.uncheck();
  expect(selectedCount).toHaveText('Вибрано: 0');

});

  test('Actions with sorting', async ({ page }) => {
    const statuses = page.locator( `//table[@data-testid='interactions-table']//tbody/tr/td[3]` );

    await expect(statuses).toHaveText([ 'Passed', 'Skipped', 'Passed', 'Failed']);

    await page.locator( `xpath=//button[@data-testid='interactions-sort-status']` ).click();
    await expect(statuses).toHaveText([ 'Failed', 'Passed', 'Passed', 'Skipped']);

    await page.locator( `xpath=//button[@data-testid='interactions-sort-status']` ).click();
    await expect(statuses).toHaveText([ 'Skipped', 'Passed', 'Passed', 'Failed']);
});

});


