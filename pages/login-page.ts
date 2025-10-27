import { Page, Locator } from "@playwright/test";
import loginData from "../test-data/login-data";
loginData;

class LoginPage {
  readonly page: Page;
  readonly emailOrUsernameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly informationField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailOrUsernameField = this.page.getByRole("textbox", {
      name: "Email or Username",
    });
    this.passwordField = this.page.getByRole("textbox", { name: "Password" });
    this.loginButton = this.page.getByRole("button", { name: "Log in" });
    this.informationField = this.page.getByRole("listitem");
  }

  async fillCredentials(emailOrUsername: string, password: string) {
    await this.emailOrUsernameField.fill(emailOrUsername);
    await this.passwordField.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async successfulLogin() {
    await this.fillCredentials(loginData.email, loginData.password);
    await this.clickLoginButton();
  }

  async getCookie() {
    await this.page.goto("https://app.upskwela.com/login");
    await this.successfulLogin();
    await this.page.waitForURL("**/communities");
    const cookies = await this.page.context().cookies();

    return cookies;
  }
}

export default LoginPage;
