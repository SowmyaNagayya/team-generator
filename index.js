//Importing Inquirer for user input and fs to write the HTML file.
const inquirer = require("inquirer");
const fs = require("fs");

// //Importing question arrays to use with inquirer
// const engineerquestions = require('./src/engineerquestions.js');
// const internquestions = require('./src/internquestions.js');
// const managerquestions = require('./src/managerquestions.js');
const teammemberquestions = [
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
        type: "choices",
        message: "Would You Like To Add a Team Member?",
        choices: ["Employee", "Intern", "Manager"]
    },
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
    },
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
        type: "choices",
        message: "Would You Like To Add a Team Member?",
        choices: ["Employee", "Intern", "Manager"]
    }
]


// Writes the generated html to a new file: ./dist/index.html
function writeToHTML(fileName,data) {
    fs.writeFile("./dist/index.html", data, (err) => {
        err ? log.error(err) : console.log("Success");
    });
}

// Function to initialze the application and use inquirer to gather data.
function init() {

    inquirer
      .prompt(teammemberquestions)
        .then(response => {
            const generateHtml= generateTeamMemberHTML(response);
          writeToFile("./dist/index.html", generateHtml);
        })
    
    // inquirer
    //   .prompt(internquestions)

    //     .then(response => {
    //         const generateHtml= generateTeamMemberHTML(response);
    //       writeToFile("./dist/index.html", generateHtml);
    //     })

    // inquirer
    //   .prompt(managerquestions)

    //     .then(response => {
    //         const generateHtml= generateTeamMemberHTML(response);
    //       writeToFile("./dist/index.html", generateHtml);
    //     })
        
    }
// Start her up!
init();
  