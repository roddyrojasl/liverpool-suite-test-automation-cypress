export class HeaderPage {
  public carritoButton = 'button.a-header__bag';
  public loginButton = '[data-testid="blt26617d4f2e17657d-header-menu-dropdown-button"]';
  public buscadorLabel = '[id=":Rctd9d9utsq:-input"]';
  public resultadoDeBusquedaList = '[data-testid*="product-"]:first';


  irALoginPage(): void {
    cy.get(this.loginButton).click();
  }

  buscarProducto(nombreProducto: string): void {
    cy.get(this.buscadorLabel).type(nombreProducto);
    cy.wait(2000);
    cy.get(this.resultadoDeBusquedaList).should('be.visible').click();
  }

  irAlCarrito(): void {
    cy.get(this.carritoButton).click();
  }
}