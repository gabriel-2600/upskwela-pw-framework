import { Page, Locator } from "@playwright/test";

class DiscussionTab {
  readonly page: Page;
  readonly post: Locator;
  readonly likeBtn: Locator;
  readonly likeCount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.post = this.page.getByText(
      "Ariel Sueño4 months agoSharing my Portfoliohttps://portfolio-new-theta-three."
    );
    this.likeBtn = this.post.locator(".lucide.lucide-thumbs-up ");
    this.likeCount = this.likeBtn.locator("+ span");
  }

  async clickLikeBtn() {
    await this.likeBtn.click();
  }
}

export default DiscussionTab;
