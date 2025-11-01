import { Page, Locator } from "@playwright/test";

class MyCommunitiesPage {
  readonly page: Page;
  readonly myCommunitiesNavLink: Locator;
  readonly ownedTab: Locator;
  readonly joinedTab: Locator;
  readonly qaAutomationTesterHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myCommunitiesNavLink = this.page.getByRole("link", {
      name: "My Communities",
      exact: true,
    });
    this.ownedTab = this.page.getByRole("tab", { name: "Owned" });
    this.joinedTab = this.page.getByRole("tab", { name: "Joined" });
    this.qaAutomationTesterHeading = this.page.getByRole("heading", {
      name: "QA Automation Tester",
    });
  }

  async goToMyCommunitiesPage() {
    await this.myCommunitiesNavLink.click();
  }

  async clickOwnedTab() {
    await this.ownedTab.click();
  }

  async clickJoinedTab() {
    await this.joinedTab.click();
  }

  async goToCommunity() {
    await this.qaAutomationTesterHeading.click();
  }
}

export default MyCommunitiesPage;
