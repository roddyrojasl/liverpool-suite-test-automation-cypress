import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { HomePage } from '../pages/home-page';
import { CatalogoPage } from '../pages/catalogo-page';

const homePage = new HomePage();
const catalogoPage = new CatalogoPage();

When('aplico el filtro de mayor descuento', () => {
  catalogoPage.aplicarFiltroMayorDescuento();
});

Then('se muestran los productos con mayor descuento', () => {
  catalogoPage.verificarProductosConMayorDescuento();
});


When('selecciono un producto', () => {
  catalogoPage.seleccionarProductoCatalogo();
});

