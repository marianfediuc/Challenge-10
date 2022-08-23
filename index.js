import inquirer from 'inquirer';

const managerQuestions = [{
    type: 'input',
      message: 'Manager Name',
      name: 'name',
    },
    {
    type: 'input',
      message: 'employee ID',
      name: 'description',
    },
    {
    type: 'input',
      message: 'email address',
      name: 'data',
    },
    {
    type: 'input',
        message: 'office number',
        name: 'information',
    },
]

const menuQuestions= []
const engineerQuestion= [
  {
  type: 'input',
  message: 'Engineers Name',
  name: 'name',
},
{
type: 'input',
  message: 'employee ID',
  name: 'description',
},
{
type: 'input',
  message: 'email address',
  name: 'data',
},
{
type: 'input',
    message: 'Github account',
    name: 'information',
},
// {
//   type: 'input',
//       message: '',
//       name: 'information',
//   },
]
const internQuestions= []


    // // TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(managerQuestions).then((data) => {
        console.log (data)
       displayMenu()
    })
}
function displayMenu(){
return inquirer.prompt(menuQuestions).then((data) => {
  console.log (data)
  if data.engineer
  })
}

function displayEngineer(){
  return inquirer.prompt(engineerQuestions).then((data) => {
    console.log (data)
    displayMenu()
})
}
function displayIntern(){
  return inquirer.prompt(internQuestions).then((data) => {
    console.log (data)
    displayMenu()
})
}
function buildTeam(){

}

// // Function call to initialize app
init();

// prompt team manager info (Done)

// I am presented with a menu with the option to add an engineer or an intern or to finish building the team (finish building html)

// engineer - engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// intern - intern’s name, ID, email, and school and I am taken back to the menu


// generate an html

// make sure email and github team member account is clickable

