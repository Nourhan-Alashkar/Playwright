import { test, expect } from '@playwright/test';

test('Open Playwright Website', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});
