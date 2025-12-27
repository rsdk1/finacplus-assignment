import { log } from '../utils/logger.js';

export default class LoginPage{
  constructor(page) {
    this.switchTologinScreenButton = page.locator("#login");
    this.usernameInput = page.locator("#userName");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("#login");
    this.usernameProfileScreen = page.locator("#userName-value");
    this.usernameProfileScreen = page.locator("#userName-value");
    this.logoutButton = page.locator("#submit");
  }

  async login(username, password) {
    await this.switchTologinScreenButton.click();
    await this.usernameInput.fill(username);
    log("Username entered Sucessfully");
    await this.passwordInput.fill(password);
    log("Password entered Sucessfully")
    await this.loginButton.click();
    log("Login button clicked")
  }

  async logout(){
    await this.logoutButton.click();
    log("logout done");
  }

}
