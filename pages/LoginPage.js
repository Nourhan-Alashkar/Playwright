export class LoginPage {
    constructor(page) {
      this.page = page;
      this.username = page.locator('input[name="username"]');
      this.password = page.locator('input[name="password"]');
      this.loginButton = page.getByRole('button', { name: 'Login' });
    }
  
    async goto() {
      await this.page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
      );
    }
  
    async login(username, password) {
      await this.username.fill(username);
      await this.password.fill(password);
      await this.loginButton.click();
    }
  }
  