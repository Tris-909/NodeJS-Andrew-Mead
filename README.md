# NodeJS-Andrew-Mead
A NodeJS course from Andrew Mead Udemy

## Section 3: Node JS Module System 
NodeJS has a ton of core modules that you can use. `fs` is one of them. In order to use a module inside a file from NodeJS ( Assuming you already installed NodeJS ) You need to use `require` to import the module 

```
const fs = require('fs');

fs.writeFileSync('text.txt', 'File content');
```

You can also use `module.exports =` to export variable, function from a file. Then from the file you want to import the thing you just export, you can use `const something = require('path-to-the-file');`. Then you can use that thing from the file you import.