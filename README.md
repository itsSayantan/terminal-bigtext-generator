#terminal-bigtext-generator

#Description

console-bigtext-generator is a simple library which allows users to generate Big Texts on the console. This library can be used for making application banners in the terminal.

#Installation
```
npm install terminal-bigtext-generator --save
```

#Usage
```
const tbg = require('terminal-bigtext-generator')

tbg.print('ABC')
```

#Support

This library currently supports characters like ```A-Z a-z 0-9 - !```

This library does not support any characters beyond this and will throw an error if entered. Also multi-line printing is not available as of now.
