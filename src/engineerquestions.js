const engineerquestions = [
    {
        type: "input",
        message: "Please Enter The Engineer's Name",
        name: "engineerName"
    },
    {
        type: "input",
        message: "Please Enter The Engineer's Employee ID.",
        name: "engineerId"
    },
    {
        type: "input",
        message: "Please Enter The Engineer's Email.",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "Please Enter The Engineer's GitHub Username.",
        name: "engineergitHub" 
    },
    {
        type: "confirm",
        message: "Would You Like To Add a Team Member?",
        name: "addTeamMember"
    }
]

module.exports = engineerquestions;