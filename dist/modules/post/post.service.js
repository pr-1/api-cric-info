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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const mongoose_1 = require("mongoose");
const post_model_1 = require("src/models/post.model");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let PostsService = class PostsService {
    constructor(postModel) {
        this.postModel = postModel;
    }
    create(createPostDto) {
        const createdPost = new this.postModel(createPostDto);
        return rxjs_1.from(createdPost.save());
    }
    findAll() {
        return rxjs_1.from(this.postModel.find().exec());
    }
    updatePost(id, item) {
        return rxjs_1.from(this.postModel
            .findByIdAndUpdate(this.toObjectId(id), item, { new: true })
            .exec());
    }
    deletePost(id) {
        return rxjs_1.from(this.postModel.deleteOne({ _id: id })).pipe(operators_1.map((res) => {
            return {
                success: !!res.n,
            };
        }));
    }
    toObjectId(id) {
        return mongoose_1.Types.ObjectId(id);
    }
};
PostsService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_typegoose_1.InjectModel(post_model_1.Post)),
    __metadata("design:paramtypes", [Object])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=post.service.js.map