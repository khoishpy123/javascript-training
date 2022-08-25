
class LoginView {
  constructor() {
    this.btnLogin = document.querySelector(".btn");
  }

  bindUser(getUser) {
    getUser().then((user) => {
      user.forEach((item) => {
        this.btnLogin.addEventListener("click", (e) => {
          e.preventDefault();
          let username = document.getElementById("username").value;
          let password = document.getElementById("password").value;

          if (item.username === username && item.password === password) {
            alert("dang nhap thanh cong");
            window.location.href = "./index.html";
          }
        });
        
      });
    });
  }
}

export default LoginView;
