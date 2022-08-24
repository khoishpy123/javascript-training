import LoginController from "../controllers/login.js";
import LoginModel from "../models/login.js";
import LoginView from "../views/login.js";
//* Import class from controllers, models and views folder.

const loginModel = new LoginModel();
const loginView = new LoginView();
const loginController = new LoginController(loginModel, loginView);
