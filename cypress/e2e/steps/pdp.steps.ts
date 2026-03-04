import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { PdpPage } from '../pages/pdp-page';
import { HeaderPage } from '../pages/header-page';

const pdpPage = new PdpPage();
const headerPage = new HeaderPage();

When('agrego el producto al carrito', () => {
  cy.wait(3000);
  pdpPage.escogerTamaño();
  pdpPage.guardarCodigoProducto();
  pdpPage.agregarProductoACarrito();
  pdpPage.compraSinGarantia();
  headerPage.irAlCarrito();
});