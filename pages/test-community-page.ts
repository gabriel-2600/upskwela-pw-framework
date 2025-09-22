import { Page, Locator } from "@playwright/test";

class TestCommunity {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}

export default TestCommunity;
