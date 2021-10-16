const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer.js');

describe("Engeener class",()=> {
    //act
    let engineer = new Engineer("abc",2222,"abc@gmail.com","Abc123");
    it("creates Engineer object", () => {
        //assert
        expect(engineer).toEqual(expect.any(Object));
        
    });

    it("Engineer has correct Name",()=> {
        expect(engineer.getName()).toBe("abc");
    });

    it("Engineer has correct id",()=> {
        expect(engineer.getId()).toBe(2222);
    });

    it("Engineer has correct email",()=> {
        expect(engineer.getEmail()).toBe("abc@gmail.com");
    });

    it("Engineer has correct gitHub Name",()=> {
        expect(engineer.getGithub()).toBe("Abc123");
    });

    it("Engineer has correct role",()=> {
        expect(engineer.getRole()).toBe("Engineer");
    });
});