import {type Locator, type Page} from '@playwright/test';

export class HomePage {
    readonly page: Page;

    //// Centralized navigation locator reused across multiple tests
    readonly mainNavigation: Locator; 

    constructor(page: Page) {
        this.page = page;

        // Role-based locator scoped to the main site navigation
        // Using semantic locators improves readability and reduces brittle selectors
        this.mainNavigation = page.getByRole('navigation', {
            name: "Main navigation"
        })
    }

    // Common navigation step shared across homepage tests
    async goto() {
        await this.page.goto('https://www.rxvantage.com/')
    }

    // Reusable helper for locating top navigation links
    navigationLink(name: string) {
        return this.mainNavigation.getByRole('link', {name});
    }

    // Reusable helper for locating dropdown menus by accessible name
    dropdownMenu(name: string) {
        return this.page.getByRole('menu', { name });
    }
    
    // Reusable helper for locating submenu items within dropdown menus
    dropdownMenuItem(menuName: string, itemName: string, exact = false) {
        return this.dropdownMenu(menuName).getByRole('menuitem', {
            name: itemName, exact
        });
    }

}