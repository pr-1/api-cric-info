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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const user_model_1 = require("../../models/user.model");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    register(vm) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, firstname, lastname } = vm;
            if (!email) {
                throw new common_1.HttpException('Username is required', common_1.HttpStatus.BAD_REQUEST);
            }
            if (!password) {
                throw new common_1.HttpException('Password is required', common_1.HttpStatus.BAD_REQUEST);
            }
            let exist;
            try {
                exist = yield this.userService.findOne({ email });
            }
            catch (e) {
                throw new common_1.HttpException(e, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            if (exist) {
                throw new common_1.HttpException(`${email} exists`, common_1.HttpStatus.BAD_REQUEST);
            }
            const newUser = yield this.userService.register(vm);
            return newUser;
        });
    }
    login(vm) {
        return __awaiter(this, void 0, void 0, function* () {
            const fields = Object.keys(vm);
            fields.forEach(field => {
                if (!vm[field]) {
                    throw new common_1.HttpException(`${field} is required`, common_1.HttpStatus.BAD_REQUEST);
                }
            });
            return this.userService.login(vm);
        });
    }
};
__decorate([
    common_1.Post('register'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.UserModel]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "register", null);
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map