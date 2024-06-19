import { Fixtures, Page, PlaywrightTestArgs } from '@playwright/test';
import { mockStaticResourses } from '../utils/mocks/static-mock';

export type ContextPagesFixture = {
  contextPage: Page;
};

export const contextPagesFixture: Fixtures<ContextPagesFixture, PlaywrightTestArgs> = {
  contextPage: async ({ page }, use) => {
    await mockStaticResourses(page);

    await use(page);
  }
};