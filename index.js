const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const markdown = require('./utils/generateMarkdown.js');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
  const promptUser = () =>
    inquirer.prompt(questions);
  promptUser()
    .then((answers) => writeFileAsync('README.md', markdown.generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
}

// function call to initialize program
init();
