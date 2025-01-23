class Evaluator {
    checkNodeType(node) {
        return node.type === 'VariableDeclaration';
    }
    
    readVarName(node) {
        return node.name;
    }

    makeVarPair(varName) {
        return {
            "name": varName
        }
    }

    readNodeVal(node) {
        return node.value;
    }

    makeValuePair(varValue) {
        return {"value": varValue};
    }

    storeEntryInEnvironment(varNamePair, valuePair, environment) {
        environment.push({...varNamePair, ...valuePair});
        return environment;
    }
}
module.exports=Evaluator;