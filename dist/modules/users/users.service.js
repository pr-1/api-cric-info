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
const nestjs_typegoose_1 = require("nestjs-typegoose");
const bcryptjs_1 = require("bcryptjs");
const user_model_1 = require("../../models/user.model");
const auth_service_1 = require("../../auth/auth.service");
const base_service_1 = require("../../services/base.service");
let UsersService = class UsersService extends base_service_1.BaseService {
    constructor(userModel, authService) {
        super();
        this.userModel = userModel;
        this.authService = authService;
        this.model = userModel;
    }
    register(vm) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, firstname, lastname } = vm;
            common_1.Logger.log('Register req is ' + vm.toString(), 'USER SERVICE');
            common_1.Logger.log(firstname);
            common_1.Logger.log(lastname);
            const newUser = new this.userModel();
            newUser.email = email.trim().toLowerCase();
            newUser.password = password;
            newUser.firstname = firstname;
            newUser.lastname = lastname;
            const salt = yield bcryptjs_1.genSalt(10);
            newUser.password = yield bcryptjs_1.hash(password, salt);
            try {
                const result = yield this.userModel.create(newUser);
                return result.toJSON();
            }
            catch (e) {
                throw new common_1.HttpException(e, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        });
    }
    login(vm) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = vm;
            const user = yield this.userModel.findOne({ email });
            if (!user) {
                throw new common_1.HttpException('User Not Found', common_1.HttpStatus.NOT_FOUND);
            }
            const isMatch = yield bcryptjs_1.compare(password, user.password);
            if (!isMatch) {
                throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.BAD_REQUEST);
            }
            const payload = {
                email: user.email,
                password: user.password,
            };
            const token = yield this.authService.signPayload(payload);
            return {
                token,
                user: {
                    name: user.name,
                    email: user.email,
                },
            };
        });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_typegoose_1.InjectModel(user_model_1.UserModel)),
    __param(1, common_1.Inject(common_1.forwardRef(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [Object, auth_service_1.AuthService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map