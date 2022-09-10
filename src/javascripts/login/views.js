class LoginView {
  constructor() {
    this.errorMessage = document.getElementById("error-message");
  }

  handleLoginSuccess() {
    return (window.location.href = "./index.html");
  }

  handleLoginError() {
    alert("Please check your username or password!!!");
  }
}

export default LoginView;
