import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test('User can navigate through menus', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto();

  await loginPage.login('Admin', 'admin123');

  await dashboardPage.verifyDashboardLoaded();

  await dashboardPage.navigateToAdmin();
  await expect(page).toHaveURL(/admin/);

  await dashboardPage.navigateToPIM();
  await expect(page).toHaveURL(/pim/);

  await dashboardPage.navigateToLeave();
  await expect(page).toHaveURL(/leave/);

  await dashboardPage.navigateToTime();
  await expect(page).toHaveURL(/time/);
});
