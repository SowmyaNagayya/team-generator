const Employee = require("./Employee")
class Intern extends Employee {
    constructor(name,id,email,School) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
}

module.exports = Intern;