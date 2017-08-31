function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze.toLowerCase();
    this.ellipses = text.replace(cloze, "...");
    console.log("\n__________________________ CLOZE CARD __________________________\n");
    console.log("Full Text: " + this.text + "\nPartial Text: " + this.ellipses + "\nCloze: " + this.cloze);
    console.log("\n________________________________________________________________\n");
    var fs = require("fs");

    fs.appendFile("cloze.txt", "Full Text: " + this.fulltext + " | Partial Text: " + this.ellipses + " | Cloze: " + this.cloze + " ; ", function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("\n\ncloze.txt was updated");
    });
};

module.exports = ClozeCard;