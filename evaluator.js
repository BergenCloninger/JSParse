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

    readDeclareVarName(node) {
        return node.declarations[0].id.name;
    }

    readDeclareNodeVal(node) {
        return node.declarations[0].init.value;
    }

    readExpression(node) {
        return node.expression.callee.name; 
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
        console.log("Node:", node);
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

    varDeclareExec(node, environment) {
        const valNamePair = this.makeVarPair(this.readDeclareVarName(node));
        const valuePair = this.makeValuePair(this.readDeclareNodeVal(node));
        
        return this.storeEntryInEnvironment(valNamePair, valuePair, environment);
    }

    outerLoop(body) {
        let environment = [];

        body.forEach(element => {
            switch(this.getNodeType(element)) {
                case "VariableDeclaration":
                    environment = this.varDeclareExec(element, environment);
                    break;
                case "ExpressionStatement":
                    this.executeExpression(element, environment);
                    break;
            }
        });
    }
}

module.exports=Evaluator;