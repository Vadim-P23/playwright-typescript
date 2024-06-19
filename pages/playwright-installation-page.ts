import { BasePage } from './base-page';
import { Page } from '@playwright/test';
import { Title } from '../page-factory/title';
import { LocatorProps } from '../types/page-factory/component';

export class PlaywrightInstallationPage extends BasePage {

    private readonly installingPlaywrightPytestTitle: Title;

    constructor(public page: Page) {
        super(page);

    this.installingPlaywrightPytestTitle = new Title({page, locator: `h2#installing-playwright-pytest`, name: 'title'});
    }

    async titleInstallationPresent(title: string): Promise<void> {
        await this.installingPlaywrightPytestTitle.shouldBeVisible();
        await this.installingPlaywrightPytestTitle.shouldHaveText(title, {});
        
    }

}