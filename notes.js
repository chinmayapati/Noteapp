const fs = require('fs');

var fetchNotes = (filename) => {
    var notes = [];
    try {
            var readNotes = fs.readFileSync(filename);
            notes = JSON.parse(readNotes);
        } catch(e) {}
    return notes;
}

var writeNotes = (filename, obj) => {
    fs.writeFileSync(filename, JSON.stringify(obj));   
}

var addNote = (title, body) => {

    if( title!=undefined && body!=undefined ) {
        
        var notes = fetchNotes('notes-db.json');
        
        // filtering duplicate title
        var findDuplicate = notes.filter( (n) => n.title === title );
        
        if( findDuplicate.length===0 ) {
            
            notes.push( {title, body} );
            writeNotes('notes-db.json', notes);
            console.log(`Added note with title: ${title}`);

        } else console.log(`Note with title: ${title} already exists!`);

    } 

    else console.log("Unable to add: missing title/body");

}

var removeNote = (title) => {
    
    if( title!=undefined ) {
        console.log(`Removing note with title:${title}`);
    }
    else console.log("Unable to remove: missing title");
}

var getNote = (title) => {
    if( title!=undefined ) {
        console.log("Getting note from title");
    }
    else console.log("Unable to getNote: missing title");
}

var listAll = () => {
    console.log("Listing all notes");    
}

module.exports = {
    addNote, removeNote, listAll, getNote
};