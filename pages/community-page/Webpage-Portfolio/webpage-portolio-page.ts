import { Page, Locator } from "@playwright/test";
import DiscussionTab from "./discussion-tab-page";

class WebpagePortfolio {
  readonly page: Page;
  readonly discussionTab: DiscussionTab;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.discussionTab = new DiscussionTab(page);
    this.heading = this.page.getByRole("heading", {
      name: "Webpage Portfolio",
    });
  }
}

export default WebpagePortfolio;
