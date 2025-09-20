import { Page, Locator } from "@playwright/test";

class HomePage {
  readonly page: Page;
  readonly communityDiv: Locator;
  readonly testCommunity: Locator;
  readonly searchCommunity: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchCommunity = this.page.getByRole("textbox", {
      name: "Search communities...",
    });
    this.communityDiv = this.page.getByText(
      "OwnedMineModeratingModActive MembershipsActiveAll JoinedAllFreeGMtest"
    );
    this.testCommunity = this.page.getByRole("link", {
      name: "test community Free GM test",
    });
  }

  async useSearchCommunity(community: string) {
    await this.searchCommunity.fill(community);
  }
}

export default HomePage;
