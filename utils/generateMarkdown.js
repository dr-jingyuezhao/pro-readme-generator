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
`;
}

module.exports = generateMarkdown;
