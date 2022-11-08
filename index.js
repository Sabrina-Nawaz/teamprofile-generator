const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateFile = require('./src/generateFile')
const { listenerCount } = require('process');
const answers = [];
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
//Created internQuestion function to hold intern questions and the answers 
function internQuestion() {
    inquirer.prompt(internQuestions).then((internAnswers) => {
        const intern = new Intern(internAnswers)
        answers.push(intern)
        finalQuestion();
    })
}
//Created engineerQuestion function to hold engineer questions and the answers 
function engineerQuestion() {
    inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers)
        answers.push(engineer)
        finalQuestion();
    })
}
//Created managerQuestion function to hold manager questions and the answers 
function managerQuestion() {
    inquirer.prompt(managerQuestions).then((managerAnswers) => {
        const manager = new Manager(managerAnswers)
        answers.push(manager)
        finalQuestion();
    })
}
//Created finalQuestion function to hold the option of adding another employee or exiting 
function finalQuestion() {
    inquirer.prompt([{ type: 'list', name: 'choice', message: "Do you want to add another intern, engineer or manager or would you like to exit?", choices: ['intern', 'engineer', 'manager', 'exit'] }]).then((choiceAnswers) => {
        answers.push(choiceAnswers)
        if (choiceAnswers.choice === 'exit'){
            generateFile(answers)
        }
        if (choiceAnswers.choice === 'intern') {
            internQuestion();
        }
        if (choiceAnswers.choice === 'manager') {
            managerQuestion();
        }
        if (choiceAnswers.choice === 'engineer') {
            engineerQuestion();
        }
    })
}

managerQuestion();