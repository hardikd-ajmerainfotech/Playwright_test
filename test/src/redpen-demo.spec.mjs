import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://app.redpen.ai/app/sites/no-sites
  await page.goto('https://app.redpen.ai/app/sites/no-sites');

  // Go to https://app.redpen.ai/auth
  await page.goto('https://app.redpen.ai/auth');

  // Go to https://app.redpen.ai/auth/signin
  await page.goto('https://app.redpen.ai/auth/signin');

  // Click [aria-label="Next"]
  await page.locator('[aria-label="Next"]').click();

  // Click input[type="email"]
  await page.locator('input[type="email"]').click();

  // Click input[type="email"]
  await page.locator('input[type="email"]').click();

  // Fill input[type="email"]
  await page.locator('input[type="email"]').fill('18it.hardik.dadukiya@gmail.com');

  // Click input[type="password"]
  await page.locator('input[type="password"]').click();

  // Fill input[type="password"]
  await page.locator('input[type="password"]').fill('hardik6286');

  // Click [data-testid="SIGN_IN_BUTTON"]
  await page.locator('[data-testid="SIGN_IN_BUTTON"]').click();

  // Click [data-testid="SIGN_IN_BUTTON"]
  await page.locator('[data-testid="SIGN_IN_BUTTON"]').click();

});