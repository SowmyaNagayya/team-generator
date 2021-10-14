const internquestions = [
    {
        type: "input",
        message: "Please Enter The Intern's Name",
        name: "internName"
    },
    {
        type: "input",
        message: "Please Enter The Intern's Employee ID.",
        name: "internId"
    },
    {
        type: "input",
        message: "Please Enter The Intern's Email.",
        name: "internEmail"
    },
    {
        type: "input",
        message: "Please Enter The Intern's School.",
        name: "internSchool" 
    },
    {
        type: "confirm",
        message: "Would You Like To Add a Team Member?",
        name: "addTeamMember"
    }
]

module.exports = internquestions;