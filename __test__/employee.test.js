const Employee = require('../lib/Employee');

describe("Employee class",()=> {
    //act
    let employees = new Employee("sowmya",1111,"kkd.sowmya@gmail.com");
    it("creates Employee object", () => {
        //assert
        expect(employees).toEqual(expect.any(Object));  //returning object
    });

    it("Employee has correct Name",()=> {
        expect(employees.getName()).toBe("sowmya");
    });

    it("Employee has correct id",()=> {
        expect(employees.getId()).toBe(1111);
    });

    it("Employee has correct email",()=> {
        expect(employees.getEmail()).toBe("kkd.sowmya@gmail.com");
    });

    it("Employee has correct role",()=> {
        expect(employees.getRole()).toBe("Employee");
    });
});