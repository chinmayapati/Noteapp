const notes = require('./notes');
const yargs = require("yargs");

var title = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

var body = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', { title, body })
    .command('read', 'Read a note', { title })
    .command('list', 'List all notes')
    .command('remove', 'Remove a note', { title })
    .help()
    .argv;


var command = argv._[0];

if( command === "add" ) {
    notes.addNote(argv.title, argv.body);
}
else if( command === "remove" ) {
    notes.removeNote(argv.title);
}
else if( command === "list" ) {
    notes.listAll();
}
else if( command === "read" ) {
    notes.getNote(argv.title);
}
else {
    console.log("Invalid Command!");
}