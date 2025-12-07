"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevocationsModule = void 0;
const common_1 = require("@nestjs/common");
const revocations_service_1 = require("./revocations.service");
const revocations_controller_1 = require("./revocations.controller");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_module_1 = require("../audit/audit.module");
let RevocationsModule = class RevocationsModule {
};
exports.RevocationsModule = RevocationsModule;
exports.RevocationsModule = RevocationsModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule],
        controllers: [revocations_controller_1.RevocationsController],
        providers: [revocations_service_1.RevocationsService, prisma_service_1.PrismaService],
        exports: [revocations_service_1.RevocationsService],
    })
], RevocationsModule);
//# sourceMappingURL=revocations.module.js.map