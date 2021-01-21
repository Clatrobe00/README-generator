const fs = require('fs');
const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const Choices = require('inquirer/lib/objects/choices');

// Inquire Questions Array
const questions = [{
  type: 'input',
  name: 'projectTitle',
  message: 'Enter the name of your project'
},
{
  type: 'input',
  name: 'description',
  message: 'Write a description for your application'
},
{
  type: 'input',
  name: 'installationInstructions',
  message: 'Enter the instructions for installing your application'
},
{
  type: 'list',
  name: 'license',
  message: 'Select the license you would prefer for your application',
  choices: ['Apache2.0', 'BSD 2-Clause']
},
{
  type: 'input',
  name: 'usage',
  message: 'Enter usage information for your application'
},
{
  type: 'input',
  name: 'contribution',
  message: 'Enter guidlines for contributing to your application'
},
{
  type: 'input',
  name: 'test',
  message: 'Enter test information for your application'
},
{
  type: 'input',
  name: 'email',
  message: 'Enter a contact email address for your repo'
},
{
  type: 'input',
  name: 'github',
  message: 'Enter your github'
}]

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
  }
  create () {
      const template = 
`# ${this.title}

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
  renderLicenseBadge(license) {
    switch (license) {
      case "Apache2.0": 
        console.log("It's Apache!");
        break;
    
      default:
        console.log('Guess it was something else.');
        break;
    }
  }
}

const handleAnswers = (answers) => {
  const readme = new README(answers)
  readme.renderLicenseBadge(answers.license);
  const readmeLayout = readme.create()
  console.log(readmeLayout);
  fs.writeFile(`${answers.projectTitle}.md`, readmeLayout, (err) =>
     err ? console.error(err) : console.log('Success!')
  );
}

function init() {
  inquirer
  .prompt(questions)
  .then(answers => {
    handleAnswers(answers)
  });
}

init();
