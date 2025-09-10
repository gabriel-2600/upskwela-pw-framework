import { Page } from "@playwright/test";

class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}

export default HomePage;
