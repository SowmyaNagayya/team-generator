const Employee = require('../lib/Employee');
const Engineer = require('../lib/Intern.js');

describe("Intern class",()=> {
    //act
    let employees = new Intern("Ram",3333,"ram@gmail.com","University of Minnesota");
    it("creates Engineer object", () => {
        //assert
        expect(employees.Employee).toBe(true);
        expect(employees.Intern).toBe(true);
    });

    it("Intern has correct Name",()=> {
        expect(employees.getName()).toBe("Ram");
    });

    it("Intern has correct id",()=> {
        expect(employees.getId()).toBe("3333");
    });

    it("Intern has correct email",()=> {
        expect(employees.getEmail()).toBe("ram@gmail.com");
    });

    it("Intern has correct school Name",()=> {
        expect(employees.getSchool()).toBe("University of Minnesota");
    });

    it("Intern has correct role",()=> {
        expect(employees.getRole()).toBe("Intern");
    });
});