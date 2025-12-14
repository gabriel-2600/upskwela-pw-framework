import { Page, Locator } from "@playwright/test";

class ChatTab {
  // Chat Tab
  readonly page: Page;
  readonly searchCommunityChat: Locator;
  readonly manualTestterChat: Locator;
  readonly chatInputField: Locator;

  // Chat Div
  readonly chatDiv: Locator;
  readonly chatDivMenu: Locator;
  readonly editMenuItem: Locator;
  readonly deleteMenuItem: Locator;
  readonly editChatInputField: Locator;
  readonly saveChatEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    // Chat Tab
    this.searchCommunityChat = this.page.getByRole("textbox", {
      name: "Search community chats...",
    });
    this.manualTestterChat = this.page.getByRole("heading", {
      name: "Manual Tester",
    });
    this.chatInputField = this.page.getByRole("textbox", {
      name: "Type a message...",
    });

    // Chat Div
    this.chatDiv = this.page.locator(".rounded-2xl.bg-blue-600").first();
    this.chatDivMenu = this.page
      .locator(".inline-flex")
      .locator('[aria-haspopup="menu"]')
      .locator(".lucide-ellipsis")
      .first();
    this.editMenuItem = this.page.getByRole("menuitem", { name: "Edit" });
    this.deleteMenuItem = this.page.getByRole("menuitem", { name: "Delete" });
    this.editChatInputField = this.page
      .getByRole("textbox")
      .filter({ hasText: "test" })
      .first();
    this.saveChatEdit = this.page.getByRole("button", { name: "Save" });
  }

  async goToManualTesterChat() {
    await this.manualTestterChat.click();
  }

  async sendMessage(message: string) {
    await this.chatInputField.fill(message);
    await this.page.keyboard.press("Enter");
  }

  async deleteChat() {
    await this.chatDiv.hover();
    await this.chatDivMenu.click();

    await this.deleteMenuItem.click();
  }

  async editChat(message: string) {
    await this.chatDiv.hover();
    await this.chatDivMenu.click();

    await this.editMenuItem.click();
    await this.editChatInputField.fill(message);
    await this.saveChatEdit.click();
  }
}

export default ChatTab;
