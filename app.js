const chalk = require("chalk"); // colorizes the output
const clear = require("clear"); // clears the terminal screen
const figlet = require("figlet"); 
const inquirer = require("./lib/inquirer"); // creates interactive command-line user interface
const editor = require("./lib/editor");
const run = async () => {
  clear();
  console.log(
    chalk.blue(figlet.textSync("WaterMark", { horizontalLayout: "full" }))
  );

  const input = await inquirer.askGithubCredentials();
  console.log(input.position);
  let { x_POS, y_POS } = setXY(input);
  await editor(x_POS, y_POS);
  console.log(
    chalk.green("All Complete!")
  );
};

function setXY(input) {
    let x_POS;
    let y_POS;
    if (input['position'] === "Top Left") {
        x_POS = 15;
        y_POS = 15;
    } 

    else if (input['position'] === "Top Right") {
        x_POS = parseInt(input['images-width']) - parseInt(input['logo-width']) - 15;
        y_POS = 15;
    } 

    else if (input['position'] === "Bottom Left") {
        x_POS = 15;
        y_POS = parseInt(input['images-height']) - parseInt(input['logo-height']) - 15;
    } 

    else if (input['position'] === "Bottom Right") {
        x_POS = parseInt(input['images-width']) - parseInt(input['logo-width']) - 15;
        y_POS = parseInt(input['images-height']) - parseInt(input['logo-height']) - 15;
    } 

    else if (input['position'] === "Center") {
        x_POS = (parseInt(input['images-width']) / 2) - (parseInt(input['logo-width']) / 2);
        y_POS = (parseInt(input['images-height']) / 2) - (parseInt(input['logo-height']) / 2);
    }
    return { x_POS, y_POS }
}


run();
