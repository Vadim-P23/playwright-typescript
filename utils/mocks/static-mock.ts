import { Page } from '@playwright/test';

export const mockStaticResourses = async (page: Page): Promise<void> => {
  await page.route('**/*.{mp3}', (route) => route.abort());
};
//ico,png,jpg,mp3,woff,woff2

