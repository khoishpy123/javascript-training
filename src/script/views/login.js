class LoginView {
  constructor() {
    this.btnLogin = document.querySelector(".btn");
  }

  bindUser(getUser) {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    getUser().then((user) => {
      user.forEach((data) => {
        if (data.username == username && data.password == password) {
          alert("dang nhap thanh cong");
          window.location.href = "./index.html";
        }
      });
    });
    // getUser().then((user) => {
    //   this.btnLogin.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     user.forEach((item) => {
    //       let username = document.getElementById("username").value;
    //       let password = document.getElementById("password").value;

    //       if (item.username === username && item.password === password) {
    //         alert("Login successful!");
    //         window.location.href = "./index.html";
    //       }else{
    //         alert("UserName and PassWord dont match!");
    //       }
    //     });

    //   });
    // });
  }
}

export default LoginView;
