"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignerModule = void 0;
const common_1 = require("@nestjs/common");
const signer_service_1 = require("./signer.service");
const signer_controller_1 = require("./signer.controller");
let SignerModule = class SignerModule {
};
exports.SignerModule = SignerModule;
exports.SignerModule = SignerModule = __decorate([
    (0, common_1.Module)({
        providers: [signer_service_1.SignerService],
        controllers: [signer_controller_1.SignerController],
        exports: [signer_service_1.SignerService],
    })
], SignerModule);
//# sourceMappingURL=signer.module.js.map