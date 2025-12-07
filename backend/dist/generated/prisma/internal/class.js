"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.1.0",
    "engineVersion": "ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel Person {\n  id            String       @id @default(cuid())\n  alias         String\n  approxAgeBand String\n  genderOpt     String?      @map(\"gender_opt\")\n  healthFlags   Json?        @map(\"health_flags\")\n  photoRef      String?      @map(\"photo_ref\")\n  guardianId    String?      @map(\"guardian_id\")\n  issuingOrg    String\n  consentRecord Json         @map(\"consent_record\")\n  expiresAt     DateTime     @map(\"expires_at\")\n  createdAt     DateTime     @default(now()) @map(\"created_at\")\n  updatedAt     DateTime     @updatedAt @map(\"updated_at\")\n  schemaVersion String       @default(\"v1\") @map(\"schema_version\")\n  revocations   Revocation[]\n  audits        Audit[]\n}\n\nmodel Revocation {\n  id        String   @id @default(cuid())\n  personId  String   @map(\"person_id\")\n  reason    String?\n  createdAt DateTime @default(now()) @map(\"created_at\")\n\n  person Person @relation(fields: [personId], references: [id], onDelete: Cascade)\n\n  @@index([personId])\n}\n\nmodel Audit {\n  id            String   @id @default(cuid())\n  actorId       String   @map(\"actor_id\")\n  action        String\n  fieldsChanged Json?    @map(\"fields_changed\")\n  deviceId      String?  @map(\"device_id\")\n  offlineTxnId  String?  @map(\"offline_txn_id\")\n  createdAt     DateTime @default(now()) @map(\"created_at\")\n  personId      String?  @map(\"person_id\")\n\n  person Person? @relation(fields: [personId], references: [id], onDelete: SetNull)\n\n  @@index([actorId])\n  @@index([personId])\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Person\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"alias\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"approxAgeBand\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"genderOpt\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"gender_opt\"},{\"name\":\"healthFlags\",\"kind\":\"scalar\",\"type\":\"Json\",\"dbName\":\"health_flags\"},{\"name\":\"photoRef\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"photo_ref\"},{\"name\":\"guardianId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"guardian_id\"},{\"name\":\"issuingOrg\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"consentRecord\",\"kind\":\"scalar\",\"type\":\"Json\",\"dbName\":\"consent_record\"},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"expires_at\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"schemaVersion\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"schema_version\"},{\"name\":\"revocations\",\"kind\":\"object\",\"type\":\"Revocation\",\"relationName\":\"PersonToRevocation\"},{\"name\":\"audits\",\"kind\":\"object\",\"type\":\"Audit\",\"relationName\":\"AuditToPerson\"}],\"dbName\":null},\"Revocation\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"personId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"person_id\"},{\"name\":\"reason\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"person\",\"kind\":\"object\",\"type\":\"Person\",\"relationName\":\"PersonToRevocation\"}],\"dbName\":null},\"Audit\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"actorId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"actor_id\"},{\"name\":\"action\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"fieldsChanged\",\"kind\":\"scalar\",\"type\":\"Json\",\"dbName\":\"fields_changed\"},{\"name\":\"deviceId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"device_id\"},{\"name\":\"offlineTxnId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"offline_txn_id\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"personId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"person_id\"},{\"name\":\"person\",\"kind\":\"object\",\"type\":\"Person\",\"relationName\":\"AuditToPerson\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_bg.postgresql.mjs"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_bg.postgresql.wasm-base64.mjs");
        return await decodeBase64AsWasm(wasm);
    }
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map