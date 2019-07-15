"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("typegoose");
const class_validator_1 = require("class-validator");
const user_model_1 = require("./user.model");
class Post extends typegoose_1.Typegoose {
}
__decorate([
    class_validator_1.IsString(),
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Post.prototype, "description", void 0);
__decorate([
    typegoose_1.prop({ default: Date.now() }),
    __metadata("design:type", Date)
], Post.prototype, "created", void 0);
__decorate([
    typegoose_1.prop({ default: Date.now() }),
    __metadata("design:type", Date)
], Post.prototype, "updated", void 0);
__decorate([
    typegoose_1.prop({ index: true }),
    __metadata("design:type", user_model_1.UserModel)
], Post.prototype, "author", void 0);
__decorate([
    typegoose_1.prop({ default: 0 }),
    __metadata("design:type", Number)
], Post.prototype, "votes", void 0);
exports.Post = Post;
//# sourceMappingURL=post.model.js.map