import { Page, Locator } from "@playwright/test";

class HomePage {
  readonly page: Page;
  readonly onwedButton: Locator;
  readonly testCommunity: Locator;
  readonly searchCommunity: Locator;
  readonly noCommunitiesFound: Locator;

  constructor(page: Page) {
    this.page = page;
    this.onwedButton = this.page.getByRole("tab", { name: "Owned" });
    this.searchCommunity = this.page.getByPlaceholder("Search communities...");
    this.testCommunity = this.page.getByRole("link", {
      name: "test community Free GM test",
    });
    this.noCommunitiesFound = this.page.getByRole("heading", {
      name: "No communities found",
    });
  }

  async useSearchCommunity(community: string) {
    await this.searchCommunity.fill(community);
  }
}

export default HomePage;
