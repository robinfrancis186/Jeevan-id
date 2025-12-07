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
exports.PersonsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const signer_service_1 = require("../signer/signer.service");
const node_crypto_1 = require("node:crypto");
const audit_service_1 = require("../audit/audit.service");
const DEFAULT_EXPIRY_DAYS = 30;
let PersonsService = class PersonsService {
    prisma;
    signerService;
    auditService;
    constructor(prisma, signerService, auditService) {
        this.prisma = prisma;
        this.signerService = signerService;
        this.auditService = auditService;
    }
    async create(dto) {
        const expiresAt = dto.expiresAt ?? new Date(Date.now() + DEFAULT_EXPIRY_DAYS * 24 * 60 * 60 * 1000).toISOString();
        const person = await this.prisma.person.create({
            data: {
                alias: dto.alias,
                approxAgeBand: dto.approxAgeBand,
                genderOpt: dto.genderOpt,
                healthFlags: dto.healthFlags,
                photoRef: dto.photoRef,
                guardianId: dto.guardianId,
                issuingOrg: dto.issuingOrg,
                consentRecord: dto.consentRecord,
                expiresAt: new Date(expiresAt),
            },
        });
        const payload = {
            personId: person.id,
            issuingOrg: person.issuingOrg,
            expiresAt: person.expiresAt.toISOString(),
            schemaVersion: person.schemaVersion,
            nonce: (0, node_crypto_1.randomUUID)(),
        };
        const signedQr = await this.signerService.sign(payload);
        await this.auditService.log({
            action: 'person.created',
            personId: person.id,
            fieldsChanged: { alias: person.alias, approxAgeBand: person.approxAgeBand },
        });
        return {
            person,
            signedQr,
            expiresAt: person.expiresAt,
        };
    }
};
exports.PersonsService = PersonsService;
exports.PersonsService = PersonsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        signer_service_1.SignerService,
        audit_service_1.AuditService])
], PersonsService);
//# sourceMappingURL=persons.service.js.map