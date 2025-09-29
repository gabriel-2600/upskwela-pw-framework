import { Page, Locator } from "@playwright/test";

class CommunitiesPage {
  // Community Page
  readonly page: Page;
  readonly communityNavBtn: Locator;
  readonly createCommunityBtn: Locator;
  readonly upskwelaCommunity: Locator;
  readonly searchCommunity: Locator;
  readonly noCommunitiesFound: Locator;

  // Create Community Page
  readonly communityNameInput: Locator;
  readonly communitySlugInput: Locator;
  readonly descriptionInput: Locator;
  readonly coverImageUploadTab: Locator;
  readonly uploadDiv: Locator;
  readonly communityGuidelinesCheckbox: Locator;
  readonly ndaCheckbox: Locator;
  readonly createCommunitySubmit: Locator;

  constructor(page: Page) {
    // Community Page
    this.page = page;
    this.communityNavBtn = this.page.getByRole("link", {
      name: "Communities",
      exact: true,
    });
    this.createCommunityBtn = this.page.getByRole("button", {
      name: "Create Community",
    });
    this.searchCommunity = this.page.getByPlaceholder("Search communities...");
    this.upskwelaCommunity = this.page.getByRole("link", {
      name: "Upskwela Community",
    });
    this.noCommunitiesFound = this.page.getByRole("heading", {
      name: "No communities found",
    });

    // Create Community Page
    this.communityNameInput = this.page.getByRole("textbox", {
      name: "Community Name",
    });
    this.communitySlugInput = this.page.getByRole("textbox", {
      name: "web-dev-masters",
    });
    this.descriptionInput = this.page.getByRole("textbox", {
      name: "Tell people what your",
    });
    this.coverImageUploadTab = this.page
      .getByRole("tab", { name: "Upload" })
      .first();

    this.uploadDiv = this.page.locator('input[type="file"]');
    this.communityGuidelinesCheckbox = this.page.getByRole("checkbox", {
      name: "I agree to the Community",
    });
    this.ndaCheckbox = this.page.getByRole("checkbox", {
      name: "I agree to the Non-Disclosure",
    });
    this.createCommunitySubmit = this.page.getByRole("button", {
      name: "Create Community",
    });
  }

  async goToCommunities() {
    await this.communityNavBtn.click();
  }

  async useSearchCommunity(community: string) {
    await this.searchCommunity.fill(community);
  }

  async clickCreateCommunityBtn() {
    await this.createCommunityBtn.click();
  }

  // Create Community
  async fillInputFields(
    // communityName: string,
    communitySlug: string,
    description: string
  ) {
    // await this.communityNameInput.fill(communityName);
    await this.communitySlugInput.fill(communitySlug);
    await this.descriptionInput.fill(description);
  }

  async uploadImage(coverImage: string) {
    await this.coverImageUploadTab.click();
    await this.uploadDiv.setInputFiles(coverImage);
  }

  async checkGuidelinesAndNDA() {
    await this.communityGuidelinesCheckbox.check();
    await this.ndaCheckbox.check();
  }

  async submitCommunity() {
    await this.createCommunitySubmit.click();
  }
}

export default CommunitiesPage;
