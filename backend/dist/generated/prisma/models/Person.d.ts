import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PersonModel = runtime.Types.Result.DefaultSelection<Prisma.$PersonPayload>;
export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null;
    _min: PersonMinAggregateOutputType | null;
    _max: PersonMaxAggregateOutputType | null;
};
export type PersonMinAggregateOutputType = {
    id: string | null;
    alias: string | null;
    approxAgeBand: string | null;
    genderOpt: string | null;
    photoRef: string | null;
    guardianId: string | null;
    issuingOrg: string | null;
    expiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    schemaVersion: string | null;
};
export type PersonMaxAggregateOutputType = {
    id: string | null;
    alias: string | null;
    approxAgeBand: string | null;
    genderOpt: string | null;
    photoRef: string | null;
    guardianId: string | null;
    issuingOrg: string | null;
    expiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    schemaVersion: string | null;
};
export type PersonCountAggregateOutputType = {
    id: number;
    alias: number;
    approxAgeBand: number;
    genderOpt: number;
    healthFlags: number;
    photoRef: number;
    guardianId: number;
    issuingOrg: number;
    consentRecord: number;
    expiresAt: number;
    createdAt: number;
    updatedAt: number;
    schemaVersion: number;
    _all: number;
};
export type PersonMinAggregateInputType = {
    id?: true;
    alias?: true;
    approxAgeBand?: true;
    genderOpt?: true;
    photoRef?: true;
    guardianId?: true;
    issuingOrg?: true;
    expiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
    schemaVersion?: true;
};
export type PersonMaxAggregateInputType = {
    id?: true;
    alias?: true;
    approxAgeBand?: true;
    genderOpt?: true;
    photoRef?: true;
    guardianId?: true;
    issuingOrg?: true;
    expiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
    schemaVersion?: true;
};
export type PersonCountAggregateInputType = {
    id?: true;
    alias?: true;
    approxAgeBand?: true;
    genderOpt?: true;
    healthFlags?: true;
    photoRef?: true;
    guardianId?: true;
    issuingOrg?: true;
    consentRecord?: true;
    expiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
    schemaVersion?: true;
    _all?: true;
};
export type PersonAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PersonWhereInput;
    orderBy?: Prisma.PersonOrderByWithRelationInput | Prisma.PersonOrderByWithRelationInput[];
    cursor?: Prisma.PersonWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PersonCountAggregateInputType;
    _min?: PersonMinAggregateInputType;
    _max?: PersonMaxAggregateInputType;
};
export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
    [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePerson[P]> : Prisma.GetScalarType<T[P], AggregatePerson[P]>;
};
export type PersonGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PersonWhereInput;
    orderBy?: Prisma.PersonOrderByWithAggregationInput | Prisma.PersonOrderByWithAggregationInput[];
    by: Prisma.PersonScalarFieldEnum[] | Prisma.PersonScalarFieldEnum;
    having?: Prisma.PersonScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PersonCountAggregateInputType | true;
    _min?: PersonMinAggregateInputType;
    _max?: PersonMaxAggregateInputType;
};
export type PersonGroupByOutputType = {
    id: string;
    alias: string;
    approxAgeBand: string;
    genderOpt: string | null;
    healthFlags: runtime.JsonValue | null;
    photoRef: string | null;
    guardianId: string | null;
    issuingOrg: string;
    consentRecord: runtime.JsonValue;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
    schemaVersion: string;
    _count: PersonCountAggregateOutputType | null;
    _min: PersonMinAggregateOutputType | null;
    _max: PersonMaxAggregateOutputType | null;
};
type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PersonGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PersonGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PersonGroupByOutputType[P]>;
}>>;
export type PersonWhereInput = {
    AND?: Prisma.PersonWhereInput | Prisma.PersonWhereInput[];
    OR?: Prisma.PersonWhereInput[];
    NOT?: Prisma.PersonWhereInput | Prisma.PersonWhereInput[];
    id?: Prisma.StringFilter<"Person"> | string;
    alias?: Prisma.StringFilter<"Person"> | string;
    approxAgeBand?: Prisma.StringFilter<"Person"> | string;
    genderOpt?: Prisma.StringNullableFilter<"Person"> | string | null;
    healthFlags?: Prisma.JsonNullableFilter<"Person">;
    photoRef?: Prisma.StringNullableFilter<"Person"> | string | null;
    guardianId?: Prisma.StringNullableFilter<"Person"> | string | null;
    issuingOrg?: Prisma.StringFilter<"Person"> | string;
    consentRecord?: Prisma.JsonFilter<"Person">;
    expiresAt?: Prisma.DateTimeFilter<"Person"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Person"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Person"> | Date | string;
    schemaVersion?: Prisma.StringFilter<"Person"> | string;
    revocations?: Prisma.RevocationListRelationFilter;
    audits?: Prisma.AuditListRelationFilter;
};
export type PersonOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    alias?: Prisma.SortOrder;
    approxAgeBand?: Prisma.SortOrder;
    genderOpt?: Prisma.SortOrderInput | Prisma.SortOrder;
    healthFlags?: Prisma.SortOrderInput | Prisma.SortOrder;
    photoRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    guardianId?: Prisma.SortOrderInput | Prisma.SortOrder;
    issuingOrg?: Prisma.SortOrder;
    consentRecord?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    schemaVersion?: Prisma.SortOrder;
    revocations?: Prisma.RevocationOrderByRelationAggregateInput;
    audits?: Prisma.AuditOrderByRelationAggregateInput;
};
export type PersonWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PersonWhereInput | Prisma.PersonWhereInput[];
    OR?: Prisma.PersonWhereInput[];
    NOT?: Prisma.PersonWhereInput | Prisma.PersonWhereInput[];
    alias?: Prisma.StringFilter<"Person"> | string;
    approxAgeBand?: Prisma.StringFilter<"Person"> | string;
    genderOpt?: Prisma.StringNullableFilter<"Person"> | string | null;
    healthFlags?: Prisma.JsonNullableFilter<"Person">;
    photoRef?: Prisma.StringNullableFilter<"Person"> | string | null;
    guardianId?: Prisma.StringNullableFilter<"Person"> | string | null;
    issuingOrg?: Prisma.StringFilter<"Person"> | string;
    consentRecord?: Prisma.JsonFilter<"Person">;
    expiresAt?: Prisma.DateTimeFilter<"Person"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Person"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Person"> | Date | string;
    schemaVersion?: Prisma.StringFilter<"Person"> | string;
    revocations?: Prisma.RevocationListRelationFilter;
    audits?: Prisma.AuditListRelationFilter;
}, "id">;
export type PersonOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    alias?: Prisma.SortOrder;
    approxAgeBand?: Prisma.SortOrder;
    genderOpt?: Prisma.SortOrderInput | Prisma.SortOrder;
    healthFlags?: Prisma.SortOrderInput | Prisma.SortOrder;
    photoRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    guardianId?: Prisma.SortOrderInput | Prisma.SortOrder;
    issuingOrg?: Prisma.SortOrder;
    consentRecord?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    schemaVersion?: Prisma.SortOrder;
    _count?: Prisma.PersonCountOrderByAggregateInput;
    _max?: Prisma.PersonMaxOrderByAggregateInput;
    _min?: Prisma.PersonMinOrderByAggregateInput;
};
export type PersonScalarWhereWithAggregatesInput = {
    AND?: Prisma.PersonScalarWhereWithAggregatesInput | Prisma.PersonScalarWhereWithAggregatesInput[];
    OR?: Prisma.PersonScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PersonScalarWhereWithAggregatesInput | Prisma.PersonScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Person"> | string;
    alias?: Prisma.StringWithAggregatesFilter<"Person"> | string;
    approxAgeBand?: Prisma.StringWithAggregatesFilter<"Person"> | string;
    genderOpt?: Prisma.StringNullableWithAggregatesFilter<"Person"> | string | null;
    healthFlags?: Prisma.JsonNullableWithAggregatesFilter<"Person">;
    photoRef?: Prisma.StringNullableWithAggregatesFilter<"Person"> | string | null;
    guardianId?: Prisma.StringNullableWithAggregatesFilter<"Person"> | string | null;
    issuingOrg?: Prisma.StringWithAggregatesFilter<"Person"> | string;
    consentRecord?: Prisma.JsonWithAggregatesFilter<"Person">;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"Person"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Person"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Person"> | Date | string;
    schemaVersion?: Prisma.StringWithAggregatesFilter<"Person"> | string;
};
export type PersonCreateInput = {
    id?: string;
    alias: string;
    approxAgeBand: string;
    genderOpt?: string | null;
    healthFlags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photoRef?: string | null;
    guardianId?: string | null;
    issuingOrg: string;
    consentRecord: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schemaVersion?: string;
    revocations?: Prisma.RevocationCreateNestedManyWithoutPersonInput;
    audits?: Prisma.AuditCreateNestedManyWithoutPersonInput;
};
export type PersonUncheckedCreateInput = {
    id?: string;
    alias: string;
    approxAgeBand: string;
    genderOpt?: string | null;
    healthFlags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photoRef?: string | null;
    guardianId?: string | null;
    issuingOrg: string;
    consentRecord: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schemaVersion?: string;
    revocations?: Prisma.RevocationUncheckedCreateNestedManyWithoutPersonInput;
    audits?: Prisma.AuditUncheckedCreateNestedManyWithoutPersonInput;
};
export type PersonUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    approxAgeBand?: Prisma.StringFieldUpdateOperationsInput | string;
    genderOpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    healthFlags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guardianId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuingOrg?: Prisma.StringFieldUpdateOperationsInput | string;
    consentRecord?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    schemaVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    revocations?: Prisma.RevocationUpdateManyWithoutPersonNestedInput;
    audits?: Prisma.AuditUpdateManyWithoutPersonNestedInput;
};
export type PersonUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    approxAgeBand?: Prisma.StringFieldUpdateOperationsInput | string;
    genderOpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    healthFlags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guardianId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuingOrg?: Prisma.StringFieldUpdateOperationsInput | string;
    consentRecord?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    schemaVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    revocations?: Prisma.RevocationUncheckedUpdateManyWithoutPersonNestedInput;
    audits?: Prisma.AuditUncheckedUpdateManyWithoutPersonNestedInput;
};
export type PersonCreateManyInput = {
    id?: string;
    alias: string;
    approxAgeBand: string;
    genderOpt?: string | null;
    healthFlags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photoRef?: string | null;
    guardianId?: string | null;
    issuingOrg: string;
    consentRecord: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schemaVersion?: string;
};
export type PersonUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    approxAgeBand?: Prisma.StringFieldUpdateOperationsInput | string;
    genderOpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    healthFlags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guardianId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuingOrg?: Prisma.StringFieldUpdateOperationsInput | string;
    consentRecord?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    schemaVersion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PersonUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    approxAgeBand?: Prisma.StringFieldUpdateOperationsInput | string;
    genderOpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    healthFlags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guardianId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuingOrg?: Prisma.StringFieldUpdateOperationsInput | string;
    consentRecord?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    schemaVersion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PersonCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alias?: Prisma.SortOrder;
    approxAgeBand?: Prisma.SortOrder;
    genderOpt?: Prisma.SortOrder;
    healthFlags?: Prisma.SortOrder;
    photoRef?: Prisma.SortOrder;
    guardianId?: Prisma.SortOrder;
    issuingOrg?: Prisma.SortOrder;
    consentRecord?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    schemaVersion?: Prisma.SortOrder;
};
export type PersonMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alias?: Prisma.SortOrder;
    approxAgeBand?: Prisma.SortOrder;
    genderOpt?: Prisma.SortOrder;
    photoRef?: Prisma.SortOrder;
    guardianId?: Prisma.SortOrder;
    issuingOrg?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    schemaVersion?: Prisma.SortOrder;
};
export type PersonMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alias?: Prisma.SortOrder;
    approxAgeBand?: Prisma.SortOrder;
    genderOpt?: Prisma.SortOrder;
    photoRef?: Prisma.SortOrder;
    guardianId?: Prisma.SortOrder;
    issuingOrg?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    schemaVersion?: Prisma.SortOrder;
};
export type PersonScalarRelationFilter = {
    is?: Prisma.PersonWhereInput;
    isNot?: Prisma.PersonWhereInput;
};
export type PersonNullableScalarRelationFilter = {
    is?: Prisma.PersonWhereInput | null;
    isNot?: Prisma.PersonWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type PersonCreateNestedOneWithoutRevocationsInput = {
    create?: Prisma.XOR<Prisma.PersonCreateWithoutRevocationsInput, Prisma.PersonUncheckedCreateWithoutRevocationsInput>;
    connectOrCreate?: Prisma.PersonCreateOrConnectWithoutRevocationsInput;
    connect?: Prisma.PersonWhereUniqueInput;
};
export type PersonUpdateOneRequiredWithoutRevocationsNestedInput = {
    create?: Prisma.XOR<Prisma.PersonCreateWithoutRevocationsInput, Prisma.PersonUncheckedCreateWithoutRevocationsInput>;
    connectOrCreate?: Prisma.PersonCreateOrConnectWithoutRevocationsInput;
    upsert?: Prisma.PersonUpsertWithoutRevocationsInput;
    connect?: Prisma.PersonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PersonUpdateToOneWithWhereWithoutRevocationsInput, Prisma.PersonUpdateWithoutRevocationsInput>, Prisma.PersonUncheckedUpdateWithoutRevocationsInput>;
};
export type PersonCreateNestedOneWithoutAuditsInput = {
    create?: Prisma.XOR<Prisma.PersonCreateWithoutAuditsInput, Prisma.PersonUncheckedCreateWithoutAuditsInput>;
    connectOrCreate?: Prisma.PersonCreateOrConnectWithoutAuditsInput;
    connect?: Prisma.PersonWhereUniqueInput;
};
export type PersonUpdateOneWithoutAuditsNestedInput = {
    create?: Prisma.XOR<Prisma.PersonCreateWithoutAuditsInput, Prisma.PersonUncheckedCreateWithoutAuditsInput>;
    connectOrCreate?: Prisma.PersonCreateOrConnectWithoutAuditsInput;
    upsert?: Prisma.PersonUpsertWithoutAuditsInput;
    disconnect?: Prisma.PersonWhereInput | boolean;
    delete?: Prisma.PersonWhereInput | boolean;
    connect?: Prisma.PersonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PersonUpdateToOneWithWhereWithoutAuditsInput, Prisma.PersonUpdateWithoutAuditsInput>, Prisma.PersonUncheckedUpdateWithoutAuditsInput>;
};
export type PersonCreateWithoutRevocationsInput = {
    id?: string;
    alias: string;
    approxAgeBand: string;
    genderOpt?: string | null;
    healthFlags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photoRef?: string | null;
    guardianId?: string | null;
    issuingOrg: string;
    consentRecord: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schemaVersion?: string;
    audits?: Prisma.AuditCreateNestedManyWithoutPersonInput;
};
export type PersonUncheckedCreateWithoutRevocationsInput = {
    id?: string;
    alias: string;
    approxAgeBand: string;
    genderOpt?: string | null;
    healthFlags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photoRef?: string | null;
    guardianId?: string | null;
    issuingOrg: string;
    consentRecord: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schemaVersion?: string;
    audits?: Prisma.AuditUncheckedCreateNestedManyWithoutPersonInput;
};
export type PersonCreateOrConnectWithoutRevocationsInput = {
    where: Prisma.PersonWhereUniqueInput;
    create: Prisma.XOR<Prisma.PersonCreateWithoutRevocationsInput, Prisma.PersonUncheckedCreateWithoutRevocationsInput>;
};
export type PersonUpsertWithoutRevocationsInput = {
    update: Prisma.XOR<Prisma.PersonUpdateWithoutRevocationsInput, Prisma.PersonUncheckedUpdateWithoutRevocationsInput>;
    create: Prisma.XOR<Prisma.PersonCreateWithoutRevocationsInput, Prisma.PersonUncheckedCreateWithoutRevocationsInput>;
    where?: Prisma.PersonWhereInput;
};
export type PersonUpdateToOneWithWhereWithoutRevocationsInput = {
    where?: Prisma.PersonWhereInput;
    data: Prisma.XOR<Prisma.PersonUpdateWithoutRevocationsInput, Prisma.PersonUncheckedUpdateWithoutRevocationsInput>;
};
export type PersonUpdateWithoutRevocationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    approxAgeBand?: Prisma.StringFieldUpdateOperationsInput | string;
    genderOpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    healthFlags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guardianId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuingOrg?: Prisma.StringFieldUpdateOperationsInput | string;
    consentRecord?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    schemaVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    audits?: Prisma.AuditUpdateManyWithoutPersonNestedInput;
};
export type PersonUncheckedUpdateWithoutRevocationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    approxAgeBand?: Prisma.StringFieldUpdateOperationsInput | string;
    genderOpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    healthFlags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guardianId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuingOrg?: Prisma.StringFieldUpdateOperationsInput | string;
    consentRecord?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    schemaVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    audits?: Prisma.AuditUncheckedUpdateManyWithoutPersonNestedInput;
};
export type PersonCreateWithoutAuditsInput = {
    id?: string;
    alias: string;
    approxAgeBand: string;
    genderOpt?: string | null;
    healthFlags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photoRef?: string | null;
    guardianId?: string | null;
    issuingOrg: string;
    consentRecord: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schemaVersion?: string;
    revocations?: Prisma.RevocationCreateNestedManyWithoutPersonInput;
};
export type PersonUncheckedCreateWithoutAuditsInput = {
    id?: string;
    alias: string;
    approxAgeBand: string;
    genderOpt?: string | null;
    healthFlags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photoRef?: string | null;
    guardianId?: string | null;
    issuingOrg: string;
    consentRecord: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schemaVersion?: string;
    revocations?: Prisma.RevocationUncheckedCreateNestedManyWithoutPersonInput;
};
export type PersonCreateOrConnectWithoutAuditsInput = {
    where: Prisma.PersonWhereUniqueInput;
    create: Prisma.XOR<Prisma.PersonCreateWithoutAuditsInput, Prisma.PersonUncheckedCreateWithoutAuditsInput>;
};
export type PersonUpsertWithoutAuditsInput = {
    update: Prisma.XOR<Prisma.PersonUpdateWithoutAuditsInput, Prisma.PersonUncheckedUpdateWithoutAuditsInput>;
    create: Prisma.XOR<Prisma.PersonCreateWithoutAuditsInput, Prisma.PersonUncheckedCreateWithoutAuditsInput>;
    where?: Prisma.PersonWhereInput;
};
export type PersonUpdateToOneWithWhereWithoutAuditsInput = {
    where?: Prisma.PersonWhereInput;
    data: Prisma.XOR<Prisma.PersonUpdateWithoutAuditsInput, Prisma.PersonUncheckedUpdateWithoutAuditsInput>;
};
export type PersonUpdateWithoutAuditsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    approxAgeBand?: Prisma.StringFieldUpdateOperationsInput | string;
    genderOpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    healthFlags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guardianId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuingOrg?: Prisma.StringFieldUpdateOperationsInput | string;
    consentRecord?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    schemaVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    revocations?: Prisma.RevocationUpdateManyWithoutPersonNestedInput;
};
export type PersonUncheckedUpdateWithoutAuditsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    approxAgeBand?: Prisma.StringFieldUpdateOperationsInput | string;
    genderOpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    healthFlags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    photoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guardianId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuingOrg?: Prisma.StringFieldUpdateOperationsInput | string;
    consentRecord?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    schemaVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    revocations?: Prisma.RevocationUncheckedUpdateManyWithoutPersonNestedInput;
};
export type PersonCountOutputType = {
    revocations: number;
    audits: number;
};
export type PersonCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    revocations?: boolean | PersonCountOutputTypeCountRevocationsArgs;
    audits?: boolean | PersonCountOutputTypeCountAuditsArgs;
};
export type PersonCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonCountOutputTypeSelect<ExtArgs> | null;
};
export type PersonCountOutputTypeCountRevocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RevocationWhereInput;
};
export type PersonCountOutputTypeCountAuditsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditWhereInput;
};
export type PersonSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    alias?: boolean;
    approxAgeBand?: boolean;
    genderOpt?: boolean;
    healthFlags?: boolean;
    photoRef?: boolean;
    guardianId?: boolean;
    issuingOrg?: boolean;
    consentRecord?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    schemaVersion?: boolean;
    revocations?: boolean | Prisma.Person$revocationsArgs<ExtArgs>;
    audits?: boolean | Prisma.Person$auditsArgs<ExtArgs>;
    _count?: boolean | Prisma.PersonCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["person"]>;
