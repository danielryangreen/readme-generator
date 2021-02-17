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
  // What is your GitHub username?

  // What is your email address?

  // What is your project's name?

  // Please write a short description of your project.

  // What kind of license should your project have?
  // MIT
  // APACHE 2.0
  // GPL 3.0
  // BSD 3
  // None

  // What command should be run to install dependencies? (npm i)

  // What command should be run to run tests? (npm test)

  // What does the user need to know about using the repo?

  // What does the user need to know about contributing to the repo? (Please make a PR if you would like to add to the project.)
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
