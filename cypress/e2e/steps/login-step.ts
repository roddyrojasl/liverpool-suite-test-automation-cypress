import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../pages/login-page';
import { HeaderPage } from '../pages/header-page';

const loginPage = new LoginPage();
const headerPage = new HeaderPage();


When('accedo al login page e ingreso mis credenciales', () => {
  headerPage.irALoginPage();
  loginPage.inputCorreo('roddy@liverpool.com');
  loginPage.inputContrasena('password123');
  //loginPage.crearUsuario();
});

Then('verifico creacion de cuenta exitosa', () => {
  loginPage.verificarCreaccion();
});
