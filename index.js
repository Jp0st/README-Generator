const inquirer = require('inquirer');
const fs = require('fs');


const generateREADME = ({ title, description, install, usage, license, contributors, tests, github, email }) =>
`
# ${title}

## Description

${description}

## Table of Contents


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${install}

## Usage

${usage}. Access the repo at github.com/${github}/${title}.
If you have any further questions feel free to email me at : ${email}

## Credits

${contributors}

## License

${license} license.
For more information please refer to the license in the repo.

---

## Tests

${tests}
  
`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please input a short description about your project: ',
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What instructions are needed to use your application?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use for your project?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'],
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'List all contributors to your project: ',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'List any tests you would like to provide for your project: '
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please input your Github username: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email: ',
        }
    ])
    .then((answers) => {
        const pageContent = generateREADME(answers);
        fs.writeFile('ReadMeExample.md', pageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
});