import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) =>{
  await page.goto('https://www.rxvantage.com/');
});


test('@smoke homepage displays main navigation links', async ({ page }) => {
  const mainNavigation = page.getByRole('navigation', { name: 'Main navigation' });
  
  await expect(mainNavigation).toBeVisible();
  
  await expect(mainNavigation.getByRole('link', { name: 'For Practices' })).toBeVisible();
  await expect(mainNavigation.getByRole('link', { name: 'For Reps' })).toBeVisible();
  await expect(mainNavigation.getByRole('link', { name: 'Resources' })).toBeVisible();
  await expect(mainNavigation.getByRole('link', { name: 'Company' })).toBeVisible();
  await expect(mainNavigation.getByRole('link', { name: 'Try it Free' })).toBeVisible();
});

test('@regression For Practices dropdown displays submenu links', async ({ page }) => {
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

test('@regression For Reps dropdown displays submenu links', async ({ page }) => {
  const mainNavigation = page.getByRole('navigation', { name: 'Main navigation' });
  const forRepsDropdown = mainNavigation.getByRole('link', { name: 'For Reps' });
  
  await forRepsDropdown.hover();

  const forRepsMenu = page.getByRole('menu', { name: 'For Reps' });

  await expect(forRepsMenu.getByRole('menuitem', { name: 'Overview' })).toBeVisible();
  await expect(forRepsMenu.getByRole('menuitem', { name: 'RxVantage Event Boost' })).toBeVisible();
  await expect(forRepsMenu.getByRole('menuitem', { name: 'Video Conferencing' })).toBeVisible();
  await expect(forRepsMenu.getByRole('menuitem', { name: 'Mobile App' })).toBeVisible();
  await expect(forRepsMenu.getByRole('menuitem', { name: 'For Enterprise' })).toBeVisible();
});

test('@regression Resources dropdown displays submenu links', async ({ page }) => {
  const mainNavigation = page.getByRole('navigation', { name: 'Main navigation' });
  const resourcesDropdown = mainNavigation.getByRole('link', { name: 'Resources' });
  
  await resourcesDropdown.hover();

  const resourcesMenu = page.getByRole('menu', { name: 'Resources' });

  await expect(resourcesMenu.getByRole('menuitem', { name: 'Resource Library', exact: true })).toBeVisible();
  await expect(resourcesMenu.getByRole('menuitem', { name: 'COVID-19 Resource Library' })).toBeVisible();
  await expect(resourcesMenu.getByRole('menuitem', { name: 'Blog' })).toBeVisible();
  await expect(resourcesMenu.getByRole('menuitem', { name: 'Events' })).toBeVisible();
  await expect(resourcesMenu.getByRole('menuitem', { name: 'Support' })).toBeVisible();
});

test('@regression Company dropdown displays submenu links', async ({ page }) => {
  const mainNavigation = page.getByRole('navigation', { name: 'Main navigation' });
  const companyDropdown = mainNavigation.getByRole('link', { name: 'Company' });
  
  await companyDropdown.hover();

  const companyMenu = page.getByRole('menu', { name: 'Company' });

  await expect(companyMenu.getByRole('menuitem', { name: 'About Us'})).toBeVisible();
  await expect(companyMenu.getByRole('menuitem', { name: 'Careers' })).toBeVisible();
  await expect(companyMenu.getByRole('menuitem', { name: 'Security' })).toBeVisible();
  await expect(companyMenu.getByRole('menuitem', { name: 'Contact Us' })).toBeVisible();
});

test('@regression Try it Free button lead users to the join page', async ({ page }) => {
  const mainNavigation = page.getByRole('navigation', { name: 'Main navigation' });
  await mainNavigation.getByRole('link', { name: 'Try it Free' }).click();

  await expect(page).toHaveURL(/join/);

  await expect (page.getByRole ('heading', {name: 'For New Industry Representatives'})).toBeVisible();
  await expect (page.getByRole ('heading', {name: 'For New Medical Practices'})).toBeVisible();

});