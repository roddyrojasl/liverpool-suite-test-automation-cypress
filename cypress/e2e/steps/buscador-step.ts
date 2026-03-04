import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { PdpPage } from '../pages/pdp-page';
import { HeaderPage } from '../pages/header-page';

const headerPage = new HeaderPage();
const pdpPage = new PdpPage();

let nombreProducto: string;
let codigoProducto: string;

When('busco el producto por nombre', () => {
  nombreProducto = 'Laptop Hp 14-dq6015dx 14 pulgadas HD intel celeron intel UHD 4 GB RAM 128 GB SSD';
  headerPage.buscarProducto(nombreProducto);
});

When('busco el producto por codigo', () => {
  codigoProducto = '1191141421';
  headerPage.buscarProducto(codigoProducto);
});

Then('se muestra el producto buscado por nombre', () => {
  pdpPage.verificarProductoPorNombre(nombreProducto);
});

Then('se muestra el producto buscado por codigo', () => {
  pdpPage.verificarProductoPorCodigo(codigoProducto);
});
