"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var InvalidPropError = (function (_super) {
    __extends(InvalidPropError, _super);
    function InvalidPropError(typeName, key) {
        return _super.call(this, "In property " + key + ": " + typeName + " is not a primitive type nor a Typegoose schema (Not extending it).") || this;
    }
    return InvalidPropError;
}(Error));
exports.InvalidPropError = InvalidPropError;
var NotNumberTypeError = (function (_super) {
    __extends(NotNumberTypeError, _super);
    function NotNumberTypeError(key) {
        return _super.call(this, "Type of " + key + " property is not a number.") || this;
    }
    return NotNumberTypeError;
}(Error));
exports.NotNumberTypeError = NotNumberTypeError;
var NotStringTypeError = (function (_super) {
    __extends(NotStringTypeError, _super);
    function NotStringTypeError(key) {
        return _super.call(this, "Type of " + key + " property is not a string.") || this;
    }
    return NotStringTypeError;
}(Error));
exports.NotStringTypeError = NotStringTypeError;
var NoMetadataError = (function (_super) {
    __extends(NoMetadataError, _super);
    function NoMetadataError(key) {
        return _super.call(this, "There is no metadata for the \"" + key + "\" property. " +
            'Check if emitDecoratorMetadata is enabled in tsconfig.json ' +
            'or check if you\'ve declared a sub document\'s class after usage.') || this;
    }
    return NoMetadataError;
}(Error));
exports.NoMetadataError = NoMetadataError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Vycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUFzQyxvQ0FBSztJQUN6QywwQkFBWSxRQUFnQixFQUFFLEdBQVc7ZUFDdkMsa0JBQU0saUJBQWUsR0FBRyxVQUFLLFFBQVEsd0VBQXFFLENBQUM7SUFDN0csQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQUpELENBQXNDLEtBQUssR0FJMUM7QUFKWSw0Q0FBZ0I7QUFNN0I7SUFBd0Msc0NBQUs7SUFDM0MsNEJBQVksR0FBVztlQUNyQixrQkFBTSxhQUFXLEdBQUcsK0JBQTRCLENBQUM7SUFDbkQsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQUpELENBQXdDLEtBQUssR0FJNUM7QUFKWSxnREFBa0I7QUFNL0I7SUFBd0Msc0NBQUs7SUFDM0MsNEJBQVksR0FBVztlQUNyQixrQkFBTSxhQUFXLEdBQUcsK0JBQTRCLENBQUM7SUFDbkQsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQUpELENBQXdDLEtBQUssR0FJNUM7QUFKWSxnREFBa0I7QUFNL0I7SUFBcUMsbUNBQUs7SUFDeEMseUJBQVksR0FBVztlQUNyQixrQkFDRSxvQ0FBaUMsR0FBRyxrQkFBYztZQUNoRCw2REFBNkQ7WUFDN0QsbUVBQW1FLENBQ3RFO0lBQ0gsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQVJELENBQXFDLEtBQUssR0FRekM7QUFSWSwwQ0FBZSJ9