export class CarritoPage {
  public productoEnCarrito = (skuId: string) => `.o-myBag[id="${skuId}"]`;

  verificarProductoEnCarrito(): void {
    const skuId = Cypress.env('codigoProducto');
    cy.get(this.productoEnCarrito(skuId), { timeout: 10000 }).should('exist');
  }
}