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

test('@regression For Practices dropdown displays submenu links', async ({ page }) => {
  await page.goto('https://www.rxvantage.com/');

  const mainNavigation = page.getByRole('navigation', { name: 'Main navigation' });
  const forPracticesDropdown = mainNavigation.getByRole('link', { name: 'For Practices' });
  
  await forPracticesDropdown.hover();

  const forPracticesMenu = page.getByRole('menu', { name: 'For Practices' });

  await expect(forPracticesMenu.getByRole('menuitem', { name: 'Overview' })).toBeVisible();
  await expect(forPracticesMenu.getByRole('menuitem', { name: 'Virtual Meetings' })).toBeVisible();
  await expect(forPracticesMenu.getByRole('menuitem', { name: 'RxVantage Events' })).toBeVisible();
  await expect(forPracticesMenu.getByRole('menuitem', { name: 'For Providers' })).toBeVisible();
  await expect(forPracticesMenu.getByRole('menuitem', { name: 'Who Benefits' })).toBeVisible();
  await expect(forPracticesMenu.getByRole('menuitem', { name: 'Success Stories' })).toBeVisible();

});