#! /usr/bin/env node

import inquirer from "inquirer";
console.log("\n");

console.log(`-----BMI Calculator-----\n\n`);

function greetUser(msg: string) {
  console.log(msg);
}

let again = false;

async function getUserInput() {
  const answers = await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `What is your name?`,
        validate: (input) => {
          if (input === "") {
            return `Please enter a valid name.`;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "hight",
        message: `What is your hight in inches?`,
        validate: (input) => {
          if (input === "") {
            return `Please enter a valid number.`;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "weight",
        message: `What is your current weight in lbs?`,
        validate: (input) => {
          if (input === "") {
            return `Please enter a valid number.`;
          } else {
            return true;
          }
        },
      },
    ])

    .then((answers) => {
      const hight = answers.hight;
      const weight = answers.hight;
      const bmi = (703 * answers.weight) / (answers.hight * answers.hight);

      console.log(`\n${answers.name}: your BMI is ${bmi}.\n`);

      if (bmi < 18.5) {
        console.log(`${answers.name}: your are under weight.`);
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log(`${answers.name}: your BMI is normal.`);
      } else if (bmi >= 25 && bmi <= 29.9) {
        console.log(`${answers.name}: you are over weight.`);
      } else if (bmi >= 30 && bmi <= 34.9) {
        console.log(`${answers.name}: you are obese (Calss-I).`);
      } else if (bmi >= 35 && bmi <= 39.9) {
        console.log(`${answers.name}: you are obese (Calss-II).`);
      } else if (bmi > 40) {
        console.log(`${answers.name}: you are extremely obese.`);
      }
    });

  const confirm = await inquirer.prompt([
    {
      name: `confirm`,
      message: `\n\n Do you want to do another calculation?`,
      type: `confirm`,
    },
  ]);

  again = confirm;
  console.log(`\n\n`);
}

greetUser(`Welcome to BMI calculator.\n`);

do {
  await getUserInput();
} while (again);
