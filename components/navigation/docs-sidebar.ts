import { Page } from '@playwright/test';
import { Button } from '../../page-factory/button';
import { Link } from '../../page-factory/link';

export class DocsSidebar {

    private readonly gettingStarted: Button;
    private readonly gettingStartedVSCode: Link;

    constructor(public page: Page) {
        this.gettingStarted = new Button({ page, locator: ":text-is('Getting Started')", name: 'Getting Started' });
        this.gettingStartedVSCode = new Link({ page, locator: ":text-is('Getting started - VS Code')", name: 'Getting Started - VS Code' });
    }

    async visitGettingStarted(): Promise<void> {
        this.gettingStarted.clickOnDocsSiderbarOption();
    }

    async VisitgettingStartedVSCode(): Promise<void> {
        this.gettingStartedVSCode.click();
    }





}