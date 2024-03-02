import randomSk from "randomskjs";
import calculator from "./UTILS/CALC/index.js";




const main = () => {
    const utiljs = {
        calculator_default : calculator(),
        randomSk_Js : function(perimeter){
            return randomSk(perimeter)
        }
    };

    return utiljs
};

export default main;