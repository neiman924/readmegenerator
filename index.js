const generateMD = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');


// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    var licenseInf = generateMD.Markdown(answers);
    answers.Link = licenseInf[0];
    answers.Badge = licenseInf[1];
    console.log(answers);
    fs.writeFileSync(fileName.toUpperCase()+'.md', generateReadme(answers))
}

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'fileName',
        message: 'Welcome to Professional README Generator app, to start the process\n Please choose a name for your file:',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title? ',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a short description explaining the what, why, and how of your project: ',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github account: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use: ',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any: ',
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'The last section of a high-quality README file is the licens, add the license of your project if you want to: ',
        choices: ['Apache', 'BSD', 'Attribution','GNU','IBM','MIT','Mozilla','Perl']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write tests for your application, and provide examples on how to run them here: ',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter your email address: ',
    },
    {
        type: 'input',
        name: 'Screenshot',
        message: 'Include screenshots if its needed: ',
    }
  ]);
};

const generateReadme = ({ title,Description,github,installation,usage,credits,license,tests,questions,Screenshot,Badge,Link}) =>
`
${title!=''?'# '+title:''}

${Description!=''?'## Description \n'+ Description:''}


${github!=''?'## github link \n'+ github: ''}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
${installation}

## Usage
${usage}
    # Screenshot
    ![alt text](${Screenshot})
 
## Credits
${credits}

## License
${Badge}
${Link}


## Tests
${tests}

## Questions
- Please send me email if you had any questions, my email address is :\n ${questions}

`;

// TODO: Create a function to initialize app
const init = () => {
    console.clear();
    promptUser()
      .then((answers) => writeToFile(answers.fileName, answers))
      .then(() => console.log(`Successfully wrote to ${answers.fileName}`))
      .catch((err) => console.error(err));
  };
// Function call to initialize app
init();