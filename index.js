const fs = require('fs');
const inquirer = require('inquirer');
const README = require('./utils/generateMarkdown.js');

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
  choices: ['Apache2.0', 'BSD 2-Clause', 'CC0', 'MIT']
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

const handleAnswers = (answers) => {
  const readme = new README(answers);
  const readmeLayout = readme.create();
  console.log(readmeLayout);
  fs.writeFile(`${answers.projectTitle}.md`, readmeLayout, (err) =>
     err ? console.error(err) : console.log('Success!')
  );
}

function init() {
  inquirer
  .prompt(questions)
  .then(answers => {
    handleAnswers(answers);
  });
}

init();
