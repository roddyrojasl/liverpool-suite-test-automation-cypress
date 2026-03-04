import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { CarritoPage } from '../pages/carrito-page';

const carritoPage = new CarritoPage();

Then('se muestra el producto en el carrito', () => {
  carritoPage.verificarProductoEnCarrito();
});
