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
exports.VerifyService = void 0;
const common_1 = require("@nestjs/common");
const signer_service_1 = require("../signer/signer.service");
const prisma_service_1 = require("../prisma/prisma.service");
let VerifyService = class VerifyService {
    signerService;
    prisma;
    constructor(signerService, prisma) {
        this.signerService = signerService;
        this.prisma = prisma;
    }
    async verify(jws) {
        let payload;
        try {
            payload = await this.signerService.verify(jws);
        }
        catch (err) {
            throw new common_1.BadRequestException('Invalid signature');
        }
        const person = await this.prisma.person.findUnique({ where: { id: payload.personId } });
        if (!person)
            throw new common_1.NotFoundException('Person not found');
        const now = Date.now();
        const exp = new Date(payload.expiresAt).getTime();
        const expired = Number.isFinite(exp) && exp < now;
        const revoked = await this.prisma.revocation.findFirst({
            where: { personId: payload.personId },
            orderBy: { createdAt: 'desc' },
        });
        return {
            payload,
            person: {
                id: person.id,
                alias: person.alias,
                approxAgeBand: person.approxAgeBand,
                issuingOrg: person.issuingOrg,
                expiresAt: person.expiresAt,
            },
            status: {
                expired,
                revoked: Boolean(revoked),
                revocationReason: revoked?.reason,
                revocationAt: revoked?.createdAt,
            },
        };
    }
};
exports.VerifyService = VerifyService;
exports.VerifyService = VerifyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [signer_service_1.SignerService,
        prisma_service_1.PrismaService])
], VerifyService);
//# sourceMappingURL=verify.service.js.map