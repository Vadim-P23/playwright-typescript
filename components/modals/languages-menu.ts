import { Link } from "../../page-factory/link";
import { Page } from '@playwright/test';
import { LocatorProps } from "../../types/page-factory/component";

type Options = {
    menuOption: string
}

export class LanguagesMenu {
    private readonly languageOption: Link;
    // private readonly python: ListItem;
    // private readonly java: ListItem;
    // private readonly dotNET: ListItem;

    constructor(public page: Page) {

        this.languageOption = new Link({page, locator: 'ul[class="dropdown__menu"] :text-is("{language}")', name: 'Language menu option' });
    //     this.python = new ListItem({page, locator: 'a.dropdown__link :text-is("Python")', name: 'Python' });
    //     this.java = new ListItem({page, locator: 'a.dropdown__link :text-is("Java")', name: 'Java' });
    //     this.dotNET = new ListItem({page, locator: 'a.dropdown__link :text-is(".NET")', name: '.NET' });
     }

     async hoverOption(language: string): Promise<void> {
        this.languageOption.hover({language});
    }

    async selectOption(language: string): Promise<void> {
        this.languageOption.click({language});
    }

    async assertSelectedOption(language: string): Promise<void> {
        this.languageOption.shouldHaveText(language, { language });
    }

    
}