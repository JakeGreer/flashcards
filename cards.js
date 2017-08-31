var BasicCard = function(front, back) {
    this.front = front;
    this.back = back.toLowerCase();
    console.log("\n__________________________ BASIC CARD __________________________\n");
    console.log("Front: " + this.front + "\nBack: " + this.back);
    console.log("\n________________________________________________________________\n");
    var fs = require("fs");

    fs.appendFile("basic.txt", "Front: " + this.front + " | Back: " + this.back + " ; ", function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("\n\nbasic.txt was updated");
    });
};
module.exports = BasicCard;