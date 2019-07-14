"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typegoose_utils_1 = require("./typegoose.utils");
exports.InjectModel = (model) => common_1.Inject(typegoose_utils_1.getModelToken(model.name));
