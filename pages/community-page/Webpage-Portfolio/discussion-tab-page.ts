import { Page, Locator } from "@playwright/test";

class DiscussionTab {
  readonly page: Page;
  readonly post: Locator;
  readonly postCard: Locator;
  readonly likeBtn: Locator;
  readonly likeCount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.post = this.page.getByText("Ariel Sueño");
    this.postCard = this.page.locator(".text-card-foreground.bg-card").nth(0);
    this.likeBtn = this.postCard.getByRole("button").nth(1);
    this.likeCount = this.likeBtn.locator(".font-medium");
  }

  async clickLikeBtn() {
    await this.post.click();
    await this.likeBtn.click();
  }
}

export default DiscussionTab;
