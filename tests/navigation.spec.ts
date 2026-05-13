import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.beforeEach(async ({page}) =>{
  const homePage = new HomePage(page);
  await homePage.goto();
});


test('@smoke homepage displays main navigation links', async ({ page }) => {
  const homePage =  new HomePage(page);
  
  await expect(homePage.mainNavigation).toBeVisible();
  
  await expect(homePage.navigationLink('For Practices')).toBeVisible();
  await expect(homePage.navigationLink('For Reps')).toBeVisible();
  await expect(homePage.navigationLink('Resources')).toBeVisible();
  await expect(homePage.navigationLink('Company')).toBeVisible();
  await expect(homePage.navigationLink('Try it Free')).toBeVisible();

});

test('@regression For Practices dropdown displays submenu links', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigationLink('For Practices').hover();

  await expect(homePage.dropdownMenuItem('For Practice', 'Overview')).toBeVisible();
  await expect(homePage.dropdownMenuItem('For Practice', 'Virtual Meetings')).toBeVisible();
  await expect(homePage.dropdownMenuItem('For Practice', 'RxVantage Events')).toBeVisible();
  await expect(homePage.dropdownMenuItem('For Practice', 'For Providers')).toBeVisible();
  await expect(homePage.dropdownMenuItem('For Practice', 'Who Benefits')).toBeVisible();
  await expect(homePage.dropdownMenuItem('For Practice', 'Success Stories')).toBeVisible();
});

test('@regression For Reps dropdown displays submenu links', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigationLink('For Reps').hover();

  await expect(homePage.dropdownMenuItem('For Reps', 'Overview')).toBeVisible();
  await expect(homePage.dropdownMenuItem('For Reps', 'RxVantage Event Boost')).toBeVisible();
  await expect(homePage.dropdownMenuItem('For Reps', 'Video Conferencing')).toBeVisible();
  await expect(homePage.dropdownMenuItem('For Reps', 'Mobile App')).toBeVisible();
  await expect(homePage.dropdownMenuItem('For Reps', 'For Enterprise')).toBeVisible();
});

test('@regression Resources dropdown displays submenu links', async ({ page }) => {
  const homePage = new HomePage(page);
  
  await homePage.navigationLink('Resources').hover();
  
  await expect(homePage.dropdownMenuItem('Resources', 'Resource Library', true)).toBeVisible();
  await expect(homePage.dropdownMenuItem('Resources', 'COVID-19 Resource Library')).toBeVisible();
  await expect(homePage.dropdownMenuItem('Resources', 'Blog')).toBeVisible();
  await expect(homePage.dropdownMenuItem('Resources', 'Events')).toBeVisible();
  await expect(homePage.dropdownMenuItem('Resources', 'Support')).toBeVisible();
});

test('@regression Company dropdown displays submenu links', async ({ page }) => {
  const homePage = new HomePage(page);
  
  await homePage.navigationLink('Company').hover();

  await expect(homePage.dropdownMenuItem('Company', 'About Us')).toBeVisible();
  await expect(homePage.dropdownMenuItem('Company', 'Careers')).toBeVisible();
  await expect(homePage.dropdownMenuItem('Company', 'Security')).toBeVisible();
  await expect(homePage.dropdownMenuItem('Company', 'Contact Us')).toBeVisible();
});

test('@regression Try it Free button leads users to the join page', async ({ page }) => {
  const homePage = new HomePage(page);
  
  await homePage.navigationLink('Try it Free').click();

  await expect(page).toHaveURL(/join/);

  await expect (page.getByRole ('heading', {name: 'For New Industry Representatives'})).toBeVisible();
  await expect (page.getByRole ('heading', {name: 'For New Medical Practices'})).toBeVisible();

});