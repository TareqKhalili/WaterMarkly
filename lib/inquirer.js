const inquirer = require("inquirer");

module.exports = {
  askForCoordinates: () => {
    const questions = [
      {
        name: "images-width",
        type: "input",
        message: "Enter Your Images Standard Width:",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please Enter Your Images Standard Width.";
          }
        },
      },
      {
        name: "images-height",
        type: "input",
        message: "Enter Your Images Standard Height:",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please Enter Your Images Standard Height.";
          }
        },
      },
      {
        name: "logo-width",
        type: "input",
        message: "Enter Your Logo's Width:",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please Enter Your Logo's Width.";
          }
        },
      },
      {
        name: "logo-height",
        type: "input",
        message: "Enter Your Logo's Height:",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please Enter Your Logo's Height.";
          }
        },
      },
      {
        name: "position",
        type: "list",
        message: "Enter Where You Want Your Watermark:",
        choices: [ 
          "Top Left", 
          "Top Right", 
          "Bottom Left", 
          "Bottom Right",
          "Center"
         ],
        validate: function (value) {
          if (value.length != 'tl' || value.length != 'tr' || value.length != 'bl' || value.length != 'br' || value.length != 'ce') {
            return "Please Enter Where You Want Your Watermark.";
          } else {
            return true;
          }
        },
      }
    ];
    return inquirer.prompt(questions);
  },
};
