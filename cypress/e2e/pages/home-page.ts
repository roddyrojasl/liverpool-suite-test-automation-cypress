export class HomePage {
  public homeUrl = 'https://www.liverpool.com.mx';
  public buscadorLabel = '[id=":Rctd9d9utsq:-input"]';
  public resultadoDeBusquedaList = '[data-testid*="product-"]:first';
  public catalogoButton = 'a[href="/tienda/tablets/cat580066"]';
  public botonNoGracias = 'button.complementaryService-modal__buttons__conatiner__items:contains("No, gracias")';

  loadHomePage(): void {
    cy.visit(this.homeUrl);
  }


  accederAlCatalogo(): void {
    cy.get(this.catalogoButton)
      .should('be.visible')
      .click({ force: true });
  
  }
}
