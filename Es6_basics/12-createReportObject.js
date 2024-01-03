//Write a function named createReportObject whose parameter, employeesList, is the return value of the previous
//function createEmployeesObject.

function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}

function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments: (employeesList) =>
      Object.keys(employeesList).length,
  };
}

const employees = {
  ...createEmployeesObject("engineering", ["Bob", "Jane"]),
  ...createEmployeesObject("marketing", ["Sylvie"]),
};

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));
