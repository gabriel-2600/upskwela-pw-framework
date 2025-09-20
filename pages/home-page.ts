import { Page, Locator } from "@playwright/test";

class HomePage {
  readonly page: Page;
  readonly onwedButton: Locator;
  readonly testCommunity: Locator;
  readonly searchCommunity: Locator;
  readonly noActiveMemberships: Locator;

  constructor(page: Page) {
    this.page = page;
    this.onwedButton = this.page.getByRole("tab", { name: "Owned" });
    this.searchCommunity = this.page.getByRole("textbox", {
      name: "Search communities...",
    });

    this.testCommunity = this.page.getByRole("link", {
      name: "test community Free GM test",
    });
    this.noActiveMemberships = this.page.getByText(
      "No active membershipsYou don'"
    );
  }

  async useSearchCommunity(community: string) {
    await this.searchCommunity.fill(community);
  }
}

export default HomePage;
