import fetch from "../helpers/service.js";
import path from "../constant.js";
class Model {
  constructor() {
    this.employees = [];
  }

  getEmployees = async () => {
    this.employees = await fetch.getRequest(`/${path.PATH_EMPLOYEE}`);
    return this.employees;
  };

  getEmployeeById = (id) => {
    const data = this.employees.find((item) => item.id == id);
    return data;
  };

  addnewEmployee = async (data) => {
    const body = {
      id: data.id,
      name: data.name,
      surname: data.surname,
      email: data.email,
      phone: data.phone,
      salary: data.salary,
    };
    const employee = await fetch.createRequest(`/${path.PATH_EMPLOYEE}`, body);
    this.employees.push(employee);
    return employee;
  };

  deleteEmployee = async (id) => {
    const employee = await fetch.deleteRequest(`/${path.PATH_EMPLOYEE}/${id}`);
    const index = this.employees.findIndex((item) => item.id === employee.id);
    this.employees.splice(index, 1);
    return employee;
  };

  updateEmployee = async (id, data) => {
    const body = {
      id: data.id,
      name: data.name,
      surname: data.surname,
      email: data.email,
      phone: data.phone,
      salary: data.salary,
    };
    const employee = await fetch.updateRequest(
      `/${path.PATH_EMPLOYEE}/${id}`,
      body,
    );
    const index = this.employees.findIndex((item) => item.id === id);
    this.employees.splice(index, 1, employee);
    return employee;
  };
}

export default Model;
