import { log } from '../utils/logger.js';

export default class BooksPage{
  constructor(page) {
    this.bookStoreButton = page.locator("//*[text()='Book Store Application']");
    this.searchBookField = page.locator("#searchBox");
    this.bookStore = page.locator('//span[text()="Book Store"]');
    this.searchResultName = page.locator('//span[@class="mr-2"]//a');
    this.authorName = page.locator('//span[@class="mr-2"]//parent::div//parent::div[@class="rt-td"]//following-sibling::div[1]');
    this.publisherName = page.locator('//span[@class="mr-2"]//parent::div//parent::div[@class="rt-td"]//following-sibling::div[2]');
  }

 async search(bookName) {
    await this.searchBookField.fill(bookName);
    log("Search Completed");
  }

}
