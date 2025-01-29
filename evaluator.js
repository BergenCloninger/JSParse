class Evaluator {
    getNodeType(node) {
        return node.type;
    }

    checkNodeType(node) {
        return node.type === 'VariableDeclaration';
    }

    checkExpression(node) {
        return node.type === "ExpressionStatement";
    }
    
    readVarName(node) {
        return node.name;
    }

    readExpression(node) {
        return node.callee.name; 
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

    executeExpression(node, environment) {
        if (node.callee == null) {
            return -1;
        }

        if (node.arguments == null) {
            return -1;
        }

        if (this.readExpression(node) == "print") {
            const varName = this.readVarName(node.arguments[0]);
            
            var result = environment.filter(function (el) {
                return el.name == varName;
            });

            console.log("Print statement: ", result[0].value);
        }
    }
}

module.exports=Evaluator;