const acorn = require("acorn");
const fs = require('fs')

class getnodes{
    loadFile(fileName) { //loads a file with a given name
        const code = fs.readFileSync(fileName, {encoding:'utf8', flag:'r'}).toString()
        return code;
    }

    parseFile(program) { //parses a given program (generally a read file)
        const ast = acorn.parse(program, {ecmaVersion: 2020}).body;
        return ast;
    }
}

module.exports = getnodes