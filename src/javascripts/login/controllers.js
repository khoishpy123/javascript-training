class LoginController {
  constructor(loginModel, loginView) {
    this.loginModel = loginModel;
    this.loginView = loginView;

    this.btnLogin = document.getElementById("submit");
    this.getUserPass();
  }

  getUserPass() {
    this.btnLogin.addEventListener("click", (e) => {
      e.preventDefault();
      const valueName = document.getElementById("username").value;
      const valuePass = document.getElementById("password").value;

      this.handleCheckUser(valueName, valuePass);
    });
  }

  async handleCheckUser(username, password) {
    const users = await this.loginModel.getUsers();
    let loginNow;
    users.find((item) => {
      console.log(item);
      if (item.username === username && item.password === password) {
        loginNow = true;
        return loginNow;
      } else {
        loginNow = false;
        return loginNow;
      }
    });
    if (loginNow) {
      this.loginView.handleLoginSuccess();
    } else {
      this.loginView.handleLoginError();
    }
  }
}

export default LoginController;
