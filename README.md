# Noteapp v1.0
A CLI Noteapp using nodejs

## Setup
Install NodeJS v6.0 or above from nodejs.org
```sh
$ git clone https://github.com/chinmayapati/Noteapp.git
$ cd Noteapp
$ npm install
```

## Usage
```node app.js [command] {arguments}```

**action :**
  - **add** : adds a note
  
    ``` $ node app.js add --title="title here" --body="body here" ```
  - **remove** : removes a note
  
    ``` $ node app.js remove --title="title here" ```
  - **list** : list all notes
    
    ``` $ node app.js list ```
  - **read** : read note of the specified title

    ``` $ node app.js read --title="title here" ```
    
**arguments :**
  - --title="title here" or -t="title here"
  - --body="body here" or -b="body here"
 
 ## Hugs or Bugs
 Welcoming thoughts [at] chinmaya.cp@gmail.com
 
 ## License
 ISC
