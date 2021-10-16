const Employee = require("./Employee")
class Manager extends Employee{
    constructor(name,id,email,officeNumber) {
        //pass properties to superclass constructor
        super(name,id,email)
        //subclass property
        this.officeNumber = officeNumber;
    }
    
    //get subclass properties
    getOfficeNumber() {
         return this.officeNumber;
    }

    //overriden
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;