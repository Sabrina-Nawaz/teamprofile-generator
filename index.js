const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const { listenerCount } = require('process');
//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const managerQuestions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your employee ID?",
        name: "id",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
    },
]
//THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
const addEngineerOrIntern = [
    {
        type: "list",
        message: "Would you like to add an engineer or an intern?",
        name: "type",
        choices: ['engineer', 'intern']
    }

];

//THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
const engineerQuestions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your engineer ID?",
        name: "id",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your GitHub?",
        name: "github",
    },
]

//THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
const internQuestions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your student ID?",
        name: "id",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your school?",
        name: "school",
    },
]
inquirer.prompt(managerQuestions).then((managerAnswers) => {
    console.log('managerAnswers', managerAnswers
    )
    inquirer.prompt(addEngineerOrIntern).then((choiceAnswers) => {
        console.log('choiceAnswers', choiceAnswers
        )
        if (choiceAnswers.type === 'engineer') {
            inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
                inquirer.prompt([{ type: 'list', name: 'choice', message: "Add another team member or would you like to exit?", choices: ['Yes', 'No'] }]).then((finalAnswers) => {
                    console.log(finalAnswers)
                })
            })
        } else {
            if (choiceAnswers.type === 'intern') {
                inquirer.prompt(internQuestions).then((internAnswers) => {
                    inquirer.prompt([{ type: 'list', name: 'choice', message: "Do you want to add another intern, engineer or manager or would you like to exit?", choices: ['intern', 'engineer', 'manager', 'exit'] }]).then((finalAnswers) => {
                        if (finalAnswers.choice === 'intern') {
                            console.log(finalAnswers)
                        } else if{

                        } else if {

                        } else {
                            
                        }
                    })
                })
            }
        }
    })

});



