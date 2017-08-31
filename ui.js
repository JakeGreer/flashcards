//USER INTERFACE
var inquirer = require("inquirer");
//Prompts the user which kind of flashcards they want and prompts for the front and the back of the card.
//COnfirms are implemented for error checking the user.
inquirer
    .prompt([{
            type: "list",
            message: "What type of flashcard?",
            name: "card",
            choices: ["basic", "cloze"]
        },
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        },
        {
            type: "input",
            message: "Enter the front text... (The Question or Statement)",
            name: "question"
        },
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        },
        {
            type: "input",
            message: "Enter the back text... (The Answer or Cloze)",
            name: "answer"
        },
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        }
    ])
    .then(function(inquirerResponse) {
        // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        if (inquirerResponse.confirm) {
            var cardType = inquirerResponse.card;
            var q = inquirerResponse.question;
            var a = inquirerResponse.answer;
            var BasicCard = require("./cards.js");
            var ClozeCard = require("./cloze.js");
            switch (cardType) {
                case "basic":
                    var myBasic = new BasicCard(q, a);
                    break;
                case "cloze":
                    var myCloze = new ClozeCard(q, a);
                    break;
            }
            //If the confirms were not all met then the card is discarded.
        } else {
            console.log("Card was not saved!");
        }
    });