import { expect } from '@playwright/test';

export class DashboardPage {
  constructor(page) {
    this.page = page;
  }

  async verifyDashboardLoaded() {
    await expect(this.page).toHaveURL(/dashboard/);
  }

  async navigateToAdmin() {
    await this.page.getByRole('link', { name: 'Admin' }).click();
  }

  async navigateToPIM() {
    await this.page.getByRole('link', { name: 'PIM' }).click();
  }

  async navigateToLeave() {
    await this.page.getByRole('link', { name: 'Leave' }).click();
  }

  async navigateToTime() {
    await this.page.getByRole('link', { name: 'Time' }).click();
  }
}