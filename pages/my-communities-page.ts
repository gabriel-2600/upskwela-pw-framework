import { Page, Locator } from "@playwright/test";

class MyCommunitiesPage {
  readonly page: Page;
  readonly ownedTab: Locator;
  readonly joinedTab: Locator;
  readonly qaAutomationTesterHeading: Locator;
  readonly webpagePortfolioHeading: Locator;
  readonly headerOne: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ownedTab = this.page.getByRole("tab", { name: "Owned" });
    this.joinedTab = this.page.getByRole("tab", { name: "Joined" });
    this.qaAutomationTesterHeading = this.page.getByRole("heading", {
      name: "QA Automation Tester",
    });
    this.webpagePortfolioHeading = this.page.getByRole("heading", {
      name: "Webpage Portfolio",
    });
    this.headerOne = this.page.locator("h1");
  }

  async clickOwnedTab() {
    await this.ownedTab.click();
  }

  async clickJoinedTab() {
    await this.joinedTab.click();
  }

  async goToQAAutomationTester() {
    await this.qaAutomationTesterHeading.click();
  }

  async goToWebpagePortfolio() {
    await this.webpagePortfolioHeading.click();
  }
}

export default MyCommunitiesPage;
