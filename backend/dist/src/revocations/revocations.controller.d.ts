import { RevocationsService } from './revocations.service';
import { CreateRevocationDto } from './dto/create-revocation.dto';
export declare class RevocationsController {
    private readonly revocationsService;
    constructor(revocationsService: RevocationsService);
    list(): Promise<{
        version: string;
        revocations: any;
    }>;
    create(dto: CreateRevocationDto): Promise<any>;
}
