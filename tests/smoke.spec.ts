import { test, expect } from '@playwright/test';

test('@smoke homepage displays main navigation links', async ({ page }) => {
  await page.goto('https://www.rxvantage.com/');

  const mainNavigation = page.getByRole('navigation', { name: 'Main navigation' });
  
  await expect(mainNavigation).toBeVisible();
  
  await expect(mainNavigation.getByRole('link', { name: 'For Practices' })).toBeVisible();
  await expect(mainNavigation.getByRole('link', { name: 'For Reps' })).toBeVisible();
  await expect(mainNavigation.getByRole('link', { name: 'Resources' })).toBeVisible();
  await expect(mainNavigation.getByRole('link', { name: 'Company' })).toBeVisible();
  await expect(mainNavigation.getByRole('link', { name: 'Try it Free' })).toBeVisible();

});