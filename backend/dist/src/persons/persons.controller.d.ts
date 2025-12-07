import { PersonsService } from './persons.service';
import { CreatePersonDto } from './dto/create-person.dto';
export declare class PersonsController {
    private readonly personsService;
    constructor(personsService: PersonsService);
    create(body: CreatePersonDto): Promise<{
        person: {
            id: string;
            alias: string;
            approxAgeBand: string;
            genderOpt: string | null;
            healthFlags: import("@prisma/client/runtime/client").JsonValue | null;
            photoRef: string | null;
            guardianId: string | null;
            issuingOrg: string;
            consentRecord: import("@prisma/client/runtime/client").JsonValue;
            expiresAt: Date;
            createdAt: Date;
            updatedAt: Date;
            schemaVersion: string;
        };
        signedQr: string;
        expiresAt: Date;
    }>;
}
