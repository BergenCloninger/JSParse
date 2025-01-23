const Getnodes = require("./../getnodes");
const Evaluator = require("./../evaluator");
let body ;

beforeAll( ()=>{
    const nodes = new Getnodes();

    const loaded = nodes.loadFile("./test/sample.js")
    body = nodes.parseFile(loaded);

    console.log(body);
    console.log(body[0].declarations);
    console.log(body[0].declarations[0].id);
})

test('two nodes parsed ', ()=>{
    expect(body).not.toBe(null);
    expect(body.length).toBeGreaterThan(0);
    expect(body.length).toEqual(2);
})

test('check if node has type: \'VariableDeclaration\':', ()=>{
    const evaluator = new Evaluator(); //should this be global? 

    const node1 = evaluator.checkNodeType(body[0]); //check first node
    const node2 = evaluator.checkNodeType(body[1]); //check second node
    expect(node1).toBe(true);
    expect(node2).toBe(false); //we expect this to be false since it doesn't have that type (this is probably unnecessary to test, but its good practice)
})

test('variable name is a', ()=>{
    const evaluator = new Evaluator();
    expect(evaluator.readVarName(body[0].declarations[0].id)).toBe('a');
})