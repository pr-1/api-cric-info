"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("automapper-ts/dist/automapper");
const mongoose_1 = require("mongoose");
class BaseService {
    get modelName() {
        return this.model.modelName;
    }
    get viewModelName() {
        return `${this.model.modelName}Vm`;
    }
    findAll(filter = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.find(filter).exec();
        });
    }
    findOne(filter = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findOne(filter).exec();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findById(this.toObjectId(id)).exec();
        });
    }
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.create(item);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findByIdAndRemove(this.toObjectId(id)).exec();
        });
    }
    update(id, item) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.updateOne(this.toObjectId(id), item, { new: true }).exec();
        });
    }
    clearCollection(filter = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.deleteMany(filter).exec();
        });
    }
    toObjectId(id) {
        return mongoose_1.Types.ObjectId(id);
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map