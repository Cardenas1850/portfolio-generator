const inquirer = require('inquirer');
//const fs = require('fs');
//const generatePage = require('./src/page-template');
//
//const pageHTML = generatePage(name, github);
//
//fs.writeFile('./index.html', pageHTML, err => {
//    if (err) throw err;
//
//    console.log('Portfolio Complete! Checkout index.html to see the output!');
//});
const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },

        {
            type: 'input',
            name: 'github',
            message: 'What is your github username'
        },

        {
            type: 'input',
            name: 'about',
            message: 'Provide some inforamtion about yourself'
        }

    ]);
};

const promptProject = () => {
    console.log(`
    =================
    Add a New Project
    =================
    `);

    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the Github link to your project (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },

        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ]);
};

promptUser()
    .then(answers => console.log(answers))
    .then(promptProject)
    .then(projectAnswers => console.log(projectAnswers));