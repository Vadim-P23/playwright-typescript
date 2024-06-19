import { Fixtures } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/playwright-home-page';
import { PlaywrightLanguagesPage } from '../pages/playwright-languages-page';
import { ContextPagesFixture } from './context-pages';
import { PlaywrightInstallationPage } from '../pages/playwright-installation-page';

export type PlaywrightPagesFixture = {
    playwrightHomePage: PlaywrightHomePage;
    playwrightLanguagesPage: PlaywrightLanguagesPage;
    playwrightInstallationPage: PlaywrightInstallationPage
};

export const playwrightPagesFixture: Fixtures<PlaywrightPagesFixture, ContextPagesFixture> = {
    playwrightHomePage: async ({ contextPage }, use) => {
        const playwrightHomePage = new PlaywrightHomePage(contextPage);

        await use(playwrightHomePage);
    },

    playwrightLanguagesPage: async ({ contextPage }, use) => {
        const playwrightLanguagesPage = new PlaywrightLanguagesPage(contextPage);
    
        await use(playwrightLanguagesPage);
    },

    playwrightInstallationPage: async ({ contextPage }, use) => {
        const playwrightInstallationPage = new PlaywrightInstallationPage(contextPage);
    
        await use(playwrightInstallationPage);
    },


}; 