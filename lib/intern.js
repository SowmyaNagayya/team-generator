const Employee = require("./Employee")
class Intern extends Employee {
    constructor(name,id,email,school) {
        //pass properties to superclass constructor
        super(name,id,email)
        //subclass property
        this.school = school;
    }
 
    //get subclass properties
    getSchool() {
         return this.school;
    }

    //overriden
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;