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
    this.View.bindCloseEmployeeModalDel();
    this.View.bindEditEmployeeModal(this.getEmployeeById);
    this.View.bindValidateForm(this.handleCommonEmployee);
    this.View.bindDeleteEmployee(this.handleDeleteEmployee.bind(this));
  }

  handelShowEmployee = async () => {
    const employeesList = await this.Model.getEmployees();
    this.View.displayEmployees(employeesList);
  };

  getEmployeeById = (id) => {
    return this.Model.getEmployeeById(id);
  };

  handleAddNewEmployee = async (body) => {
    await this.Model.addnewEmployee(body);
  };

  handleCommonEmployee = (id, employee) => {
    if (id) {
      this.handelEditEmployee(id, employee);
    } else {
      this.handleAddNewEmployee(employee);
    }
  };

  handleDeleteEmployee = async (id) => {
    await this.Model.deleteEmployee(id);
  };

  handelEditEmployee = async (id, data) => {
    await this.Model.updateEmployee(id, data);
  };
}

export default Controller;
