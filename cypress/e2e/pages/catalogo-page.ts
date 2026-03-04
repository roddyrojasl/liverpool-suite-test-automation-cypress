export class CatalogoPage {

  public filtrosDescuento = '.m-radio .a-radio__input';
  public etiquetaFiltro = 'label[id*="discountPercentage"]';
  public productosCatalogo = '.m-plp-card-container';
  public carrito = '[data-testid*="cart"]';



  aplicarFiltroMayorDescuento(): void {
    cy.get(this.etiquetaFiltro).then(($labels) => {
      let maxIndex = 0;
      let maxValue = 0;

      $labels.each((index, label) => {
        const match = Cypress.$(label).text().match(/(\d+(?:\.\d+)?)/);
        if (match) {
          const valor = parseFloat(match[1]);
          if (valor > maxValue) {
            maxValue = valor;
            maxIndex = index;
          }
        }
      });

      cy.get(this.filtrosDescuento).eq(maxIndex).click();
    });
  }

  verificarProductosConMayorDescuento(): void {
    cy.get(this.productosCatalogo).should('exist');
  }

  seleccionarProductoCatalogo(): void {
    cy.get(this.productosCatalogo).should('exist').first().click();
  }

  verificarProductoEnCarrito(): void {
    cy.get(this.carrito).should('be.visible');
  }
}
