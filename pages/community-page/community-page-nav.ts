import { Page, Locator } from "@playwright/test";

class CommunityPageNav {
  readonly page: Page;

  // Side Bar
  readonly discussionTab: Locator;
  readonly chatTab: Locator;
  readonly cousesTab: Locator;
  readonly calendarEventsTab: Locator;
  readonly notificationTab: Locator;

  constructor(page: Page) {
    // Sidebar
    this.page = page;
    this.discussionTab = this.page.getByRole("link", { name: "Discussions" });
    this.chatTab = this.page.getByRole("link", { name: "Chat" });
    this.cousesTab = this.page.getByRole("link", { name: "Courses" }).nth(1);
    this.calendarEventsTab = this.page.getByRole("link", {
      name: "Calendar Events",
    });
    this.notificationTab = this.page.getByRole("link", {
      name: "Notifications",
    });
  }

  async goToChatTab() {
    await this.chatTab.click();
  }

  async goToDiscussionTab() {
    await this.discussionTab.click();
  }
}

export default CommunityPageNav;
