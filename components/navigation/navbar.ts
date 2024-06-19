import { Page } from '@playwright/test';
import { Button } from '../../page-factory/button';
import { Link } from '../../page-factory/link';
import { SearchModal } from '../modals/search-modal';
import { LanguagesMenu } from '../modals/languages-menu';

export class Navbar {
    readonly searchModal: SearchModal;
    readonly languagesMenu: LanguagesMenu;

    private readonly apiLink: Link;
    private readonly docsLink: Link;
    private readonly searchButton: Button;
    private readonly languageDropdown: Button;
    private readonly toggleButton: Button;

    constructor(public page: Page) {
        this.searchModal = new SearchModal(page);
        this.languagesMenu = new LanguagesMenu(page);

        this.apiLink = new Link({ page, locator: ":text-is('API')", name: 'API' });
        this.docsLink = new Link({ page, locator: ":text-is('Docs')", name: 'Docs' });
        this.searchButton = new Button({ page, locator: 'button.DocSearch-Button', name: 'Search' });
        this.languageDropdown = new Button({ page, locator: '[role="button"][class="navbar__link"]', name: 'Language Menu' });
        this.toggleButton = new Button({ page, locator: 'button[class="clean-btn toggleButton_gllP"]', name: 'Dark mode' });
    }

    async visitDocs(): Promise<void> {
        await this.docsLink.click();
    }

    async visitApi(): Promise<void> {
        await this.apiLink.click();
    }

    async hoverLanguageMenu(): Promise<void> {
        await this.languageDropdown.hover()
    }

    async openSearch(): Promise<void> {
        await this.searchButton.shouldBeVisible();
        await this.searchButton.hover();
        await this.searchButton.click();
        await this.searchModal.modalIsOpened();
    }

    async assertCorrectOptionSelected(language: string): Promise<void> {
        this.languageDropdown.shouldBeVisible();
        this.languageDropdown.shouldHaveText(language ,{ language });
    }

    async changeTheme(mode: string) {
        this.toggleButton.click();
        this.toggleButton.validateTheme({}, mode);
    }
}