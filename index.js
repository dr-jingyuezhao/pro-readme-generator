const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a brief description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Please provide the commands to install necessary dependencies (e.g., npm install).',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How can your project be used? Please provide instructions (e.g., running `node index.js`).',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What is your preferred license for the application?',
        name: 'license',
        choices: [
            'Apache License 2.0',
            'Boost Software License 1.0',
            'BSD 3-Clause "New" or "Revised" license',
            'GNU General Public License v2.0',
            'MIT license',
            'Mozilla Public License 2.0',
            'The Unlicense',
        ],
    },
    {
        type: 'input',
        message: 'How can other developers contribute to the application? Please include guidelines for how to do so.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please write tests for your application and provide examples on how to run them here (e.g., npm test).',
        name: 'tests',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('You have successfully created a professional README.md file in sample folder!')
    );
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions).then((answers) => writeToFile('./sample/README.md', generateMarkdown(answers)))
}

// function call to initialize program
init();
