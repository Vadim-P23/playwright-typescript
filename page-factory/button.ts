import test from '@playwright/test';
import { LocatorProps } from '../types/page-factory/component';
import { Component } from './component';

export class Button extends Component {

    get typeOf(): string {
        return 'button';
    }

    async clickOnDocsSiderbarOption(locatorProps: LocatorProps = {}) {
        await test.step(`Clicking ${this.typeOf} with name "${this.componentName}"`, async () => {
          const locator = this.getLocator(locatorProps);
          if( await locator.getAttribute('aria-expanded') === 'false') {
            await locator.click();
          }
            
        });
    }

    // async hover(locatorProps: LocatorProps = {}): Promise<void> {
    //     await test.step(`hovering the ${this.typeOf} with name "${this.componentName}"`, async () => {
    //         const locator = this.getLocator(locatorProps);
    //         await locator.hover();
    //     });
    // }

    async doubleClick(locatorProps: LocatorProps = {}) {
        await test.step(`Double clicking ${this.typeOf} with name "${this.componentName}"`, async () => {
          const locator = this.getLocator(locatorProps);
          await locator.dblclick();
        });
    }
}

