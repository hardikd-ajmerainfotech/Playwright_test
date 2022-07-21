import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.wikipedia.org/
  await page.goto('https://www.wikipedia.org/');

  // Click strong:has-text("English")
  await page.locator('strong:has-text("English")').click();
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Main_Page');

  // Click [placeholder="Search Wikipedia"]
  await page.locator('[placeholder="Search Wikipedia"]').click();

  // Fill [placeholder="Search Wikipedia"]
  await page.locator('[placeholder="Search Wikipedia"]').fill('virat ');

  // Click text=Virat Kohli
  await page.locator('text=Virat Kohli').click();
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Virat_Kohli');

  // Click #toc >> text=Early life
  await page.locator('#toc >> text=Early life').click();
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Virat_Kohli#Early_life');

  // Click #Rise_through_the_ranks
  await page.locator('#Rise_through_the_ranks').click();

  // Click text=Main page
  await page.locator('text=Main page').click();
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Main_Page');

  // Click text=Contents
  await page.locator('text=Contents').click();
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Wikipedia:Contents');

  // Click text=Random article
  // await page.locator('text=Random article').click();
  // await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Kajangala');

  // Click span:has-text("About Wikipedia")
  await page.locator('span:has-text("About Wikipedia")').click();
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Wikipedia:About');

  // Click span:has-text("Contact us")
  await page.locator('span:has-text("Contact us")').click();
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Wikipedia:Contact_us');

  // Click span:has-text("Donate")
  await page.locator('span:has-text("Donate")').click();
  await expect(page).toHaveURL('https://donate.wikimedia.org/w/index.php?title=Special:LandingPage&country=XX&uselang=en&utm_medium=sidebar&utm_source=donate&utm_campaign=C13_en.wikipedia.org');

  // Go to https://en.wikipedia.org/wiki/Wikipedia:Contact_us
  await page.goto('https://en.wikipedia.org/wiki/Wikipedia:Contact_us');

  // Click text=View history
  await page.locator('text=View history').click();
  await expect(page).toHaveURL('https://en.wikipedia.org/w/index.php?title=Wikipedia:Contact_us&action=history');

  // Click [placeholder="Search Wikipedia"]
  await page.locator('[placeholder="Search Wikipedia"]').click();

  // Fill [placeholder="Search Wikipedia"]
  await page.locator('[placeholder="Search Wikipedia"]').fill('indi');

  // Click a:nth-child(2) > .suggestions-result
  await page.locator('a:nth-child(2) > .suggestions-result').click();
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/India');

  // Click text=Motto:
  await page.locator('text=Motto:').click();

  // Click img[alt="Image of a globe centred on India\, with India highlighted\."]
  await page.locator('img[alt="Image of a globe centred on India\\, with India highlighted\\."]').click();
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/India#/media/File:India_(orthographic_projection).svg');

  // Go to https://en.wikipedia.org/wiki/India
  await page.goto('https://en.wikipedia.org/wiki/India');

  // Click [placeholder="Search Wikipedia"]
  await page.locator('[placeholder="Search Wikipedia"]').click();

  // Fill [placeholder="Search Wikipedia"]
  await page.locator('[placeholder="Search Wikipedia"]').fill('google maps');

  // // Click .highlight >> nth=0
  // await page.locator('.highlight').first().click();
  // await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Google_Maps');

  // // Click .thumbimage >> nth=0
  // await page.locator('.thumbimage').first().click();
  // await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Google_Maps');

});