import fetch from "../helpers/service.js";
import path from "../constant.js";
class Model {
  constructor() {
    this.employees = [];
  }

  /**
   * Use API url from fetch import in read data
   * @returns {array} employees
   */

  getEmployees = async () => {
    this.employees = await fetch.getRequest(`/${path.PATH_EMPLOYEE}`);
    return this.employees;
  };

  getEmployeeById = (id) => {
    const data = this.employees.find((item) => item.id == id);
    return data;
  };
}

export default Model;
