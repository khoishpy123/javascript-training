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
    this.View.bindValidateForm(this.handleAddNewEmployee.bind(this));
  }

  async handelShowEmployee() {
    const employeesList = await this.Model.getEmployees();
    this.View.displayEmployees(employeesList);
  }

  onEmployeeListChanged = (employees) => {
    this.View.displayEmployees(employees);
  };

  getEmployeeById = (id) => {
    return this.Model.getEmployeeById(id);
  };

  async handleAddNewEmployee(body){
    try {
      await this.Model.addnewEmployee(body);
    } catch (error) {
      alert("Error adding employee!!!");
    }
  }
}

export default Controller;
