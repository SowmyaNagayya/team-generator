const Employee = require('../lib/Employee');
const Engineer = require('../lib/Manager.js');

describe("Manager class",()=> {
    let employees = new Manager("Narayan",4444,"narayan@gmail.com",65456462);
    it("creates Engineer object", () => {
        expect(employees.Employee).toBe(true);
        expect(employees.Manager).toBe(true);
    });

    it("Manager has correct Name",()=> {
        expect(employees.getName()).toBe("Narayan");
    });

    it("Manager has correct id",()=> {
        expect(employees.getId()).toBe("4444");
    });

    it("Manager has correct email",()=> {
        expect(employees.getEmail()).toBe("narayan@gmail.com");
    });

    it("Manager has correct office number",()=> {
        expect(employees.officeNumber()).toBe(65456462);
    });

    it("Manager has correct role",()=> {
        expect(employees.getRole()).toBe("Intern");
    });
});