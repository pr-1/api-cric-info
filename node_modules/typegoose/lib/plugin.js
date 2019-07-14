"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
exports.plugin = function (mongoosePlugin, options) { return function (constructor) {
    var name = constructor.name;
    if (!data_1.plugins[name]) {
        data_1.plugins[name] = [];
    }
    data_1.plugins[name].push({ mongoosePlugin: mongoosePlugin, options: options });
}; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3BsdWdpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLCtCQUFpQztBQUVwQixRQUFBLE1BQU0sR0FBRyxVQUFDLGNBQW1CLEVBQUUsT0FBYSxJQUFLLE9BQUEsVUFBQyxXQUFnQjtJQUM3RSxJQUFNLElBQUksR0FBVyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3RDLElBQUksQ0FBQyxjQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDbEIsY0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUNwQjtJQUNELGNBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLGdCQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELENBQUMsRUFONkQsQ0FNN0QsQ0FBQyJ9