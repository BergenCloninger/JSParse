class Evaluator{
    checkNodeType(node) {
        return node.type === 'VariableDeclaration';
    }
    
    readVarName(node) {
        return node.name;
    }
}
module.exports=Evaluator;