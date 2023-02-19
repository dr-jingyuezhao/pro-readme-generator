// Function to render license badge
function renderBadge(licenseChoice) {
  switch (licenseChoice) {
    case 'Apache License 2.0':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      break;
    case 'Boost Software License 1.0':
      return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
      break;
    case 'BSD 3-Clause "New" or "Revised" license':
      return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
      break;
    case 'GNU General Public License v2.0':
      return '![License](https://img.shields.io/badge/License-GPL_v2-blue.svg)';
      break;
    case 'MIT license':
      return '![License](https://img.shields.io/badge/License-GPL_v2-blue.svg)';
      break;
    case 'Mozilla Public License 2.0':
      return '![License](https://img.shields.io/badge/License-GPL_v2-blue.svg)';
      break;
    case 'The Unlicense':
      return '![License](https://img.shields.io/badge/License-GPL_v2-blue.svg)';
      break;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
The steps required to install your project: 
${data.installation}

## Usage
Examples of how to use this application: 
${data.usage}

## License
This project is licensed under the ${data.license}.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
You can view my profile and find more of my work following [the link to my GitHub profile](https://github.com/${data.username}/).
If you have any questions about this project, please open an issue or contact me directly at ${data.email}.
`;
}

module.exports = generateMarkdown;
