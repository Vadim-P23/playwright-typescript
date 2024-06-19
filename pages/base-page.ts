import test, { Page } from '@playwright/test';
import { Navbar } from '../components/navigation/navbar';
import { DocsSidebar } from '../components/navigation/docs-sidebar';
export class BasePage {
    readonly navbar: Navbar;
    readonly docsSidebar: DocsSidebar;

    constructor(public page: Page) {
        this.navbar = new Navbar(page);
        this.docsSidebar = new DocsSidebar(page);
    }

    async visit(url: string): Promise<void> {
        await test.step(`Opening the url ${url}`, async () => {
            await this.page.goto(url, {waitUntil: 'networkidle'})
        });
    }

    async reload(): Promise<void> {
        const currentUrl = this.page.url();
        await test.step(`Reloading page with ${currentUrl}`, async () => {
            this.page.reload({waitUntil: 'domcontentloaded'});
        });
    }
}
