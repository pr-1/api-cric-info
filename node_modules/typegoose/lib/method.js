"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var baseMethod = function (target, key, descriptor, methodType) {
    var _a;
    if (descriptor === undefined) {
        descriptor = Object.getOwnPropertyDescriptor(target, key);
    }
    var name;
    if (methodType === 'instanceMethods') {
        name = target.constructor.name;
    }
    if (methodType === 'staticMethods') {
        name = target.name;
    }
    if (!data_1.methods[methodType][name]) {
        data_1.methods[methodType][name] = {};
    }
    var method = descriptor.value;
    data_1.methods[methodType][name] = __assign({}, data_1.methods[methodType][name], (_a = {}, _a[key] = method, _a));
};
exports.staticMethod = function (target, key, descriptor) {
    return baseMethod(target, key, descriptor, 'staticMethods');
};
exports.instanceMethod = function (target, key, descriptor) {
    return baseMethod(target, key, descriptor, 'instanceMethods');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0aG9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21ldGhvZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUEsK0JBQWlDO0FBSWpDLElBQU0sVUFBVSxHQUFHLFVBQUMsTUFBVyxFQUFFLEdBQVcsRUFBRSxVQUF3QyxFQUFFLFVBQXNCOztJQUM1RyxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUU7UUFDNUIsVUFBVSxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDM0Q7SUFFRCxJQUFJLElBQVMsQ0FBQztJQUNkLElBQUksVUFBVSxLQUFLLGlCQUFpQixFQUFFO1FBQ3BDLElBQUksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztLQUNoQztJQUNELElBQUksVUFBVSxLQUFLLGVBQWUsRUFBRTtRQUNsQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNwQjtJQUVELElBQUksQ0FBQyxjQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDOUIsY0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUNoQztJQUVELElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDaEMsY0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFDcEIsY0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUMzQixHQUFHLElBQUcsTUFBTSxNQUNkLENBQUM7QUFDSixDQUFDLENBQUM7QUFFVyxRQUFBLFlBQVksR0FBRyxVQUFDLE1BQVcsRUFBRSxHQUFXLEVBQUUsVUFBd0M7SUFDN0YsT0FBQSxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDO0FBQXBELENBQW9ELENBQUM7QUFFMUMsUUFBQSxjQUFjLEdBQUcsVUFBQyxNQUFXLEVBQUUsR0FBVyxFQUFFLFVBQXdDO0lBQy9GLE9BQUEsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixDQUFDO0FBQXRELENBQXNELENBQUMifQ==