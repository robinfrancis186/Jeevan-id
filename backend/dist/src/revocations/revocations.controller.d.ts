import { RevocationsService } from './revocations.service';
import { CreateRevocationDto } from './dto/create-revocation.dto';
export declare class RevocationsController {
    private readonly revocationsService;
    constructor(revocationsService: RevocationsService);
    list(): Promise<{
        version: string;
        revocations: {
            createdAt: Date;
            personId: string;
            reason: string | null;
        }[];
    }>;
    create(dto: CreateRevocationDto): Promise<{
        id: string;
        createdAt: Date;
        personId: string;
        reason: string | null;
    }>;
}
