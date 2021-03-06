const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager.js');

describe("Manager class",()=> {
    //act
    let manager = new Manager("Narayan",4444,"narayan@gmail.com",65456462);
    it("creates Engineer object", () => {
        //assert
        expect(manager).toEqual(expect.any(Object));
    });

    it("Manager has correct Name",()=> {
        expect(manager.getName()).toBe("Narayan");
    });

    it("Manager has correct id",()=> {
        expect(manager.getId()).toBe(4444);
    });

    it("Manager has correct email",()=> {
        expect(manager.getEmail()).toBe("narayan@gmail.com");
    });

    it("Manager has correct office number",()=> {
        expect(manager.getOfficeNumber()).toBe(65456462);
    });

    it("Manager has correct role",()=> {
        expect(manager.getRole()).toBe("Manager");
    });
});