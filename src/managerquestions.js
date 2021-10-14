const managerquestions = [
    {
        type: "input",
        message: "Please Enter The Manager's Name",
        name: "managerName"
    },
    {
        type: "input",
        message: "Please Enter The Manager's Employee ID.",
        name: "managerId"
    },
    {
        type: "input",
        message: "Please Enter The Manager's Email.",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "Please Enter The Office Number Of The Manager.",
        name: "managerOfficeNumber" 
    },
    {
        type: "confirm",
        message: "Would You Like To Add a Team Member?",
        name: "addTeamMember"
    }
]

module.exports = managerquestions;