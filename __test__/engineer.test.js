const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer.js');

describe("Engeener class",()=> {
    //act
    let employees = new Engineer("abc",2222,"abc@gmail.com","Abc123");
    it("creates Engineer object", () => {
        //assert
        expect(employees.Employee).toBe(true);
        expect(employees.Engineer).toBe(true);
    });

    it("Engineer has correct Name",()=> {
        expect(employees.getName()).toBe("abc");
    });

    it("Engineer has correct id",()=> {
        expect(employees.getId()).toBe("2222");
    });

    it("Engineer has correct email",()=> {
        expect(employees.getEmail()).toBe("abc@gmail.com");
    });

    it("Engineer has correct gitHub Name",()=> {
        expect(employees.getName()).toBe("Abc123");
    });

    it("Engineer has correct role",()=> {
        expect(employees.getRole()).toBe("Engineer");
    });
});