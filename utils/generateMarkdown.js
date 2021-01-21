//README class constructor
class README {
  constructor(answers) {
    this.title = answers.projectTitle;
    this.description = answers.description;
    this.install = answers.installationInstructions;
    this.usage = answers.usage;
    this.contribution = answers.contribution;
    this.test = answers.test;
    this.license = answers.license;
    this.email = answers.email;
    this.github = answers.github;
    this.licenseBadge = this.renderLicenseBadge(answers.license);
    this.licenseLink = this.renderLicenseLink(answers.license);
  }
  create () {
      const template = 
`# ${this.title}
${this.licenseBadge}
${this.licenseLink}

## Description

${this.description}
      
## Table of Contents 
      
* [Installation](#installation)
      
* [Usage](#usage)
      
* [Contributing](#contributing)
      
* [Tests](#tests)
      
* [Questions](#questions)
      
## Installation

${this.install}
      
## Usage

${this.usage}
        
## Contributing

${this.contribution}
      
## Tests
      
To run tests, run the following command:

${this.test}
      
## Questions

For questions regarding this repo contact me at ${this.email} or visit my repository at ${this.github}

## License`
    
      return template
  }
  licenseSectionObj = {
    apache:    `Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`,

  }
  renderLicenseBadge(license) {
    let licenseBadge = ''
    switch (license) {
      case "Apache2.0": 
        licenseBadge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
        return licenseBadge;
      case "BSD 2-Clause": 
        licenseBadge = "![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)";
        return licenseBadge;
      case "CC0": 
        licenseBadge = "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)";
        return licenseBadge;
      case "MIT": 
        licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
        return licenseBadge;
      default: 
        licenseBadge = '';
        return licenseBadge;
    }
  }
  renderLicenseLink(license) {
    let licenseLink = ''
    switch (license) {
      case "Apache2.0": 
        licenseLink = "https://opensource.org/licenses/Apache-2.0";
        return licenseLink;
      case "BSD 2-Clause": 
        licenseLink = "https://opensource.org/licenses/BSD-2-Clause";
        return licenseLink;
      case "CC0": 
        licenseLink = "http://creativecommons.org/publicdomain/zero/1.0/";
        return licenseLink;
      case "MIT": 
        licenseLink = "https://opensource.org/licenses/MIT";
        return licenseLink;
      default: 
        licenseLink = '';
        return licenseLink;
    }
  };
  renderLicenseSection(license) {
    let licenseSection = ''
    switch (license) {
      case "Apache2.0": 
        licenseSection = "https://opensource.org/licenses/Apache-2.0";
        return licenseSection;
      case "BSD 2-Clause": 
        licenseSection = "https://opensource.org/licenses/BSD-2-Clause";
        return licenseSection;
      case "CC0": 
        licenseSection = "http://creativecommons.org/publicdomain/zero/1.0/";
        return licenseSection;
      case "MIT": 
        licenseSection = "https://opensource.org/licenses/MIT";
        return licenseSection;
      default: 
        licenseSection = '';
        return licenseSection;
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports.README = class README {}
