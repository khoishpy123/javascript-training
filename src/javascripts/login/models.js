import path from "../constant.js";
import fetch from "../helpers/service.js";

class LoginModel {
  constructor() {}

  /**
   * Call API from the helper to get all users
   * @returns {array} user
   */
  async getDataOfUser() {
    const data = await fetch.getRequest(`/${path.PATH_USER}`);

    return data;
  }
}

export default LoginModel;
