import { PersonsService } from './persons.service';
import { CreatePersonDto } from './dto/create-person.dto';
export declare class PersonsController {
    private readonly personsService;
    constructor(personsService: PersonsService);
    create(body: CreatePersonDto): Promise<{
        person: any;
        signedQr: string;
        expiresAt: any;
    }>;
}
