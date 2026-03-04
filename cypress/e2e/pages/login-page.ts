export class LoginPage {
  public loginOrigin = 'https://login.liverpool.com.mx';
  public correoLabel = '#username';
  public contraseñaLabel = '#password';
  public crearUsuarioButton = '#action';

  
  inputCorreo(email: string): void {
    cy.origin(this.loginOrigin, { args: { email, correoLabel: this.correoLabel } }, ({ email, correoLabel }) => {
      cy.get(correoLabel).type(email);
    });
  }

  inputContrasena(password: string): void {
    cy.origin(this.loginOrigin, { args: { password, contraseñaLabel: this.contraseñaLabel } }, ({ password, contraseñaLabel }) => {
      cy.get(contraseñaLabel).type(password);
    });
  }

  crearUsuario(): void {
    cy.origin(this.loginOrigin, { args: { crearUsuarioButton: this.crearUsuarioButton } }, ({ crearUsuarioButton }) => {
      cy.get(crearUsuarioButton).click();
    });
  }

  verificarCreaccion(): void {
    cy.origin(this.loginOrigin, () => {
      cy.url().should('include', 'login.liverpool.com.mx');
    });
  }
}