
//fs is a fileSystem function which is in built in node. All we need to do is store it in a const and use it 
//it can write the data to a file instead of writing it to the console.
const fs = require('fs');

fs.writeFileSync('hello.txt','hello from node js');

