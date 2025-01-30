const Getnodes = require("./../getnodes");
const Evaluator = require("./../evaluator");

const evaluator = new Evaluator();
let body ;

beforeAll( ()=>{
    const nodes = new Getnodes();
    const loaded = nodes.loadFile("./test/sample.js")
    body = nodes.parseFile(loaded);

    // console.log(body);
    // console.log(body[0].declarations);
    // console.log(body[0].declarations[0].id);
    // console.log(body[1].expression);
})

test('two nodes parsed ', ()=>{
    expect(body).not.toBe(null);
    expect(body.length).toBeGreaterThan(0);
    expect(body.length).toEqual(2);
})

test('check if node has type: \'VariableDeclaration\':', ()=>{
    const node1 = evaluator.checkNodeType(body[0]);
    const node2 = evaluator.checkNodeType(body[1]);
    expect(node1).toBe(true);
    expect(node2).toBe(false);
})

test('variable name is a', ()=>{
    expect(evaluator.readVarName(body[0].declarations[0].id)).toBe('a');
})

test('given string a, make a varPair with it', ()=>{
    const varName = 'a';
    const result = evaluator.makeVarPair(varName);

    expect(result).toStrictEqual({"name": "a"})
})

test('given varDec node read node value', ()=>{
    expect(evaluator.readNodeVal(body[0].declarations[0].init)).toBe('hello');
})

test("given VarValue, make a valuePair with it", ()=>{
    const varValue = "hello";
    const result = evaluator.makeValuePair(varValue);
    expect(result).toStrictEqual({"value": "hello"});
})

test("given varName, varValue, and environment, combine and store", ()=> {
    const valNamePair = {"name": 'a'};
    const valuePair = {"value": "hello"};
    const environment = [];
    const result = evaluator.storeEntryInEnvironment(valNamePair, valuePair, environment);
    expect(result).toStrictEqual([{"name": 'a', "value": "hello"}]);
})

test('get nodeType', () => {
    const result = evaluator.checkExpression(body[1]);
    expect(result).toBe(true);
})

test('get varName', () => {
    expect(evaluator.readVarName(body[1].expression.arguments[0])).toBe('a');
})

test('get callee name', () => {
    expect(evaluator.readExpression(body[1].expression)).toBe("print");
})

test('print statement', () => {
    environmentExpected = [{"name": 'a', "value": "hello"}];
    evaluator.executeExpression(body[1].expression, environmentExpected);
})

test("declare variable execution", ()=> {
    const environment = [];
    const result = evaluator.varDeclareExec(body[0], environment);
    expect(result).toStrictEqual([{"name": 'a', "value": "hello"}]);
})

test("outerLoop", () => {
    evaluator.outerLoop(body);
})