//Importing Inquirer for user input and fs to write the HTML file.
const inquirer = require('inquirer');
const fs = require("fs");

//Importing classes of team members
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

//Manager Questions
const managerQuestions = [
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
        type: "list",
        message: "Would You Like To Add a Team Member?",
        name: "role",
        choices: ["Engineer", "Intern", "Manager", "I don't want to Add more Employees"]
    }
]

//Engineer Questions
const engineerQuestions = [
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
        type: "list",
        message: "Would You Like To Add a Team Member?",
        name: "role",
        choices: ["Engineer", "Intern", "Manager", "I don't want to Add more Employees"]
    }
]

// Intern Questions
const internQuestions = [
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
        type: "list",
        message: "Would You Like To Add a Team Member?",
        name: "role",
        choices: ["Engineer", "Intern", "Manager", "I don't want to Add more Employees"]
    }
    
]

function writeHTML() {

    // Get generated html from helper function using the user input data from inquirer
    let html = generateHTML(response);

    // Write the file to distribution folder ./dist/index.html and log a success/failure
    fs.writeFile("./dist/index.html", html, (error) => {
        (error) ? log.error(error) : console.log("Success");
    });
}

const generateHTML = ({Engineer,Intern,Manager}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  

    <!-- Materialize CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Materialize JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        
    <!-- Material Icon Library -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="./style.css">
    <title>My Team</title>

</head>
<body>
  <!-- Navigation bar for My Team -->
  <nav>
    <div class="nav-wrapper">
      <a class="brand-logo center">My Team</a>
    </div>
  </nav>

  <main class="container">
  <div class="row">

            
  <div class="col s12 m6 l4">
  <div class="card blue darken-1">
      <div class="card-content white-text">
        <h6>Manager</h6>
          <ul class="collection black-text">
              <li class="collection-item">Name:${response.managerName} </li>
              <li class="collection-item">Team ID:${response.managerId} </li>
              <li class="collection-item">Email: <a href="mailto: ${response.managerEmail}"></a></li>
              <li class="collection-item">Office Number: ${response.managerOfficeNumber}</li>
          </ul>
      </div>
  </div>
</div>
  

  <div class="col s12 m6 l4">
    <div class="card blue darken-1">
        <div class="card-content white-text">
          <h6>Engineer</h6>
            <ul class="collection black-text">
                <li class="collection-item">Name: ${response.engineerName} </li>
                <li class="collection-item">Team ID: ${response.engineerId} </li>
                <li class="collection-item">Email: <a href="mailto: ${response.engineerEmail}"></a></li>
                <li class="collection-item">GitHub: <a href="${response.engineergitHub}  "></a></li>
            </ul>
        </div>
    </div>
  </div>

  <div class="col s12 m6 l4">
    <div class="card blue darken-1">
        <div class="card-content white-text"> 
          <h6>Intern</h6>
            <ul class="collection black-text">
                <li class="collection-item">Name:${response.internName} </li>
                <li class="collection-item">Team ID:${response.internId} </li>
                <li class="collection-item">Email: <a href="mailto: ${response.internEmail}"></a></li>
                <li class="collection-item">School:${response.internSchool} </li>
            </ul>
        </div>
    </div>
  </div>

  
  </div>
  </main>

</body>
</html>`
// Function to initialze the application and use inquirer to gather data.
function askManagerQuestions() {
    inquirer
      .prompt(managerQuestions)
        .then(response => {
            if(response.role === "Engineer") {
                askEngineerQuestions();
            } else if(response.role === "Intern") {
                askInternQuestions();
            } else return;
            //writeHTML(response);
        })
    }
    
    function askEngineerQuestions() {
        inquirer
          .prompt(engineerQuestions)
            .then(response => {
                if(response.role === "Manager") {
                    askManagerQuestions();
                } else if(response.role === "Intern") {
                    askInternQuestions();
                } else return;
                //writeHTML(response);
            })
        }

        function askInternQuestions() {
            inquirer
              .prompt(internQuestions)
                .then(response => {
                    if(response.role === "Manager") {
                        askManagerQuestions();
                    } else if(response.role === "Engineer") {
                        askEngineerQuestions();
                    } else return;
                   //writeHTML(response);
                })
            }
    

    
// Start up!
askManagerQuestions();



  