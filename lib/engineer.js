const Employee = require("./Employee")
class Engineer extends Employee{
    constructor(name,id,email,github) {
        //pass properties to superclass constructor
        super(name,id,email)
        //subclass property
        this.github = github;
    }

    //get subclass properties
    getGithub() {
         return this.github;
    }

    //overriden
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;