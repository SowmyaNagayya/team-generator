
//Importing classes of team members
const Engineer = require('./lib/Employee.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const generateMarkdown = require("../readme_generator/utils/generateMarkdown.js");

//geretare team members in html for specific team member
const generateTeamMemberHTML = ({Engineer,Intern,Manager}) =>
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
          <h6>Engineer</h6>
            <ul class="collection black-text">
                <li class="collection-item">Name: ${data.engineerName} </li>
                <li class="collection-item">Team ID: ${data.engineerId} </li>
                <li class="collection-item">Email: <a href="mailto: ${data.engineerEmail}"></a></li>
                <li class="collection-item">GitHub: <a href="${data.engineergitHub}  "></a></li>
            </ul>
        </div>
    </div>
  </div>

  <div class="col s12 m6 l4">
    <div class="card blue darken-1">
        <div class="card-content white-text"> 
          <h6>Intern</h6>
            <ul class="collection black-text">
                <li class="collection-item">Name:${data.internName} </li>
                <li class="collection-item">Team ID:${data.internId} </li>
                <li class="collection-item">Email: <a href="mailto: ${data.internEmail}"></a></li>
                <li class="collection-item">School:${data.internSchool} </li>
            </ul>
        </div>
    </div>
  </div>

  <div class="col s12 m6 l4">
    <div class="card blue darken-1">
        <div class="card-content white-text">
          <h6>Manager</h6>
            <ul class="collection black-text">
                <li class="collection-item">Name:${data.managerName} </li>
                <li class="collection-item">Team ID:${data.managerId} </li>
                <li class="collection-item">Email: <a href="mailto: ${data.managerEmail}"></a></li>
                <li class="collection-item">Office Number: ${data.managerOfficeNumber}</li>
            </ul>
        </div>
    </div>
  </div>
  </div>
  </main>

</body>
</html>`