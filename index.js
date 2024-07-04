// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const render = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
//Will use inquirer input type in order for the user to write what they want
const dislpay = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "State project name",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("make sure to enter a project name");
          return false;
        }
      },
    },
    //Will reuse the code for the rest of the questions that require the "input" type
    {
      type: "input",
      name: "description",
      message: "State the description for this project",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("make sure to enter a description for your project");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "State the installation steps needed",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            "make sure to enter the installation steps for your project"
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "State the use of this app",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("make sure to enter a usage for this project");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contributors",
      message:
        "What does the user need to know about contributing to the repo?",
    },
    //will use default on test to ensure test command is npm test and ensure that the li
    {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?",
      default: "npm test",
    },
    {
      type: "input",
      name: "license",
      message: "What license do you want fir the project?",
      default: ["MIT"],
    },
    {
      type: "input",
      name: "username",
      message: "type your github username",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("make sure to enter a usage for this project");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "type your email",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("make sure to enter a usage for this project");
          return false;
        }
      },
    },
  ]);
};

// TODO: Create a function to write README file
const writeFile = (data) => {
  //arrow function to the filed,data and the obj
  fs.writeFile("README.md", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your README is made");
    }
  });
};

//make a FETCH function to initalize the app and make and dislpay
dislpay()
  .then((answers) => {
    return render(answers);
  })
  .then((data) => {
    return writeFile(data);
  });
