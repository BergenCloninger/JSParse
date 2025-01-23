//run program with 
node index.js

//test program with
npm test

// File structure
getnodes is a class whose job it is to load and parse a file
evaluator will be a class that does the job of interpretting the file
eval.test.js contains the tests
sample.js is our sample program we will be interpretting
index is a file for a script that runs the interpreter

//Steps to build
1. Using the following, create two methods in getnodes.js: one method to Load a file given a filename and a separate method to parse provided with a variable called program :
    a)  readFileSync(filename, {encoding:'utf8', flag:'r'}).toString()
    b)  parse(program, {ecmaVersion: 2020}).body;

2. Complete the beforeAll test method in /test/eval.test.js so that it returns the loaded and body of the file parsed by acorn. Include a console.log of the body in this test.

3. Write a test in /test/eval.test.js  that shows there are two nodes when parsing the sample file test/sample.js.

4. Write a test and function that returns true if a Node has type 'VariableDeclaration'. The test and function should not both be in the same file.