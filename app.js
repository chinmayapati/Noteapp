const notes = require('./notes');
const yargs = require("yargs");

const argv = yargs.argv;

var command = argv._[0];

if( argv["_"].length > 1 ) {
    console.log("Invalid Command");
    process.exit(1);
}

var title = argv.title;
var body = argv.body;

if( command === "add" ) {
    notes.addNote(title, body);
}
else if( command === "remove" ) {
    notes.removeNote(title);
}
else if( command === "list" ) {
    notes.listAll();
}
else if( command === "read" ) {
    notes.getNote(title);
}
else console.log("Invalid Command!");
