export declare class CreatePersonDto {
    alias: string;
    approxAgeBand: string;
    genderOpt?: string;
    healthFlags?: Record<string, unknown>;
    photoRef?: string;
    guardianId?: string;
    issuingOrg: string;
    consentRecord: Record<string, unknown>;
    expiresAt?: string;
}
