import path from "../constant.js";
import fetch from "../helpers/service.js";

class LoginModel {
  constructor() {}

  /**
   * Use API url from fetch import in read data
   * @returns {array} user
   */
  async getUsers() {
    const data = await fetch.get(`/${path.PATH_USER}`);

    return data;
  }
}

export default LoginModel;
