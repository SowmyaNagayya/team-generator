const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern.js');

describe("Intern class",()=> {
    //act
    let intern = new Intern("Ram",3333,"ram@gmail.com","University of Minnesota");
    it("creates intern object", () => {
        //assert
        expect(intern).toEqual(expect.any(Object));
    });

    it("Intern has correct Name",()=> {
        expect(intern.getName()).toBe("Ram");
    });

    it("Intern has correct id",()=> {
        expect(intern.getId()).toBe(3333);
    });

    it("Intern has correct email",()=> {
        expect(intern.getEmail()).toBe("ram@gmail.com");
    });

    it("Intern has correct school Name",()=> {
        expect(intern.getSchool()).toBe("University of Minnesota");
    });

    it("Intern has correct role",()=> {
        expect(intern.getRole()).toBe("Intern");
    });
});