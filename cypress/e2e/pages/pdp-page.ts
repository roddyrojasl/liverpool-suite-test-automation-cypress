export class PdpPage {
  public tituloProductolabel = 'h1.a-product__information--title';
  public codigoProductoLabel = '.product-header-subcontainer-information--code span';
  public agregarACarritoButton = 'button:contains("Agregar a mi bolsa")';
  public tamañoContainer = '.attributeAccordionContainer.size';
  public tamañoButton = '#size-list-container button';
  private codigoProductAVerificar: string = '';

  verificarProductoPorNombre(nombreProducto: string): void {
    cy.get(this.tituloProductolabel).should('contain', nombreProducto).should('be.visible');
  }

  verificarProductoPorCodigo(codigoProducto: string): void {
    cy.get(this.codigoProductoLabel).should('contain', codigoProducto).should('be.visible');
  }

  guardarCodigoProducto(): void {
    cy.get(`${this.tamañoButton}.active`).invoke('attr', 'data-skuid').then((skuId) => {
      Cypress.env('codigoProducto', skuId?.trim());
    });
  }

  obtenerCodigoGuardado(): string {
    return this.codigoProductAVerificar;
  }

  agregarProductoACarrito(): void {
    cy.get(this.agregarACarritoButton, { timeout: 10000 }).click();
  }

  compraSinGarantia(): void {
    cy.get('body').then(($body) => {
      if ($body.find('button:contains("No, gracias")').length > 0) {
        cy.contains('button', 'No, gracias').click({ force: true });
      }
    });
  }

  escogerTamaño(): void { 
    cy.get('body').then(($body) => {
      if ($body.find(this.tamañoContainer).length > 0) {
        cy.get(this.tamañoButton ).first().scrollIntoView().click({ force: true });
      }
    });
  }
}

