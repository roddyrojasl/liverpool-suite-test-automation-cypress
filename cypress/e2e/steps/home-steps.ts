import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { HomePage } from '../pages/home-page';

const homePage = new HomePage();

Given('cargo la home page de Liverpool', () => {
  homePage.loadHomePage();
});

When('accedo al catalogo de productos', () => {
  homePage.accederAlCatalogo();
});