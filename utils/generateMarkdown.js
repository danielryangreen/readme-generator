// function that returns the license badge
function getBadge(license) {
  let badge = '';
  switch (license) {
    case 'MIT':
      badge = '![MIT license](https://img.shields.io/badge/license-MIT-green)';
      break;
    case 'Apache 2.0':
      badge = '![Apache license](https://img.shields.io/badge/license-Apache-green)';
      break;
    case 'GNU GPLv3':
      badge = '![GPL license](https://img.shields.io/badge/license-GPL-green)';
      break;
  }
  return badge;
}

// function that returns the license section of README
function getLicense(license) {
  let name = '';
  switch (license) {
    case 'MIT':
      name = 'MIT';
      break;
    case 'Apache 2.0':
      name = 'Apache-2.0';
      break;
    case 'GNU GPLv3':
      name = 'GPL-3.0-or-later';
      break;
  }
  return name;
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${getBadge(data.license)}
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
  This project is covered under the ${getLicense(data.license)} license.
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
