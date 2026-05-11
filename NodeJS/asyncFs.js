// reading file asynchronously
const fs = require('fs');

fs.readFile('myfile.txt','utf8', (err, data)=>{
    if(err){
        console.error('Error reading file sowwy '+ err);
    }
    console.log('File contents: ' + data);
} );
console.log('Reading file... (this will run first)');