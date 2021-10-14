const Employee = require("./Employee")
class Intern extends Employee {
    constructor(name,id,email,School) {
        //pass properties to superclass constructor
        super(name,id,email)
        //subclass property
        this.school = school;
    }
 
    //get subclass properties
    getSchool() {

    }

    //overriden
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;