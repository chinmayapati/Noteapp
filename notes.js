const fs = require('fs');
const _ = require('lodash');

/* Utility functions */
var fetchNotes = () => {
    var notes = [];
    try {
            var readNotes = fs.readFileSync('notes-db.json');
            notes = JSON.parse(readNotes);
        } catch(e) {}
    return notes;
}

var writeNotes = (obj) => {
    fs.writeFileSync('notes-db.json', JSON.stringify(obj));   
}

var printNote = (note) => {
    console.log("-------");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
    console.log("-------\n");
}

var printUsage = () => {
    console.log("Usage:  node app.js [command] {arguments}");
    console.log("\tcommand: add, remove, read, list");
    console.log("\targuments: title, body");
    console.log("Check full documentation [at] https://github.com/chinmayapati/Noteapp");
}

/* Command functions */
var addNote = (title, body) => {

    if( title && body ) {
        
        var notes = fetchNotes();
        
        // filtering duplicate title
        var findDuplicate = notes.filter( (n) => n.title === title );
        
        if( findDuplicate.length===0 ) {
            
            notes.push( {title, body} );
            writeNotes(notes);
            console.log(`Added note with title: ${title}`);

        } else console.log(`Note with title: ${title} already exists!`);

    } 

    else {
        console.log("Unable to add: missing title/body");
        printUsage();
    }
}

var removeNote = (title) => {
    
    if( title ) {
        var notes = fetchNotes();
        var filterNotes = notes.filter( (n) => n.title!=title );
        writeNotes(filterNotes);
        
        // if sizes of new and old array differs, it's deleted else no such title
        if( notes.length !== filterNotes.length ) {
            console.log(`Removed note with Title:${title}`);
        } else console.log(`No note found with Title:${title}`);
    }
    else {
        console.log("Unable to remove: missing title");
        printUsage();
    }
}

var getNote = (title) => {

    if( title ) {
        var notes = fetchNotes('notes-db.json');
        var note = notes.filter( (n) => n.title===title );
        if( note[0] ) {
            printNote(note[0]);
        } else console.log(`No note found with Title:${title}`);
    }
    else {
        console.log("Unable to getNote: missing title");
        printUsage();
    }
}

var listAll = () => {
    var notes = fetchNotes();
    var count=1; 
    notes.forEach( (note) => {
        console.log(`Note: ${count++}`);
        printNote(note);
    });
}

module.exports = {
    addNote, removeNote, listAll, getNote, printUsage
};