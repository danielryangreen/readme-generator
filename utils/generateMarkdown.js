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
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  Please contact me at ${data.email} if you have any questions. See my other work at [${data.github}](https://github.com/danielryangreen/) on GitHub.
  `;
}

module.exports = {
  generateMarkdown
};