export type PersonSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    alias?: boolean;
    approxAgeBand?: boolean;
    genderOpt?: boolean;
    healthFlags?: boolean;
    photoRef?: boolean;
    guardianId?: boolean;
    issuingOrg?: boolean;
    consentRecord?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    schemaVersion?: boolean;
}, ExtArgs["result"]["person"]>;
export type PersonSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    alias?: boolean;
    approxAgeBand?: boolean;
    genderOpt?: boolean;
    healthFlags?: boolean;
    photoRef?: boolean;
    guardianId?: boolean;
    issuingOrg?: boolean;
    consentRecord?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    schemaVersion?: boolean;
}, ExtArgs["result"]["person"]>;
export type PersonSelectScalar = {
    id?: boolean;
    alias?: boolean;
    approxAgeBand?: boolean;
    genderOpt?: boolean;
    healthFlags?: boolean;
    photoRef?: boolean;
    guardianId?: boolean;
    issuingOrg?: boolean;
    consentRecord?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    schemaVersion?: boolean;
};
export type PersonOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "alias" | "approxAgeBand" | "genderOpt" | "healthFlags" | "photoRef" | "guardianId" | "issuingOrg" | "consentRecord" | "expiresAt" | "createdAt" | "updatedAt" | "schemaVersion", ExtArgs["result"]["person"]>;
export type PersonInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    revocations?: boolean | Prisma.Person$revocationsArgs<ExtArgs>;
    audits?: boolean | Prisma.Person$auditsArgs<ExtArgs>;
    _count?: boolean | Prisma.PersonCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PersonIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PersonIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PersonPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Person";
    objects: {
        revocations: Prisma.$RevocationPayload<ExtArgs>[];
        audits: Prisma.$AuditPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        alias: string;
        approxAgeBand: string;
        genderOpt: string | null;
        healthFlags: runtime.JsonValue | null;
        photoRef: string | null;
        guardianId: string | null;
        issuingOrg: string;
        consentRecord: runtime.JsonValue;
        expiresAt: Date;
        createdAt: Date;
        updatedAt: Date;
        schemaVersion: string;
    }, ExtArgs["result"]["person"]>;
    composites: {};
};
export type PersonGetPayload<S extends boolean | null | undefined | PersonDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PersonPayload, S>;
export type PersonCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PersonCountAggregateInputType | true;
};
export interface PersonDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Person'];
        meta: {
            name: 'Person';
        };
    };
    findUnique<T extends PersonFindUniqueArgs>(args: Prisma.SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PersonClient<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PersonClient<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PersonFindFirstArgs>(args?: Prisma.SelectSubset<T, PersonFindFirstArgs<ExtArgs>>): Prisma.Prisma__PersonClient<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PersonClient<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PersonFindManyArgs>(args?: Prisma.SelectSubset<T, PersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PersonCreateArgs>(args: Prisma.SelectSubset<T, PersonCreateArgs<ExtArgs>>): Prisma.Prisma__PersonClient<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PersonCreateManyArgs>(args?: Prisma.SelectSubset<T, PersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PersonCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PersonDeleteArgs>(args: Prisma.SelectSubset<T, PersonDeleteArgs<ExtArgs>>): Prisma.Prisma__PersonClient<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PersonUpdateArgs>(args: Prisma.SelectSubset<T, PersonUpdateArgs<ExtArgs>>): Prisma.Prisma__PersonClient<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PersonDeleteManyArgs>(args?: Prisma.SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PersonUpdateManyArgs>(args: Prisma.SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PersonUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PersonUpsertArgs>(args: Prisma.SelectSubset<T, PersonUpsertArgs<ExtArgs>>): Prisma.Prisma__PersonClient<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PersonCountArgs>(args?: Prisma.Subset<T, PersonCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PersonCountAggregateOutputType> : number>;
    aggregate<T extends PersonAggregateArgs>(args: Prisma.Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>;
    groupBy<T extends PersonGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PersonGroupByArgs['orderBy'];
    } : {
        orderBy?: PersonGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PersonFieldRefs;
}
export interface Prisma__PersonClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    revocations<T extends Prisma.Person$revocationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Person$revocationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RevocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    audits<T extends Prisma.Person$auditsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Person$auditsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PersonFieldRefs {
    readonly id: Prisma.FieldRef<"Person", 'String'>;
    readonly alias: Prisma.FieldRef<"Person", 'String'>;
    readonly approxAgeBand: Prisma.FieldRef<"Person", 'String'>;
    readonly genderOpt: Prisma.FieldRef<"Person", 'String'>;
    readonly healthFlags: Prisma.FieldRef<"Person", 'Json'>;
    readonly photoRef: Prisma.FieldRef<"Person", 'String'>;
    readonly guardianId: Prisma.FieldRef<"Person", 'String'>;
    readonly issuingOrg: Prisma.FieldRef<"Person", 'String'>;
    readonly consentRecord: Prisma.FieldRef<"Person", 'Json'>;
    readonly expiresAt: Prisma.FieldRef<"Person", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Person", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Person", 'DateTime'>;
    readonly schemaVersion: Prisma.FieldRef<"Person", 'String'>;
}
export type PersonFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelect<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    include?: Prisma.PersonInclude<ExtArgs> | null;
    where: Prisma.PersonWhereUniqueInput;
};
export type PersonFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelect<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    include?: Prisma.PersonInclude<ExtArgs> | null;
    where: Prisma.PersonWhereUniqueInput;
};
export type PersonFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelect<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    include?: Prisma.PersonInclude<ExtArgs> | null;
    where?: Prisma.PersonWhereInput;
    orderBy?: Prisma.PersonOrderByWithRelationInput | Prisma.PersonOrderByWithRelationInput[];
    cursor?: Prisma.PersonWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PersonScalarFieldEnum | Prisma.PersonScalarFieldEnum[];
};
export type PersonFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelect<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    include?: Prisma.PersonInclude<ExtArgs> | null;
    where?: Prisma.PersonWhereInput;
    orderBy?: Prisma.PersonOrderByWithRelationInput | Prisma.PersonOrderByWithRelationInput[];
    cursor?: Prisma.PersonWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PersonScalarFieldEnum | Prisma.PersonScalarFieldEnum[];
};
export type PersonFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelect<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    include?: Prisma.PersonInclude<ExtArgs> | null;
    where?: Prisma.PersonWhereInput;
    orderBy?: Prisma.PersonOrderByWithRelationInput | Prisma.PersonOrderByWithRelationInput[];
    cursor?: Prisma.PersonWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PersonScalarFieldEnum | Prisma.PersonScalarFieldEnum[];
};
export type PersonCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelect<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    include?: Prisma.PersonInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PersonCreateInput, Prisma.PersonUncheckedCreateInput>;
};
export type PersonCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PersonCreateManyInput | Prisma.PersonCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PersonCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    data: Prisma.PersonCreateManyInput | Prisma.PersonCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PersonUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelect<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    include?: Prisma.PersonInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PersonUpdateInput, Prisma.PersonUncheckedUpdateInput>;
    where: Prisma.PersonWhereUniqueInput;
};
export type PersonUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PersonUpdateManyMutationInput, Prisma.PersonUncheckedUpdateManyInput>;
    where?: Prisma.PersonWhereInput;
    limit?: number;
};
export type PersonUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PersonUpdateManyMutationInput, Prisma.PersonUncheckedUpdateManyInput>;
    where?: Prisma.PersonWhereInput;
    limit?: number;
};
export type PersonUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelect<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    include?: Prisma.PersonInclude<ExtArgs> | null;
    where: Prisma.PersonWhereUniqueInput;
    create: Prisma.XOR<Prisma.PersonCreateInput, Prisma.PersonUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PersonUpdateInput, Prisma.PersonUncheckedUpdateInput>;
};
export type PersonDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelect<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    include?: Prisma.PersonInclude<ExtArgs> | null;
    where: Prisma.PersonWhereUniqueInput;
};
export type PersonDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PersonWhereInput;
    limit?: number;
};
export type Person$revocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevocationSelect<ExtArgs> | null;
    omit?: Prisma.RevocationOmit<ExtArgs> | null;
    include?: Prisma.RevocationInclude<ExtArgs> | null;
    where?: Prisma.RevocationWhereInput;
    orderBy?: Prisma.RevocationOrderByWithRelationInput | Prisma.RevocationOrderByWithRelationInput[];
    cursor?: Prisma.RevocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RevocationScalarFieldEnum | Prisma.RevocationScalarFieldEnum[];
};
export type Person$auditsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditSelect<ExtArgs> | null;
    omit?: Prisma.AuditOmit<ExtArgs> | null;
    include?: Prisma.AuditInclude<ExtArgs> | null;
    where?: Prisma.AuditWhereInput;
    orderBy?: Prisma.AuditOrderByWithRelationInput | Prisma.AuditOrderByWithRelationInput[];
    cursor?: Prisma.AuditWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditScalarFieldEnum | Prisma.AuditScalarFieldEnum[];
};
export type PersonDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelect<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    include?: Prisma.PersonInclude<ExtArgs> | null;
};
export {};
