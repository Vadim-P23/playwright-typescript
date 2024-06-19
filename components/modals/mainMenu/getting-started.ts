import { DocsSidebar } from "../../navigation/docs-sidebar"
import { Link } from '../../../page-factory/link';
import { Page } from "@playwright/test";


export class GettingStarted extends DocsSidebar{

    private readonly installationLink: Link;
    private readonly writingTests: Link;

    constructor(public page: Page) {
        super(page);
        this.installationLink = new Link({ page, locator: ":text-is('Getting started - VS Code')", name: 'Inslallation' });
        this.writingTests = new Link({ page, locator: ":text-is('Writing tests')", name: 'Writing tests' });
    }

    async visitInstallationLink(): Promise<void> {
        await this.installationLink.click();
    }

    async visitWritingTests(): Promise<void> {
        await this.writingTests.click();
    }

    

   



}