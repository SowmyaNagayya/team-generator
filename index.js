//Importing Inquirer for user input and fs to write the HTML file.
const inquirer = require('inquirer');
const fs = require("fs");

//Importing classes of team members
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const employeeArray = [];

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
        choices: ["Engineer", "Intern", "I don't want to Add more Employees"]
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
        choices: ["Engineer", "Intern", "I don't want to Add more Employees"]
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
        choices: ["Engineer", "Intern", "I don't want to Add more Employees"]
    }

]

function generateHTML(cards) {
    return `
    <!DOCTYPE html>
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
  ${cards}
  </div>
  </main>

</body>
</html>
    `
}

//Function for generate templete literal for manager in Html page
function generateManagerHTML(manager) {
    let managerHtml =
        `

            
  <div class="col s12 m6 l4">
   <div class="card blue darken-1">
      <div class="card-content white-text">
        <h6>Manager</h6>
         <ul class="collection black-text">
               <li class="collection-item">Name:${manager.name} </li>
               <li class="collection-item">Team ID:${manager.id} </li>
               <li class="collection-item">Email: <a href="mailto:${manager.email}">${manager.email} </a></li>
               <li class="collection-item">Office Number: ${manager.officeNumber}</li>
           </ul> 
      </div>
   </div>
  </div>

  `
    return managerHtml;
}

//Function for generate templete literal for engineer in Html page
function generateEngineerHTML(engineer) {
    let engineerHtml =
        `<div class="col s12 m6 l4">
         <div class="card blue darken-1">
         <div class="card-content white-text">
          <h6>Engineer</h6>
            <ul class="collection black-text">
                <li class="collection-item">Name: ${engineer.name} </li>
                <li class="collection-item">Team ID: ${engineer.id} </li>
                <li class="collection-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="collection-item">GitHub: <a href="${engineer.github}">${engineer.github}</a></li>
            </ul>
        </div>
    </div>
  </div>
`
    return engineerHtml;
}

//Function for generate templete literal for intern in Html page
function generateInternHTML(intern) {
    let internHtml =
        `<div class="col s12 m6 l4">
         <div class="card blue darken-1">
         <div class="card-content white-text"> 
          <h6>Intern</h6>
            <ul class="collection black-text">
                <li class="collection-item">Name:${intern.name} </li>
                <li class="collection-item">Team ID:${intern.id} </li>
                <li class="collection-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="collection-item">School:${intern.school} </li>
            </ul>
        </div>
    </div>
  </div>

  


`
    return internHtml;
}

let team = [];

async function init() {
    // Will hold the team member objects created


    let data = null;


    data = await inquirer.prompt(managerQuestions)


    team.push(new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber));

    menu(data);

}
function menu(data) {

    if (data.role === "Engineer") {
        askEngineerQuestions();
    } else if (data.role === "Intern") {
        askInternQuestions();
    } else {
        console.log(team);
        writeHTML();
    }


}

//Function for asking Engineer Questions   
function askEngineerQuestions() {
    inquirer
        .prompt(engineerQuestions)
        .then(response => {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineergitHub);

            team.push(engineer);
            menu(response);        
            

        })
}

//Function for asking Intern Questions
function askInternQuestions() {
    inquirer
        .prompt(internQuestions)
        .then(response => {
           

            team.push(new Intern(response.internName, response.internId, response.internEmail, response.internSchool));
            
            menu(response);
        })
}

//Funtion to response HTML            
function writeHTML() {

    // Get generated html from helper function using the user input data from inquirer

    let cards = ""
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            cards = cards + generateManagerHTML(team[i]);
        }
        else if (team[i].getRole() === "Engineer") {
            cards = cards + generateEngineerHTML(team[i]);
        } else if (team[i].getRole() === "Intern") {
            cards = cards + generateInternHTML(team[i]);
        }
    }

    // Write the file to distribution folder ./dist/index.html and log a success/failure
    fs.writeFile("./dist/index.html", generateHTML(cards), (error) => {
        (error) ? log.error(error) : console.log("Success");
    });
}


// Start up!
init();