const calculator = () => {
    const smartOperation = (arr, operation) => {
        let sum = operation === 'addition' || operation === 'multiplication' ? 1 : 0;
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number') {
                sum = operation === 'addition' ? sum + arr[i] :
                      operation === 'subtraction' ? sum - arr[i] :
                      operation === 'multiplication' ? sum * arr[i] :
                      operation === 'division' ? sum / arr[i] :
                      operation === 'power' ? sum ** arr[i] :
                      operation === 'reminder' ? sum % arr[i] :
                      sum;
            } else if (!isNaN(parseInt(arr[i]))) {
                try {
                    sum = operation === 'addition' ? sum + parseInt(arr[i]) :
                          operation === 'subtraction' ? sum - parseInt(arr[i]) :
                          operation === 'multiplication' ? sum * parseInt(arr[i]) :
                          operation === 'division' ? sum / parseInt(arr[i]) :
                          operation === 'power' ? sum ** parseInt(arr[i]) :
                          operation === 'reminder' ? sum % parseInt(arr[i]) :
                          sum;
                } catch (error) {
                    console.log("ERROR");
                }
            }
        }
        return sum;
    };

    const calc = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        mul: (a, b) => a * b,
        toPower: (value, raiseTo) => value ** raiseTo,
        reminder: (a, b) => a % b,
        evaluate: (expression) => {
            const strExpression = String(expression);
            return eval(strExpression);
        },
        divide: (a, b) => a / b,
        inArrayAddition_Default: (arr) => {
            try {
                return arr.reduce((acc, curr) => acc + curr, 0);
            } catch (error) {
                console.log("ERROR");
            }
        },
        inArrayAddition_Smart: (arr) => smartOperation(arr, 'addition'),
        inArraySubtraction_Default: (arr) => {
            try {
                return arr.reduce((acc, curr) => acc - curr, 0);
            } catch (error) {
                console.log("ERROR");
            }
        },
        inArraySubtraction_Smart: (arr) => smartOperation(arr, 'subtraction'),
        inArrayMultiplication_Default: (arr) => {
            try {
                return arr.reduce((acc, curr) => acc * curr, 1);
            } catch (error) {
                console.log("ERROR");
            }
        },
        inArrayMultiplication_Smart: (arr) => smartOperation(arr, 'multiplication'),
        inArrayDivision_Default: (arr) => {
            try {
                return arr.reduce((acc, curr) => acc / curr);
            } catch (error) {
                console.log("ERROR");
            }
        },
        inArrayDivision_Smart: (arr) => smartOperation(arr, 'division'),
        inArrayPower_Default: (arr) => {
            try {
                return arr.reduce((acc, curr) => acc ** curr);
            } catch (error) {
                console.log("ERROR");
            }
        },
        inArrayPower_Smart: (arr) => smartOperation(arr, 'power'),
        inArrayReminder_Default: (arr) => {
            try {
                return arr.reduce((acc, curr) => acc % curr, 0);
            } catch (error) {
                console.log("ERROR");
            }
        },
        inArrayReminder_Smart: (arr) => smartOperation(arr, 'reminder'),
        inObjectAddition: (obj) => {
            try {
                return Object.values(obj).reduce((acc, curr) => acc + curr, 0);
            } catch (error) {
                console.log("ERROR");
            }
        },
        inObjectSubtraction: (obj) => {
            try {
                return Object.values(obj).reduce((acc, curr) => acc - curr, 0);
            } catch (error) {
                console.log("ERROR");
            }
        },
        inObjectMultiplication: (obj) => {
            try {
                return Object.values(obj).reduce((acc, curr) => acc * curr, 1);
            } catch (error) {
                console.log("ERROR");
            }
        },
        inObjectDivision: (obj) => {
            try {
                return Object.values(obj).reduce((acc, curr) => acc / curr);
            } catch (error) {
                console.log("ERROR");
            }
        },
        inObjectPower: (obj) => {
            try {
                return Object.values(obj).reduce((acc, curr) => acc ** curr);
            } catch (error) {
                console.log("ERROR");
            }
        },
        inObjectReminder: (obj) => {
            try {
                return Object.values(obj).reduce((acc, curr) => acc % curr, 0);
            } catch (error) {
                console.log("ERROR");
            }
        },
        inObjectAddition_Smart: (obj) => smartOperation(Object.values(obj), 'addition'),
        inObjectSubtraction_Smart: (obj) => smartOperation(Object.values(obj), 'subtraction'),
        inObjectMultiplication_Smart: (obj) => smartOperation(Object.values(obj), 'multiplication'),
        inObjectDivision_Smart: (obj) => smartOperation(Object.values(obj), 'division'),
        inObjectPower_Smart: (obj) => smartOperation(Object.values(obj), 'power'),
        inObjectReminder_Smart: (obj) => smartOperation(Object.values(obj), 'reminder'),
    };

    return calc;
};

export default calculator;
