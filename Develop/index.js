// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];
return inquirer.prompt([
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of the project?',
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Describe your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license',
        choices: ['MIT, Unilicense'],
    },
    {
        type: 'input',
        name: 'contributers',
        message: 'Who helped you with this project?',
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your github?',
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is a good email to contact?',
    }
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
