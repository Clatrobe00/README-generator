// create question object
// create prompt handler function and answer handler function
// include fs to write answers in MD file
// build (class/constructor? )
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
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
]

class README {
  constructor(answers) {
    this.title = answers.projectTitle;
    this.description = answers.description;
    this.install = answers.installationInstructions;
    this.usage = answers.usage;
    this.contribution = answers.contribution;
    this.test = answers.test;
  }
  create () {
      const template = `
      # ${this.title}

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
      `
      return template
  }
}

const handleAnswers = (answers) => {
  const readme = new README(answers)
  const readmeLayout = readme.create()
  console.log(readmeLayout);
  fs.writeFile(`${answers.projectTitle}.md`, readmeLayout, (err) =>
     err ? console.error(err) : console.log('Success!')
  );
}
// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

inquirer
  .prompt(questions)
  .then(answers => {
    handleAnswers(answers)
  });