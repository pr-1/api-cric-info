"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
require("reflect-metadata");
var data_1 = require("./data");
__export(require("./method"));
__export(require("./prop"));
__export(require("./hooks"));
__export(require("./plugin"));
__export(require("."));
var utils_1 = require("./utils");
exports.getClassForDocument = utils_1.getClassForDocument;
var Typegoose = (function () {
    function Typegoose() {
    }
    Typegoose.prototype.getModelForClass = function (t, _a) {
        var _b = _a === void 0 ? {} : _a, existingMongoose = _b.existingMongoose, schemaOptions = _b.schemaOptions, existingConnection = _b.existingConnection;
        var name = this.constructor.name;
        if (!data_1.models[name]) {
            this.setModelForClass(t, {
                existingMongoose: existingMongoose,
                schemaOptions: schemaOptions,
                existingConnection: existingConnection,
            });
        }
        return data_1.models[name];
    };
    Typegoose.prototype.setModelForClass = function (t, _a) {
        var _b = _a === void 0 ? {} : _a, existingMongoose = _b.existingMongoose, schemaOptions = _b.schemaOptions, existingConnection = _b.existingConnection;
        var name = this.constructor.name;
        var sch = this.buildSchema(t, name, schemaOptions);
        var parentCtor = Object.getPrototypeOf(this.constructor.prototype).constructor;
        while (parentCtor && parentCtor.name !== 'Typegoose' && parentCtor.name !== 'Object') {
            sch = this.buildSchema(t, parentCtor.name, schemaOptions, sch);
            parentCtor = Object.getPrototypeOf(parentCtor.prototype).constructor;
        }
        var model = mongoose.model.bind(mongoose);
        if (existingConnection) {
            model = existingConnection.model.bind(existingConnection);
        }
        else if (existingMongoose) {
            model = existingMongoose.model.bind(existingMongoose);
        }
        data_1.models[name] = model(name, sch);
        data_1.constructors[name] = this.constructor;
        return data_1.models[name];
    };
    Typegoose.prototype.buildSchema = function (t, name, schemaOptions, sch) {
        var Schema = mongoose.Schema;
        if (!sch) {
            sch = schemaOptions ? new Schema(data_1.schema[name], schemaOptions) : new Schema(data_1.schema[name]);
        }
        else {
            sch.add(data_1.schema[name]);
        }
        var staticMethods = data_1.methods.staticMethods[name];
        if (staticMethods) {
            sch.statics = Object.assign(staticMethods, sch.statics || {});
        }
        else {
            sch.statics = sch.statics || {};
        }
        var instanceMethods = data_1.methods.instanceMethods[name];
        if (instanceMethods) {
            sch.methods = Object.assign(instanceMethods, sch.methods || {});
        }
        else {
            sch.methods = sch.methods || {};
        }
        if (data_1.hooks[name]) {
            var preHooks = data_1.hooks[name].pre;
            preHooks.forEach(function (preHookArgs) {
                var _a;
                (_a = sch).pre.apply(_a, preHookArgs);
            });
            var postHooks = data_1.hooks[name].post;
            postHooks.forEach(function (postHookArgs) {
                var _a;
                (_a = sch).post.apply(_a, postHookArgs);
            });
        }
        if (data_1.plugins[name]) {
            for (var _i = 0, _a = data_1.plugins[name]; _i < _a.length; _i++) {
                var plugin = _a[_i];
                sch.plugin(plugin.mongoosePlugin, plugin.options);
            }
        }
        var getterSetters = data_1.virtuals[name];
        if (getterSetters) {
            for (var _b = 0, _c = Object.keys(getterSetters); _b < _c.length; _b++) {
                var key = _c[_b];
                if (getterSetters[key].options && getterSetters[key].options.overwrite) {
                    sch.virtual(key, getterSetters[key].options);
                }
                else {
                    if (getterSetters[key].get) {
                        sch.virtual(key, getterSetters[key].options).get(getterSetters[key].get);
                    }
                    if (getterSetters[key].set) {
                        sch.virtual(key, getterSetters[key].options).set(getterSetters[key].set);
                    }
                }
            }
        }
        var indices = Reflect.getMetadata('typegoose:indices', t) || [];
        for (var _d = 0, indices_1 = indices; _d < indices_1.length; _d++) {
            var index = indices_1[_d];
            sch.index(index.fields, index.options);
        }
        return sch;
    };
    return Typegoose;
}());
exports.Typegoose = Typegoose;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWdvb3NlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3R5cGVnb29zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLG1DQUFxQztBQUNyQyw0QkFBMEI7QUFFMUIsK0JBQXlGO0FBRXpGLDhCQUF5QjtBQUN6Qiw0QkFBdUI7QUFDdkIsNkJBQXdCO0FBQ3hCLDhCQUF5QjtBQUN6Qix1QkFBa0I7QUFDbEIsaUNBQThDO0FBQXJDLHNDQUFBLG1CQUFtQixDQUFBO0FBVzVCO0lBQUE7SUFnSEEsQ0FBQztJQS9HUSxvQ0FBZ0IsR0FBdkIsVUFDRSxDQUFJLEVBQ0osRUFBcUY7WUFBckYsNEJBQXFGLEVBQW5GLHNDQUFnQixFQUFFLGdDQUFhLEVBQUUsMENBQWtCO1FBRXJELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRTtnQkFDdkIsZ0JBQWdCLGtCQUFBO2dCQUNoQixhQUFhLGVBQUE7Z0JBQ2Isa0JBQWtCLG9CQUFBO2FBQ25CLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxhQUFNLENBQUMsSUFBSSxDQUF3QixDQUFDO0lBQzdDLENBQUM7SUFFTSxvQ0FBZ0IsR0FBdkIsVUFDRSxDQUFJLEVBQ0osRUFBcUY7WUFBckYsNEJBQXFGLEVBQW5GLHNDQUFnQixFQUFFLGdDQUFhLEVBQUUsMENBQWtCO1FBRXJELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBR25DLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztRQUV0RCxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxD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