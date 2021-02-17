// function that returns the license badge

// function that returns the license link

// function that returns the license section of README

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {
  generateMarkdown
};
