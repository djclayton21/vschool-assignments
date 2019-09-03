const employees = []

function Employee(name, jobTitle, salary) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
}
Employee.prototype.printEmployeeForm = function(){
    console.log(`Name: ${this.name}`)
    console.log(`Job Title: ${this.jobTitle}`)
    console.log(`Salary: ${this.salary}`)
    console.log(`Status: ${this.status}`)
}

const emp1 = new Employee("George", "Mechanic", "$100,000")
const emp2 = new Employee("Francine", "Secretary", "$20,000")
const emp3 = new Employee("Bob", "Janitor", "$500,000")
const emp4 = new Employee("test","",[1,2,3,4]);

emp2.status = "Part Time"

emp1.printEmployeeForm()
emp2.printEmployeeForm()
emp3.printEmployeeForm()
emp4.printEmployeeForm()

employees[0] = emp1;
employees[1] = emp2;
employees[2] = emp3;
