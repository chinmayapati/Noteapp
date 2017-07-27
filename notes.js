const fs = require('fs');

var addNote = (title, body) => {

    if( title!=undefined && body!=undefined ) {
        
        var notes = [];
        try {
            var readNotes = fs.readFileSync('notes-db.json');
            notes = JSON.parse(readNotes);
        } catch(e) {}

        // filtering duplicate title
        var findDuplicate = notes.filter( (n) => n.title === title );
        
        if( findDuplicate.length===0 ) {
            notes.push( {title, body} );
            fs.writeFileSync( 'notes-db.json', JSON.stringify(notes) );
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

var listAll = () => {
    console.log("Listing all notes");    
}

module.exports = {
    addNote, removeNote, listAll
};