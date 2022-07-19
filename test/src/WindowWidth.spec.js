const { test, expect } = require('@playwright/test');

test.describe('width test', () => {
  test.beforeEach(async ({ page, baseURL  }) => {
    await page.goto("http://localhost:3000/");
    
    await page.waitForSelector('#component-wrapper');
  });

  test('when window is wide', async ({ page }) => {
    await page.setViewportSize({ width: 700, height: 200 });

    const contents = page.locator('#component-wrapper');
    await expect(contents).toHaveText('Window is wide');
  });

  test('when window is narrow', async ({ page }) => {
    await page.setViewportSize({ width: 300, height: 200 });
    
    const contents = page.locator('#component-wrapper');
    await expect(contents).toHaveText('Window is narrow');
  });
});