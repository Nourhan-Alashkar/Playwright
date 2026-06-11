import { test, expect } from '@playwright/test';

test('User can successfully log in', async ({ page }) => {
  // 1. Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // 2. Fill out the credentials
  //await page.getByLabel('Username or email').fill('admin');
  //await page.getByLabel('Password').fill('admin123');
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');

  // 3. Click the login button
  await page.getByRole('button', { name: 'Login' }).click();
  //await page.getByRole('button', { name: 'Sign In' }).click();

  // 4. Assert login success (e.g., URL redirection or visibility of an element)
  //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await expect(page).toHaveURL(/dashboard/);
  //await expect(page.getByText('Welcome back!')).toBeVisible();
});

