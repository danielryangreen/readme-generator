// function that returns the license badge

// function that returns the license link

// function that returns the license section of README

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  To install required packages, enter \`${data.installation}\` in the terminal.
  ## Usage
  To run the application, enter \`${data.usage}\` in the terminal.
  ## License
  ## Contributing
  ${data.contributing}
  ## Tests
  To run tests (if provided), enter \`${data.tests}\` in the terminal.
  ## Questions
  Please contact me at ${data.email} if you have any questions. See my other work at [${data.github}](https://github.com/danielryangreen/) on GitHub.
  `;
}

module.exports = {
  generateMarkdown
};
