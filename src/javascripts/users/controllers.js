class Controller {
  constructor(Model, View) {
    this.Model = Model;
    this.View = View;
    this.init();
  }

  init() {
    this.handelShowEmployee();
    this.View.bindShowEmployeeModal();
    this.View.bindCloseEmployeeModal();
    this.View.bindEditEmployeeModal(this.getEmployeeById);
  }

  async handelShowEmployee() {
    const employeesList = await this.Model.getEmployees();
    this.View.displayEmployees(employeesList);
  }

  getEmployeeById = (id) => {
    return this.Model.getEmployeeById(id);
  };
}

export default Controller;
