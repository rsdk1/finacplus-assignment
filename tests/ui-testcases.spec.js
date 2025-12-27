import { test, expect } from '@playwright/test';
import BooksPage from '../pages/booksPage';
import LoginPage from '../pages/loginPage';
import { encrypt, decrypt } from '../utils/cryptoUtil';
import { log } from '../utils/logger.js';
const fs = require('fs');


test.describe('UI assignment: DemoQA', () => {

  var booksPage, loginPage;

  test.beforeEach(async ({ page }, testInfo) => {
    log(`Test: ${testInfo.title} started`);
    log('Navigating to application');
    await page.goto("");
    booksPage = new BooksPage(page);
    loginPage = new LoginPage(page);
  });

  test.afterEach(async ({ }, testInfo) => {
    log(`Test: ${testInfo.title} completed`);
  });

  test('Verify Book Store page navigation and user login', async ({ page }, testInfo) => {

    log('Navigating to application');
    log('Opening Book Store');
    await booksPage.bookStoreButton.click();

    log('Logging in');
    const username = decrypt(process.env.USERNAME);
    await loginPage.login(username, decrypt(process.env.PASSWORD));

    log('Verifying logged-in username');
    await expect(loginPage.usernameProfileScreen).toHaveText(username);

    log('Verifying logout button visibility');
    await expect(loginPage.logoutButton).toBeVisible();

    log("Navigating to Book Store");
    await booksPage.bookStore.click();

    log(`Searching for book: ${process.env.SEARCHINPUT}`);
    await booksPage.search(process.env.SEARCHINPUT);

    log("Verifying search result name");
    await expect(booksPage.searchResultName).toHaveText(process.env.SEARCHINPUT);

    log("Fetching book details from UI");
    const title = await booksPage.searchResultName.textContent();
    const author = await booksPage.authorName.textContent();
    const publisher = await booksPage.publisherName.textContent();

    log(`Book Title: ${title}`);
    log(`Author: ${author}`);
    log(`Publisher: ${publisher}`);

    const content = `
Title: ${title}
Author: ${author}
Publisher: ${publisher}
`;

    log("Writing book details into file: bookDetails.txt");
    fs.writeFileSync('bookDetails.txt', content);

    log("Book details written to file successfully");

    log("Logging out from application");
    await loginPage.logout();


    log(`Test : ${testInfo.title} passed`);
  });



});
