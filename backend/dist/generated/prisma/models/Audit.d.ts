import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AuditModel = runtime.Types.Result.DefaultSelection<Prisma.$AuditPayload>;
export type AggregateAudit = {
    _count: AuditCountAggregateOutputType | null;
    _min: AuditMinAggregateOutputType | null;
    _max: AuditMaxAggregateOutputType | null;
};
export type AuditMinAggregateOutputType = {
    id: string | null;
    actorId: string | null;
    action: string | null;
    deviceId: string | null;
    offlineTxnId: string | null;
    createdAt: Date | null;
    personId: string | null;
};
export type AuditMaxAggregateOutputType = {
    id: string | null;
    actorId: string | null;
    action: string | null;
    deviceId: string | null;
    offlineTxnId: string | null;
    createdAt: Date | null;
    personId: string | null;
};
export type AuditCountAggregateOutputType = {
    id: number;
    actorId: number;
    action: number;
    fieldsChanged: number;
    deviceId: number;
    offlineTxnId: number;
    createdAt: number;
    personId: number;
    _all: number;
};
export type AuditMinAggregateInputType = {
    id?: true;
    actorId?: true;
    action?: true;
    deviceId?: true;
    offlineTxnId?: true;
    createdAt?: true;
    personId?: true;
};
export type AuditMaxAggregateInputType = {
    id?: true;
    actorId?: true;
    action?: true;
    deviceId?: true;
    offlineTxnId?: true;
    createdAt?: true;
    personId?: true;
};
export type AuditCountAggregateInputType = {
    id?: true;
    actorId?: true;
    action?: true;
    fieldsChanged?: true;
    deviceId?: true;
    offlineTxnId?: true;
    createdAt?: true;
    personId?: true;
    _all?: true;
};
export type AuditAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditWhereInput;
    orderBy?: Prisma.AuditOrderByWithRelationInput | Prisma.AuditOrderByWithRelationInput[];
    cursor?: Prisma.AuditWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AuditCountAggregateInputType;
    _min?: AuditMinAggregateInputType;
    _max?: AuditMaxAggregateInputType;
};
export type GetAuditAggregateType<T extends AuditAggregateArgs> = {
    [P in keyof T & keyof AggregateAudit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAudit[P]> : Prisma.GetScalarType<T[P], AggregateAudit[P]>;
};
export type AuditGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditWhereInput;
    orderBy?: Prisma.AuditOrderByWithAggregationInput | Prisma.AuditOrderByWithAggregationInput[];
    by: Prisma.AuditScalarFieldEnum[] | Prisma.AuditScalarFieldEnum;
    having?: Prisma.AuditScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuditCountAggregateInputType | true;
    _min?: AuditMinAggregateInputType;
    _max?: AuditMaxAggregateInputType;
};
export type AuditGroupByOutputType = {
    id: string;
    actorId: string;
    action: string;
    fieldsChanged: runtime.JsonValue | null;
    deviceId: string | null;
    offlineTxnId: string | null;
    createdAt: Date;
    personId: string | null;
    _count: AuditCountAggregateOutputType | null;
    _min: AuditMinAggregateOutputType | null;
    _max: AuditMaxAggregateOutputType | null;
};
type GetAuditGroupByPayload<T extends AuditGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AuditGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AuditGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AuditGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AuditGroupByOutputType[P]>;
}>>;
export type AuditWhereInput = {
    AND?: Prisma.AuditWhereInput | Prisma.AuditWhereInput[];
    OR?: Prisma.AuditWhereInput[];
    NOT?: Prisma.AuditWhereInput | Prisma.AuditWhereInput[];
    id?: Prisma.StringFilter<"Audit"> | string;
    actorId?: Prisma.StringFilter<"Audit"> | string;
    action?: Prisma.StringFilter<"Audit"> | string;
    fieldsChanged?: Prisma.JsonNullableFilter<"Audit">;
    deviceId?: Prisma.StringNullableFilter<"Audit"> | string | null;
    offlineTxnId?: Prisma.StringNullableFilter<"Audit"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Audit"> | Date | string;
    personId?: Prisma.StringNullableFilter<"Audit"> | string | null;
    person?: Prisma.XOR<Prisma.PersonNullableScalarRelationFilter, Prisma.PersonWhereInput> | null;
};
export type AuditOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    fieldsChanged?: Prisma.SortOrderInput | Prisma.SortOrder;
    deviceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    offlineTxnId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    personId?: Prisma.SortOrderInput | Prisma.SortOrder;
    person?: Prisma.PersonOrderByWithRelationInput;
};
export type AuditWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AuditWhereInput | Prisma.AuditWhereInput[];
    OR?: Prisma.AuditWhereInput[];
    NOT?: Prisma.AuditWhereInput | Prisma.AuditWhereInput[];
    actorId?: Prisma.StringFilter<"Audit"> | string;
    action?: Prisma.StringFilter<"Audit"> | string;
    fieldsChanged?: Prisma.JsonNullableFilter<"Audit">;
    deviceId?: Prisma.StringNullableFilter<"Audit"> | string | null;
    offlineTxnId?: Prisma.StringNullableFilter<"Audit"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Audit"> | Date | string;
    personId?: Prisma.StringNullableFilter<"Audit"> | string | null;
    person?: Prisma.XOR<Prisma.PersonNullableScalarRelationFilter, Prisma.PersonWhereInput> | null;
}, "id">;
export type AuditOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    fieldsChanged?: Prisma.SortOrderInput | Prisma.SortOrder;
    deviceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    offlineTxnId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    personId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AuditCountOrderByAggregateInput;
    _max?: Prisma.AuditMaxOrderByAggregateInput;
    _min?: Prisma.AuditMinOrderByAggregateInput;
};
export type AuditScalarWhereWithAggregatesInput = {
    AND?: Prisma.AuditScalarWhereWithAggregatesInput | Prisma.AuditScalarWhereWithAggregatesInput[];
    OR?: Prisma.AuditScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AuditScalarWhereWithAggregatesInput | Prisma.AuditScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Audit"> | string;
    actorId?: Prisma.StringWithAggregatesFilter<"Audit"> | string;
    action?: Prisma.StringWithAggregatesFilter<"Audit"> | string;
    fieldsChanged?: Prisma.JsonNullableWithAggregatesFilter<"Audit">;
    deviceId?: Prisma.StringNullableWithAggregatesFilter<"Audit"> | string | null;
    offlineTxnId?: Prisma.StringNullableWithAggregatesFilter<"Audit"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Audit"> | Date | string;
    personId?: Prisma.StringNullableWithAggregatesFilter<"Audit"> | string | null;
};
export type AuditCreateInput = {
    id?: string;
    actorId: string;
    action: string;
    fieldsChanged?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deviceId?: string | null;
    offlineTxnId?: string | null;
    createdAt?: Date | string;
    person?: Prisma.PersonCreateNestedOneWithoutAuditsInput;
};
export type AuditUncheckedCreateInput = {
    id?: string;
    actorId: string;
    action: string;
    fieldsChanged?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deviceId?: string | null;
    offlineTxnId?: string | null;
    createdAt?: Date | string;
    personId?: string | null;
};
export type AuditUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldsChanged?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offlineTxnId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    person?: Prisma.PersonUpdateOneWithoutAuditsNestedInput;
};
export type AuditUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldsChanged?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offlineTxnId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AuditCreateManyInput = {
    id?: string;
    actorId: string;
    action: string;
    fieldsChanged?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deviceId?: string | null;
    offlineTxnId?: string | null;
    createdAt?: Date | string;
    personId?: string | null;
};
export type AuditUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldsChanged?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offlineTxnId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldsChanged?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offlineTxnId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AuditListRelationFilter = {
    every?: Prisma.AuditWhereInput;
    some?: Prisma.AuditWhereInput;
    none?: Prisma.AuditWhereInput;
};
export type AuditOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AuditCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    fieldsChanged?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    offlineTxnId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    personId?: Prisma.SortOrder;
};
export type AuditMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    offlineTxnId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    personId?: Prisma.SortOrder;
};
export type AuditMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    offlineTxnId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    personId?: Prisma.SortOrder;
};
export type AuditCreateNestedManyWithoutPersonInput = {
    create?: Prisma.XOR<Prisma.AuditCreateWithoutPersonInput, Prisma.AuditUncheckedCreateWithoutPersonInput> | Prisma.AuditCreateWithoutPersonInput[] | Prisma.AuditUncheckedCreateWithoutPersonInput[];
    connectOrCreate?: Prisma.AuditCreateOrConnectWithoutPersonInput | Prisma.AuditCreateOrConnectWithoutPersonInput[];
    createMany?: Prisma.AuditCreateManyPersonInputEnvelope;
    connect?: Prisma.AuditWhereUniqueInput | Prisma.AuditWhereUniqueInput[];
};
export type AuditUncheckedCreateNestedManyWithoutPersonInput = {
    create?: Prisma.XOR<Prisma.AuditCreateWithoutPersonInput, Prisma.AuditUncheckedCreateWithoutPersonInput> | Prisma.AuditCreateWithoutPersonInput[] | Prisma.AuditUncheckedCreateWithoutPersonInput[];
    connectOrCreate?: Prisma.AuditCreateOrConnectWithoutPersonInput | Prisma.AuditCreateOrConnectWithoutPersonInput[];
    createMany?: Prisma.AuditCreateManyPersonInputEnvelope;
    connect?: Prisma.AuditWhereUniqueInput | Prisma.AuditWhereUniqueInput[];
};
export type AuditUpdateManyWithoutPersonNestedInput = {
    create?: Prisma.XOR<Prisma.AuditCreateWithoutPersonInput, Prisma.AuditUncheckedCreateWithoutPersonInput> | Prisma.AuditCreateWithoutPersonInput[] | Prisma.AuditUncheckedCreateWithoutPersonInput[];
    connectOrCreate?: Prisma.AuditCreateOrConnectWithoutPersonInput | Prisma.AuditCreateOrConnectWithoutPersonInput[];
    upsert?: Prisma.AuditUpsertWithWhereUniqueWithoutPersonInput | Prisma.AuditUpsertWithWhereUniqueWithoutPersonInput[];
    createMany?: Prisma.AuditCreateManyPersonInputEnvelope;
    set?: Prisma.AuditWhereUniqueInput | Prisma.AuditWhereUniqueInput[];
    disconnect?: Prisma.AuditWhereUniqueInput | Prisma.AuditWhereUniqueInput[];
    delete?: Prisma.AuditWhereUniqueInput | Prisma.AuditWhereUniqueInput[];
    connect?: Prisma.AuditWhereUniqueInput | Prisma.AuditWhereUniqueInput[];
    update?: Prisma.AuditUpdateWithWhereUniqueWithoutPersonInput | Prisma.AuditUpdateWithWhereUniqueWithoutPersonInput[];
    updateMany?: Prisma.AuditUpdateManyWithWhereWithoutPersonInput | Prisma.AuditUpdateManyWithWhereWithoutPersonInput[];
    deleteMany?: Prisma.AuditScalarWhereInput | Prisma.AuditScalarWhereInput[];
};
export type AuditUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: Prisma.XOR<Prisma.AuditCreateWithoutPersonInput, Prisma.AuditUncheckedCreateWithoutPersonInput> | Prisma.AuditCreateWithoutPersonInput[] | Prisma.AuditUncheckedCreateWithoutPersonInput[];
    connectOrCreate?: Prisma.AuditCreateOrConnectWithoutPersonInput | Prisma.AuditCreateOrConnectWithoutPersonInput[];
    upsert?: Prisma.AuditUpsertWithWhereUniqueWithoutPersonInput | Prisma.AuditUpsertWithWhereUniqueWithoutPersonInput[];
    createMany?: Prisma.AuditCreateManyPersonInputEnvelope;
    set?: Prisma.AuditWhereUniqueInput | Prisma.AuditWhereUniqueInput[];
    disconnect?: Prisma.AuditWhereUniqueInput | Prisma.AuditWhereUniqueInput[];
    delete?: Prisma.AuditWhereUniqueInput | Prisma.AuditWhereUniqueInput[];
    connect?: Prisma.AuditWhereUniqueInput | Prisma.AuditWhereUniqueInput[];
    update?: Prisma.AuditUpdateWithWhereUniqueWithoutPersonInput | Prisma.AuditUpdateWithWhereUniqueWithoutPersonInput[];
    updateMany?: Prisma.AuditUpdateManyWithWhereWithoutPersonInput | Prisma.AuditUpdateManyWithWhereWithoutPersonInput[];
    deleteMany?: Prisma.AuditScalarWhereInput | Prisma.AuditScalarWhereInput[];
};
export type AuditCreateWithoutPersonInput = {
    id?: string;
    actorId: string;
    action: string;
    fieldsChanged?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deviceId?: string | null;
    offlineTxnId?: string | null;
    createdAt?: Date | string;
};
export type AuditUncheckedCreateWithoutPersonInput = {
    id?: string;
    actorId: string;
    action: string;
    fieldsChanged?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deviceId?: string | null;
    offlineTxnId?: string | null;
    createdAt?: Date | string;
};
export type AuditCreateOrConnectWithoutPersonInput = {
    where: Prisma.AuditWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditCreateWithoutPersonInput, Prisma.AuditUncheckedCreateWithoutPersonInput>;
};
export type AuditCreateManyPersonInputEnvelope = {
    data: Prisma.AuditCreateManyPersonInput | Prisma.AuditCreateManyPersonInput[];
    skipDuplicates?: boolean;
};
export type AuditUpsertWithWhereUniqueWithoutPersonInput = {
    where: Prisma.AuditWhereUniqueInput;
    update: Prisma.XOR<Prisma.AuditUpdateWithoutPersonInput, Prisma.AuditUncheckedUpdateWithoutPersonInput>;
    create: Prisma.XOR<Prisma.AuditCreateWithoutPersonInput, Prisma.AuditUncheckedCreateWithoutPersonInput>;
};
export type AuditUpdateWithWhereUniqueWithoutPersonInput = {
    where: Prisma.AuditWhereUniqueInput;
    data: Prisma.XOR<Prisma.AuditUpdateWithoutPersonInput, Prisma.AuditUncheckedUpdateWithoutPersonInput>;
};
export type AuditUpdateManyWithWhereWithoutPersonInput = {
    where: Prisma.AuditScalarWhereInput;
    data: Prisma.XOR<Prisma.AuditUpdateManyMutationInput, Prisma.AuditUncheckedUpdateManyWithoutPersonInput>;
};
export type AuditScalarWhereInput = {
    AND?: Prisma.AuditScalarWhereInput | Prisma.AuditScalarWhereInput[];
    OR?: Prisma.AuditScalarWhereInput[];
    NOT?: Prisma.AuditScalarWhereInput | Prisma.AuditScalarWhereInput[];
    id?: Prisma.StringFilter<"Audit"> | string;
    actorId?: Prisma.StringFilter<"Audit"> | string;
    action?: Prisma.StringFilter<"Audit"> | string;
    fieldsChanged?: Prisma.JsonNullableFilter<"Audit">;
    deviceId?: Prisma.StringNullableFilter<"Audit"> | string | null;
    offlineTxnId?: Prisma.StringNullableFilter<"Audit"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Audit"> | Date | string;
    personId?: Prisma.StringNullableFilter<"Audit"> | string | null;
};
export type AuditCreateManyPersonInput = {
    id?: string;
    actorId: string;
    action: string;
    fieldsChanged?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deviceId?: string | null;
    offlineTxnId?: string | null;
    createdAt?: Date | string;
};
export type AuditUpdateWithoutPersonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldsChanged?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offlineTxnId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditUncheckedUpdateWithoutPersonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldsChanged?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offlineTxnId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditUncheckedUpdateManyWithoutPersonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldsChanged?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offlineTxnId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    actorId?: boolean;
    action?: boolean;
    fieldsChanged?: boolean;
    deviceId?: boolean;
    offlineTxnId?: boolean;
    createdAt?: boolean;
    personId?: boolean;
    person?: boolean | Prisma.Audit$personArgs<ExtArgs>;
}, ExtArgs["result"]["audit"]>;
export type AuditSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    actorId?: boolean;
    action?: boolean;
    fieldsChanged?: boolean;
    deviceId?: boolean;
    offlineTxnId?: boolean;
    createdAt?: boolean;
    personId?: boolean;
    person?: boolean | Prisma.Audit$personArgs<ExtArgs>;
}, ExtArgs["result"]["audit"]>;
export type AuditSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    actorId?: boolean;
    action?: boolean;
    fieldsChanged?: boolean;
    deviceId?: boolean;
    offlineTxnId?: boolean;
    createdAt?: boolean;
    personId?: boolean;
    person?: boolean | Prisma.Audit$personArgs<ExtArgs>;
}, ExtArgs["result"]["audit"]>;
export type AuditSelectScalar = {
    id?: boolean;
    actorId?: boolean;
    action?: boolean;
    fieldsChanged?: boolean;
    deviceId?: boolean;
    offlineTxnId?: boolean;
    createdAt?: boolean;
    personId?: boolean;
};
export type AuditOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "actorId" | "action" | "fieldsChanged" | "deviceId" | "offlineTxnId" | "createdAt" | "personId", ExtArgs["result"]["audit"]>;
export type AuditInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    person?: boolean | Prisma.Audit$personArgs<ExtArgs>;
};
export type AuditIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    person?: boolean | Prisma.Audit$personArgs<ExtArgs>;
};
export type AuditIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    person?: boolean | Prisma.Audit$personArgs<ExtArgs>;
};
export type $AuditPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Audit";
    objects: {
        person: Prisma.$PersonPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        actorId: string;
        action: string;
        fieldsChanged: runtime.JsonValue | null;
        deviceId: string | null;
        offlineTxnId: string | null;
        createdAt: Date;
        personId: string | null;
    }, ExtArgs["result"]["audit"]>;
    composites: {};
};
export type AuditGetPayload<S extends boolean | null | undefined | AuditDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AuditPayload, S>;
export type AuditCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AuditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuditCountAggregateInputType | true;
};
export interface AuditDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Audit'];
        meta: {
            name: 'Audit';
        };
    };
    findUnique<T extends AuditFindUniqueArgs>(args: Prisma.SelectSubset<T, AuditFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AuditClient<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AuditFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AuditFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditClient<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AuditFindFirstArgs>(args?: Prisma.SelectSubset<T, AuditFindFirstArgs<ExtArgs>>): Prisma.Prisma__AuditClient<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AuditFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AuditFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditClient<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AuditFindManyArgs>(args?: Prisma.SelectSubset<T, AuditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AuditCreateArgs>(args: Prisma.SelectSubset<T, AuditCreateArgs<ExtArgs>>): Prisma.Prisma__AuditClient<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AuditCreateManyArgs>(args?: Prisma.SelectSubset<T, AuditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AuditCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AuditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AuditDeleteArgs>(args: Prisma.SelectSubset<T, AuditDeleteArgs<ExtArgs>>): Prisma.Prisma__AuditClient<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AuditUpdateArgs>(args: Prisma.SelectSubset<T, AuditUpdateArgs<ExtArgs>>): Prisma.Prisma__AuditClient<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AuditDeleteManyArgs>(args?: Prisma.SelectSubset<T, AuditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AuditUpdateManyArgs>(args: Prisma.SelectSubset<T, AuditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AuditUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AuditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AuditUpsertArgs>(args: Prisma.SelectSubset<T, AuditUpsertArgs<ExtArgs>>): Prisma.Prisma__AuditClient<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AuditCountArgs>(args?: Prisma.Subset<T, AuditCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AuditCountAggregateOutputType> : number>;
    aggregate<T extends AuditAggregateArgs>(args: Prisma.Subset<T, AuditAggregateArgs>): Prisma.PrismaPromise<GetAuditAggregateType<T>>;
    groupBy<T extends AuditGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AuditGroupByArgs['orderBy'];
    } : {
        orderBy?: AuditGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AuditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AuditFieldRefs;
}
export interface Prisma__AuditClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    person<T extends Prisma.Audit$personArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Audit$personArgs<ExtArgs>>): Prisma.Prisma__PersonClient<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AuditFieldRefs {
    readonly id: Prisma.FieldRef<"Audit", 'String'>;
    readonly actorId: Prisma.FieldRef<"Audit", 'String'>;
    readonly action: Prisma.FieldRef<"Audit", 'String'>;
    readonly fieldsChanged: Prisma.FieldRef<"Audit", 'Json'>;
    readonly deviceId: Prisma.FieldRef<"Audit", 'String'>;
    readonly offlineTxnId: Prisma.FieldRef<"Audit", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Audit", 'DateTime'>;
    readonly personId: Prisma.FieldRef<"Audit", 'String'>;
}
export type AuditFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditSelect<ExtArgs> | null;
    omit?: Prisma.AuditOmit<ExtArgs> | null;
    include?: Prisma.AuditInclude<ExtArgs> | null;
    where: Prisma.AuditWhereUniqueInput;
};
export type AuditFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditSelect<ExtArgs> | null;
    omit?: Prisma.AuditOmit<ExtArgs> | null;
    include?: Prisma.AuditInclude<ExtArgs> | null;
    where: Prisma.AuditWhereUniqueInput;
};
export type AuditFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditSelect<ExtArgs> | null;
    omit?: Prisma.AuditOmit<ExtArgs> | null;
    include?: Prisma.AuditInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditCreateInput, Prisma.AuditUncheckedCreateInput>;
};
export type AuditCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AuditCreateManyInput | Prisma.AuditCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AuditCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditOmit<ExtArgs> | null;
    data: Prisma.AuditCreateManyInput | Prisma.AuditCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AuditIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AuditUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditSelect<ExtArgs> | null;
    omit?: Prisma.AuditOmit<ExtArgs> | null;
    include?: Prisma.AuditInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditUpdateInput, Prisma.AuditUncheckedUpdateInput>;
    where: Prisma.AuditWhereUniqueInput;
};
export type AuditUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AuditUpdateManyMutationInput, Prisma.AuditUncheckedUpdateManyInput>;
    where?: Prisma.AuditWhereInput;
    limit?: number;
};
export type AuditUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditUpdateManyMutationInput, Prisma.AuditUncheckedUpdateManyInput>;
    where?: Prisma.AuditWhereInput;
    limit?: number;
    include?: Prisma.AuditIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AuditUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditSelect<ExtArgs> | null;
    omit?: Prisma.AuditOmit<ExtArgs> | null;
    include?: Prisma.AuditInclude<ExtArgs> | null;
    where: Prisma.AuditWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditCreateInput, Prisma.AuditUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AuditUpdateInput, Prisma.AuditUncheckedUpdateInput>;
};
export type AuditDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditSelect<ExtArgs> | null;
    omit?: Prisma.AuditOmit<ExtArgs> | null;
    include?: Prisma.AuditInclude<ExtArgs> | null;
    where: Prisma.AuditWhereUniqueInput;
};
export type AuditDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditWhereInput;
    limit?: number;
};
export type Audit$personArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelect<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    include?: Prisma.PersonInclude<ExtArgs> | null;
    where?: Prisma.PersonWhereInput;
};
export type AuditDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditSelect<ExtArgs> | null;
    omit?: Prisma.AuditOmit<ExtArgs> | null;
    include?: Prisma.AuditInclude<ExtArgs> | null;
};
export {};
