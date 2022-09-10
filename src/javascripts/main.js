import LoginController from "./login/controllers.js";
import LoginModel from "./login/models.js";
import LoginView from "./login/views.js";
//* Import class from controllers, models and views folder.

const loginModel = new LoginModel();
const loginView = new LoginView();
// eslint-disable-next-line no-unused-vars
const loginController = new LoginController(loginModel, loginView);
