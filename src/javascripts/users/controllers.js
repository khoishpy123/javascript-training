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
    this.View.bindShowEmployeeModalDel();
    this.View.bindEditEmployeeModal(this.getEmployeeById);
    this.View.bindValidateForm(this.handleAddNewEmployee.bind(this));
    this.View.bindDeleteEmployee(this.handleDeleteEmployee.bind(this));
  }

  handelShowEmployee = async () => {
    const employeesList = await this.Model.getEmployees();
    this.View.displayEmployees(employeesList);
  };

  // onEmployeeListChanged = (employees) => {
  //   this.View.displayEmployees(employees);
  // };

  getEmployeeById = (id) => {
    return this.Model.getEmployeeById(id);
  };

  handleAddNewEmployee = async (body) => {
    await this.Model.addnewEmployee(body);
  };

  handleDeleteEmployee = async (id) => {
    await this.Model.deleteEmployee(id);
  };
}

export default Controller;
