"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = function (fields, options) {
    return function (constructor) {
        var indices = Reflect.getMetadata('typegoose:indices', constructor) || [];
        indices.push({ fields: fields, options: options });
        Reflect.defineMetadata('typegoose:indices', indices, constructor);
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFrRWEsUUFBQSxLQUFLLEdBQUcsVUFBQyxNQUFXLEVBQUUsT0FBc0I7SUFDdkQsT0FBTyxVQUFDLFdBQWdCO1FBQ3RCLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLFFBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDcEUsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDIn0=