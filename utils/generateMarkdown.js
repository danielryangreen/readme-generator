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
      name = 'This project is covered under the MIT license.';
      break;
    case 'Apache 2.0':
      name = 'This project is covered under the Apache-2.0 license.';
      break;
    case 'GNU GPLv3':
      name = 'This project is covered under the GPL-3.0-or-later license.';
      break;
    case 'None':
      name = 'This project does not have a license.';
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
  ${getLicense(data.license)}
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
