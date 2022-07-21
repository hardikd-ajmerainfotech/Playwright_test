import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://green-stone-0ef96ef10.azurestaticapps.net/
  await page.goto('https://green-stone-0ef96ef10.azurestaticapps.net/');

  // Click [placeholder="Search Term\.\.\."]
  await page.locator('[placeholder="Search Term\\.\\.\\."]').click();

  // Fill [placeholder="Search Term\.\.\."]
  await page.locator('[placeholder="Search Term\\.\\.\\."]').fill('drinks');

  // Click button:has-text("Search")
  await page.locator('button:has-text("Search")').click();

  // Click #summary-0 >> text=View Recipe
  await page.locator('#summary-0 >> text=View Recipe').click();
  await expect(page).toHaveURL('https://green-stone-0ef96ef10.azurestaticapps.net/iced-nannari-sherbet/');
  await expect(page).toHaveScreenshot();

  // Click #printButton i
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('#printButton i').click()
  ]);

  // Click text=Home >> i
  await page.locator('text=Home >> i').click();
  await expect(page).toHaveURL('https://green-stone-0ef96ef10.azurestaticapps.net/');

});