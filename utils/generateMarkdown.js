// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributors](#contibutors)
  [Test](#test)
  
  ## Installation
  ${data.insatllation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.test}

  ## Questions?
  Contact ${data.email} for any questions and to veiw more projects, go to https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;
