"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonsModule = void 0;
const common_1 = require("@nestjs/common");
const persons_service_1 = require("./persons.service");
const persons_controller_1 = require("./persons.controller");
const prisma_service_1 = require("../prisma/prisma.service");
const signer_module_1 = require("../signer/signer.module");
const audit_module_1 = require("../audit/audit.module");
let PersonsModule = class PersonsModule {
};
exports.PersonsModule = PersonsModule;
exports.PersonsModule = PersonsModule = __decorate([
    (0, common_1.Module)({
        imports: [signer_module_1.SignerModule, audit_module_1.AuditModule],
        controllers: [persons_controller_1.PersonsController],
        providers: [persons_service_1.PersonsService, prisma_service_1.PrismaService],
    })
], PersonsModule);
//# sourceMappingURL=persons.module.js.map