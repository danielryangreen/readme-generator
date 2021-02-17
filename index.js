// require packages that are used by this application
const inquirer = require('inquirer');
const fs = require('fs');

// modularization
const markdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What steps are required to install your project?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use.',
    default: 'node index.js',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license.',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can other developers contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What command should be used to run tests?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, markdown.generateMarkdown(data),
  (err) =>
    err ? console.log(err) : console.log('Success!')
  );
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
  .then((answers) =>
    writeToFile('README.md', answers)
  );
}

// function call to initialize program
init();
