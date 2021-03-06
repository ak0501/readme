// jshint esversion:6

const questions = [

    {
        type: 'input',
        name: 'username',
        message: 'Enter your Github username?',
    }, {
        type: 'input',
        name: 'emailaddress',
        message: 'Enter your email address?',
    },
    {
        type: "input",
        name: "title",
        message: "Enter project title"
    }, {
        type: "input",
        name: "description",
        message: "Enter project Description"

    }, {
        type: "input",
        name: "information",
        message: "Enter usage information"
    }, {
        type: "input",
        name: "guidelines",
        message: "Enter contribution guidelines"
    }, {
        type: "input",
        name: "instruction",
        message: "Enter test instruction"
    }, {
        type: "list",
        name: "license",
        message: "Choose license name",
        choices: ["MIT", "Mozilla", "Apache", "wtfpl", "unlicense"]
    }
];

module.exports = questions;