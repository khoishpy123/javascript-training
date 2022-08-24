class LoginController {
  constructor(loginModel, loginView) {
    this.loginModel = loginModel;
    this.loginView = loginView;
    this.loginView.bindUser(this.loginModel.getUser);
  }
}

export default LoginController;
