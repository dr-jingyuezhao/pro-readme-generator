// Function to render license badge
function renderBadge(licenseChoice) {
  switch (licenseChoice) {
    case 'Apache License 2.0':
      return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      break;
    case 'Boost Software License 1.0':
      return '![License: Boost 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
      break;
    case 'BSD 3-Clause "New" or "Revised" license':
      return '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
      break;
    case 'GNU General Public License v2.0':
      return '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)';
      break;
    case 'MIT license':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'Mozilla Public License 2.0':
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
      break;
    case 'The Unlicense':
      return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
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
If you have any questions about this project, please open an issue or contact me directly at ${data.email}.
You can view my profile and find more of my work following [the link to my GitHub profile](https://github.com/${data.username}/).
`;
}

module.exports = generateMarkdown;
