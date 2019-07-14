"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
exports.isPrimitive = function (Type) {
    return ['String', 'Number', 'Boolean', 'Date', 'Decimal128', 'ObjectID'].includes(Type.name);
};
exports.isObject = function (Type) {
    var prototype = Type.prototype;
    var name = Type.name;
    while (name) {
        if (name === 'Object') {
            return true;
        }
        prototype = Object.getPrototypeOf(prototype);
        name = prototype ? prototype.constructor.name : null;
    }
    return false;
};
exports.isNumber = function (Type) { return Type.name === 'Number'; };
exports.isString = function (Type) { return Type.name === 'String'; };
exports.initAsObject = function (name, key) {
    if (!data_1.schema[name]) {
        data_1.schema[name] = {};
    }
    if (!data_1.schema[name][key]) {
        data_1.schema[name][key] = {};
    }
};
exports.initAsArray = function (name, key) {
    if (!data_1.schema[name]) {
        data_1.schema[name] = {};
    }
    if (!data_1.schema[name][key]) {
        data_1.schema[name][key] = [{}];
    }
};
exports.getClassForDocument = function (document) {
    var modelName = document.constructor.modelName;
    return data_1.constructors[modelName];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSwrQkFBOEM7QUFFakMsUUFBQSxXQUFXLEdBQUcsVUFBQyxJQUFTO0lBQ25DLE9BQUEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQXJGLENBQXFGLENBQUM7QUFFM0UsUUFBQSxRQUFRLEdBQUcsVUFBQyxJQUFTO0lBQ2hDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDL0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixPQUFPLElBQUksRUFBRTtRQUNYLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsU0FBUyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0MsSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUN0RDtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBRVcsUUFBQSxRQUFRLEdBQUcsVUFBQyxJQUFTLElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBdEIsQ0FBc0IsQ0FBQztBQUVqRCxRQUFBLFFBQVEsR0FBRyxVQUFDLElBQVMsSUFBSyxPQUFBLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUF0QixDQUFzQixDQUFDO0FBRWpELFFBQUEsWUFBWSxHQUFHLFVBQUMsSUFBSSxFQUFFLEdBQUc7SUFDcEMsSUFBSSxDQUFDLGFBQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNqQixhQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ25CO0lBQ0QsSUFBSSxDQUFDLGFBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUN0QixhQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ3hCO0FBQ0gsQ0FBQyxDQUFDO0FBRVcsUUFBQSxXQUFXLEdBQUcsVUFBQyxJQUFTLEVBQUUsR0FBUTtJQUM3QyxJQUFJLENBQUMsYUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2pCLGFBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDbkI7SUFDRCxJQUFJLENBQUMsYUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3RCLGFBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzFCO0FBQ0gsQ0FBQyxDQUFDO0FBRVcsUUFBQSxtQkFBbUIsR0FBRyxVQUFDLFFBQTJCO0lBQzdELElBQU0sU0FBUyxHQUFJLFFBQVEsQ0FBQyxXQUErQyxDQUFDLFNBQVMsQ0FBQztJQUN0RixPQUFPLG1CQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDIn0=