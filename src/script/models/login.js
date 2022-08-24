import path from "../constants/api.js";
import fetch from "../helpers/service.js";
class LoginModel {
  constructor() {}

  /**
   * Use API url from fetch import in read data
   * @returns {array}
   */
  async getUser() {
    const user = await fetch.get(`/${path.PATH_USER}`);
    return user;
  }
}

export default LoginModel;
