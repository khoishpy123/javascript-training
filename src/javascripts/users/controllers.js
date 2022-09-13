class Controller {
  constructor(Model, View) {
    this.Model = Model;
    this.View = View;
    this.init();
  }

  init() {
    this.handelShowEmployee();
  }

  async handelShowEmployee() {
    const employeesList = await this.Model.getEmployees();
    this.View.displayEmployees(employeesList);
  }
}

export default Controller;
