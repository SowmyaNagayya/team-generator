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
        type: "choices",
        message: "Would You Like To Add a Team Member?",
        choices: ["Employee", "Intern", "Manager"]
    }
]

module.exports = internquestions;