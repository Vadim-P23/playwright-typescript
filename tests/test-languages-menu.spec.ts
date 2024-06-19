
import { PlaywrightHomePage } from '../pages/playwright-home-page';
import { searchTest as test } from './tests';


test.beforeEach(async ({ playwrightHomePage}) => {
    await playwrightHomePage.visit('/');
});

test(`Testing languages dropdown menu option on playwright documentation page`, async ({ playwrightHomePage, playwrightInstallationPage }) => {
    await playwrightHomePage.navbar.visitDocs();
    await playwrightHomePage.navbar.hoverLanguageMenu();
    await playwrightHomePage.navbar.languagesMenu.selectOption('Python');
    await playwrightInstallationPage.titleInstallationPresent("Installing Playwright Pytest");
    await playwrightInstallationPage.navbar.languagesMenu.assertSelectedOption('Python');
});

test(`Testing switch beetween light and dark mode`, async({playwrightHomePage}) => {
    await playwrightHomePage.navbar.changeTheme('dark mode');
})


    